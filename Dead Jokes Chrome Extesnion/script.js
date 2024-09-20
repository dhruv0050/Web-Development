document.getElementById('fetch-btn').addEventListener('click', fetchJoke);

function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      const { setup, punchline } = data;
      document.getElementById('joke-setup').textContent = setup;
      document.getElementById('joke-punchline').textContent = punchline;
    })
    .catch(error => console.error('Error fetching joke:', error));
}
