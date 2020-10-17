module.exports = {
    validateUser,
  };
  
  function validateUser(user) {
    return Boolean(user.username && user.password && typeof user.password === "string");
  }