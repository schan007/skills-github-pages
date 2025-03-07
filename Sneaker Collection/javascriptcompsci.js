document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll('.button-delete');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        card.remove(); // Removes the card visually
      });
    });
  
    // Highlight input fields when focused
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.borderColor = '#2563eb';
      });
      input.addEventListener('blur', () => {
        input.style.borderColor = '#d1d5db';
      });
    });
  
    // Modal behavior for adding new sneakers
    const openDialog = document.querySelector('.dialog-open');
    const closeDialog = document.querySelector('.dialog-close');
    const overlay = document.querySelector('.overlay');
    const dialog = document.querySelector('.dialog');
  
    if (openDialog && closeDialog && overlay && dialog) {
      openDialog.addEventListener('click', () => {
        overlay.style.display = 'block';
        dialog.style.display = 'block';
      });
  
      closeDialog.addEventListener('click', () => {
        overlay.style.display = 'none';
        dialog.style.display = 'none';
      });
  
      overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        dialog.style.display = 'none';
      });
    }
  });
  