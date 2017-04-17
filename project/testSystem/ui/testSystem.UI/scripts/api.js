//import { fetch } from 'fetch-polyfill';
import {
  API_CONSTANTS as ApiConstant,
  API_ACTIONS as Action,
  API_ENTITIES as Entity,
  API_ENTITY_ACTIONS as Crud,
  ERROR_CONSTANTS as ApiError
} from './constants';

export default class API {
  logOut() {
    return new Promise((resolve) => {
      this._removeCredentials();
      resolve();
    });
  }

  getUserName() {
    return this.sendRequest(Action.GET_USER, undefined, false)
      .then(json => json.user);
  }

  logIn(login, password) {
    password = btoa(password);
    let data = {
      login,
      password
    };
    return this.sendRequest(Action.LOGIN, data, false)
      .then(json => {
        this._setCredentials(json.user, json.token);
        return json;
      });
  }

  getAllTests() {
    return this.sendRequest(`${Entity.TEST}/${Crud.READ_ALL}`)
      .then((json) => {
        return json.tests;
      })
      .catch((error) => this.handleError(error));
  }

  getTest(id) {
    return this.sendRequest(`${Entity.TEST}/${Crud.READ}/${id}`)
      .then((json) => {
        return json.test;
      });
  }

  createTest(test) {
    return this.sendRequest(`${Entity.TEST}/${Crud.CREATE}`, { test })
      .then((json) => {
        return json.test;
      });
  }

  deleteTest(id) {
    return this._sendRequest(`${Entity.TEST}/${Crud.DELETE}/${id}`)
      .then((json) => {
        return json.test;
      });
  }

  getExamTestByToken(token) {
    return this.sendRequest(`${Entity.EXAM}/getTest/${token}`)
      .then((json) => {
        return json.test;
      })
  }

  sendExamAnswers(test) {
    return this.sendRequest(`${Entity.EXAM}/PostAnswers`, { test });
  }

  getFullAudiencesInfo() {
    return this.sendRequest(`${Entity.AUDIENCE}/${Crud.READ_ALL}`)
      .then((json) => {
        return json.audiences;
      })
  }

  addAudience(name) {
    return this.sendRequest(`${Entity.AUDIENCE}/${Crud.CREATE}`, { name })
      .then((json) => json.id);
  }

  addTestTaker(testTaker) {
    return this.sendRequest(`${Entity.AUDIENCE}/AddTestTaker`, { testTaker })
      .then((json) => json.id);
  }

  deleteAudience(audienceId) {
    return this.sendRequest(`${Entity.AUDIENCE}/${Crud.DELETE}`, { id: audienceId });
  }


  deleteTestTaker(testTakerId) {
    return this.sendRequest(`${Entity.AUDIENCE}/DeleteTestTaker`, { id: testTakerId });
  }

  sendRequest(url, data, refresh = true) {
    return this._sendRequest(url, data)
      .then(response => this.isAuthorizedRequest(response, refresh))
      .then(response => this.getJson(response))
      .then(json => this.checkError(json));
  }

  isAuthorizedRequest(response, refresh) {
    if (response.status === 401) {
      refresh && location.reload();
      throw new Error(ApiError.UNAUTHORIZED);
    }
    return response;
  }

  getJson(response) {
    const json = response.json();
    return json;
  }

  checkError(json) {
    if (json.success === false) {
      throw new Error(json.error);
    }
    return json;
  }
  
  handleError(error) {
    //DO NOTHING
    throw error;
  }

  _getCredentials() {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (!user || !token) {
      this._removeCredentials();
      return null;
    }
    return { user, token };
  }

  _setCredentials(user, token) {
    if (!user || !token) {
      this._removeCredentials();
    } else {
      localStorage.setItem('user', user);
      localStorage.setItem('token', token);
    }
  }

  _removeCredentials() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  _sendRequest(url, data) {
    url = `${ApiConstant.URL}/${url}`;
    let options = {
      method: data ? "POST" : "GET",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const credentials = this._getCredentials();
    if (credentials) {
      options.headers['Authorization'] = btoa(`${credentials.user}:${credentials.token}`);
    }
    return fetch(url, options);
  }
}