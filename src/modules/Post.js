export const nameInput = document.querySelector('.name-field');
export const scoreInput = document.querySelector('.score-field');

export const postData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zmoYmosS8PZqLEaw8IHh%20/scores',
    {
      method: 'POST',
      body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    },
  );
};