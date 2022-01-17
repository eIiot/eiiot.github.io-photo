const left = document.getElementById('left');
const right = document.getElementById('right');
const img = document.querySelector('img');

// filters
const urbanFilter = document.getElementById('urban-filter');
const landscapeFilter = document.getElementById('landscape-filter');
const allFilter = document.getElementById('all-filter');

const allImages = {
  '0.jpg': {description: "Sunset", location: "San Francisco, CA", tags: ["landscape"]},
  '1.jpg': {description: "Man on Beach", location: "Long Beach, CA", tags: ["landscape"]},
  '2.jpg': {description: "Field of Lights", location: "Paso Robles, CA", tags: ["landscape"]},
  '3.jpg': {description: "Chicago", location: "Chicago, IL", tags: ["urban"]},
  '4.jpg': {description: "Rooftop", location: "Chicago, CA", tags: ["urban"]},
  '5.jpg': {description: "Sunset", location: "Berkeley, CA", tags: ["landscape"]},
  '6.jpg': {description: "Smoke", location: "Berkeley, CA", tags: ["urban"]},
  '7.jpg': {description: "Kensington", location: "Kensington, CA", tags: ["urban"]},
};

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

// FILTERS
urbanFilter.onclick = function() {
  urbanFilter.classList.add('active-btn');
  landscapeFilter.classList.remove('active-btn');
  allFilter.classList.remove('active-btn');
  images = urbanImages;
  img.src = './img/' + Object.keys(urbanImages)[0];
  img.title = urbanImages[Object.keys(urbanImages)[0]].description + '\n' + urbanImages[Object.keys(urbanImages)[0]].location;
};

landscapeFilter.onclick = function() {
  landscapeFilter.classList.add('active-btn');
  urbanFilter.classList.remove('active-btn');
  allFilter.classList.remove('active-btn');
  images = landscapeImages;
  img.src = './img/' + Object.keys(landscapeImages)[0];
  img.title = landscapeImages[Object.keys(landscapeImages)[0]].description + '\n' + landscapeImages[Object.keys(landscapeImages)[0]].location;
};

allFilter.onclick = function() {
  allFilter.classList.add('active-btn');
  urbanFilter.classList.remove('active-btn');
  landscapeFilter.classList.remove('active-btn');
  images = allImages;
  img.src = './img/' + Object.keys(allImages)[0];
  img.title = allImages[Object.keys(allImages)[0]].description + '\n' + allImages[Object.keys(allImages)[0]].location;
}