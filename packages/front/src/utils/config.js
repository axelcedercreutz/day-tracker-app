const PORT = 3003;
const BASE_URL = window.location.origin.match('localhost')
  ? `http://localhost:${PORT}`
  : `https://day-tracker-app.herokuapp.com`;

module.exports = {
  BASE_URL,
};
