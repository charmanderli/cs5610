# cs5610

Iteration 1
Idea: make a local guide yelp, where people can search posts, write posts, display post details, and delete when logged in

1. Finished: crud of post model in mongoose, post, postList and postDetail, Nav bar, some links and routes in react

2. Problem: links and routes, issue with heroku

3. Heroku link: updated soon

Assignment 2

1. Purpose: an online platform for the local grocery stores and farm to sell products, they can add products and descriptions, while customer could see them, the current crud version is only for the products page, the stores page would be updated.

2. Setup: install node.js, express and login to mongo db, run node seeds.js first to populate the database with some data, run node app.js and change the port to 3000, open browser to localhost:3000, to see the website.

3. routes: Currently only /products routes are developed, /products to see al products, /products/:id to see product details, /products/:id/new and /products/:id/edit to add or edit a product's information.

4. Validation and error: if input product id not identified, or general input route not identified, throw error and render a 404 page, if input a number not within 0 to 1000 for price or quantity, and product name shorter than 2 letters, throw error and return a json.

5. Heroku link: https://tranquil-earth-59619.herokuapp.com/products

Assignment 1 part 1

1. image with caption on page "about me"
2. NEU logo with link on page "experience", the husky photo
3. Nav text + logo the whole block center-aligned
4. Google fonts: space mono
