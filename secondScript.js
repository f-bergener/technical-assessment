// The following code is used for updating areg.appfolio.com/listings/detail/*

// Update apply now button in listing page

const applyNowButton = document.getElementsByClassName('js-apply-now');

applyNowButton[0].setAttribute('href', 'https://www.findigs.com/');

// Update the images at the top of the listing page
const smallImages = document.getElementsByClassName('gallery__small-image');
const largeImages = document.getElementsByClassName('gallery__large-image');

for (const image of smallImages) {
  image.setAttribute('src', 'https://placecats.com/300/200');
}

for (const image of largeImages) {
  image.setAttribute('src', 'https://placecats.com/300/200');
}

const swipeBoxElements = document.getElementsByClassName('swipebox');

for (const element of swipeBoxElements) {
  element.setAttribute('href', 'https://placecats.com/300/200');
}
