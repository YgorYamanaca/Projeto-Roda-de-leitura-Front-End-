export const TOKEN_KEY = "@rodaDeLeitura-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

/** 
* @description Função para adicionar o token do localStorage
* @param {any} token Objeto token
*/
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

/** 
* @description Função para remover o token do localStorage
*/
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};