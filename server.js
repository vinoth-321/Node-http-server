const http = require('http');



const Router = require('./router');

// Create HTTP server
const server = http.createServer(Router);


// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
