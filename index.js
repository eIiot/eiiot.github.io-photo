const left = document.getElementById('left');
const right = document.getElementById('right');
const img = document.querySelector('img');

const allImages = {
  '1.jpg': {description: "Beach", location: "Long Beach, CA", tags: ["landscape"]},
  '0.jpg': {description: "Sunset", location: "San Francisco, CA", tags: ["landscape"]},
  '2.jpg': {description: "Field of Lights", location: "Paso Robles, CA", tags: ["landscape"]},
  '4.jpg': {description: "Rooftop", location: "Chicago, CA", tags: ["urban"]},
  '5.jpg': {description: "Sunset", location: "Berkeley, CA", tags: ["landscape"]},
  '6.jpg': {description: "Smoke", location: "Berkeley, CA", tags: ["urban"]},
  '7.jpg': {description: "Kensington", location: "Kensington, CA", tags: ["urban"]},
};

Object.keys(allImages).forEach(image => {
    let img = new Image()
    img.src = 'img/' + image
})

// ceate a duplicate of the allImages object, but only with the 'urban' tags
const urbanImages = {};
Object.keys(allImages).forEach(key => {
  if (allImages[key].tags.includes('urban')) {
    urbanImages[key] = allImages[key];
  }
});
const landscapeImages = {};
Object.keys(allImages).forEach(key => {
  if (allImages[key].tags.includes('landscape')) {
    landscapeImages[key] = allImages[key];
  }
});

let images = allImages;

img.src = './img/' + Object.keys(images)[0];
img.title = images[Object.keys(images)[0]].description + '\n' + images[Object.keys(images)[0]].location;

// onclick div, change img source to the next or previous image
left.onclick = function() {
  const currentImage = img.src.split('/').pop();
  const currentImageKey = Object.keys(images).find(key => key === currentImage);
  const nextImageKey = Object.keys(images)[Object.keys(images).indexOf(currentImageKey) - 1];
  const nextImage = nextImageKey ? nextImageKey : Object.keys(images)[Object.keys(images).length - 1];
  img.src = './img/' + nextImage;
  img.title = images[nextImage].description + '\n' + images[nextImage].location;
};

right.onclick = function() {
  const currentImage = img.src.split('/').pop();
  const currentImageKey = Object.keys(images).find(key => key === currentImage);
  const nextImageKey = Object.keys(images)[Object.keys(images).indexOf(currentImageKey) + 1];
  const nextImage = nextImageKey ? nextImageKey : Object.keys(images)[0];
  img.src = './img/' + nextImage;
  img.title = images[nextImage].description + '\n' + images[nextImage].location;
};
