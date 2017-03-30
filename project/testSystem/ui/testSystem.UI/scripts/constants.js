const API_CONSTANTS = {
    URL: "http://localhost:8082",
    SELF: "http://localhost:8084"
};

const API_ACTIONS = {
    LOGOUT: "Main/LogOut",
    LOGIN: "Main/LogIn",
    GET_USER: "Main/GetUserName"
};

const API_ENTITIES = {
    TEST: "Tests",
    AUDIENCE: "Audience"
};

const API_ENTITY_ACTIONS = {
    READ_ALL: "Index",
    READ: "Details",
    CREATE: "Create",
    UPDATE: "Edit",
    DELETE: "Delete"
};

const ERROR_CONSTANTS = {
    WRONG_LOGIN : "loginNotFound",
};

export { API_CONSTANTS, API_ACTIONS, API_ENTITIES, API_ENTITY_ACTIONS, ERROR_CONSTANTS };