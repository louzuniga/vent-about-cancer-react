// exports.API_ORIGIN =
//   process.env.API_ORIGIN || 'https://vent-about-cancer-api.herokuapp.com';

// exports.API_ORIGIN = process.env.API_ORIGIN || 'http://localhost:5000';

module.exports = {
  API_ORIGIN:
    process.env.REACT_APP_API_BASE_URL ||
    'https://vent-about-cancer-api.herokuapp.com'
};
