const API_CONSTANTS = {
    URL: "http://localhost:8082",
    SELF: "http://localhost:8084"
};

const API_ACTIONS = {
    LOGIN: "Main/LogIn",
    GET_USER: "Main/GetUserName"
};

const API_ENTITIES = {
    TEST: "Tests",
    AUDIENCE: "Audiences",
    EXAM: "Exam"
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
    UNAUTHORIZED: "unauthorized"
};

export { API_CONSTANTS, API_ACTIONS, API_ENTITIES, API_ENTITY_ACTIONS, ERROR_CONSTANTS };