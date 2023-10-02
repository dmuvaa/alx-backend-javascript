import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  // Using .map() method, ensure you return a value at each iteration
  return results.map((result) => {
    // Check for 'fulfilled' status and return the appropriate value
    if (result.status === 'fulfilled') {
      return { status: 'fulfilled', value: result.value };
    }
    // Check for 'rejected' status and return the appropriate value
    if (result.status === 'rejected') {
      // Adjust error message format to align with your test's expectation
      return { status: 'rejected', value: `Error: ${result.reason.message}` };
    }
    return undefined;
  });
}
