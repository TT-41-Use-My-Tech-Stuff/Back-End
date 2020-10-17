const express = require("express");
const cors = require("cors")
const helmet = require("helmet")
const UserRentalsRouter = require('../user-rentals/userRentasRouter')
const authRouter = require('../auth/authRouter')


const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json());
server.use('/api', authRouter)
server.use('/api/rentals',  UserRentalsRouter)


server.get("/", (req, res) => {
    res.status(200).json({server: 'up and running!', port: `${process.env.PORT}`, environment: `${process.env.NODE_ENV}`})
  });

module.exports = server;