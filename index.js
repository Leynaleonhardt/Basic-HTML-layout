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
const referenceDate = new Date("2024-12-01");

function getMoonPhaseIndex(date) {
    const daysSinceReference = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
    return ((daysSinceReference % 29) + 1);
}

function populateWeeklyGrid() {
    const weekGrid = document.getElementById("week-grid");
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const moonPhaseIndex = getMoonPhaseIndex(currentDate);

        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");

        const img = document.createElement("img");
        img.src = moonPhaseImages[moonPhaseIndex];
        img.alt = `Moon phase for ${currentDate.toDateString()}`;
        img.style.maxWidth = "80px";
        img.style.borderRadius = "50%";

        dayBox.appendChild(img);
        weekGrid.appendChild(dayBox);
    }
}

populateWeeklyGrid();
