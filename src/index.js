import './style.css';

const displayGame = document.querySelector('.display');
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const userscore = document.querySelector('.userscore');
const refreshBtn = document.querySelector('.refresh');

const postData = async (gamerName, gamerScore) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygWEfybemzwhtBzH65xA/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: gamerName,
      score: gamerScore,
    }),
  })
    .then((res) => res.json());
  return response;
};

form.addEventListener('submit', (e) => {
  const usernameValue = username.value;
  const userscoreValue = userscore.value;
  e.preventDefault();
  postData(usernameValue, userscoreValue);
  form.reset();
});

const getData = async () => {
  const refreshData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygWEfybemzwhtBzH65xA/scores/');
  const refreshJsonData = await refreshData.json();
  return refreshJsonData;
};

refreshBtn.addEventListener('click', () => {
  getData().then((data) => {
    displayGame.innerHTML = '';
    data.result.forEach((data) => {
      const gameList = document.createElement('li');
      gameList.classList.add('flex', 'border');
      const gamerData = document.createElement('p');
      gamerData.innerHTML = `${data.user}: ${data.score}`;
      gameList.appendChild(gamerData);
      displayGame.appendChild(gameList);
    });
  });
});