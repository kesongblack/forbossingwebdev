class JSONReader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async read() {
    try {
      const response = await fetch(this.filePath);
      if (!response.ok) {
        throw new Error('Failed to fetch JSON file');
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error reading JSON file:', error);
      return null;
    }
  }
}

// Example usage
const jsonFilePath = 'docs/topics.json'; // Path to your JSON file
const reader = new JSONReader(jsonFilePath);
reader.read().then(data => {
  if (data) {
    console.log('JSON data:', data);
    // Perform actions with the JSON data here
  } else {
    console.log('No JSON data was retrieved.');
  }
});
