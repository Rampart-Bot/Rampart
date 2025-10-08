// DARK/LIGHT MODE
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// FETCH LIVE STATS
async function fetchStats() {
    try {
        // REPLACE URL with your bot's API endpoint
        const res = await fetch('https://your-bot-api-url.com/stats');
        const data = await res.json();
        document.getElementById('guild-count').textContent = data.guilds;
        document.getElementById('snapshot-count').textContent = data.snapshots;
        document.getElementById('rebuild-count').textContent = data.rebuilds;
    } catch (e) {
        document.getElementById('guild-count').textContent = 'Error';
        document.getElementById('snapshot-count').textContent = 'Error';
        document.getElementById('rebuild-count').textContent = 'Error';
    }
}

fetchStats();
setInterval(fetchStats, 30000); // update every 30s
