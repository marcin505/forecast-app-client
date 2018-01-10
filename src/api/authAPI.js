import * as axios from 'axios';
import { URL } from 'api/constants';
import { format } from 'path';

export const loginRequest = (email, password) => (axios
    .post(`${URL}/login`, {email, password}, { withCredentials: true })
    .then(res => res.data)
);
export const logoutRequest = () => (axios
    .get(`${URL}/logout`)
    .then(res => res.data)
);    
