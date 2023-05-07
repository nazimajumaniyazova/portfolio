const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
// ctx.rotate((48 * Math.PI) / 180);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// const sizeWidth = (40 * window.innerWidth) / 100;
// const sizeHeight = (50 * window.innerHeight) / 100;
console.log(window.innerWidth, window.innerHeight);
const sizeWidth = window.innerWidth / 4;
const sizeHeight = window.innerHeight / 1.5;
canvas.width = sizeWidth;
canvas.height = sizeHeight;
// canvas.style.width = sizeWidth;
// canvas.style.height = sizeHeight;
const img = document.querySelector('.author-image');
// // img.src = './download.png';
// ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
let loadedImageWidth = img.width;
let loadedImageHeight = img.height;
// get the scale
// it is the min of the 2 ratios
let scale_factor = Math.min(
  canvas.width / img.width,
  canvas.height / img.height
);

// Lets get the new width and height based on the scale factor
let newWidth = img.width * scale_factor;
let newHeight = img.height * scale_factor;

// get the top left position of the image
// in order to center the image within the canvas
let x = canvas.width / 2 - newWidth / 2;
let y = canvas.height / 2 - newHeight / 2;

// When drawing the image, we have to scale down the image
// width and height in order to fit within the
ctx.drawImage(img, 0, 0, newWidth, newHeight);
window.addEventListener('resize', function (event) {
  console.log('ss');
});
