exports.handler = async function(event, context) {
  try {
    if (event?.body) {
      const data = JSON.parse(event?.body);
      console.log(data);

      return {
        statusCode: 200,
        body: data,
      };
    } else {
      throw new Error('No data provided');
    }
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
}; 