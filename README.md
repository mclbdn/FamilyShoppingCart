# FamilyShoppingCart

### <a href="https://mclbdn-family-shopping-cart.herokuapp.com/">Try running this app here.</a>

Node.js & Express dynamic website using MySQL(ClearDB) and custom CSS.

## Features
* Fully responsive UI
* Users are able to register / log in / log out (for this, I am using sessions)
* Users are able to add & delete items from a shopping list
* Hosted on Heroku
* Functioning 401 / 404 / 500 error routes

## Challenges I faced
* Deployment with ClearDB on Heroku was a bit of a hassle and I was receiving an error since MySQL server on ClearDB closed the connection. I solved this by using connection pooling.
* Responsive CSS. I tested my CSS before in Chrome & Safari with different screen sizes and it worked perfectly, but when I tested the responsivity on my iPhone, the final result was much different, so I had to make a few changes in CSS. 
* MVC. I wasn't used to build MVC apps since I was affraid of the amount of different files and directories. Anyway, now I can see that it makes things so much clearer and easier to understand since every file / directory has its own responsibility and when there's a problem with some part of the app, I know where to look for the problem.
* Deployment itself. The fact that something works smoothly on my machine doesn't mean it will work deployed online.

## Screenshots
<img src="https://raw.githubusercontent.com/mclbdn/FamilyShoppingCart/main/Screenshot%202022-02-08%20at%2019.18.15.png" width="1000" height="700">
<img src="https://raw.githubusercontent.com/mclbdn/FamilyShoppingCart/main/Screenshot%202022-02-08%20at%2019.18.35.png" width="1000" height="700">
<img src="https://raw.githubusercontent.com/mclbdn/FamilyShoppingCart/main/Screenshot%202022-02-08%20at%2019.18.45.png" width="1000" height="700">
<img src="https://raw.githubusercontent.com/mclbdn/FamilyShoppingCart/main/Screenshot%202022-02-08%20at%2019.18.55.png" width="1000" height="700">
<img src="https://raw.githubusercontent.com/mclbdn/FamilyShoppingCart/main/Screenshot%202022-02-08%20at%2019.19.19.png" width="1000" height="700">
