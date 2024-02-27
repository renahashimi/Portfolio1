/*-- MODAL --*/
const modal = document.querySelector(".modal");
const openModals = document.querySelectorAll(".openbtn");
const closeModals = document.querySelectorAll(".closebtn");


openModals.forEach(openModal => {
    openModal.addEventListener("click", () => {
        openModal.nextElementSibling.showModal();
    });
});

closeModals.forEach(closeModal => {
    closeModal.addEventListener("click", () => {
        closeModal.parentNode.close();
    });
});
