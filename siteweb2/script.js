// =====================================================
// СЧЁТЧИК СИМВОЛОВ В TEXTAREA
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('.contact__field--textarea textarea');
  const counter = document.querySelector('.contact__counter');

  if (textarea && counter) {
    textarea.addEventListener('input', () => {
      counter.textContent = textarea.value.length + '/100';
    });
  }
});


// =====================================================
// КАРУСЕЛЬ ОТЗЫВОВ
// =====================================================
// =====================================================
// КАРУСЕЛЬ ОТЗЫВОВ
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('reviewsTrack');
  const cards = track ? track.querySelectorAll('.reviews__card') : [];
  const dots = document.querySelectorAll('.reviews__dot');
  const prevBtn = document.querySelector('.reviews__arrow--prev');
  const nextBtn = document.querySelector('.reviews__arrow--next');

  if (!track || cards.length === 0) return;

  let current = 0;
  const total = cards.length;
  const GAP = 18;

  function showSlide(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;

    // Ширина карточки
    const cardWidth = cards[0].offsetWidth;
    const viewportWidth = track.parentElement.offsetWidth;

    // Центрирование активной карточки
    const offset = (viewportWidth / 2) - (cardWidth / 2) - current * (cardWidth + GAP);

    track.style.transform = `translateX(${offset}px)`;

    // Активная карточка
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === current);
    });

    // Активная точка
    dots.forEach((dot, i) => {
      dot.classList.toggle('reviews__dot--active', i === current);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(current + 1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.slide, 10);
      showSlide(index);
    });
  });

  showSlide(0);
  window.addEventListener('resize', () => showSlide(current));
});




document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем стандартную отправку

  var form = this;
  var formData = new FormData(form);

  // Преобразуем FormData в объект
  var data = {};
  formData.forEach(function(value, key){
    data[key] = value;
  });

  // ВАШ URL ИЗ ШАГА 3
  var scriptURL = 'https://script.google.com/macros/s/AKfycbxLsrna6pMhPIUznfqEsKOelXjCusTqIEvN34OMy_mzyyPdy4S9AaQVCkmp7WdsSRZvdg/exec'; 

  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(data) // Отправляем как x-www-form-urlencoded
  })
  .then(response => {
    if (response.ok) {
      alert('Спасибо! Заявка отправлена.');
      form.reset(); // Очищаем форму
    } else {
      alert('Ошибка при отправке. Попробуйте еще раз.');
    }
  })
  .catch(error => {
    console.error('Ошибка!', error.message);
    alert('Ошибка сети. Проверьте соединение.');
  });
});