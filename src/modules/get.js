const getScores = async () => {
  const scoreBoard = document.getElementById('scores');
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zmoYmosS8PZqLEaw8IHh%20/scores',
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        return;
      }
      scoreBoard.innerHTML = '';
      const scoreList = data.result;
      scoreList.forEach((element) => {
        const list = document.createElement('li');
        list.className = 'board_list';
        list.innerHTML = `<p>${element.user} : ${element.score}</p>`;
        scoreBoard.appendChild(list);
      });
    });
};

export default getScores;