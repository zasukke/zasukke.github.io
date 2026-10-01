function toggleSection(header) {
  const item = header.closest('.section-item');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.section-item').forEach((el) => {
    el.classList.remove('open');
  });

  if (!isOpen) {
    item.classList.add('open');
  }
}

function openOrder(serviceName) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  const messageField = document.querySelector('textarea[name="message"]');
  if (messageField) {
    messageField.value = `Услуга: ${serviceName}. `;
    messageField.focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.querySelector('.section-item');
  if (firstSection) {
    firstSection.classList.add('open');
  }
});