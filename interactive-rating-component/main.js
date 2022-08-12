document.getElementById('rating__submit-button').onclick = (e) => {
  e.preventDefault();
  const ratingSubmitted = getUserSelectedRating();
  hideRatingFormContainer();
  displayUserSelectedRating(ratingSubmitted);
  showThankyouConfirmationContainer();
}

function hideRatingFormContainer() {
  const ratingFormContainer = document.getElementById('rating-form-container');
  ratingFormContainer.classList.remove('show-rating-form');
  ratingFormContainer.classList.add('hidden');
}

function showThankyouConfirmationContainer() {
  const thankyouConfirmationContainer = document.getElementById('thankyou-confirmation-container');
  thankyouConfirmationContainer.classList.remove('hidden');
  thankyouConfirmationContainer.classList.add('show-thankyou-confirmation');
}

function getUserSelectedRating() {
  const ratingsGroup = document.getElementsByName('ratings-group');
  for (let i = 0; i < ratingsGroup.length; i++) {
    const rating = ratingsGroup[i];
    if (rating.checked) {
      return rating.value;
    }
  }
}

function displayUserSelectedRating( rating ) {
  document.getElementById('submitted-rating').textContent = rating;
}