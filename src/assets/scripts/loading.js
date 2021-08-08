const loadingBar = document.querySelector("#app-bar");
const loaded = document.querySelector("#app-loaded");
const timer = document.querySelector("#app-timer");
const time = document.querySelector("#app-time");
const seconde = document.querySelector("#app-seconde");

let interval = setInterval(() => {
  let t = parseInt(time.textContent) - 1;
  time.textContent = t;
  if (t == 1) {
    seconde.textContent = "seconde";
  } else if (t == 0) {
    timer.textContent = "Photos envoyées avec succès";
    clearInterval(interval);
    // Redirection page de confirmation apres 1.5s
    setTimeout(()=>{
      document.location.href='/success.html'
    }, 1500)
  }
}, 1000);
