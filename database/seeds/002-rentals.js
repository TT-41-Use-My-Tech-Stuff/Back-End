
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rent_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('rent_items').insert([
        {id: 1, user_id: 1, item_name: 'Camera', item_description:'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', category: 'open', rate: 65.34, img_url: 'http://dummyimage.com/1174x1891.jpg/cc0000/ffffff'},
        {id: 2, user_id: 1, item_name: 'HP Projector', item_description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', category: 'open', rate: 96.37, img_url: 'http://dummyimage.com/1177x1256.jpg/dddddd/000000'},
        {id: 3, user_id: 1, item_name: 'Desktop Computer', item_description:'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', category: 'open', rate: 64.08, img_url: 'http://dummyimage.com/1132x1482.jpg/5fa2dd/ffffff'},
        {id: 4, user_id: 1, item_name: 'Speaker', item_description:'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.', category: 'open', rate: 55.13, img_url: 'http://dummyimage.com/1166x1339.jpg/ff4444/ffffff'},
        {id: 5, user_id: 1, item_name: 'Plasma', item_description: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', category: 'open', rate: 64.03, img_url: 'http://dummyimage.com/1003x1887.jpg/ff4444/ffffff'},
        {id: 6, user_id: 1, item_name: 'Motorbike', item_description: 'Integer ac leo. Pellentesque ultrices mattis odio.', category: 'open', rate: 75.44, img_url: 'http://dummyimage.com/1021x1060.jpg/cc0000/ffffff'},
        {id: 7, user_id: 1, item_name: 'VR Camera', item_description:'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', category: 'open', rate: 53.46, img_url: 'http://dummyimage.com/1193x1193.jpg/5fa2dd/ffffff'},
        {id: 8, user_id: 1, item_name: 'Party Hall', item_description:'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', category: 'open', rate: 81.09, img_url: 'http://dummyimage.com/1023x1806.jpg/cc0000/ffffff'},
        {id: 9, user_id: 1, item_name: 'Portable Canopy', item_description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', category: 'open', rate: 64.6, img_url: 'http://dummyimage.com/1014x1223.jpg/cc0000/ffffff'},
        {id: 10, user_id: 1, item_name: 'Microphone', item_description: 'Vivamus in felis eu sapien cursus vestibulum.', category: 'open', rate: 87.53, img_url: 'http://dummyimage.com/1042x1375.jpg/dddddd/000000'},
        {id: 11, user_id: 1, item_name: "Expensive Wide-Angle Camara", item_description: "An expensive camara that produces high quality photos.", category: "Electronical", rate: 20.50, img_url: "https://as.com/betech/imagenes/2018/02/27/portada/1519755076_817147_1519762876_noticia_normal.jpg"},
        {id: 12, user_id: 1, item_name: "Surfact Laptop", item_description: "An lightweight laptop made to use on the go for light work.", category: "Computronical", rate: 200.50, img_url: 'https://images-na.ssl-images-amazon.com/images/I/71sW0%2BvlWHL._AC_SX679_.jpg'},
        {id: 13, user_id: 1, item_name: "Portable Battery", item_description: "It is powerful enough to charge your device up to 22 times!", category:'open', rate:50,  img_url: "https://images-na.ssl-images-amazon.com/images/I/51dZ0JGXJIL._AC_SX679_.jpg"}
      ]);
    });
};