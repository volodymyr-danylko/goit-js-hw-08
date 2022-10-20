import throttle from 'lodash.throttle';

const LOCAL_STORAGE_FORM_DATA_KEY = 'feedback-form-state';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onChange, 500));
form.addEventListener('submit', onSubmit);

restoreInputs();

function onChange() {
  const data = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(LOCAL_STORAGE_FORM_DATA_KEY, JSON.stringify(data, null, 2));
}

function onSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_FORM_DATA_KEY)));

  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_FORM_DATA_KEY);
}

function restoreInputs() {
  const storageData = localStorage.getItem(LOCAL_STORAGE_FORM_DATA_KEY);

  if (storageData) {
    input.value = JSON.parse(storageData).email;
    textarea.value = JSON.parse(storageData).message;
  }
}
