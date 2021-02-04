/**
 * Khối 1:
 * 1 hình chữ nhật có
 * Chiều dài: ví dụ 10 (đơn vị chiều dài)
 * Chiều rộng: ví dụ 7 (đơn vị chiều dài)
 * 
 * Khối 2:
 * B1: tạo các biến chieuDai, chieuRong, chuVi, dienTich
 * 
 * B2: công thức tính Chu vi
 * chuVi = (chieuDai + chieuRong) * 2;
 * dienTich = chieuDai * chieuRong
 * 
 * B3: in kết quả (console.log(chuVi), console.log(dienTich))
 * 
 * Khối 3:
 * Chu vi (đơn vị chu vi) 
 * Diện tích (đơn vị diện tích)
 */

btnTinh.addEventListener("click", function (e) {
    e.preventDefault();

    //B1 : tạo biến
    var chieuDai = parseFloat(document.getElementById("inputCD").value);
    var chieuRong = parseFloat(document.getElementById("inputCR").value);

    //B2 : tính Chu vi và Diện tích
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    //B3 : in kết quả
    document.getElementById("txtKetQua").innerHTML = "Chu vi hình chữ nhật: " + chuVi + "<br>" + "Diện tích hình chữ nhật " + dienTich;
})
