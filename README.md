# BackEnd For Use-My-Tech Build

## Instructions

### Task 1: Check The Server

Follow these steps to use the endpoints:

- [ ] Go to https://tt-41-use-my-tech.herokuapp.com.
- [ ] Check to see if the server is up and running.
- [ ] Use the following endpoints to register/login and to be able to make a GET/POST/PUT/DELETE request with the data for the frontend.
- [ ] Enjoy!

### Task 2: Using the End Points

### Registering/Login Endpoints

- **[POST]** \* to `/api/register`: returns a sucess message with the username. Pass in the following credentials as the `body` of the request: `{ email:testing@user.com, username: 'usertesting', password: 'password' }`

- **[POST]** \* to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'usertesting', password: 'password' }`
