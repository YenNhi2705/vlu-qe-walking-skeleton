const login = require("./auth");

test("Đăng nhập đúng với admin / 123 thì trả về true", () => {
  expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập sai mật khẩu thì trả về false", () => {
  expect(login("admin", "456")).toBe(false);
});

test("Đăng nhập sai username thì trả về false", () => {
  expect(login("user", "123")).toBe(false);
});
