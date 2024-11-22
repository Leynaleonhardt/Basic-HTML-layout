// For IP Geolocation Astronomy API
const apiKey = "";

async function fetchMoonData() {
  const apiUrl = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    // Extract
    let moonIllumination = data.moon_illumination_percentage;
      moonIllumination = moonIllumination * -1;
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

// Call the function to fetch and display data
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
