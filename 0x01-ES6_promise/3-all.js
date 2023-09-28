import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {

  Promise.all([createUser(), uploadPhoto()])
    .then(results =>{
      const photo = results[1];
      console.log(`${photo.body}`)
      const user = results[0];
      console.log(`${user.firstName} ${user.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline', error);
    });
}

export default handleProfileSignup;