if (window.location.href.match('^https?://areg.appfolio.com/listings/?$')) {
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

  // This function updates each listing image that is currently on the page
  const updateEachListingImage = () => {
    const listingImages = document.getElementsByClassName(
      'listing-item__image'
    );

    for (const image of listingImages) {
      // Only update new images to hopefully speed up the process
      if (image.getAttribute('src') !== 'https://placecats.com/300/200') {
        image.setAttribute('src', 'https://placecats.com/300/200');
      }
    }
  };

  // This first invocation is needed for the first batch of listings
  updateEachListingImage();

  // This observer is needed for new listings that appear as the user scrolls
  const mutationObserver = new MutationObserver(updateEachListingImage);

  const resultContainer = document.getElementById('result_container');
  mutationObserver.observe(resultContainer, {
    childList: true,
    attributes: true,
    subtree: true,
  });
} else if (
  window.location.href.match('^https?://areg.appfolio.com/listings/detail/.*')
) {
  // The following code is used for updating areg.appfolio.com/listings/detail/*

  // Update apply now button in listing page
  const applyNowButton = document.getElementsByClassName('js-apply-now');

  applyNowButton[0].setAttribute('href', 'https://www.findigs.com/');

  const updateListingPageImages = () => {
    // Update the images at the top of the listing page
    const smallImages = document.getElementsByClassName('gallery__small-image');
    const largeImages = document.getElementsByClassName('gallery__large-image');

    for (const image of smallImages) {
      if (image.getAttribute('src') !== 'https://placecats.com/300/200') {
        image.setAttribute('src', 'https://placecats.com/300/200');
      }
    }

    for (const image of largeImages) {
      if (image.getAttribute('src') !== 'https://placecats.com/300/200') {
        image.setAttribute('src', 'https://placecats.com/300/200');
      }
    }

    // Update the images so the cat images appear when you click into them
    const swipeBoxAnchors = document.getElementsByClassName('swipebox');

    for (const anchor of swipeBoxAnchors) {
      if (anchor.getAttribute('href', 'https://placecats.com/300/200')) {
        anchor.setAttribute('href', 'https://placecats.com/300/200');
      }
    }
  };

  // This first invocation is for the images that are included in the inital rendering
  updateListingPageImages();

  // This mutation observer was added to make the page update anything loaded after the inital rendering
  const mutationObserver = new MutationObserver(updateListingPageImages);
  const gallery = document.getElementsByClassName('gallery')[0];
  mutationObserver.observe(gallery, {
    childList: true,
    attributes: true,
    subtree: true,
  });
}
