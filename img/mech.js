const contactBtn = document.getElementById('contactBtn');
  const contactOverlay = document.getElementById('contactOverlay');
  const closeModal = document.getElementById('closeModal');

  contactBtn.addEventListener('click', () => {
    contactOverlay.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    contactOverlay.style.display = 'none';
  });

  contactOverlay.addEventListener('click', (e) => {
    if (e.target === contactOverlay) {
      contactOverlay.style.display = 'none';
    }
  });

