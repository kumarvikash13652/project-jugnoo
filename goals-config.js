// --- ISHI'S GOALS DATA (Yahan tu data change kar sakta hai) ---
const goalsData = [
    {
        date: "21-Oct-2025",
        age: "1 Year",
        education: "—",
        sports: "Outdoor Activity Only",
        physical: "—",
        championship: "0 Mobile Exposure",
        achievement: "Achieved",
        height: "—",
        weight: "—"
    },
    {
        date: "21-Oct-2026",
        age: "2 Years",
        education: "Introduction to Play School",
        sports: "Outdoor Activity Only",
        physical: "—",
        championship: "0 Mobile Exposure",
        achievement: "Achieved",
        height: "3 Feet",
        weight: "—"
    },
    {
        date: "21-May-2027",
        age: "2.5 Years",
        education: "Play School",
        sports: "Swimming & Cricket & Skating (Outdoor Only)",
        physical: "—",
        championship: "0 Mobile Exposure, Exposure to water, fearlessness in water",
        achievement: "WIP",
        height: "—",
        weight: "—"
    },
    {
        date: "21-Oct-2027",
        age: "3 Years",
        education: "Nursery Learning",
        sports: "Swimming & Cricket & Skating",
        physical: "Start Running",
        championship: "Swim Class Continue",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2028",
        age: "4 Years",
        education: "LKG / UKG",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Swim Continue",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2029",
        age: "5 Years",
        education: "1st Standard",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Swim Continue",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2030",
        age: "6 Years",
        education: "2nd Standard",
        sports: "Swimming & Other Sports",
        physical: "Running & Exercise",
        championship: "Swim Continue",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2031",
        age: "7 Years",
        education: "3rd Standard",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Swim Continue",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2032",
        age: "8 Years",
        education: "Class 4th Complete",
        sports: "Swimming & Other Sports",
        physical: "Daily Exercise",
        championship: "Swim Continue",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2033",
        age: "9 Years",
        education: "Class 5th / Navodaya Entrance",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "District Trials & Bihar State Sub-Junior Selection, SFI Sub-Junior National Championship (Group III: Ages 11-12)",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2034",
        age: "10 Years",
        education: "Class 6th at Navodaya Madhepura",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Bihar Swimming Association & GMS",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2035",
        age: "11 Years",
        education: "Class 7th at Navodaya Madhepura",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Bihar Swimming Association & GMS",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2036",
        age: "12 Years",
        education: "Class 8th at Navodaya Madhepura",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "SFI Sub-Junior National Aquatic Championships (Group III)",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2037",
        age: "13 Years",
        education: "Class 9th at Navodaya Madhepura",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "SFI Sub-Junior National Aquatic Championships (Group II: Ages 13-14)",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2038",
        age: "14 Years",
        education: "Class 10th at Navodaya Madhepura",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "SFI Sub-Junior National Aquatic Championships (Group II)",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2039",
        age: "15 Years",
        education: "Class 11th at Navodaya Madhepura",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "SFI Junior National Aquatics Championships (Group I)",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2040",
        age: "16 Years",
        education: "Class 12th Board at Navodaya Madhepura & NDA 1 & 2 Entrance",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Khelo India Women's Swimming League / Nationals",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    },
    {
        date: "20-Oct-2041",
        age: "17 Years",
        education: "Join NDA Pune",
        sports: "Swimming & Other Sports",
        physical: "Daily Running & Exercise",
        championship: "Represent Armed Forces in Swimming",
        achievement: "Upcoming",
        height: "—",
        weight: "—"
    }
];

// Function to render goals dynamically into HTML cards/timeline
function renderGoals() {
    const container = document.getElementById('goalsContainer');
    if (!container) return;

    container.innerHTML = '';

    goalsData.forEach((item, index) => {
        // Status badge color class
        let badgeClass = 'badge-upcoming';
        if (item.achievement.toLowerCase().includes('achieved')) badgeClass = 'badge-achieved';
        else if (item.achievement.toLowerCase().includes('wip')) badgeClass = 'badge-wip';

        const cardHTML = `
            <div class="goal-card">
                <div class="goal-header">
                    <span class="goal-age">🎯 ${item.age}</span>
                    <span class="goal-date">📅 ${item.date}</span>
                    <span class="goal-status ${badgeClass}">${item.achievement}</span>
                </div>
                <div class="goal-body">
                    <div class="goal-item"><strong>📚 Education:</strong> ${item.education}</div>
                    <div class="goal-item"><strong>🏊‍♂️ Sports:</strong> ${item.sports}</div>
                    <div class="goal-item"><strong>🏃‍♂️ Physical:</strong> ${item.physical}</div>
                    <div class="goal-item"><strong>🏆 Milestone / Goal:</strong> ${item.championship}</div>
                    ${item.height !== '—' || item.weight !== '—' ? `
                        <div class="goal-metrics">
                            <span>📏 Height: ${item.height}</span>
                            <span>⚖️ Weight: ${item.weight}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Auto load on start
document.addEventListener('DOMContentLoaded', renderGoals);