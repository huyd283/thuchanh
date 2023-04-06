function login() {
            var strUserName = document.getElementById("txtTenNguoiDung").value.trim();
            var strMatKhau = document.getElementById("txtMatKhau").value;
            var ErrMsg = document.getElementById("Error");
            if (strTenNguoiDung == ""|| strMatKhau == "") {

                ErrMsg.style.display = "block";
                ErrMsg.style.color = "red";
                ErrMsg.innerHTML = "Vui lòng nhập đầy đủ thông tin";
                return false;
                 }
            else {
                
                return true;
            }
         }
            


