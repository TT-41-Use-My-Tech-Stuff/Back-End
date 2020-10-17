exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email:"testing@user.com",
          username: "usertesting",
          password: "password"
        }
      ]);
    });
};
