fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'IptyGame',
  }),
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
})
  .then((response) => response.json());