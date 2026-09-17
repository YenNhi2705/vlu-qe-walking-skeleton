// Hàm kiểm tra đăng nhập
function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Chỉ chạy phần giao diện khi có document (trình duyệt)
if (typeof document !== "undefined") {

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let result = login(username, password);

        if (result) {
            document.getElementById("result").innerText =
                "Đăng nhập thành công!";
        } else {
            document.getElementById("result").innerText =
                "Sai username hoặc password!";
        }
    });
}

// Cho phép Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
