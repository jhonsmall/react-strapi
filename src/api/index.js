import axios from 'axios';
const url = 'http://localhost:1337/api/facturas';
export const readFacturas = () => axios.get(url);
export const createFactura = (newReview) => axios.post(url, newReview);
