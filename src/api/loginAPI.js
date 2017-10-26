import * as axios from 'axios';
import { URL } from 'api/constants';

export const loginByEmail = email => (axios
    .post(`${URL}/login/email?email=${email}`, {}, { withCredentials: true })
    .then(res => res.data)
);