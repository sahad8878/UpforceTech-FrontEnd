import axios from 'axios'


const baseUrl = 'https://upfrocetech-backend.onrender.com';
// const baseUrl = 'http://localhost:8080'

const instance = axios.create({
   baseURL: baseUrl,
 });
 
 
 export default instance;