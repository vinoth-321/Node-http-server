
const url = require('url');
const { servePage } = require('./filesystem');

function Router(req, res) {
  const parsedUrl = url.parse(req.url, true); // Parse the incoming URL
  const pathname = parsedUrl.pathname; // Extract pathname like "/", "/about"
  
  console.log(`Request for: ${pathname}`);

  if (pathname === '/') {
    servePage('index.html', 'Home Page', res);
  } 
  else if (pathname === '/about') {
    servePage('about.html', 'About Page', res);
  } 
  else {
    // Handle 404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
}

// Helper function to read and serve HTML files


module.exports = Router;

