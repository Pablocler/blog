// Existing function
function showTime() {
    const options = {
        timeZone: 'Europe/Paris', // Set timezone to Paris
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Use 24-hour format
    };
    const now = new Date().toLocaleTimeString('fr-FR', options); // French locale
    document.getElementById('currentTime').innerHTML = now; // Update the time in the footer
}

showTime();
setInterval(function () {
    showTime();
}, 1000);