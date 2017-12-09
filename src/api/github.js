import request from './request.js'
const getUser = user => request(`https://api.github.com/users/${user}`)
export { getUser };