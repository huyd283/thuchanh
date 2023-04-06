function register() {
            var strHoTen = document.getElementById("txtHoTen").value.trim();
            var strEmail = document.getElementById("txtEmail").value.trim();
            var strNgay = document.getElementById("txtNgay").value;
            var strUsername = document.getElementById("txtUsername").value.trim();
            var strMatKhau = document.getElementById("txtMatKhau").value.trim();
            var strrepass = document.getElementById("txtrepass").value;
            var ErrMsg = document.getElementById("Error");
            if (strHoTen == ""|| strEmail == ""|| strNgay == ""|| strUsername == ""|| strMatKhau== ""|| strrepass== "") {

                ErrMsg.style.display = "block";
                ErrMsg.style.color = "red";
                ErrMsg.innerHTML = "Vui lòng nhập đầy đủ thông tin";
                return false;
            }
            else {
                ErrMsg.style.display = "none";
                datenow = new Date();
                var ngay = new Date(strNgay);
                if (ngay > datenow) {
                    alert("Ngày tháng năm sinh của bạn không thể lớn hơn ngày hiện tại");
                    document.getElementById("txtNgay").focus();
                    return false;
                
                }
                else {
                    var dateFm = (ngay.getDate() < 10) ? "0" + ngay.getDate() : ngay.getDate();
                    var monthFm = (ngay.getMonth() < 10) ? "0" + (ngay.getMonth() + 1) : ngay.getMonth() + 1;
                    var yearFm = (ngay.getFullYear() < 10) ? "000" + ngay.getFullYear() : (ngay.getFullYear() < 100) ? "00" + ngay.getFullYear() : (ngay.getFullYear());
                    strNgay = dateFm + "-" + monthFm + "-" + yearFm;
                    return true;
                }
                if(strMatKhau != strrepass){
                    alert("Mật Khẩu xác nhận sai");
                    document.getElementById("txtMatKhau").focus();
                    return false;
                
                }
                else {
                    return true;
                }
            }

            }

        
       