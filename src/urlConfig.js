// const baseUrl = "https://whatever-rest-server.herokuapp.com";
// const baseUrl = "http://localhost:2000";
const baseUrl = "http://localhost:2000" || "https://flipkart-rest-server.herokuapp.com";

export const api = `${baseUrl}/api`;
// ok

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
