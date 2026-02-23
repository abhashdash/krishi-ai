// Knowledge Library Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Knowledge search articles (client-side stub)
    const knowledgeArticles = [
        { id: 1, title: 'Rice Blast: Identification & Treatment', tags: ['rice','disease'], excerpt: 'How to detect and treat rice blast using low-cost methods.' },
        { id: 2, title: 'Soil Health: Organic Amendments', tags: ['soil','fertilizer'], excerpt: 'Improve soil fertility with compost and green manures.' },
        { id: 3, title: 'Monsoon Planting Guide', tags: ['monsoon','planting'], excerpt: 'Best practices for sowing during monsoon season.' },
        { id: 4, title: 'Integrated Pest Management (IPM) Basics', tags: ['pest','ipm'], excerpt: 'Reduce pesticide reliance using IPM strategies.' }
    ];

    // Insert a simple search UI near the top of the content if not present
    (function ensureKnowledgeSearch() {
        const container = document.querySelector('.header-content') || document.querySelector('.container');
        if (!container) return;
        if (document.getElementById('knowledgeSearch')) return; // already exists

        const wrapper = document.createElement('div');
        wrapper.className = 'knowledge-search-wrapper';
        wrapper.style = 'margin:16px 0; display:flex; gap:8px; align-items:center;';
        wrapper.innerHTML = `
            <input id="knowledgeSearch" placeholder="Search guides, pests, crops..." style="flex:1; padding:10px; border-radius:6px; border:1px solid #ccc;" />
            <select id="knowledgeFilter" style="padding:10px; border-radius:6px; border:1px solid #ccc;"></select>
        `;
        container.parentNode.insertBefore(wrapper, container.nextSibling);

        const resultsArea = document.createElement('div');
        resultsArea.id = 'knowledgeResults';
        resultsArea.style = 'margin-top:12px;';
        wrapper.parentNode.insertBefore(resultsArea, wrapper.nextSibling);

        // Populate filter options
        const filter = document.getElementById('knowledgeFilter');
        filter.innerHTML = `<option value="">All</option><option value="soil">Soil</option><option value="pest">Pest</option><option value="monsoon">Seasonal</option>`;
    })();

    // Knowledge search logic with debounce
    (function wireKnowledgeSearch() {
        const input = document.getElementById('knowledgeSearch');
        const results = document.getElementById('knowledgeResults');
        const filter = document.getElementById('knowledgeFilter');
        if (!input || !results) return;

        let t;
        function renderResults(items) {
            if (!items || items.length === 0) {
                results.innerHTML = '<p style="color:#666;">No results found. Try different keywords.</p>';
                return;
            }
            results.innerHTML = items.map(a => `
                <div class="kb-card" style="padding:12px; border-radius:8px; background:#fff; margin-bottom:8px; box-shadow:0 1px 4px rgba(0,0,0,0.04);">
                  <h4 style="margin:0 0 6px 0;">${a.title}</h4>
                  <p style="margin:0 0 6px 0; color:#444;">${a.excerpt}</p>
                  <div style="font-size:12px; color:#888;">Tags: ${a.tags.join(', ')}</div>
                </div>
            `).join('');
        }

        function doSearch() {
            const q = input.value.trim().toLowerCase();
            const f = (filter && filter.value) ? filter.value.toLowerCase() : '';
            const items = knowledgeArticles.filter(a => {
                const matchQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.join(' ').includes(q);
                const matchF = !f || a.tags.includes(f);
                return matchQ && matchF;
            });
            renderResults(items);
        }

        input.addEventListener('input', () => {
            clearTimeout(t);
            t = setTimeout(doSearch, 250);
        });
        if (filter) filter.addEventListener('change', doSearch);

        // initial render
        renderResults(knowledgeArticles.slice(0, 3));
    })();
    // DOM Elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const selectedLang = document.getElementById('selected-lang');

    // Mobile Navigation Toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Language Selector
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Language Selection
    document.querySelectorAll('.lang-dropdown a').forEach(langOption => {
        langOption.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = e.target.getAttribute('data-lang');
            selectedLang.textContent = selectedLanguage;
            langDropdown.classList.remove('show');

            // Here you would typically handle language change
            console.log('Language switched to:', selectedLanguage);
        });
    });

    // Close language dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });

    // Video card interactions
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoTitle = this.querySelector('h3').textContent;
            alert(`Playing video: ${videoTitle}`);
            // Here you would implement actual video playing functionality
        });
    });

    // Scheme "Learn More" button interactions
    const learnMoreBtns = document.querySelectorAll('.scheme-card .btn-primary');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const schemeTitle = this.closest('.scheme-card').querySelector('h3').textContent;
            alert(`Loading details for: ${schemeTitle}`);
            // Here you would implement navigation to detailed scheme information
        });
    });

    // Calendar "View Details" button interactions
    const viewDetailsBtns = document.querySelectorAll('.calendar-card .btn');
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cropName = this.closest('.calendar-card').querySelector('h3').textContent;
            alert(`Loading detailed calendar for: ${cropName}`);
            // Here you would implement navigation to detailed crop calendar
        });
    });

    // Pest management "Learn More" button interactions
    const pestLearnMoreBtns = document.querySelectorAll('.pest-card .btn');
    pestLearnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pestName = this.closest('.pest-card').querySelector('h3').textContent;
            alert(`Loading detailed information for: ${pestName}`);
            // Here you would implement navigation to detailed pest management guide
        });
    });

// ================= WEATHER SYSTEM =================

const apiKey = "da8dc513d96958ceaf135ae7284d225a"; // Put your real key

window.onload = function () {
    getWeather();
};

function getWeather() {

    if (!navigator.geolocation) {
        showError("Geolocation not supported by browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
            showError("Location access denied. Please allow location.");
        }
    );
}

function fetchWeather(lat, lon) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                showError("Weather data unavailable.");
                return;
            }
            updateUI(data);
        })
        .catch(err => {
            showError("Failed to fetch weather data.");
        });
}

function updateUI(data) {

    document.getElementById("weather-location").innerHTML =
        `<i class="fas fa-map-marker-alt"></i> ${data.name}, ${data.sys.country}`;

    document.getElementById("weather-temp").innerText =
        Math.round(data.main.temp) + "°C";

    document.getElementById("weather-condition").innerText =
        data.weather[0].description;

    document.getElementById("weather-humidity").innerText =
        data.main.humidity;

    document.getElementById("weather-wind").innerText =
        Math.round(data.wind.speed * 3.6);

    document.getElementById("weather-updated").innerText =
        "Last updated: " + new Date().toLocaleTimeString();
}

function showError(message) {
    document.getElementById("weather-location").innerHTML =
        `<i class="fas fa-map-marker-alt"></i> ${message}`;
}



    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation observer to cards
    const cards = document.querySelectorAll('.calendar-card, .pest-card, .scheme-card, .video-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Button click handlers with ripple effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Console message for developers
    console.log('%cKrishiAI - Knowledge Library', 'color: #4a7c59; font-size: 16px; font-weight: bold;');
    console.log('Knowledge Library page initialized successfully');
});
