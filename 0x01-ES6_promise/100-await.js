import { uploadPhoto, createUser } from './utils.js';

const asyncUploadUser = async () => {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      photo: userResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;
