/* =========================
   DESTINATION GALLERY
   ========================= */

const gallery = document.querySelector("#destination-gallery");
const filterButtons = document.querySelectorAll(".filter-button");

let destinations = [];


async function loadDestinations() {
  try {
    const response = await fetch("destinations.json");

    if (!response.ok) {
      throw new Error("Unable to load destination data.");
    }

    destinations = await response.json();

    displayDestinations(destinations);

  } catch (error) {
    gallery.innerHTML = `
      <p class="gallery-message">
        Sorry, the destinations could not be loaded.
        Please try again later.
      </p>
    `;

    console.error("Destination loading error:", error);
  }
}


function displayDestinations(items) {
  gallery.innerHTML = "";

  if (items.length === 0) {
    gallery.innerHTML = `
      <p class="gallery-message">
        No destinations found for this region.
      </p>
    `;

    return;
  }


  items.forEach(destination => {

    const card = document.createElement("article");

    card.className = "destination-card";

    card.dataset.region = destination.region;


    card.innerHTML = `
      <img
        src="${destination.image}"
        alt="${destination.alt}"
        class="destination-image"
        loading="lazy"
      >

      <div class="destination-content">

        <span class="destination-region">
          ${destination.region}
        </span>

        <h3>${destination.title}</h3>

        <p>${destination.description}</p>

      </div>
    `;


    gallery.appendChild(card);
  });
}


function filterDestinations(region) {

  if (region === "All") {
    displayDestinations(destinations);
    return;
  }

  const filteredDestinations = destinations.filter(
    destination => destination.region === region
  );

  displayDestinations(filteredDestinations);
}


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });


    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");


    const selectedRegion = button.dataset.region;

    filterDestinations(selectedRegion);

  });

});


loadDestinations();

/* =========================
   BOOKING INQUIRY FORM
   ========================= */

const form = document.querySelector("#booking-form");

const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const startDateInput = document.querySelector("#start-date");
const endDateInput = document.querySelector("#end-date");
const destinationInput = document.querySelector("#destination");

const modal = document.querySelector("#thank-you-modal");
const modalClose = document.querySelector("#modal-close");
const modalDone = document.querySelector("#modal-done");
const modalBackdrop = document.querySelector(".modal-backdrop");

let lastFocusedElement = null;


/* =========================
   ERROR MESSAGE HELPERS
   ========================= */

function setError(input, message) {

  const errorElement = document.querySelector(
    `#${input.id}-error`
  );

  input.setAttribute("aria-invalid", "true");

  errorElement.textContent = message;
}


function clearError(input) {

  const errorElement = document.querySelector(
    `#${input.id}-error`
  );

  input.setAttribute("aria-invalid", "false");

  errorElement.textContent = "";
}


/* =========================
   FIELD VALIDATION
   ========================= */

function validateFullName() {

  const value = fullNameInput.value.trim();

  if (value === "") {

    setError(
      fullNameInput,
      "Please enter your full name."
    );

    return false;
  }

  if (value.length < 2) {

    setError(
      fullNameInput,
      "Please enter at least 2 characters."
    );

    return false;
  }

  clearError(fullNameInput);

  return true;
}


function validateEmail() {

  const value = emailInput.value.trim();

  if (value === "") {

    setError(
      emailInput,
      "Please enter your email address."
    );

    return false;
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {

    setError(
      emailInput,
      "Please enter a valid email address."
    );

    return false;
  }

  clearError(emailInput);

  return true;
}


function validateStartDate() {

  const value = startDateInput.value;

  if (value === "") {

    setError(
      startDateInput,
      "Please select a start date."
    );

    return false;
  }

  clearError(startDateInput);

  return true;
}


function validateEndDate() {

  const value = endDateInput.value;

  if (value === "") {

    setError(
      endDateInput,
      "Please select an end date."
    );

    return false;
  }

  if (
    startDateInput.value !== "" &&
    value < startDateInput.value
  ) {

    setError(
      endDateInput,
      "End date must be on or after the start date."
    );

    return false;
  }

  clearError(endDateInput);

  return true;
}


function validateDestination() {

  if (destinationInput.value === "") {

    setError(
      destinationInput,
      "Please select a destination."
    );

    return false;
  }

  clearError(destinationInput);

  return true;
}


/* =========================
   COMPLETE FORM VALIDATION
   ========================= */

function validateForm() {

  const nameValid = validateFullName();
  const emailValid = validateEmail();
  const startValid = validateStartDate();
  const endValid = validateEndDate();
  const destinationValid = validateDestination();

  return (
    nameValid &&
    emailValid &&
    startValid &&
    endValid &&
    destinationValid
  );
}


/* =========================
   LIVE VALIDATION
   ========================= */

fullNameInput.addEventListener(
  "input",
  validateFullName
);


emailInput.addEventListener(
  "input",
  validateEmail
);


startDateInput.addEventListener(
  "input",
  () => {

    validateStartDate();

    if (endDateInput.value !== "") {
      validateEndDate();
    }

  }
);


endDateInput.addEventListener(
  "input",
  validateEndDate
);


destinationInput.addEventListener(
  "input",
  validateDestination
);


destinationInput.addEventListener(
  "change",
  validateDestination
);


/* =========================
   MODAL
   ========================= */

function openModal() {

  lastFocusedElement = document.activeElement;

  modal.hidden = false;

  document.body.classList.add("modal-open");

  modalClose.focus();
}


function closeModal() {

  modal.hidden = true;

  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}


/* =========================
   FORM SUBMISSION
   ========================= */

form.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {

      const firstInvalidField =
        form.querySelector(
          '[aria-invalid="true"]'
        );

      if (firstInvalidField) {
        firstInvalidField.focus();
      }

      return;
    }

    openModal();

    form.reset();

    [
      fullNameInput,
      emailInput,
      startDateInput,
      endDateInput,
      destinationInput
    ].forEach(clearError);

  }
);


/* =========================
   MODAL CONTROLS
   ========================= */

modalClose.addEventListener(
  "click",
  closeModal
);


modalDone.addEventListener(
  "click",
  closeModal
);


modalBackdrop.addEventListener(
  "click",
  closeModal
);


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      !modal.hidden
    ) {

      closeModal();
    }

  }
);
