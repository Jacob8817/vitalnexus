// api/auth.js

module.exports = (req, res) => {
  const { code, state, error } = req.query;
  
  if (error) {
    res.status(400).send(`Error during authentication: ${error}`);
    return;
  }
  
  // Replace "myapp" with your actual custom URI scheme
const redirectTo = `exp://192.168.1.106:8081/--/(tabs)/home?code=${encodeURIComponent(code)}`;


  console.log('Redirecting to:', redirectTo);
  
  // Issue a 302 redirect
  res.writeHead(302, { Location: redirectTo });
  res.end();
};
