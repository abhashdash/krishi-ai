// Weather forecast widget with caching and safe fallback
const keralaPlaces = [
  { name: 'Kochi', lat: 9.9312, lon: 76.2673 },
  { name: 'Thrissur', lat: 10.5276, lon: 76.2144 },
  { name: 'Palakkad', lat: 10.7867, lon: 76.6548 },
  { name: 'Idukki', lat: 9.85, lon: 76.97 },
  { name: 'Wayanad', lat: 11.6854, lon: 76.131 },
  { name: 'Alappuzha', lat: 9.4981, lon: 76.3388 },
  { name: 'Kollam', lat: 8.8932, lon: 76.6141 },
  { name: 'Malappuram', lat: 11.0736, lon: 76.0743 },
  { name: 'Kannur', lat: 11.8745, lon: 75.3704 }
];

const WEATHER_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

function cacheGet(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > WEATHER_CACHE_TTL) {
      sessionStorage.removeItem(key);
      return null;
    }
    return parsed.data;
  } catch (e) {
    return null;
  }
}

function cacheSet(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch (e) {}
}

async function fetchOpenMeteo(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius&timezone=auto`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Open-Meteo failed');
  const json = await res.json();
  if (!json || !json.current_weather) throw new Error('No current weather');
  return {
    temp: json.current_weather.temperature,
    weather: json.current_weather.weathercode || 'Clear',
    source: 'open-meteo'
  };
}

async function fetchWithFallback(lat, lon, openWeatherApiKey) {
  try {
    const om = await fetchOpenMeteo(lat, lon);
    return om;
  } catch (e) {
    if (openWeatherApiKey) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`;
      const r = await fetch(url);
      if (!r.ok) throw new Error('OpenWeather failed');
      const j = await r.json();
      if (j && j.main) {
        return { temp: j.main.temp, weather: (j.weather && j.weather[0] && j.weather[0].description) || 'Clear', source: 'openweathermap' };
      }
    }
    throw new Error('All weather providers failed');
  }
}

function ensureContainer() {
  let weatherContainer = document.getElementById('krishi-weather-container');
  if (!weatherContainer) {
    weatherContainer = document.createElement('div');
    weatherContainer.id = 'krishi-weather-container';
    weatherContainer.style = 'margin:30px auto; padding:20px; max-width:900px; background:#f0f8f0; border-radius:12px; box-shadow:0 5px 15px rgba(0,0,0,0.1);';
    weatherContainer.innerHTML = `
      <h2 style="color:#2d5016; margin-bottom:20px; text-align:center;">🌤 Kerala Weather Forecast</h2>
      <div id="weatherList" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:15px;"></div>
    `;
    document.body.appendChild(weatherContainer);
  }
  return document.getElementById('weatherList');
}

async function renderWeather(openWeatherApiKey) {
  const weatherList = ensureContainer();
  weatherList.innerHTML = '';

  for (const p of keralaPlaces) {
    const cacheKey = `weather_${p.lat}_${p.lon}`;
    let data = cacheGet(cacheKey);
    if (!data) {
      try {
        data = await fetchWithFallback(p.lat, p.lon, openWeatherApiKey);
        cacheSet(cacheKey, data);
      } catch (err) {
        data = null;
      }
    }

    const card = document.createElement('div');
    card.style = 'background:white; padding:15px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.1); text-align:center;';

    if (data) {
      card.innerHTML = `
        <strong style="font-size:18px; color:#2d5016;">${p.name}</strong><br>
        🌡 ${data.temp}°C<br>
        ☁️ ${data.weather}<br>
        <small style="color:#666;">Source: ${data.source}</small>
      `;
    } else {
      card.textContent = `${p.name}: Weather data not available.`;
    }

    weatherList.appendChild(card);
  }
}

if (typeof window !== 'undefined') {
  window.KrishiWeather = {
    render: renderWeather
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderWeather());
  } else {
    renderWeather();
  }
}

