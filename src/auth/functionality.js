import users from './users';

export function login(name, pass) {
  return users.find(user => (
    user.username === name && user.pass === pass));
}

export function logout() {
  // go to login screen
}
