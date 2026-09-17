function login(username, password) {
  return username === "admin" && password === "123";
}

// Dùng cho Jest trong môi trường Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = login;
}
