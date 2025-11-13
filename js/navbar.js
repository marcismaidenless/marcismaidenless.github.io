window.addEventListener('DOMContentLoaded', () => {
  fetch('/html/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault();
          const href = item.getAttribute('href');
          window.location.href = href;
        });
      });
    })
    .catch(error => console.error('Error loading navbar:', error));
});
