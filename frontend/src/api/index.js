class Api {
    constructor (url, headers) {
      this._url = url
      this._headers = headers
    }
  
    checkResponse (res) {
      return new Promise((resolve, reject) => {
        if (res.status === 204) {
          return resolve(res)
        }
        const func = res.status < 400 ? resolve : reject
        res.json().then(data => func(data))
      })
    }
  
    signin ({ username, password }) {
      return fetch(
        this._url + '/api/auth/token/login',
        {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            username, password
          })
        }
      ).then(this.checkResponse)
    }
  
    signout () {
      const token = localStorage.getItem('token')
      return fetch(
        this._url + '/api/auth/token/logout/',
        {
          method: 'POST',
          headers: {
            ...this._headers,
            'authorization': `Token ${token}`
          }
        }
      ).then(this.checkResponse)
    }
  
    signup ({ username, password }) {
      return fetch(
        this._url + `/api/auth/users/`,
        {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            username, password
          })
        }
      ).then(this.checkResponse)
    }
  
    getUserData () {
      const token = localStorage.getItem('token')
      return fetch(
        this._url + `/api/auth/users/me/`,
        {
          method: 'GET',
          headers: {
            ...this._headers,
            'authorization': `Token ${token}`
          }
        }
      ).then(this.checkResponse)
    }
  
    // changePassword ({ current_password, new_password }) {
    //   const token = localStorage.getItem('token')
    //   return fetch(
    //     `/api/users/set_password/`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         ...this._headers,
    //         'authorization': `Token ${token}`
    //       },
    //       body: JSON.stringify({ current_password, new_password })
    //     }
    //   ).then(this.checkResponse)
    // }
  
  
    // getUser ({ id }) {
    //   const token = localStorage.getItem('token')
    //   return fetch(
    //     `/api/users/${id}/`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         ...this._headers,
    //         'authorization': `Token ${token}`
    //       }
    //     }
    //   ).then(this.checkResponse)
    // }
  
    // getUsers ({
    //   page = 1,
    //   limit = 6
    // }) {
    //   const token = localStorage.getItem('token')
    //   return fetch(
    //     `/api/users/?page=${page}&limit=${limit}`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         ...this._headers,
    //         'authorization': `Token ${token}`
    //       }
    //     }
    //   ).then(this.checkResponse)
    // }
  }
  
//   export default new Api(process.env.API_URL || 'http://localhost', { 'content-type': 'application/json' })
  export default new Api('http://localhost:8000', { 'content-type': 'application/json' })
  