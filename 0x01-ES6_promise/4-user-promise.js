function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

signUpUser('Dennis', 'Muvaa')
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

export default signUpUser;
