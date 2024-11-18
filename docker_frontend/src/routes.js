// src/routes.js

const BASE_URL = "https://5c66-190-51-31-185.ngrok-free.app";
//const BASE_URL = "http://localhost:4000";
export const API_ROUTES = {
    GET_ALL_MOTOS: `${BASE_URL}/motos/all`,
    CREATE_MOTO: `${BASE_URL}/motos/create`,
    FIND_MOTO: (patente) => `${BASE_URL}/motos/find/${patente}`,
    UPDATE_MOTO: (patente) => `${BASE_URL}/motos/update/${patente}`,
    DELETE_MOTO: (patente) => `${BASE_URL}/motos/delete/${patente}`,
};
