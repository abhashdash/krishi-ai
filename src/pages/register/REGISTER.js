// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const selectedLang = document.getElementById('selected-lang');

// Form elements
const registerForm = document.getElementById('register-form');
const fullNameInput = document.getElementById('fullName');
const mobileInput = document.getElementById('mobile');
const villageInput = document.getElementById('village');
const stateSelect = document.getElementById('state');
const districtSelect = document.getElementById('district');
const cropInput = document.getElementById('crop-input');
const cropsTagsContainer = document.getElementById('crops-tags');
const cropsHiddenInput = document.getElementById('crops');
const preferredLanguageSelect = document.getElementById('preferredLanguage');
const pinInput = document.getElementById('pin');
const termsCheckbox = document.getElementById('terms');
const newsletterCheckbox = document.getElementById('newsletter');

// District data by state
const districtsByState = {
    'andhra-pradesh': ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Kadapa', 'Krishna', 'Kurnool', 'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari'],
    'arunachal-pradesh': ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kameng', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Subansiri', 'Papum Pare', 'Shi-Yomi', 'Siang', 'Upper Dibang Valley', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'],
    'assam': ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Lakhimpur', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara', 'Udalguri'],
    'bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Chhapra', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jha-Jha', 'Jhanjanpur', 'Khagaria', 'Kishanganj', 'Ktihar', 'Lakhisarai', 'Madhepura', 'Madhuban', 'Madhubani', 'Monghyr', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Satara', 'Sheohar', 'Sheopur', 'Siwan', 'South Munger', 'Supaul', 'Vaishali', 'Vapi', 'Vardhman', 'West Champaran'],
    'chhattisgarh': ['Balod', 'Balodabazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dakshin Bastar Dantewada', 'Dhamtari', 'Durg', 'Gariyaband', 'Janjgir Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Manpur', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Uttar Bastar Kanker'],
    'goa': ['North Goa', 'South Goa'],
    'gujarat': ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bardoli', 'Baroda', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Dhari', 'Dohad', 'Gandhinagar', 'Gir-Somnath', 'Godhra', 'Gohilwad', 'Jamanagar', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kamrej', 'Kapadvanj', 'Keshod', 'Kheda', 'Khimraj', 'Kod', 'Kodinar', 'Korba', 'Kottamb', 'Kutiyana', 'Limbdi', 'Limkheda', 'Lunawada', 'Mahesana', 'Mahisagar', 'Mahudha', 'Manavadar', 'Mandvi', 'Mangrol', 'Maninagar', 'Manjalpur', 'Mansa', 'Manubar', 'Marigaon', 'Mehsana', 'Mithpur', 'Modasa', 'Morbi', 'Morigaon', 'Morva', 'Morwada', 'Morvali', 'Mota', 'Motatal', 'Motpur', 'Mould', 'Moyna', 'Mulibai', 'Mundra', 'Munigam', 'Munsif', 'Muntazam', 'Murba', 'Murbi', 'Murbod', 'Murkai', 'Murlwad', 'Murli', 'Murpur', 'Murri', 'Mursa', 'Murthal', 'Murundli', 'Murvad', 'Murwa', 'Murwara', 'Murwari', 'Murwaree', 'Murzban', 'Musa', 'Musaldih', 'Musaldiye', 'Musali', 'Musalmaan', 'Musama', 'Musami', 'Musampur', 'Musandra', 'Musane', 'Musangam', 'Musansi', 'Musappur', 'Musapur', 'Musari', 'Musariya', 'Musarnabad', 'Musarpur', 'Musasa', 'Musashi', 'Musaspur', 'Musata', 'Musatpur', 'Musatta', 'Musatur', 'Musawat', 'Musawwat', 'Musaypur', 'Musazza', 'Musazzpur', 'Museri', 'Muserla', 'Muserli', 'Muserta', 'Musertia', 'Musesar', 'Musespur', 'Museta', 'Museterpur', 'Musetia', 'Musetta', 'Musetur', 'Musezak', 'Musezzah'],
    'haryana': ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rohtak', 'Sonipat', 'Yamunanagar'],
    'himachal-pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
    'jharkhand': ['Bokaro', 'Chatra', 'Deogarh', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Giridih', 'Godda', 'Gumla', 'Hazaribag', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Madhupur', 'Munger', 'Pakur', 'Palamu', 'Purnia', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'],
    'karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Bijapur', 'Bijnor', 'Chikballapur', 'Chikkamagaluru', 'Chitrapur', 'Chittradrug', 'Davangere', 'Dharwad', 'Eiduki', 'Gadag', 'Gokak', 'Gulbarga', 'Hassan', 'Haveri', 'Hinihalli', 'Honavara', 'Hosadurga', 'Hosanagara', 'Hosur', 'Hubballi', 'Hunasikeri', 'Hyssop', 'Indi', 'Jagalbet', 'Jamkhandi', 'Jintur', 'Joida', 'Kalaburagi', 'Kalghatgi', 'Kalyan Nagar', 'Kangundi', 'Kankanadi', 'Kapurkhed', 'Karad', 'Karanja', 'Karikavalere', 'Karikeri', 'Karjat', 'Karlgaon', 'Karmala', 'Karnal', 'Karnataka', 'Karni', 'Karnool', 'Karpurvalli', 'Karrabhat', 'Karshi', 'Karter', 'Karthali', 'Karthik', 'Kartigaon', 'Kartigaonpatti', 'Kartigeri', 'Kartigondi', 'Kartik', 'Kartipur', 'Karthikeri', 'Kartikhola', 'Kartki', 'Kartkola', 'Kartli', 'Kartman', 'Kartnath', 'Karton', 'Kartur', 'Karukkupet', 'Karumandapam', 'Karunakala', 'Karundapai', 'Karunolpet', 'Karunthapuram', 'Karuppur', 'Karur', 'Karutapakkam', 'Karutavur', 'Karuthapalayam', 'Karuthasanpet', 'Karuthorei', 'Karuthutti', 'Karuthur', 'Karuthuthuruti', 'Karuthuvalakiya', 'Karuthuvalur', 'Karuthya', 'Karutpaly', 'Karutpandu', 'Karutpanna', 'Karutpanpur', 'Karutpa', 'Karutpara', 'Karutpar', 'Karutpava', 'Karutpavli', 'Karutpaznath', 'Karutpazh', 'Karutpazhumanai', 'Kodagu', 'Kolar', 'Kollegal', 'Koppa', 'Kora', 'Koraput', 'Koratti', 'Korballi', 'Korbet', 'Korbetti', 'Korbi', 'Korbida', 'Korbilu', 'Korbir', 'Korbita', 'Korbithalu', 'Korbu', 'Korchagaon', 'Korchi', 'Kordabur', 'Kordada', 'Kordagere', 'Kordai', 'Kordai Kaluttalat', 'Kordaikalottai', 'Kordaikal', 'Kordail', 'Kordain', 'Kordait', 'Kordal', 'Kordala', 'Kordalamudi', 'Kordalangi', 'Kordalam', 'Kordalapudi', 'Kordalarpapur', 'Kordalattikonda', 'Kordalavillu', 'Kordalayyanapura', 'Kordalkhedi', 'Kordalpur', 'Kordalui', 'Kordalva', 'Kordalvadi', 'Kordalvu', 'Korden', 'Korder', 'Kordewar', 'Kordia', 'Kordiak', 'Kordial', 'Kordiampur', 'Kordian', 'Kordiangi', 'Kordi', 'Kordichandupur', 'Kordichindapalli', 'Kordichhara', 'Kordichikka', 'Kordichinavalli', 'Kordicholakere', 'Kordichowki', 'Kordichowkipur', 'Kordichowkur', 'Kordichutaluk'],
    'kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kochi', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
    'madhya-pradesh': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Balod', 'Balodabazar', 'Balopur', 'Bandhavgarh', 'Banswara', 'Baragarh', 'Baradih', 'Barahat', 'Barauni', 'Bareli', 'Bargaon', 'Bargarh', 'Bari', 'Baridih', 'Barikotha', 'Baripuri', 'Barishpur', 'Barita', 'Bariwal', 'Bariyarpur', 'Barjora', 'Barkhed', 'Barkhera', 'Barkod', 'Barland', 'Barlkhera', 'Barmer', 'Barnai', 'Barnala', 'Barnana', 'Barnaul', 'Barnawa', 'Baro', 'Baroda', 'Barogarh', 'Barojpur', 'Barolar', 'Barolli', 'Baromal', 'Baromat', 'Baromati', 'Baromba', 'Barombir', 'Baroni', 'Baroola', 'Barpathar', 'Barphatak', 'Barpichel', 'Barpoda', 'Barpur', 'Barputpur', 'Barrera', 'Barrera', 'Barrikpur', 'Barripani', 'Barripur', 'Barripuri', 'Barrispur', 'Barriya', 'Barriyan', 'Barro', 'Barroal', 'Barrol', 'Barrompur', 'Barron', 'Barrondi', 'Barroni', 'Barropar', 'Barror', 'Barrosi', 'Barrospur', 'Barroti', 'Barruri', 'Barry', 'Barsail', 'Barsain', 'Barsala', 'Barsam', 'Barsana', 'Barsanda', 'Barsandha', 'Barsane', 'Barsani', 'Barsanpur', 'Barsanthal', 'Barsara', 'Barsara', 'Barsarpur', 'Barsasar', 'Barsathi', 'Barsatia', 'Barsatpur', 'Barsatroo', 'Barsatun', 'Barsauli', 'Barsav', 'Barsawal', 'Barsawali', 'Barsawan', 'Barsawani', 'Barsawaria', 'Barsaward', 'Barsawarpur', 'Barsazpur', 'Barsbam', 'Barsbari', 'Barsbihr', 'Barsbihra', 'Barsbila', 'Barsbok', 'Barsbota', 'Barsboti', 'Barsda', 'Barsdadi', 'Barsdaha', 'Barsdam', 'Barsdampur', 'Barsdan', 'Barsdandi', 'Barsdar', 'Barsdarah', 'Barsdari', 'Barsdarspur', 'Barsdasa', 'Barsdasi', 'Barsdat', 'Barsdata', 'Barsdati', 'Barsdatu', 'Barsdaud', 'Barsda', 'Barsdauli', 'Barsdev', 'Barsdia', 'Barsdih', 'Barsdin', 'Barsdina', 'Barsdira', 'Barsdit', 'Barsdi', 'Barsdiwali', 'Barsdk', 'Barsdkhand', 'Barsdkhar', 'Barsdo', 'Barsdog', 'Barsdoh', 'Barsdoi', 'Barsdon', 'Barsdoni', 'Barsdonpur', 'Barsdor', 'Barsak', 'Barsakpur', 'Barsakspur'],
    'maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Navi Mumbai', 'Osmanabaad', 'Parbhani', 'Pune', 'Raigad', 'Raisen', 'Raipur', 'Ratlam', 'Sangli', 'Satara', 'Satna', 'Saurastra', 'Surat', 'Surpura', 'Siddharth Nagar', 'Tadoba', 'Talegaon', 'Talod', 'Tamwad', 'Tara', 'Taradih', 'Tarapur', 'Taraspur', 'Tarata', 'Tarauli', 'Taraut', 'Tarayahi', 'Tarbetha', 'Tarbipur', 'Tardiganj', 'Tardih', 'Tardil', 'Tardina', 'Tardipur', 'Tardipur', 'Tareka', 'Tarekpur', 'Tarela', 'Tareli', 'Tarelih', 'Tarehpur', 'Tarelem', 'Tarelima', 'Tarelina', 'Tareliya', 'Taren', 'Tarenhi', 'Tarenpur', 'Taren', 'Tarer', 'Tareri', 'Tareria', 'Tarerpur', 'Tareryan', 'Taresa', 'Tarespur', 'Taretta', 'Tarev', 'Tarevh', 'Tare', 'Tarera', 'Tarerk', 'Tareku', 'Tarer', 'Tarer', 'Taren', 'Tarenpur'],
    'manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Kangleipak', 'Kanyakumari', 'Kapurthala', 'Karaikal', 'Karbala', 'Karbi', 'Karbinagar', 'Karchagaon', 'Karchakpur', 'Karchangpat', 'Karchit', 'Karchi', 'Karchipat', 'Karcruz', 'Karculam', 'Karcunnah', 'Karcur', 'Karda', 'Kardam', 'Kardampur', 'Kariani', 'Kardihana', 'Kardipur', 'Kardompur', 'Kardpur', 'Karduk', 'Kardum', 'Karduna', 'Karduni', 'Kardung', 'Kardupu', 'Kardura', 'Kardu', 'Karelia', 'Karelibari', 'Kareliya', 'Karema', 'Karemana', 'Kareman', 'Karemani', 'Karemba', 'Karempur', 'Karempuri', 'Karemudi', 'Karemula', 'Karemulla', 'Karemuria', 'Karena', 'Karenabandh', 'Karenabasti', 'Karenabat', 'Karenachal', 'Karenachali', 'Karenadi', 'Karenador', 'Karenagopal', 'Karenahali', 'Karenail', 'Karenai', 'Karenaivari', 'Karenajhar', 'Karenajharna', 'Karenajhaupur', 'Karenajhera', 'Karenajhera', 'Karenajhir', 'Karenakashpur', 'Karenakkali', 'Karenallol', 'Karenalore', 'Karenalpur', 'Karenamana', 'Karenambari', 'Karenambaripur', 'Karenambi', 'Karenam', 'Karenam', 'Kenatpur', 'Kerenar', 'Kerenaripur', 'Kerenaripur', 'Kerenarpur', 'Kerenaru', 'Kerenarup', 'Kerenasi', 'Kerenasil', 'Kerenasira', 'Kerenas', 'Kerenaskul', 'Kerenat', 'Kerenatapalli', 'Kerenatapu', 'Kerenatapuam', 'Kerenatavada', 'Kerenavalsa', 'Kerenavalli', 'Kerenavari', 'Kerenavari', 'Kerenavatsa', 'Kerenaved', 'Kerenavedhi', 'Kerenavedka', 'Kerenavedla', 'Kerenavel', 'Kerenaver', 'Kerenavery', 'Kerenavi', 'Kerenavikrama', 'Kerenavita', 'Kerenavu', 'Kerenawali', 'Kerenawan', 'Kerenarwari', 'Kerenaxathi', 'Kerenaxath', 'Kerenaya', 'Kerenayapalam', 'Kerenavada', 'Kerenayada', 'Kerenayakshara', 'Kerenayam', 'Kerenayan', 'Kerenayani', 'Kerenayantri', 'Kerenayar', 'Kerenayari', 'Kerenayarra', 'Kerenayarru', 'Kerenayasankarapilli', 'Kerenayasaram', 'Kerenayasthana', 'Kerenayatapudi', 'Kerenayatarai', 'Kerenayatava', 'Kerenayavalapu', 'Kerenayavalambur', 'Kerenayavali', 'Kerenayavankuda', 'Kerenavali', 'Kerenayavaram', 'Kerenayaramamudi', 'Kerenayarampadu', 'Kerenayarampatii', 'Kerenayaramnampadi', 'Kerenayaramnatham', 'Kerenayarampalayam', 'Kerenayarampalli', 'Kerenayarampara', 'Kerenayarampark', 'Kerenayarampet', 'Kerenayarampili', 'Kerenayarampillai', 'Kerenayarampillu', 'Kerenayarampiri', 'Kerenayarampitt', 'Kerenayarampur', 'Kerenayarampura', 'Kerenayarampuri', 'Kerenayarampuruppa', 'Kerenayarampuruppay', 'Kerenayaramraj', 'Kerenayaramrajpuram', 'Kerenayaramrams', 'Kerenayaramramadas', 'Kerenayaramrami', 'Kerenayaramsamudram', 'Kerenayaramsaraikela', 'Kerenayaramsasthapuri', 'Kerenayaramsatharam', 'Kerenayaramsatharama', 'Kerenayaramsatharpalli', 'Kerenayaramsatharpur', 'Kerenayaramsathavalli', 'Kerenayaramsathavanam', 'Kerenayaramsathavanipalli', 'Kerenayaramsathavaram', 'Kerenayaramsathavarampitti', 'Kerenayaramsathavari', 'Kerenayaramsathavaripalli', 'Kerenayaramsathavarma', 'Kerenayaramsathavelli', 'Kerenayaramsathavi', 'Kerenayaramsathy', 'Kerenayaramsathya', 'Kerenayaramsathyam', 'Kerenayaramsathyan', 'Kerenayaramsathyam', 'Kerenayaramsathyamangalam', 'Kerenayaramsathyamangalamnagari', 'Kerenayaramsatiar', 'Kerenayaramsatiarpalli', 'Kerenayaramsaupur', 'Kerenayaramsavaram', 'Kerenayaramsavarapalli', 'Kerenayaramsavarasingapuram', 'Kerenayaramsavari', 'Kerenayaramsavaridinne', 'Kerenayaramsavaripet', 'Kerenayaramsavaripuram', 'Kerenayaramsavarisala', 'Kerenayaramsavarisingapuram', 'Kerenayaramsavaritala', 'Kerenayaramsavaritalli', 'Kerenayaramsavarivaripalli', 'Kerenayaramsavaripet', 'Kerenayaramsavaripillaipalli', 'Kerenayaramsavarar', 'Kerenayaramsavaram', 'Kerenayaramsavargram', 'Kerenayaramsavari', 'Kerenayaramsavaripatnam', 'Kerenayaramsavaripet', 'Kerenayaramsavarpalli', 'Kerenayaramsavarpalli', 'Kerenayaramsavarpeta', 'Kerenayaramsavarpuram', 'Kerenayaramsavarpur', 'Kerenayaramsavarupet', 'Kerenayaramsavarupeta', 'Kerenayaramsavarnathpuram', 'Kerenayaramsavarpur', 'Kerenayaramsavarthi', 'Kerenayaramsavartuppa', 'Kerenayaramsavaru', 'Kerenayaramsavan', 'Kerenayaramsavana', 'Kerenayaramsavarai', 'Kerenayaramsavanche', 'Kerenayaramsavanche', 'Kerenayaramsavancia', 'Kerenayaramsavancy', 'Kerenayaramsavandha', 'Kerenayaramsavandi', 'Kerenayaramsavandra', 'Kerenayaramsavandrapalli', 'Kerenayaramsavandre', 'Kerenayaramsavanici', 'Kerenayaramsavani', 'Kerenayaramsavanicipet', 'Kerenayaramsavanipili', 'Kerenayaramsavanipilkanda', 'Kerenayaramsavanipur', 'Kerenayaramsavani', 'Kerenayaramsavanja', 'Kerenayaramsavanjem', 'Kerenayaramsavanka', 'Kerenayaramsavankeri', 'Kerenayaramsavankeri', 'Kerenayaramsavankeri', 'Kerenayaramsavanka', 'Kerenayaramsavankupalli', 'Kerenayaramsavankuruva', 'Kerenayaramsavankuddappa', 'Kerenayaramsavankudu', 'Kerenayaramsavankulapalli', 'Kerenayaramsavankuppadi', 'Kerenayaramsavankuppe', 'Kerenayaramsavankeri', 'Kerenayaramsavankuppani', 'Kerenayaramsavankuppali', 'Kerenayaramsavankuppandi', 'Kerenayaramsavankuppara', 'Kerenayaramsavankupparedu', 'Kerenayaramsavankuppari', 'Kerenayaramsavankupparudapalli', 'Kerenayaramsavankuppasa', 'Kerenayaramsavankuppattai', 'Kerenayaramsavankuppatti', 'Kerenayaramsavankuppatti', 'Kerenayaramsavankuppatta', 'Kerenayaramsavankuppatta', 'Kerenayaramsavankuppatum', 'Kerenayaramsavankuppatta', 'Kerenayaramsavankuppavalli', 'Kerenayaramsavankuppavanam', 'Kerenayaramsavankuppavetti', 'Kerenayaramsavankuppaviti', 'Kerenayaramsavankuppavramulu', 'Kerenayaramsavankuppavrata', 'Kerenayaramsavankuppavrata', 'Kerenayaramsavankuppavrata', 'Kerenayaramsavankuppavrita', 'Kerenayaramsavankuppavrita', 'Kerenayaramsavankuppavritam', 'Kerenayaramsavankuppavrita', 'Kerenayaramsavankuppawara', 'Kerenayaramsavankuppware', 'Kerenayaramsavankuppawari', 'Kerenayaramsavankuppawari', 'Kerenayaramsavankuppawaru', 'Kerenayaramsavankuppawas', 'Kerenayaramsavankuppawatta', 'Kerenayaramsavankuppaway', 'Kerenayaramsavankuppawaya', 'Kerenayaramsavankuppawayam', 'Kerenayaramsavankuppawayan', 'Kerenayaramsavankuppawayanaidu', 'Kerenayaramsavankuppawayani', 'Kerenayaramsavankuppawayankuppam', 'Kerenayaramsavankuppawayannagar', 'Kerenayaramsavankuppaway', 'Kerenayaramsavankuppaway', 'Kerenayaramsavankuppawayapalli', 'Kerenayaramsavankuppawayapuram', 'Kerenayaramsavankuppawayar', 'Kerenayaramsavankuppawayara', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayar', 'Kerenayaramsavankuppawayara', 'Kerenayaramsavankuppawayargunta', 'Kerenayaramsavankuppawayarguntanagari', 'Kerenayaramsavankuppawayari', 'Kerenayaramsavankuppawayar', 'Kerenayaramsavankuppawayar', 'Kerenayaramsavankuppawayaripalem', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayarampet', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayaramedu', 'Kerenayaramsavankuppawayarampalli', 'Kerenayaramsavankuppawayarampallidevarapalli', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayarampedu', 'Kerenayaramsavankuppawayarampeta', 'Kerenayaramsavankuppawayar', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayaramnallam', 'Kerenayaramsavankuppawayarampalli', 'Kerenayaramsavankuppawayarampallidevarapalli', 'Kerenayaramsavankuppawayarampallikandigaiyankulam', 'Kerenayaramsavankuppawayarampallipanayur', 'Kerenayaramsavankuppawayarampallipalli', 'Kerenayaramsavankuppawayaram', 'Kerenayaramsavankuppawayarampalli', 'Kerenayaramsavankuppawayarampedu', 'Kerenayaramsavankuppawayar', 'Kerenayaramsavankuppaw', 'Latur', 'Mohan', 'Nanded', 'Nagpur', 'Nashik', 'Navi Mumbai', 'Nandurbar', 'Osmanabaad', 'Parbhani', 'Pune', 'Raigad', 'Raipur', 'Raisen', 'Sangli', 'Satara', 'Satna', 'Sindhudurg', 'Solapur', 'Suran', 'Surguja'],
    'meghalaya': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'Ri Bhoi', 'South Garo Hills', 'South Jaintia Hills', 'South Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
    'mizoram': ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'],
    'nagaland': ['Dimapur', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'],
    'odisha': ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Debagarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Garjat', 'Jharsuguda', 'Jajpur', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Nuzul', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
    'punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Firozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Jyotsar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Mohali', 'Muktsar', 'Nawanshahr', 'Patiala', 'Rupnagar', 'Sangrur', 'Shaheed Bhagat Singh Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'],
    'rajasthan': ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jalor', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Phalodi', 'Pratapgarh', 'Rajsamand', 'Ramsar', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sujangarh', 'Tonk', 'Udaipur'],
    'sikkim': ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
    'tamil-nadu': ['Ariyalur', 'Chengalpattu', 'Chidambaram', 'Coimbatore', 'Cuddalore', 'Cuddapah', 'Dharmapuri', 'Dindigul', 'Erode', 'Gingee', 'Gudalur', 'Hosur', 'Kanchipuram', 'Kangayam', 'Kanniyakumari', 'Karaikudi', 'Karur', 'Katpadi', 'Kodaikanal', 'Kodungaiyur', 'Koilkuntam', 'Koilkuntampalayam', 'Koilmudi', 'Kollimalai', 'Kollimadom', 'Kolpakkam', 'Kolpakkamudaya', 'Kolpakkamudayapuram', 'Kolpakkamudayayampudi', 'Kolpakkamudayapurakudi', 'Kolpakkamudayapurampatnam', 'Kolpakkamudayapuramudaiyan', 'Kolpakkamudayapuram', 'Kolpakkamudayapurampatnam', 'Kolpakkamudayapurampudukkottai', 'Kolpakkamudayapuram', 'Kolpakkamudayapuramrangamathanoor', 'Kolpakkamudayapuramsalakadri', 'Kolpakkamudayapuram', 'Kolpakkamudayapuramselur', 'Kolpakkamudayapuram', 'Kolpakkamudayapuram', 'Kolpakkamudayapuram', 'Kolpakkamudayapuramsidhana', 'Kolpakkamudayapuramsidhana', 'Kolpakkamudayapurosuvalaikuppam', 'Kottaiyur', 'Krishnagiri', 'Krupanidhi', 'Kullakkudi', 'Kumbakonam', 'Kunnam', 'Kunnam', 'Kunooru', 'Kunroor', 'Kunroor', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunupalyam', 'Kunuppam', 'Kunur', 'Kunuram', 'Kunuram', 'Kunuramapuram', 'Kunur', 'Kunuram', 'Kunur', 'Kunur', 'Kunurpet', 'Kunur', 'Kunur', 'Kunurpuram', 'Kunurpur', 'Kunur', 'Kunurupalli', 'Kunur', 'Kunur', 'Kunurvanam', 'Kunurvaram', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kunur', 'Kurananad', 'Kurandavadi', 'Kurandam', 'Kurandapuram', 'Kurandavadi', 'Kurandavalipet', 'Kurandavallur', 'Kurandavally', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalur', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalukuppam', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kurandavalu', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur', 'Kunrur'],
    'telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubnagar', 'Mahbubnagar', 'Mancherial', 'Medak', 'Medchal Malkajgiri', 'Mild', 'Mulugu', 'Nagarkurnool', 'Narayanpet', 'Narayankhed', 'Nirmal', 'Nizamabad', 'Parigi', 'Peddapelli', 'Raikal', 'Rajahmundry', 'Rajanna Sircilla', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar', 'Rajendranagar'],
    'tripura': ['Dhalai', 'Gomti', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
    'uttar-pradesh': ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Ayodhya', 'Azamgarh', 'Badaun', 'Bagpat', 'Bahraich', 'Bijnor', 'Banda', 'Bansgaon', 'Barabanki', 'Bareilly', 'Basti', 'Bethul', 'Bhind', 'Bijnor', 'Bilhaur', 'Binaur', 'Binod', 'Bithoor', 'Blakpur', 'Bogra', 'Boudhgaon', 'Brahmpur', 'Brindaban', 'Budaun', 'Bulandshahr', 'Bundi', 'Burhanpur', 'Buril', 'Butua', 'Byaspur', 'Chandauli', 'Chandpur', 'Charkhari', 'Chawari', 'Chhibramau', 'Chhindwara', 'Chikhaldan', 'Chikhalpur', 'Chikhli', 'Chikra', 'Chikrauli', 'Chiksa', 'Chiktan', 'Chikurta', 'Chilas', 'Chilaun', 'Chilgaon', 'Chilha', 'Chili', 'Chilijhar', 'Chilikpur', 'Chilkari', 'Chilkari', 'Chilla', 'Chilla', 'Chillai', 'Chillaikhan', 'Chillakhor', 'Chillapur', 'Chillaseer', 'Chillipur', 'Chillipur', 'Chilua', 'Chilupar', 'Chimada', 'Chimaur', 'Chimman', 'Chimpanzee', 'Chimti', 'Chimti', 'Chimtikalan', 'Chimtikot', 'Chimtura', 'Chimvada', 'Chimvali', 'Chimvali', 'Chimvanda', 'Chimvandar', 'Chimvandh', 'Chimvandha', 'Chimvandhan', 'Chimvandhar', 'Chimvandhe', 'Chimvandhhera', 'Chimvandhi', 'Chimvandhia', 'Chimvandhin', 'Chimvandha', 'Chimvandhpur', 'Chimvandhra', 'Chimvandhri', 'Chimvandhria', 'Chimvandhra', 'Chimvandhrah', 'Chimvandhrasta', 'Chimvandhu', 'Chimvandhvan', 'Chimvandhwa', 'Chimvandha', 'Chimvandha', 'Chimvandha', 'Chimvandhya', 'Chimvandia', 'Chimvandva', 'Chimvandva', 'Chimvandvala', 'Chimvandvali', 'Chimvandvan', 'Chimvandva', 'Chimvandva', 'Chimvandva', 'Chimvandva', 'Chimvandva', 'Chitpur', 'Chitrakoot', 'Chitragupta', 'Chittauli', 'Chittaurgarh', 'Chitti', 'Chittikurta', 'Chittikurtan', 'Chittikurte', 'Chittikurten', 'Chittikurti', 'Chittikurtin', 'Chittikurtin', 'Chittikurtpur', 'Chittikurtupur', 'Chittikurtva', 'Chittikurtvali', 'Chittikurtvani', 'Chittikurtvari', 'Chittikurtvan', 'Chittikurtvan', 'Chittikurtvana', 'Chittikurtvani', 'Chittikurtvani', 'Chittikurtvapu', 'Chittikurtvc', 'Chittikurtvada', 'Chittikurtvadi', 'Chittikurtvadipur', 'Chittikurtvadi', 'Chittikurtvaganpur', 'Chittikurtvagaon', 'Chittikurtvagaon', 'Chittikurtva', 'Chittikurtvalankh', 'Chittikurtvalankha', 'Chittikurtvalankhamandi', 'Chittikurtvalankhar', 'Chittikurtvala', 'Chittikurtvala', 'Chittikurtvalakshmi', 'Chittikurtvalakshi', 'Chittikurtvalakshman', 'Chittikurtvala', 'Chittikurtvalala', 'Chittikurtvalali', 'Chittikurtva', 'Chittikurtvalmahal', 'Chittikurtvalmartin', 'Chittikurtvalmatia', 'Chittikurtvalmichel', 'Chittikurtvalminati', 'Chittikurtvalmodandi', 'Chittikurtvalmodandi', 'Chittikurtvalmodandi', 'Chittikurtvalmodan', 'Chittikurtva', 'Chittikurtvalnagar', 'Chittikurtvalnagari', 'Chittikurtvalnagari', 'Chittikurtvalnagari', 'Chittikurtvalnagari', 'Chittikurtvalnagari', 'Chittikurtvalnagari', 'Chittikurtvalnagari', 'Chittikurtvalnagarpur', 'Chittikurtvalnagaram', 'Chittikurtvalnagar', 'Chittikurtvalnagar', 'Chittikurtvalnagari', 'Chittikurtvalpur', 'Chittipur', 'Chittorgarh', 'Chittrakoot', 'Chittrakut', 'Chittrakuta', 'Chittrakutam', 'Chittrakutampur', 'Chittrakutampur', 'Chittrakutampur', 'Chittrakutampur', 'Chittrakutampur', 'Chittrakutamamandi', 'Chittrakutampur', 'Chittrakutan', 'Chittrakutanapur', 'Chittrakutapur', 'Chittrakutapuram', 'Chittrakutaputami', 'Chittrakutaputa', 'Chittrakutapute', 'Chittrakutaputi', 'Chittrakutara', 'Chittrakutaram', 'Chittrakutaram', 'Chittrakutarampur', 'Chittrakutha', 'Chittrakuthar', 'Chittrakuthara', 'Chittrakuthara', 'Chittrakutharam', 'Chittrakutha', 'Chittrakuthapuram', 'Chittrakuthapur', 'Chittrakuthapura', 'Chittrakuthapuri', 'Chittrakuthapuri', 'Chittrakuthapurpur', 'Chittrakuthaputami', 'Chittrakuthapute', 'Chittrakuthatana', 'Chittrakuthatanama', 'Chittrakiatani', 'Chittrakuthavaa', 'Chittrakuthavan', 'Chittrakuthavan', 'Chittrakuthavana', 'Chittrakuthavani', 'Chittrakuthavan', 'Chittrakuthavanpur', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavaram', 'Chittrakuthavaram', 'Chittrakuthava', 'Chittrakuthavari', 'Chittrakuthavari', 'Chittrakuthavari', 'Chittrakuthavari', 'Chittrakuthavari', 'Chittrakuthavari', 'Chittrakuthavaripur', 'Chittrakuthavari', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavarilankh', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthavara', 'Chittrakuthava', 'Chittrakuthava'],
    'uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Garhwal', 'Haridwar', 'Kumaon', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
    'west-bengal': ['Alipurduar', 'Bankura', 'Bardhaman', 'Birbhum', 'Cooch Behar', 'Darjeeling', 'East Burdwan', 'East Medinipur', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Kumar Gram', 'Malday', 'Medinipur', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'North Dinajpur', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'South Dinajpur', 'Sundarban', 'Uttar Dinajpur', 'West Medinipur']
};

