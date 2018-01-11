import * as axios from 'axios';
import { URL } from '../routes/routesDefinitions';

export const loginRequest = (email, password) => (axios
    .post(`${URL}/login`, {email, password}, { withCredentials: true })
    .then(res => res.data)
);
export const logoutRequest = () => (axios
    .get(`${URL}/logout`)
    .then(res => res.data)
);

export const profileRequest = (token) => {

   var config = {
      headers: {'x-access-token': token},
      withCredentials: true,
   };

   return (axios
      .get(`${URL}/profile` , config)
      .then(res => res.data)
   );

};
// http://codeheaven.io/how-to-use-axios-as-your-http-client/