import './style.css';




const form = document.querySelector('.score_form');
const refreshBtn = document.querySelector('.refresh-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  nameInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', () => {
  renderScore();
  window.location.reload();
});

window.onload = renderScore();