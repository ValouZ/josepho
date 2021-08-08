const imageResult = document.querySelector("#app-result");
const validButton = document.querySelector("#app-valid");
const rotate = document.querySelector("#app-rotate");
const zooIn = document.querySelector('#app-zoom-in')
const zooOut = document.querySelector('#app-zoom-out')

imageResult.src = localStorage.image;

validButton.addEventListener("click", () => {
  document.location.href = "/loading.html";
});

rotate.addEventListener("click", () => {
  console.log("ROTATE");
  let img = new Image();
  img.src = imageResult.src;

  // Create a canvas object.
  let canvas = document.createElement("canvas");
  // Wait till the image is loaded.
  img.onload = function () {
    rotateImage(img, canvas);
    updateImage(canvas);
  };
});

let rotateImage = function (img, canvas) {
  // Create canvas context.
  let ctx = canvas.getContext("2d");

  // Assign width and height.
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.translate(canvas.width / 2, canvas.height / 2);

  // Rotate the image and draw it on the canvas.
  ctx.rotate(Math.PI / 2);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
};

let updateImage = function (canvas) {
  imageResult.src = canvas.toDataURL("image/png");
  localStorage.image = imageResult.src;
};
