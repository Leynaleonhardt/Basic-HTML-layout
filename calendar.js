const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const moonPhaseImages = {
    1: "https://www.moongiant.com/images/today_phase/moon_day_new.jpg",  
    2: "https://www.moongiant.com/images/today_phase/moon_day_WaxC_0.jpg",
    3: "https://www.moongiant.com/images/today_phase/moon_day_WaxC_5.jpg", 
    4: "https://www.moongiant.com/images/today_phase/moon_day_WaxC_15.jpg", 
    5: "https://www.moongiant.com/images/today_phase/moon_day_WaxC_20.jpg", 
    6: "https://www.moongiant.com/images/today_phase/moon_day_WaxC_30.jpg", 
    7: "https://www.moongiant.com/images/today_phase/moon_day_WaxC_40.jpg", 
    8: "https://www.moongiant.com/images/today_phase/moon_day_first.jpg", 
    9: "https://www.moongiant.com/images/today_phase/moon_day_WaxG_60.jpg",    
    10: "https://www.moongiant.com/images/today_phase/moon_day_WaxG_70.jpg",
    11: "https://www.moongiant.com/images/today_phase/moon_day_WaxG_80.jpg",
    12: "https://www.moongiant.com/images/today_phase/moon_day_WaxG_90.jpg", 
    13: "https://www.moongiant.com/images/today_phase/moon_day_WaxG_95.jpg",
    14: "https://www.moongiant.com/images/today_phase/moon_day_WaxG_95.jpg",  
    15: "https://www.moongiant.com/images/today_phase/moon_day_full.jpg",   
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

// Reference date for a known new moon
const referenceDate = new Date("2024-12-1");

function getMoonPhaseIndex(date) {
    const daysSinceReference = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
    return ((daysSinceReference % 29) + 1);
}

// Generate the calendar
function generateCalendar(year, month) {
    const calendarGrid = document.getElementById("calendar-grid");
    const monthName = document.getElementById("month-name");
    calendarGrid.innerHTML = "";
    monthName.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay(); 
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill empty boxes before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyBox = document.createElement("div");
        emptyBox.classList.add("day-box");
        calendarGrid.appendChild(emptyBox);
    }

    // Generate day boxes with images
    for (let day = 1; day <= daysInMonth; day++) {
        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");

        const currentDate = new Date(year, month, day);
        const moonPhaseIndex = getMoonPhaseIndex(currentDate);

        if (moonPhaseImages[moonPhaseIndex]) {
            const img = document.createElement("img");
            img.src = moonPhaseImages[moonPhaseIndex];
            img.alt = `Moon phase for day ${day}`;
            img.loading = "lazy";
            dayBox.appendChild(img);
        }

        const dayLabel = document.createElement("span");
        dayLabel.textContent = day;
        dayBox.appendChild(dayLabel);

        calendarGrid.appendChild(dayBox);
    }
}


const today = new Date();
generateCalendar(today.getFullYear(), today.getMonth());

