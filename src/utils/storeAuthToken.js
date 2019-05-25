import axios from 'axios';

// create a global header with axios and send the token with every request
const storeAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default storeAuthToken;
