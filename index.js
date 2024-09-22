const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

//const apiKey = '0e3662b45b6900e495779615468c43b6';
// const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to a Scraper API.");
});

// GET Product details
app.get('/products/:productId?api_key=', async (req, res) => {
    const { productId } = req.params;
    const { api_Key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_Key)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response)); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product data' });
    }
});

//GET Product Reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_Key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_Key)}&url=https://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response)); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product data' });
    }
});

//GET Product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_Key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_Key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response)); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product data' });
    }
});

//GET Search
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_Key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_Key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response)); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product data' });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
