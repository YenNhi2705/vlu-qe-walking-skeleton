// Hàm kiểm tra đăng nhập
function login(username, password) {
    // Nếu username là admin và password là 123 thì trả về true
    if (username === "admin" && password === "123") {
        return true;
    }

    // Nếu sai username hoặc password thì trả về false
    return false;
}

// Xử lý form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let result = login(username, password);

    if (result) {
        document.getElementById("result").innerText = "Đăng nhập thành công!";
    } else {
        document.getElementById("result").innerText = "Sai username hoặc password!";
    }
});

// Cho phép Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
