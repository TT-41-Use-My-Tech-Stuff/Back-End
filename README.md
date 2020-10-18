# BackEnd For Use-My-Tech Build

## Instructions

### Task 1: Check The Server

Follow these steps to use the endpoints:

- [ ] Go to https://tt-41-use-my-tech.herokuapp.com
- [ ] Check to see if the server is up and running.
- [ ] Use the following endpoints to register/login and to be able to make a GET/POST/PUT/DELETE request with the data for the frontend.
- [ ] Enjoy!

### Task 2: Using the End Points

-**BASE URL** : `https://tt-41-use-my-tech.herokuapp.com`

### Registering/Login Endpoints

- **[POST]** \* to `/api/register`: returns a sucess message with the username. Pass in the following credentials as the `body` of the request:
  `{ email:testing@user.com, username: 'usertesting', password: 'password' }`

- Success Response : { "message": "testing@user.com added" }

- **[POST]** \* to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request:
  `{ username: 'usertesting', password: 'password' }`

- Success Respone : { "id": 6, "message": "Welome usertesting","token": "**\***" }

### Task 2: Data Endpoints

### Registering/Login Endpoints

- **[GET]** to `/api/rentals`: returns the list of rentals and the information on each item.

Sample Response:

    {
        id: 1,
        user_id: 1,
        item_name: "Expensive Wide-Angle Camara",
        item_description: "An expensive camara that produces high quality photos.",
        category: "Electronical",
        rate: 20.50,
        img_url: "https://as.com/betech/imagenes/2018/02/27/portada/1519755076_817147_1519762876_noticia_normal.jpg"
    }

- **[POST]** to `/api/rentals/add`: creates a new rental object. Pass the rental item as the `body` of the request (the second argument passed to `axios.post`).
  `{ user_id, item_name, item_description, img_url, category, rate }`

- Success Response : { "message": "rental added successfully" }

- **[PUT]** to `/api/rentals/:id`: updates the rental item using the `id` passed as part of the URL. Send the rental item object with the updated information as the `body` of the request (the second argument passed to `axios.put`).

- Success Response : { "message": "rental successfully updated!" }

- **[DELETE]** to `/api/rentals/:id`: removes the rental item using the `id` passed as part of the URL .

- Sucess Response : { "message": "Rental with id of 4 deleted!" }
