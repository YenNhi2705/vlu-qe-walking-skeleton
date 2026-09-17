// Import hàm login từ file login.js
const login = require("./login");

// Test trường hợp đăng nhập đúng
test("Đăng nhập đúng username và password", () => {
    expect(login("admin", "123")).toBe(true);
});

// Test trường hợp sai username
test("Đăng nhập sai username", () => {
    expect(login("user", "123")).toBe(false);
});

// Test trường hợp sai password
test("Đăng nhập sai password", () => {
    expect(login("admin", "456")).toBe(false);
});
