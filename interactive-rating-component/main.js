const submitButton = document.getElementById('rating__submit-button');
const ratingFormContainer = document.getElementById('rating-form-container');
const thankyouConfirmationContainer = document.getElementById('thankyou-confirmation-container');

submitButton.onclick = () => {
  hideRatingFormContainer();
  showThankyouConfirmationContainer();
  return false;
}

function hideRatingFormContainer() {
  ratingFormContainer.classList.remove('show-rating-form');
  ratingFormContainer.classList.add('hidden');
}

function showThankyouConfirmationContainer() {
  thankyouConfirmationContainer.classList.remove('hidden');
  thankyouConfirmationContainer.classList.add('show-thankyou-confirmation');
}