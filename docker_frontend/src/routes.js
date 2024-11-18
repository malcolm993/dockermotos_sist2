// src/routes.js

const BASE_URL = "https://6b9e-190-51-34-131.ngrok-free.app";

export const API_ROUTES = {
    GET_ALL_MOTOS: `${BASE_URL}/motos/all`,
    CREATE_MOTO: `${BASE_URL}/motos/create`,
    FIND_MOTO: (patente) => `${BASE_URL}/motos/find/${patente}`,
    UPDATE_MOTO: (patente) => `${BASE_URL}/motos/update/${patente}`,
    DELETE_MOTO: (patente) => `${BASE_URL}/motos/delete/${patente}`,
};
