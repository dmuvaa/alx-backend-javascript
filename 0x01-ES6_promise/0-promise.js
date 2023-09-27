const getResponseFromAPI = () => new Promise((resolve, _) => {
  setTimeout(() => {
    const apiResponse = 'Success!';
    resolve(apiResponse);
  }, 1000);
});

export default getResponseFromAPI;
