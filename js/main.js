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




/* 
Khối 1: số có 2 chữ số 

Khối 2: 
_B1: tạo biến chứa số có 2 chữ số (n)
_B2: tạo biến chứa số hàng chục (chuc), số hàng đơn vị (donVi) 
_B3: lấy số hàng chục
Lấy phần nguyên tròn trong phép toán n/10 
chuc = Math.floor(n/10)
_B4: lấy số hàng đơn vị
Lấy phần dư trong phép toán n%10 
donVi = Math.floor(n%10)

Khối 3: in kết quả
_ Tổng của 2 ký số

*/

btnTinhSo.addEventListener("click", function (e) {
    e.preventDefault();

    //B1 : tạo biến
    var n = parseFloat(document.getElementById("inputSo").value);
    var donVi = 0;
    var chuc = 0;

    //B2: 
    // Lấy giá trị hàng chục
    chuc = Math.floor(n / 10);
    // Lấy giá trị hàng đơn vị
    donVi = Math.floor(n % 10);
    //Tính tổng 2 ký số
    var tong = chuc + donVi;

    //B3 : in kết quả
    var output = document.getElementById("txtTong");
    output.innerHTML = "Số có 2 chữ số: " + n + "<br>" + "Số hàng chục: " + chuc + "<br>" + "Số hàng đơn vị: " + donVi + "<br>" + "Tổng 2 ký số: " + tong;
})