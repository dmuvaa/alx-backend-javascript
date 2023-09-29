import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  return new Promise.allSettled([signUpPromise])
  .then((results) => {
    return results.map((result) => {
      return {
        status: result.status,
        view: result.status === 'fulfilled' ? result.value : result.reason, 
      };
    });
  });
}