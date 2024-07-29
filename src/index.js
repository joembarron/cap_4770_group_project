// index.js

import { getAllBooksPageCounts } from './appi.js'; // Import the function from api.js

// Define the ISBN you want to query
const isbn = 'YOUR_ISBN_NUMBER_HERE'; // Replace with the actual ISBN

// Call the function and handle the response
(async () => {
  try {
    const result = await getAllBooksPageCounts(isbn);

    if (typeof result === 'string') {
      console.log('CSV Content:\n', result); // Log the CSV content to the console
    } else {
      console.error(result.error);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
