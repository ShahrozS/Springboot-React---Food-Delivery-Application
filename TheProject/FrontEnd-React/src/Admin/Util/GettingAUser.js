import { token } from "../../config";


export const getUserByUsername = (username) => {
  console.log(username)
  return fetch(`http://localhost:8090/user/users/${username}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch user.');
      }
    })
    .catch((error) => {
      throw error;
    });
};

export default getUserByUsername