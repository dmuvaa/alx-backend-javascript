function handleResponseFromAPI(promise) {
  return promise
    .then((success) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.log('Error from API:', error);
      return new Error();
    });
}

export default handleResponseFromAPI;
