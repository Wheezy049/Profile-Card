function updateUTCTime() {
    const utcTimeElement = document.getElementById("utcTime");
    const now = new Date();
    utcTimeElement.textContent = "Current UTC Time: " + now.toUTCString();
}
updateUTCTime();