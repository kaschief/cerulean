import axios from 'axios';

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : 'http://localhost:4000/api',
  withCredentials: true
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getColors() {
    return service
      .get('/colors/')
      .then(res => res.data)
      .catch(errHandler);
  },

  getSingleColor(id) {
    return service
      .get('/colors/:id', id)
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteSingleColor(id) {
    console.log('here is the ID i will send--->', id);
    return service
      .delete('/colors/' + id)
      .then(res => res.data)
      .catch(errHandler);
  },

  addColor(data) {
    return service
      .post('/colors/', data)
      .then(res => res.data)
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler);
  },

  signup(userInfo) {
    return service
      .post('/auth/signup', userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post('auth/login', {
        username,
        password
      })
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data));
        return res.data;
      })
      .catch(errHandler);
  },

  logout() {
    localStorage.removeItem('user');
    return service.get('/auth/logout').then(res => {});
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
      return user;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  // addPicture(file) {
  //   const formData = new FormData();
  //   formData.append('picture', file);
  //   return service
  //     .post('/users/first-user/pictures', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })
  //     .then(res => res.data)
  //     .catch(errHandler);
  // }
};
