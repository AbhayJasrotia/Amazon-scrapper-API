# Amazon Scraper API

This is a simple Amazon scraper API built using Node.js and Express. It allows users to scrape product details, reviews, offers, and search results from Amazon by utilizing an external scraping service such as ScraperAPI.

## Features

- **Product Details**: Retrieve detailed information about a specific product on Amazon using its product ID.
- **Product Reviews**: Fetch reviews for a specific product on Amazon.
- **Product Offers**: Get a list of available offers for a product.
- **Search Results**: Perform a search on Amazon and retrieve product listings based on a search query.

## Prerequisites

Before running the project, ensure you have the following:

- Node.js installed (v12.x or later).
- An account with ScraperAPI (or any similar scraping service) to get an API key.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amazon-scraper-api.git
   cd amazon-scraper-api
Install the dependencies:

bash
Copy code
npm install
Create a .env file to store your ScraperAPI key:

bash
Copy code
touch .env
Inside the .env file, add your ScraperAPI key:

bash
Copy code
SCRAPER_API_KEY=your_scraperapi_key_here
Usage
Start the server:

bash
Copy code
npm run start
The server will run on http://localhost:5000.

Use the following endpoints to scrape data from Amazon:

Endpoints
1. Get Product Details
Retrieve the details of a product using its product ID.

URL: /products/:productId?api_key=<your_scraperapi_key>
Method: GET
Example:
bash
Copy code
http://localhost:5000/products/B08N5WRWNW?api_key=your_scraperapi_key
2. Get Product Reviews
Fetch reviews for a specific product.

URL: /products/:productId/reviews?api_key=<your_scraperapi_key>
Method: GET
Example:
bash
Copy code
http://localhost:5000/products/B08N5WRWNW/reviews?api_key=your_scraperapi_key
3. Get Product Offers
Get available offers for a product.

URL: /products/:productId/offers?api_key=<your_scraperapi_key>
Method: GET
Example:
bash
Copy code
http://localhost:5000/products/B08N5WRWNW/offers?api_key=your_scraperapi_key
4. Search Products
Search for products on Amazon using a query string.

URL: /search/:searchQuery?api_key=<your_scraperapi_key>
Method: GET
Example:
bash
Copy code
http://localhost:5000/search/laptop?api_key=your_scraperapi_key
Example Response for Product Details
json
Copy code
{
  "title": "Example Product",
  "price": "$599.99",
  "rating": "4.5 out of 5 stars",
  "url": "https://www.amazon.com/example-product/dp/B08N5WRWNW",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/example.jpg"
}
Error Handling
If the scraper fails to retrieve data, the API will return a 500 status code along with an error message in the response.

Example Error Response
json
Copy code
{
  "error": "Failed to fetch product data"
}
License
This project is licensed under the MIT License.

yaml
Copy code

---

This `README.md` provides clear documentation on how to use your Amazon scraper API, includin