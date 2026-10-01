// =====================================================
// РАСКРЫТИЕ РАЗДЕЛОВ
// =====================================================
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

// =====================================================
// ОТКРЫТЬ ФОРМУ ЗАКАЗА
// =====================================================
function openOrder(serviceName) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  const messageField = document.querySelector('textarea[name="message"]');
  if (messageField) {
    messageField.value = `Услуга: ${serviceName}. `;
    messageField.focus();

    const counter = document.querySelector('.contact__counter');
    if (counter) {
      counter.textContent = messageField.value.length + '/100';
    }
  }
}

// =====================================================
// ПЕРВЫЙ РАЗДЕЛ — ОТКРЫТ
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.querySelector('.section-item');
  if (firstSection) {
    firstSection.classList.add('open');
  }
});