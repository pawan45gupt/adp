const yelp = require('yelp-fusion');
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'qdTKqUUE6a-e6i8XPILhAd0uRWk4HZph3jSyra7OYv2ZaW11Uh4Ziur6Pb3rIvmlFGNnwH-a3N4DJ7kvRm9o1Gy6XattuPMLRk4IqqR-c24Lxmywgc4Ys2ZHbql_XXYx';

const searchRequest = {
  term:'Top five ice cream shops',
  location: 'Alpharetta, GA'
};

const client = yelp.client(apiKey);

export function fetchShopsData() {
  return client.search(searchRequest)
    .then(response => response.jsonBody.businesses)
    .catch(e => {
      console.log(e);
    })
}

export function fetchReviews(businessId) {
 return client.reviews(businessId)
   .then((response) => response.jsonBody.reviews)
   .catch(e => {
      console.log(e);
   });
}