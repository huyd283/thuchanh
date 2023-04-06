function congsl(){
    var sl = document.getElementById("txtslg").innerText;
    Number(sl);
    sl++;
    String(sl);
    document.getElementById("txtslg").innerHTML = sl;
}
function trusl(){
    var sl = document.getElementById("txtslg").innerText;
    Number(sl);
    sl--;
    if(sl==0)
    {
        alert("Số lượng không thể bằng 0");
    }
    if(sl>0)
    {
        String(sl);
       document.getElementById("txtslg").innerHTML = sl;
    }
    
}

function congsl2(){
    var sl = document.getElementById("txtslg2").innerText;
    Number(sl);
    sl++;
    String(sl);
    document.getElementById("txtslg2").innerHTML = sl;
}
function trusl2(){
    var sl = document.getElementById("txtslg2").innerText;
    Number(sl);
    sl--;
    if(sl==0)
    {
        alert("Số lượng không thể bằng 0");
    }
    if(sl>0)
    {
        String(sl);
       document.getElementById("txtslg2").innerHTML = sl;
    }
    
}

function chitiet(){
    document.getElementById("infor_sp1").style.display = "block";
    document.getElementById("btl").style.opacity ="0.05";
}
function chitiet1(){
    document.getElementById("infor_sp2").style.display = "block";
    document.getElementById("btl").style.opacity ="0.05";
}

function thoat(){
    document.getElementById("infor_sp1").style.display = "none";
    document.getElementById("btl").style.opacity ="1";
    document.getElementById("sizeg1").style.border = "1px solid black";
    document.getElementById("sizeg1").style.color = "black";
    document.getElementById("sizeg2").style.border = "1px solid black";
    document.getElementById("sizeg2").style.color = "black";
    document.getElementById("sizeg3").style.border = "1px solid black";
    document.getElementById("sizeg3").style.color = "black";
    document.getElementById("sizeg4").style.border = "1px solid black";
    document.getElementById("sizeg4").style.color = "black";
    document.getElementById("txtslg").innerHTML = "1";
}
function thoat2(){
    document.getElementById("infor_sp2").style.display = "none";
    document.getElementById("btl").style.opacity ="1";
    document.getElementById("sizeg1").style.border = "1px solid black";
    document.getElementById("sizeg1").style.color = "black";
    document.getElementById("sizeg2").style.border = "1px solid black";
    document.getElementById("sizeg2").style.color = "black";
    document.getElementById("sizeg3").style.border = "1px solid black";
    document.getElementById("sizeg3").style.color = "black";
    document.getElementById("sizeg4").style.border = "1px solid black";
    document.getElementById("sizeg4").style.color = "black";
    document.getElementById("txtslg2").innerHTML = "1";
}
function themcart(){
    document.getElementById("infor_sp1").style.display = "none";
    document.getElementById("btl").style.opacity ="1";
    var slcart = document.getElementById("slcart").innerText;
    Number(slcart);
    slcart++;
    String(slcart);
    document.getElementById("slcart").innerHTML = slcart;
    document.getElementById("sizeg1").style.border = "1px solid black";
    document.getElementById("sizeg1").style.color = "black";
    document.getElementById("sizeg2").style.border = "1px solid black";
    document.getElementById("sizeg2").style.color = "black";
    document.getElementById("sizeg3").style.border = "1px solid black";
    document.getElementById("sizeg3").style.color = "black";
    document.getElementById("sizeg4").style.border = "1px solid black";
    document.getElementById("sizeg4").style.color = "black";
    document.getElementById("txtslg").innerHTML = "1";
}
function themcart2(){
    document.getElementById("infor_sp2").style.display = "none";
    document.getElementById("btl").style.opacity ="1";
    var slcart = document.getElementById("slcart").innerText;
    Number(slcart);
    slcart++;
    String(slcart);
    document.getElementById("slcart").innerHTML = slcart;
    document.getElementById("sizeg1_2").style.border = "1px solid black";
    document.getElementById("sizeg1_2").style.color = "black";
    document.getElementById("sizeg2_2").style.border = "1px solid black";
    document.getElementById("sizeg2_2").style.color = "black";
    document.getElementById("sizeg3_2").style.border = "1px solid black";
    document.getElementById("sizeg3_2").style.color = "black";
    document.getElementById("sizeg4_2").style.border = "1px solid black";
    document.getElementById("sizeg4_2").style.color = "black";
    document.getElementById("txtslg2").innerHTML = "1";
}
function chonsize1(){
    document.getElementById("sizeg1").style.border = "1px solid red";
    document.getElementById("sizeg1").style.color = "red";
    document.getElementById("sizeg2").style.border = "1px solid black";
    document.getElementById("sizeg2").style.color = "black";
    document.getElementById("sizeg3").style.border = "1px solid black";
    document.getElementById("sizeg3").style.color = "black";
    document.getElementById("sizeg4").style.border = "1px solid black";
    document.getElementById("sizeg4").style.color = "black";
}
function chonsize2(){
    document.getElementById("sizeg2").style.border = "1px solid red";
    document.getElementById("sizeg2").style.color = "red";
    document.getElementById("sizeg1").style.border = "1px solid black";
    document.getElementById("sizeg1").style.color = "black";
    document.getElementById("sizeg3").style.border = "1px solid black";
    document.getElementById("sizeg3").style.color = "black";
    document.getElementById("sizeg4").style.border = "1px solid black";
    document.getElementById("sizeg4").style.color = "black";
}
function chonsize3(){
    document.getElementById("sizeg3").style.border = "1px solid red";
    document.getElementById("sizeg3").style.color = "red";
    document.getElementById("sizeg1").style.border = "1px solid black";
    document.getElementById("sizeg1").style.color = "black";
    document.getElementById("sizeg2").style.border = "1px solid black";
    document.getElementById("sizeg2").style.color = "black";
    document.getElementById("sizeg4").style.border = "1px solid black";
    document.getElementById("sizeg4").style.color = "black";
}
function chonsize4(){
    document.getElementById("sizeg4").style.border = "1px solid red";
    document.getElementById("sizeg4").style.color = "red";
    document.getElementById("sizeg1").style.border = "1px solid black";
    document.getElementById("sizeg1").style.color = "black";
    document.getElementById("sizeg2").style.border = "1px solid black";
    document.getElementById("sizeg2").style.color = "black";
    document.getElementById("sizeg3").style.border = "1px solid black";
    document.getElementById("sizeg3").style.color = "black";
}

