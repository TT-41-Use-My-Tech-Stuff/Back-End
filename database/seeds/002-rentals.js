
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rent_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('rent_items').insert([
        {id: 1, user_id: 1, item_name: "Expensive Wide-Angle Camara", item_description: "An expensive camara that produces high quality photos.", category: "Electronical", rate: 20.50, img_url: "https://as.com/betech/imagenes/2018/02/27/portada/1519755076_817147_1519762876_noticia_normal.jpg"},
        {id: 2, user_id: 1, item_name: "Surfact Laptop", item_description: "An lightweight laptop made to use on the go for light work.", category: "Computronical", rate: 200.50, img_url: 'https://images-na.ssl-images-amazon.com/images/I/71sW0%2BvlWHL._AC_SX679_.jpg'},///renter_id -1 not rented
        {id: 3, user_id: 1, item_name: "Portable Battery", item_description: "It is powerful enough to charge your device up to 22 times!",  img_url: "https://images-na.ssl-images-amazon.com/images/I/51dZ0JGXJIL._AC_SX679_.jpg"}
      ]);
    });
};