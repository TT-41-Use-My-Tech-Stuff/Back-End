module.exports = {
    validateUser,
  };
  
  function validateUser(user) {
    return Boolean(user.username && user.password && user.email && typeof user.password === "string");
  }