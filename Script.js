// Get the modal
const modal = document.getElementById("messageModal");
const modalMessage = document.getElementById("modal-message");
const closeButton = document.querySelector(".close");

// Get all emojis and add click event
document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        modalMessage.textContent = message;
        modal.style.display = "block";
    });
});

// Close the modal when the user clicks on the close button
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
