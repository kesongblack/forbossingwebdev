// Assuming you're using Node.js to read the JSON file
const fs = require('fs');

// Read the JSON file
fs.readFile('/docs/topics.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Access the data
  jsonData.forEach((topic) => {
    console.log('Title: ' + topic.title)
    console.log('Category: ' + topic.category)
    console.log('Path: ' + topic.path)
  });
});
