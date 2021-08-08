const imageResult = document.querySelector("#app-result");
const validButton = document.querySelector("#app-valid");

imageResult.src = localStorage.image;

validButton.addEventListener('click', () =>{
  document.location.href = '/loading.html'
})
