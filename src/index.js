import 'lodash';
import './style.css';
import { postData, nameInput, scoreInput } from './modules/Post.js';
import getScores from './modules/get.js';

const form = document.querySelector('#score_form');
const refreshBtn = document.querySelector('#refresh-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  nameInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', () => {
  getScores();
});

window.onload = getScores();
