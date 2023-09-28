function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((success) => {
        console.log('Got a response from the API');
        resolve({ status: 200, body: success });
      })
      .catch((error) => {
        console.log('Error from API:', error);
        reject(new Error());
      });
  });
}

export default handleResponseFromAPI;
