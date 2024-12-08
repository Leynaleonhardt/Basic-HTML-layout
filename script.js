// For IP Geolocation Astronomy API
const apiKey = "API Key";

async function fetchMoonData() {
  const apiUrl = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    // Extract
    let moonIllumination = data.moon_illumination_percentage;
    let moonPhase = data.moon_phase
      moonPhase = moonPhase.replace(/_/g,' ');
    
    // Display
    document.getElementById("dailyillumination").innerText = `Illumination: ${moonIllumination}%`;
    document.getElementById("dailyPhase").innerText = `${moonPhase}`;
  } catch (error) {
    console.error("Error fetching the API:", error);
    document.querySelector(".moon-info").innerText = "Failed to load moon data.";
  }
}

fetchMoonData();

// For Today's Date
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${month}-${day}-${year}`;

// Display the date
document.getElementById("dailyDate").innerText = fullDate;

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

// Reference date for a known new moon
const referenceDate = new Date("2024-12-1");


//MoonAge
function calculateMoonAge(date) {
  const daysSinceReference = (date - referenceDate) / (1000 * 60 * 60 * 24); 
  const moonAge = daysSinceReference % 29.53; 
  return moonAge.toFixed(2);
}

function displayMoonAge() {
  const today = new Date();
  const moonAge = calculateMoonAge(today);
  const moonAgeElement = document.querySelector(".details-moon-age");

  if (moonAgeElement) {
    moonAgeElement.innerText = `Moon Age: ${moonAge} days`;
  } else {
    console.error("Element with class 'details-moon-age' not found.");
  }
}


//Display 
displayMoonAge();


//Image array
const moonPhaseImages = {
  1: "new_moon.jpg",  
  2: "WaxC_0.jpg",
  3: "WaxC_5.jpg", 
  4: "WaxC_10.jpg", 
  5: "WaxC_20.jpg", 
  6: "WaxC_25.jpg", 
  7: "WaxC_40.jpg", 
  8: "First_Quarter.jpg", 
  9: "WaxG_60.jpg",    
  10: "WaxG_70.jpg",
  11: "WaxG_80.jpg",
  12: "WaxG_90.jpg", 
  13: "WaxG_95.jpg",
  14: "WaxG_95.jpg",  
  15: "Full.jpg",   
  16: "https://www.moongiant.com/images/today_phase/moon_day_WanG_95.jpg", 
  17: "https://www.moongiant.com/images/today_phase/moon_day_WanG_90.jpg", 
  18: "https://www.moongiant.com/images/today_phase/moon_day_WanG_85.jpg", 
  19: "https://www.moongiant.com/images/today_phase/moon_day_WanG_75.jpg", 
  20: "https://www.moongiant.com/images/today_phase/moon_day_WanG_70.jpg", 
  21: "https://www.moongiant.com/images/today_phase/moon_day_WanG_60.jpg", 
  22: "https://www.moongiant.com/images/today_phase/moon_day_last.jpg", 
  23: "https://www.moongiant.com/images/today_phase/moon_day_WanC_40.jpg",
  24: "https://www.moongiant.com/images/today_phase/moon_day_WanC_30.jpg", 
  25: "https://www.moongiant.com/images/today_phase/moon_day_WanC_25.jpg",
  26: "https://www.moongiant.com/images/today_phase/moon_day_WanC_15.jpg",
  27: "https://www.moongiant.com/images/today_phase/moon_day_WanC_10.jpg",
  28: "https://www.moongiant.com/images/today_phase/moon_day_WanC_5.jpg",
  29: "https://www.moongiant.com/images/today_phase/moon_day_WanC_0.jpg",
};



// Calculate the index number(moon age) to correlate with the image array
function getMoonPhaseIndex(date) {
    const daysSinceReference = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
    return ((daysSinceReference % 29) + 1);
}

//Drawing image with index number
function displayTodayImage() {
  const todayMoonElement = document.getElementById("todaymoon");
  const today = new Date();
  const moonPhaseIndex = getMoonPhaseIndex(today);

  const img = document.createElement("img");
  img.src = moonPhaseImages[moonPhaseIndex];
  img.alt = "Today's Moon Phase";
  img.loading = "lazy";

  todayMoonElement.innerHTML = "";
  
  todayMoonElement.appendChild(img);
}

//Display
displayTodayImage();
