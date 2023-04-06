function contact() {
            var strHoTen = document.getElementById("txtHoTen").value.trim();
            var strEmail = document.getElementById("txtEmail").value.trim();
            var strSdt = document.getElementById("txtSdt").value.trim;
            var strDiaChi = document.getElementById("txtDiaChi").value.trim();
            var ErrMsg = document.getElementById("Error");
            if (strHoTen == ""|| strEmail == ""|| strSdt == ""|| strDiaChi == "") {

                ErrMsg.style.display = "block";
                ErrMsg.style.color = "red";
                ErrMsg.innerHTML = "Vui lòng nhập đầy đủ thông tin";
                return false;
            }
			 else {
                
                return true;
            }
         }
		 function hoantat(){
			 var strHoTen = document.getElementById("txtHoTen").value.trim();
            var strSdt = document.getElementById("txtSdt").value.trim;
            var strDiaChi = document.getElementById("txtDiaChi").value.trim();
            var ErrMsg = document.getElementById("Error");
            if (strHoTen == ""|| strSdt == ""|| strDiaChi == "") {

                ErrMsg.style.display = "block";
                ErrMsg.style.color = "red";
                ErrMsg.innerHTML = "Vui lòng nhập đầy đủ thông tin";
                return false;
            }
			 else {
                
                return true;
            }
		 }