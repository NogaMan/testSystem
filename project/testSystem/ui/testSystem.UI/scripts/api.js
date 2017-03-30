//import { fetch } from 'fetch-polyfill';
import {
    API_CONSTANTS as ApiConstant,
    API_ACTIONS as Action,
    API_ENTITIES as Entity,
    API_ENTITY_ACTIONS as Crud,
    ERROR_CONSTANTS as ApiError
} from './constants';

//console.log(fetch);

export default class API {
    logOut() {
        return this._sendRequest(Action.LOGOUT)
            .then(() => this._removeAuthToken())
            .catch((error) => this.handleError(error));
    }

    getUserName() {
        return this._sendRequest(Action.GET_USER)
            .then((json) => json.user)
            .catch((error) => this.handleError(error));
    }

    logIn(login, password) {
        let data = {
            login,
            password
        };
        return this._sendRequest(Action.LOGIN, data)
            .then((json) => {
                this._setAuthToken(json.token);
                return json;
            })
            .catch((error) => this.handleError(error));
    }

    getAllTests() {
        return this._sendRequest(`${Entity.TEST}/${Crud.READ_ALL}`)
            .then((json) => {
                return json.tests;
            })
            .catch((error) => this.handleError(error));
    }

    getTest(id) {
        return this._sendRequest(`${Entity.TEST}/${Crud.READ}/${id}`)
            .then((body) => {
                return body.test;
            });
    }

    deleteTest(id) {
        return this._sendRequest(`${Entity.TEST}/${Crud.DELETE}/${id}`)
            .then((body) => {
                return body.test;
            });
    }

    handleError(error) {
        //DO NOTHING
        //throw error;
    }

    _getAuthToken() {
        return localStorage.getItem('token');
    }

    _setAuthToken(token) {
        if (!token) {
            this._removeAuthToken();
        } else {
            localStorage.setItem('token', token);
        }
    }

    _removeAuthToken() {
        localStorage.removeItem('token');
    }

    _parseBody(json) {
        if (json.success === false) {
            throw new Error(json.error);
        }
        return json;
    }

    _sendRequest(url, data) {
        url = `${ApiConstant.URL}/${url}`;
        let options = {
            method: data ? "POST" : "GET",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + this._getAuthToken()
            }
        };
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);


        return fetch(url, options)
            .then((response) => {
                if (response.status === 401) {
                    location.reload();
                    return;
                }
                return response.json()
            })
            .then((json) => this._parseBody(json));
    }
}