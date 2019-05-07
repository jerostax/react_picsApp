import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3678a4c4dfd11bd29d20c2d0aa2db5210bd140c2a8e7f7a6149c427266750539'
  }  
});
