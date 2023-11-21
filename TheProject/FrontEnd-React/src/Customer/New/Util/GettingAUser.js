
const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
export const getUserByUsername = () => {
  console.log(username)
  return fetch(`http://localhost:8090/user/users/${username}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => {
      if (response.ok) {
        console.log("Getting user by username : " + username);
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