function readJSON(filePath) {
  return fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch JSON file');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error reading JSON file:', error);
      return null;
    });
}

function searchTitles(jsonData, keyword) {
  if (!Array.isArray(jsonData)) {
    console.error('Invalid JSON data');
    return [];
  }

  const matchedTitles = jsonData.filter(item =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return matchedTitles;
}

// Example usage
const jsonFilePath = 'docs/topics.json'; // Path to your JSON file
const keyword = 'another'; // Keyword to search for

readJSON(jsonFilePath)
  .then(jsonData => {
    if (jsonData) {
      const matchedTitles = searchTitles(jsonData, keyword);
      console.log(`Titles matching "${keyword}":`, matchedTitles);
    } else {
      console.log('No JSON data was retrieved.');
    }
  });
