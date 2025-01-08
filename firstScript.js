// The following code is used for updating areg.appfolio.com/listings

// Add a text element to the top of areg.appfolio.com/listings
const topBarTitle = document.getElementsByClassName('js-topbar-title')[0];
topBarTitle.insertAdjacentText('afterend', 'Freddie Bergener');

// Swap the links for the “apply now” buttons to https://www.findigs.com/
const applyNowButtons = document.getElementsByClassName('js-listing-apply');

for (const button of applyNowButtons) {
  button.setAttribute('href', 'https://www.findigs.com/');
}

// Swap the photos for https://placecats.com
const listingImages = document.getElementsByClassName('listing-item__image');

for (const image of listingImages) {
  image.setAttribute('src', 'https://placecats.com/300/200');
}

const mutationObserver = new MutationObserver(function () {
  const listingImages = document.getElementsByClassName('listing-item__image');

  for (const image of listingImages) {
    // Only update new images to hopefully speed up the process
    if (image.getAttribute('src') !== 'https://placecats.com/300/200') {
      image.setAttribute('src', 'https://placecats.com/300/200');
    }
  }
});

const resultContainer = document.getElementById('result_container');
mutationObserver.observe(resultContainer, {
  childList: true,
  attributes: true,
  subtree: true,
});
