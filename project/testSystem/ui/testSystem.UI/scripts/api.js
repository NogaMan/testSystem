import fetch from 'fetch-polyfill';
import {
    API_CONSTANTS       as ApiConstant,
    API_ACTIONS         as Action,
    API_ENTITIES        as Entity,
    API_ENTITY_ACTION   as Crud,
    ERROR_CONSTANTS     as Error
} from './constants';

export default class API {
    logOut() {
        _sendRequest(Action.LOGOUT)
            .then(_parseBody(result))
            .catch(_handleError(error));
    };

    logIn(login, password) {
        let data = {

        }
    }

    _handleError(error) {
        console.error(error);
        if (error === Error.UNAUTHORIZED) {
            location.reload();
        }
    }

    _parseBody(response) {
        const body = response.body;
        if (body.result == false) {
            throw new Error(body.error);
        }
        return body;
    }

    _sendRequest(url, method = "GET", data) {
        url = `{ApiConstant.URL}/{url}`;
        let options = {
            method: method,
            headers: {
                'Accept': 'application/json'
            }
        };
        if (typeof data !== "undefined") {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify(data);
        }
        return fetch(url, options);
    }
}