"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const showModalButtons = document.querySelectorAll(".show-modal");
  const modals = document.querySelectorAll(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModalButtons = document.querySelectorAll(".close-modal");

  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeModal() {
    for (const modal of modals) {
      modal.classList.add("hidden");
    }
    overlay.classList.add("hidden");
  }

  for (const button of showModalButtons) {
    button.addEventListener("click", function () {
      const modalId = button.dataset.modal;
      showModal(modalId);
    });
  }

  for (const button of closeModalButtons) {
    button.addEventListener("click", closeModal);
  }

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