let selectedCrops = [];

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
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
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
});

// Language Selection
document.querySelectorAll('.lang-dropdown a').forEach(langOption => {
    langOption.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLanguage = e.target.getAttribute('data-lang');
        selectedLang.textContent = selectedLanguage;
        langDropdown.classList.remove('active');

        // Also update the preferred language select
        preferredLanguageSelect.value = selectedLanguage;

        console.log('Language changed to:', selectedLanguage);
    });
});

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
    }
});

// Validation functions
function validateName(name) {
    return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
}

function validateMobile(mobile) {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
}

function validateVillage(village) {
    return village.trim().length >= 2;
}

function validatePIN(pin) {
    if (!pin) return true; // Optional field
    const regex = /^\d{4}$/;
    return regex.test(pin);
}

// Show/hide error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId + '-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId + '-error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Crops management
function addCrop(cropName) {
    if (!cropName || selectedCrops.includes(cropName)) {
        return;
    }

    selectedCrops.push(cropName);
    updateCropsDisplay();
    updateCropsHiddenInput();
}

function removeCrop(cropName) {
    selectedCrops = selectedCrops.filter(crop => crop !== cropName);
    updateCropsDisplay();
    updateCropsHiddenInput();
}

function updateCropsDisplay() {
    cropsTagsContainer.innerHTML = '';

    selectedCrops.forEach(crop => {
        const tag = document.createElement('div');
        tag.className = 'crop-tag';
        tag.innerHTML = `
            ${crop}
            <span class="remove" data-crop="${crop}">×</span>
        `;
        cropsTagsContainer.appendChild(tag);
    });
}