function chonsize1_2(){
    document.getElementById("sizeg1_2").style.border = "1px solid red";
    document.getElementById("sizeg1_2").style.color = "red";
    document.getElementById("sizeg2_2").style.border = "1px solid black";
    document.getElementById("sizeg2_2").style.color = "black";
    document.getElementById("sizeg3_2").style.border = "1px solid black";
    document.getElementById("sizeg3_2").style.color = "black";
    document.getElementById("sizeg4_2").style.border = "1px solid black";
    document.getElementById("sizeg4_2").style.color = "black";
}
function chonsize2_2(){
    document.getElementById("sizeg2_2").style.border = "1px solid red";
    document.getElementById("sizeg2_2").style.color = "red";
    document.getElementById("sizeg1_2").style.border = "1px solid black";
    document.getElementById("sizeg1_2").style.color = "black";
    document.getElementById("sizeg3_2").style.border = "1px solid black";
    document.getElementById("sizeg3_2").style.color = "black";
    document.getElementById("sizeg4_2").style.border = "1px solid black";
    document.getElementById("sizeg4_2").style.color = "black";
}
function chonsize3_2(){
    document.getElementById("sizeg3_2").style.border = "1px solid red";
    document.getElementById("sizeg3_2").style.color = "red";
    document.getElementById("sizeg1_2").style.border = "1px solid black";
    document.getElementById("sizeg1_2").style.color = "black";
    document.getElementById("sizeg2_2").style.border = "1px solid black";
    document.getElementById("sizeg2_2").style.color = "black";
    document.getElementById("sizeg4_2").style.border = "1px solid black";
    document.getElementById("sizeg4_2").style.color = "black";
}
function chonsize4_2(){
    document.getElementById("sizeg4_2").style.border = "1px solid red";
    document.getElementById("sizeg4_2").style.color = "red";
    document.getElementById("sizeg1_2").style.border = "1px solid black";
    document.getElementById("sizeg1_2").style.color = "black";
    document.getElementById("sizeg2_2").style.border = "1px solid black";
    document.getElementById("sizeg2_2").style.color = "black";
    document.getElementById("sizeg3_2").style.border = "1px solid black";
    document.getElementById("sizeg3_2").style.color = "black";
}
