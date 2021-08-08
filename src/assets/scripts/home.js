const fileInput = document.querySelector("#app-file");
const image = document.querySelector("#app-output");

fileInput.addEventListener("change", function (e) {
  let file = this.files[0];
  console.log(file);

  var reader = new FileReader();
  reader.onload = function () {
    localStorage.image = reader.result; //stores the image to localStorage
  };

  reader.readAsDataURL(file); //attempts to read the file in question.

  setTimeout(() => {
    document.location.href = "/custom.html";
  }, 100);
});
