const PORT = 3003;
const BASE_URL = window.location.origin.match('localhost')
  ? `http://localhost:${PORT}`
  : `${window.location.origin}`;

module.exports = {
  BASE_URL,
};
