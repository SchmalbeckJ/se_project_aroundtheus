// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, option) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, option);
  } else {
    hideInputError(formEl, inputEl, option);
  }
}

function setEventlisteners(formEl, option) {
  const { inputSelector } = option;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, option);
    });
  });
}

function enableValidation(option) {
  const formEls = [...document.querySelectorAll(option.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventlisteners(formEl, option);

    // look for all inputs inside of form
    // loop through all  inputs to see if all are valid
    // if any input is not valid
    // grab the validation message
    //add error class to input
    //display error message
    //disable button
    // if all inputs are vaild
    // enable button
    //reset error messages
  });
}

const checking = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(checking);