function updateCropsHiddenInput() {
    cropsHiddenInput.value = selectedCrops.join(',');
}

// Crop input handler
cropInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const cropName = this.value.trim();
        if (cropName) {
            addCrop(cropName);
            this.value = '';
        }
    }
});

// Crop suggestion handlers
document.querySelectorAll('.crop-suggestion').forEach(suggestion => {
    suggestion.addEventListener('click', function() {
        const cropName = this.getAttribute('data-crop');
        addCrop(cropName);
    });
});

// Crop removal handler (event delegation)
cropsTagsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove')) {
        const cropName = e.target.getAttribute('data-crop');
        removeCrop(cropName);
    }
});

// Input event listeners for real-time validation
fullNameInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        hideError('fullName');
    }
});

mobileInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Only allow digits
    if (this.value.length > 0) {
        hideError('mobile');
    }
});

villageInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        hideError('village');
    }
});

districtSelect.addEventListener('change', function() {
    if (this.value) {
        hideError('district');
    }
});

// State change handler
stateSelect.addEventListener('change', function() {
    const selectedState = this.value;
    const districts = districtsByState[selectedState] || [];
    
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (districts.length > 0) {
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district.toLowerCase().replace(/\s+/g, '-');
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    } else {
        districtSelect.disabled = true;
    }
    
    // Reset district selection
    districtSelect.value = '';
    hideError('district');
});

pinInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Only allow digits
});

// Focus events
fullNameInput.addEventListener('focus', () => hideError('fullName'));
mobileInput.addEventListener('focus', () => hideError('mobile'));
villageInput.addEventListener('focus', () => hideError('village'));
districtSelect.addEventListener('focus', () => hideError('district'));

// Form submission
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        fullName: fullNameInput.value.trim(),
        mobile: mobileInput.value.trim(),
        village: villageInput.value.trim(),
        district: districtSelect.value,
        crops: selectedCrops.join(','),
        preferredLanguage: preferredLanguageSelect.value,
        pin: pinInput.value.trim(),
        terms: termsCheckbox.checked,
        newsletter: newsletterCheckbox.checked
    };

    let isValid = true;

    // Validate all required fields
    if (!formData.fullName) {
        showError('fullName', 'Please enter your full name');
        isValid = false;
    } else if (!validateName(formData.fullName)) {
        showError('fullName', 'Please enter a valid name (letters only)');
        isValid = false;
    } else {
        hideError('fullName');
    }

    if (!formData.mobile) {
        showError('mobile', 'Please enter mobile number');
        isValid = false;
    } else if (!validateMobile(formData.mobile)) {
        showError('mobile', 'Please enter a valid 10-digit mobile number');
        isValid = false;
    } else {
        hideError('mobile');
    }

    if (!formData.village) {
        showError('village', 'Please enter your village name');
        isValid = false;
    } else if (!validateVillage(formData.village)) {
        showError('village', 'Please enter a valid village name');
        isValid = false;
    } else {
        hideError('village');
    }

    if (!formData.district) {
        showError('district', 'Please select your district');
        isValid = false;
    } else {
        hideError('district');
    }

    if (formData.pin && !validatePIN(formData.pin)) {
        showError('pin', 'PIN must be 4 digits');
        isValid = false;
    }

    if (!formData.terms) {
        showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Add ripple effect to submit button
    const submitBtn = this.querySelector('button[type="submit"]');
    addRippleEffect(submitBtn, e);

    // Disable form and show loading
    const formElements = this.querySelectorAll('input, select, button');
    formElements.forEach(el => el.disabled = true);

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';

    // Attempt to register via KrishiAuth if available
    setTimeout(() => {
        if (window.KrishiAuth) {
            const res = window.KrishiAuth.registerUser(formData);
            if (!res.success) {
                showError('mobile', res.message || 'Registration failed');
                formElements.forEach(el => el.disabled = false);
                submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
                mobileInput.focus();
                return;
            }
            showNotification('Account created successfully! Please login to continue.', 'success');
            setTimeout(() => { window.location.href = '../login/LOGIN.html'; }, 1200);
            return;
        }

        // Fallback simulation
        if (formData.mobile === '9999999999') {
            showError('mobile', 'This mobile number is already registered');
            formElements.forEach(el => el.disabled = false);
            submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
            mobileInput.focus();
            mobileInput.select();
        } else {
            showNotification('Account created successfully! Please login to continue.', 'success');
            console.log('Registration data:', formData);
            setTimeout(() => { window.location.href = '../login/LOGIN.html'; }, 2000);
        }
    }, 800);
});

// Ripple effect function
function addRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.querySelector('.ripple')) {
            addRippleEffect(this, e);
        }
    });
});

// Notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#4a7c59';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#000';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    // Set default preferred language from navbar
    const currentLang = selectedLang.textContent;
    preferredLanguageSelect.value = currentLang;
});

// Console message
console.log('%cKrishiAI - Farmer Registration', 'color: #4a7c59; font-size: 16px; font-weight: bold;');
console.log('%cJoin the digital farming revolution', 'color: #666; font-size: 12px;');
