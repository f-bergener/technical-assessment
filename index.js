const updateAttributeForElementArray = (elementArray, attribute, newValue) => {
  for (const element of elementArray) {
    // Add attribute check to avoid making unnecessary changes
    if (element.getAttribute(attribute) !== newValue) {
      element.setAttribute(attribute, newValue);
    }
  }
};

if (window.location.href.match('^https?://areg.appfolio.com/listings/?$')) {
  // The following code is used for updating areg.appfolio.com/listings

  // Add a text element to the top of areg.appfolio.com/listings
  const topBarTitle = document.getElementsByClassName('js-topbar-title')[0];
  topBarTitle.insertAdjacentText('afterend', 'Freddie Bergener');

  // This function updates each listing that is currently on the page
  const updateListingsPageContent = () => {
    // Swap the links for the “apply now” buttons to https://www.findigs.com/
    const applyNowButtons = document.getElementsByClassName('js-listing-apply');

    updateAttributeForElementArray(
      applyNowButtons,
      'href',
      'https://www.findigs.com/'
    );

    // Swap the photos for https://placecats.com
    const listingImages = document.getElementsByClassName(
      'listing-item__image'
    );

    updateAttributeForElementArray(
      listingImages,
      'src',
      'https://placecats.com/300/200'
    );
  };

  // This first invocation is needed for the first batch of listings
  updateListingsPageContent();

  // This observer is needed for new listings that appear as the user scrolls
  const mutationObserver = new MutationObserver(updateListingsPageContent);

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

  // This function updates the images on the page
  const updateIndividualListingPageContent = () => {
    // Update the images at the top of the listing page
    const smallImages = document.getElementsByClassName('gallery__small-image');
    const largeImages = document.getElementsByClassName('gallery__large-image');

    updateAttributeForElementArray(
      [...smallImages, ...largeImages],
      'src',
      'https://placecats.com/300/200'
    );

    // Update the images so the cat images appear when you click into them
    const swipeBoxAnchors = document.getElementsByClassName('swipebox');
    updateAttributeForElementArray(
      swipeBoxAnchors,
      'href',
      'https://placecats.com/300/200'
    );
  };

  // This first invocation is for the images that are included in the inital rendering
  updateIndividualListingPageContent();

  // This mutation observer was added to make the page update anything loaded after the inital rendering
  const mutationObserver = new MutationObserver(
    updateIndividualListingPageContent
  );
  const gallery = document.getElementsByClassName('gallery')[0];
  mutationObserver.observe(gallery, {
    childList: true,
    attributes: true,
    subtree: true,
  });
}
