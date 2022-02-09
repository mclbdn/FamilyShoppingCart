# FamilyShoppingCart

### <a href="https://mclbdn-family-shopping-cart.herokuapp.com/">Try running this app here.</a>

Node.js & Express app using MySQL(ClearDB) and custom CSS.

## Features
* Fully responsive UI
* Users are able to register / log in / log out (for this, I am using sessions)
* Users are able to add & delete items from a shopping list
* Hosted on Heroku

## Challenges I faced
* Deployment with ClearDB on Heroku was a bit of a hassle and I was receiving an error since MySQL server on ClearDB closed the connection. I solved this by using connection pooling.
* Responsive CSS. I tested my CSS before in Chrome & Safari with different screen sizes and it worked perfectly, but when I tested the responsivity on my iPhone, the final result was much different, so I had to make a few changes in CSS. 
* MVC. I wasn't used to build MVC apps since I was affraid of the amount of different files and directories. Anyway, now I can see that it makes things so much clearer and easier to understand since every file / directory has its own responsibility and when there's a problem with some part of the app, I know where to look for the problem.
