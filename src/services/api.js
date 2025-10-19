// src/app/services/api.js
import axios from "axios";

// Configuração base para todas as requisições
const api = axios.create({
  baseURL: "http://localhost:8000/", // URL do seu Laravel local
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// Exemplos de funções específicas
export const getUsuarios = async () => {
  const response = await api.get("/usuarios");
  return response.data;
};

export const getUsuarioById = async (id) => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data;
};

export const getImagesData = async() => {
    const response = await api.get(`/drive/files`);
    return response.data;
}
