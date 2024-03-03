/*-- MODAL --*/
const openModals = document.querySelectorAll(".openbtn");
const closeModals = document.querySelectorAll(".closebtn");

//Open modal text
openModals.forEach(openModal => {
    openModal.addEventListener("click", () => {
        openModal.nextElementSibling.showModal();
    });
});

//Button to close Modal
closeModals.forEach(closeModal => {
    closeModal.addEventListener("click", () => {
        closeModal.parentNode.close();
    });
});


//Also coded a "window" click for easier closing.
window.addEventListener("click", (e) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if(e.target === modal) {
            modal.close();
        }
    });
});