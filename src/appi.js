import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDxhGmCk8vUX-Zc4jBT8gB1yuhdM4K7hog';

export const getAllBooksPageCounts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.data.items && response.data.items.length > 0) {
      const pageCounts = response.data.items.map((item) => {
        const pageCount = item.volumeInfo.pageCount || 'Not available';
        return {
          title: item.volumeInfo.title || 'No title',
          pageCount: pageCount,
        };
      });

      // Create CSV content
      const csvContent = 'Title,Page Count\n' + pageCounts.map(item => `${item.title},${item.pageCount}`).join('\n');
      
      // Create a blob from the CSV content
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      
      // Create a link element to download the blob
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'books.csv';

      // Append the link to the body and trigger a click
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);

      return csvContent;
    } else {
      return { error: 'No books found.' };
    }
  } catch (error) {
    return { error: `An error occurred: ${error.message}` };
  }
};
