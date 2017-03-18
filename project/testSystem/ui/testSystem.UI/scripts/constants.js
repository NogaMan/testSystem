const API_CONSTANTS = {
    URL: "http://localhost:50017/",
};

const API_ACTIONS = {
    LOGOUT: "Main/LogOut",
};

const API_ENTITIES = {
    TEST: "Tests",
    AUDIENCE: "Audience",
};

const API_ENTITY_ACTIONS = {
    READ_ALL: "Index",
    READ: "Details",
    CREATE: "Create",
    UPDATE: "Edit",
    DELETE: "Delete"
};

const ERROR_CONSTANTS = {
    UNAUTHORIZED : "unauthorized"
};

export { API_CONSTANTS, API_ACTIONS, API_ENTITIES, API_ENTITY_ACTIONS, ERROR_CONSTANTS };