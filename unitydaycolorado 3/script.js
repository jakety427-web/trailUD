// Countdown Timer
const eventDate = new Date('2026-03-28T09:00:00-06:00');
function updateCountdown(){
  const now = new Date();
  const diff = eventDate - now;
  if(diff < 0) return;
  const s = Math.floor(diff/1000);
  document.getElementById("d").textContent = Math.floor(s/86400);
  document.getElementById("h").textContent = Math.floor(s%86400/3600);
  document.getElementById("m").textContent = Math.floor(s%3600/60);
  document.getElementById("s").textContent = s%60;
}
setInterval(updateCountdown,1000);
updateCountdown();

// Form Submission to Google Sheets
document.getElementById("unityForm").addEventListener("submit", function(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    size: form.size.value,
    regType: form.regType.value,
    donation: form.donation.value,
    payment: form.payment.value,
    notes: form.notes.value
  };

  fetch("YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(() => {
    form.reset();
    document.querySelector(".success").style.display = "block";
  })
  .catch(() => alert("Error submitting form"));
});
