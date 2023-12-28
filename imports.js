// Dynamically load a JavaScript library
function loadScript(url) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.head.appendChild(script);
}

// List of libraries to load
loadScript('https://cdnjs.cloudflare.com/ajax/libs/library1/1.0.0/library1.min.js');
loadScript('https://cdnjs.cloudflare.com/ajax/libs/library2/2.0.0/library2.min.js');
// ... add more as needed

