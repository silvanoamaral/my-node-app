exports.handler = async function(event, context) {
  try {
    // Aqui você pode chamar seu servidor Express, se necessário, usando fetch ou outro método
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.text();
    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
}; 