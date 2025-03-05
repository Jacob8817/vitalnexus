const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// This route handles the OAuth redirect.
// It extracts query parameters (e.g. code, state, error) and then immediately redirects
// to your mobile app's custom URI scheme.
app.get('/auth', (req, res) => {
  const { code, state, error } = req.query;

  if (error) {
    return res.send(`Error during authentication: ${error}`);
  }

  // Replace "myapp" with your actual custom scheme.
  const redirectTo = `myapp://auth?code=${encodeURIComponent(code)}${state ? `&state=${encodeURIComponent(state)}` : ''}`;
  console.log('Redirecting to:', redirectTo);
  
  res.redirect(redirectTo);
});

app.listen(port, () => {
  console.log(`OAuth redirect server listening on port ${port}`);
});
