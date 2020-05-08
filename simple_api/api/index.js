let router = require("express").Router();
let mocks = require("./mock");
// let mocksCart = require("./cart-mock");

let cart = [];

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

router.get("/restaurants", function(req, res, next) {
  reply(res, mocks.restaurants);
});

/**
 * Get all products
 */
router.get("/products/all", function(req, res, next) {
  reply(res, mocks.products);
});

/**
 * Get cart
 */

// get
router.get("/cart/load", function(req, res, next) {
  // console.log('cart/load', req.query.token)
  let response = {
    cart: [],
    needUpdate: false,
    token: ''
  };

  if(!req.query.token){
      response.cart = [];
      response.needUpdate = true;
      response.token = "sdfsklfjalksjdf234";
  } else {
    response.cart = [];
    response.needUpdate = false;
    response.token = req.query.token;
  }
  
  reply(res, response);
});

// post
router.get("/cart/add", function(req, res, next) {
  let id = req.query.id;
  let token = req.query.token;
  if(token && id){
    cart.push({id: id, cnt: 1})
    res.send(true);
  }
  
});

// puth
router.get("/cart/change", function(req, res, next) {
  //res.send('change to cart')
  let id = req.query.id;
  let token = req.query.token;
  let cnt = req.query.cnt;
  reply(res, true);
});

// delete
router.get("/cart/remove", function(req, res, next) {
  let id = req.query.id;
  let token = req.query.token;
  if(token && id){
    // res.send(true);
    reply(res, true);
  }
});

// clean
router.get("cart/clean", function(req, res, next) {
  let token = req.query.token;
  if(token){
    // res.send(true);
    reply(res, true);
  }
})


router.get("/dishes", function(req, res, next) {
  var id = req.query.id;
  var result = mocks.dishes;
  if (id) {
    var restaurant = mocks.restaurants.find(function(r) {
      return r.id === id;
    });
    if (restaurant) {
      result = restaurant.menu.map(function(dishId) {
        return mocks.dishes.find(function(dish) {
          return dish.id === dishId;
        });
      });
    }
  }
  reply(res, result);
});

router.get("/reviews", function(req, res, next) {
  var id = req.query.id;
  var result = mocks.reviews;
  if (id) {
    var restaurant = mocks.restaurants.find(function(r) {
      return r.id === id;
    });
    if (restaurant) {
      result = restaurant.reviews.map(function(reviewId) {
        return mocks.reviews.find(function(review) {
          return review.id === reviewId;
        });
      });
    }
  }
  reply(res, result);
});

router.get("/users", function(req, res, next) {
  reply(res, mocks.users);
});

module.exports = router;