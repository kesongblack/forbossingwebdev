// Grabbing code from chatGPT... Essentially, this code will load the JSON file full of 
// topic lists and shows all topics that includes the keywords

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
  if (!jsonData || !jsonData.titles || !Array.isArray(jsonData.titles)) {
    console.error('Invalid JSON data');
    return [];
  }

  const matchedTitles = jsonData.titles.filter(title =>
    title.toLowerCase().includes(keyword.toLowerCase())
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
