import * as axios from 'axios';
import { URL } from 'api/constants';
import { format } from 'path';

export const loginRequest = (email, password) => (axios
    .post(`${URL}/login`, {email, password}, { withCredentials: true })
    .then(res => res.data));
    
