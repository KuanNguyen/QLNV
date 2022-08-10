// /**
//  * Chứa các hàm xử lý tương tác UI
//  */

// //Global variable
// //mảng SV và các chức năng của DanhSachSinhVien sẽ dùng cho toàn ứng dụng
// // => dssv thể hiện của DanhSachSinhVien là biến toàn cục
// var dsnv = new DanhSachNhanVien();
// var validation = new Validation();

// //Hàm rút gọn cú pháp getElementById("tenID")
// function getELE(id) {
//     return document.getElementById(id);
// }


// function setLocalStorage() {
//     //localStorage : đối tượng có sẵn của JS giúp thao tác về local storage của browsers
//     //JSON: đối tượng có có sẵn của JS giúp chuỗi JSON
//     //dữ liệu lưu trữ ở localStorage là kiểu JSON
//     //chuyển từ Array => JSON

//     //Khi mangSV thay đổi => gọi hàm setLocalStorage để cập nhật cho local
//     localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
// }

// function getLocalStorage() {

//     // getItem => trả về dữ liệu JSON
//     // JSON => Array
//     //localStorage chỉ lưu ở trình duyệt đang chạy ứng dụng
//     //! => nếu không kiểm tra (nếu không có local storage) => mangSV sẽ bị gán giá trị undefined => mangSV bị đổi kiểu dữ liệu sang undefined => không dùng được các chức năng của Array
//     if (localStorage.getItem("DSNV") != undefined) {
//         dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
//     }

//     hienThiDS(dsnv.mangNV);

// }

// getLocalStorage();

// function clearContent() {
//     var formTxt = document.querySelectorAll("#myModal .form-control");
//     var select = document.getElementById('chucvu').selectedIndex;
//     for (var i = 0; i < formTxt.length; i++) {
//       // Fix chọn chức vụ không hiển thị "Chọn chức vụ"
//       if(i == 7 && select != 0) {
//         document.getElementById('chucvu').selectedIndex = 0;
//       }
//       formTxt[i].value = "";
//     }
//     getELE("tknv").disabled = false;
//   }
//   document.querySelector("#btnThem").onclick = clearContent;

// //Thêm Nhân Viên
// function themNhanVien() {
//     var taiKhoan = getELE("tknv").value;
//     var tenNV = getELE("name").value;
//     var email = getELE("email").value;
//     var password = getELE("password").value;
//     var ngayLam = getELE("datepicker").value;
//     var luongCB = getELE("luongCB").value;
//     var chucVu = getELE("ChucVu").value;
//     var gioLam = getELE("gioLam").value;


//     console.log(tknv, tenNV, email, password, ngayLam, luongCB, chucVu, gioLam);

//     var isValid = true;
//     //?Các bước kiểm tra dữ liệu
//     /**
//      * Issue: tên sv có value, mã sv không có value => vẫn cho thêm sinh viên
//      * Expected: chỉ được thêm sv khi tất cả các dữ liệu đều hợp lệ. 
//      * Nếu có 1 dữ liệu không hợp lệ => thông báo + không được thêm sv
//      * 
//      * Root Cause: do dấu = (gán) => chỉ giữ lại kt kết quả cuối cùng, các kết quả trước bị ghi đè mất
//      * 
//      * Solution: 
//      *? C1: &&: so sánh true/ false => checkMa && checkTen =>  false && true => false
//      * => khó đọc khi chỉnh sửa
//      *? C2: tách các bước kiểm tra => dễ đọc code
//      *  &: tính toán binary (010101) , true 1, false 0
//      * => checkMa & checkTen => 0 & 1 => 0
//      * isValid(cuối cùng) =  isValid & checkEmpty
//      * => isValid(cuối cùng)  &= checkEmpty
//      */
//     //Mã SV (kiểm tra rỗng, không được trùng)
//     isValid &= validation.checkEmpty(taiKhoan, "tbTKNV", "Tài Khoản Nhân Viên không được để trống") && validation.checkTk(taiKhoan, "tbTKNV", "tài khoản nhân viên không được trùng", dsnv.mangNV);

//     //Tên SV (kiểm tra rỗng, kiểm tra ký tự chữ)
//     isValid &= validation.checkEmpty(tenNV,"tbTen", "Tên Nhân Viên không được để trống" ) && validation.checkName(tenNV,"tbTen", "Tên Nhân Viên chỉ được chứa ký tự chữ") ; 

//     //Email SV (kiểm tra rỗng, kiểm tra format email)
//     isValid &= validation.checkEmpty(email,"tbEmail", "Email nhân viên không được để trống" ) && validation.checkEmail(email,"tbEmail", "Email nhân viên chưa đúng định dạng") ; 

//     //Pass SV (kiểm tra rỗng, kiểm tra format password)
//     isValid &= validation.checkEmpty(password,"tbMatKhau", "Mật khẩu Nhân Viên không được để trống" ) && validation.checkPass(password,"tbMatKhau", "Mật khẩu cần ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, độ dài từ 6-8 ký tự") ; 

//     //Toán (kiểm tra rỗng, kiểm tra format điểm - số, 0<= điểm <=10)
//     isValid &= validation.checkEmpty(ngayLam,"tbNgay", "Ngày làm không được để trống" )  

//     //Khóa học (người dùng có chọn các lựa chọn khác cái đầu tiên không)
//     isValid &= validation.checkDropDown("chucVu","tbChucVu", "Chức vụ chưa được chọn" );


//     isValid &= validation.checkEmpty(gioLam,"tbGiolam", " Giờ làm không được để trống" )  && validation.checkGioLam(gioLam,"tbGiolam", "Giờ làm nhân viên chưa đúng định dạng"); 


//     // isValid == true
//     if (isValid) {
//         //tất cả dữ liệu hợp lệ

//         //tạo thể hiện của SinhVien
//         var nv = new NhanVien(taiKhoan, tenNV, email, password, ngayLam,Number(luongCB), chucVu, Number(gioLam));
//         nv.tinhTongLuong();


//         //thêm sv vào mangSV
//         dsnv.themNV(nv);


//         //Gọi hàm hiển thị
//         hienThiDS(dsnv.mangNV);

//         setLocalStorage();

//         //Sau khi thêm thì reset form
//         resetForm();
//     }



// }

// /**
//  * Input: mangSV
//  * 
//  * B1:  Duyệt mảng để lấy ra từng đối tượng sv
//  * B2: tạo hàng tr cho từng sv
//  * B3: tạo từng td, đưa các thuộc tính của sv đặt vào td
//  * B4: đem tất cả các thẻ tr hiển thị lên UI
//  * 
//  * Output: các thẻ tr để hiển thị lên html
//  * + 1 thẻ tr là 1 sv
//  * + từng td là từng thuộc tính của sv
//  */
// //Hiển thị danh sách sv
// function hienThiDS(mangNV) {



//     var content = "";// giá trị ban đầu
//     mangNV.map(function (nv, index) {

//         content += `
//             <tr>
//                 <td>${nv.taiKhoan}</td>
//                 <td>${nv.tenNV}</td>
//                 <td>${nv.email}</td>
//                 <td>${nv.ngayLam}</td>
//                 <td>${nv.chucVu}</td>
//                 <td>${nv.tongLuong}</td>
//                 <td>${nv.xepLoai}</td>

//                 <td>
//                     <button class="btn btn-info" onclick="xemChiTiet('${nv.taiKhoan}')" >Xem</button>
//                     <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')"  >Xóa</button>
//                 </td>
//             </tr>
//         `;

//         // console.log(trELE);
//         // content (sv1+sv2) = content(sv1) + "<tr>sv2</tr>"
//         // content += trELE;
//     });

//     // console.log(content);
//     getELE("tableDanhSach").innerHTML = content;

// }

// /**
//  * Xóa sv => xóa phần tử khỏi mảng
//  * => tìm được vị trí (index) của phần tử cần xóa
//  * => Dựa vào maSV (trường dữ liệu bắt buộc và duy nhất) => để tìm kiếm sv 
//  * 
//  */

// function xoaSinhVien(tk) {
//     console.log(tk);
//     dsnv.xoaNV(tk);
//     hienThiDS(dsnv.mangNV);
//     setLocalStorage(dsnv.mangNV);
// }

// /**
//  * Cập nhật
//  * + Xem thông tin
//  *  => CLick button Xem
//  * => lấy thông tin của sv cần xem 
//  * => hiển thị thông tin chi tiết của sv lên form
//  * + Cập Nhật
//  * => edit thông tin cần sửa
//  * => Click button cập nhật
//  * => lấy các giá trị từ form => lưu vào đối tượng sv mới
//  * => tìm vị trí sv cần cập nhật => gán giá trị sv mới vào vị trí tìm thấy
//  */

// function xemChiTiet(tk) {
//     console.log("xem", tk);
//     var viTri = dsnv.timViTri(tk);
//     if (viTri > -1) {
//         //tìm thấy
//         var nvTim = dsnv.mangNV[viTri];
//         console.log(nvTim);
//         getELE("tknv").value = nvTim.taiKhoan;
//         getELE("tknv").disabled = true;

//         getELE("name").value = nvTim.tenNV;
//         getELE("email").value = nvTim.email;
//         getELE("password").value = nvTim.password;
//         getELE("datepicker").value = nvTim.ngayLam;
//         getELE("luongCB").value = nvTim.khoaHoc;
//         getELE("chucVu").value = nvTim.chucVu;
//         getELE("gioLam").value = nvTim.gioLam;

//     }
// }

// function capNhatNhanVien() {
//     var taiKhoan = getELE("tknv").value;
//     var tenNV = getELE("name").value;
//     var email = getELE("email").value;
//     var password = getELE("password").value;
//     var ngayLam = getELE("datepicker").value;
//     var luongCB = getELE("luongCB").value;
//     var chucVu = getELE("chucVu").value;
//     var gioLam = getELE("gioLam").value;



//     //tạo thể hiện của SinhVien
//     var nv = new SinhVien(taiKhoan, tenNV, email, password, ngayLam, Number(luongCB), chucVu, Number(gioLam));
//     nv.tinhTongLuong();
//     console.log(nv);

//     dsnv.capNhatNV(nv);
//     hienThiDS(dsnv.mangNV);
//     setLocalStorage();

//     //Sau khi cập nhật thì reset form
//     resetForm();

// }

// function resetForm() {
//     //chỉ dùng với thẻ form => clear các giá trị ở trên form giúp User nhập nội dung mới
//     getELE("formQLNV").reset();

//     getELE("tknv").disabled = false;
// }



var dsnv = new DanhSachNhanVien();

//Hàm rút gọn cú pháp getElementById("tenID")
function getELE(id) {
    return document.getElementById(id);
}

//Thêm Sinh Viên
function themNhanVien() {
    var taiKhoan = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    console.log(taiKhoan, tenNV, email, password, ngayLam, Number(luongCB),chucVu ,Number(gioLam));
    //tạo thể hiện của SinhVien
    var nv = new NhanVien(taiKhoan, tenNV, email,password,ngayLam,Number(luongCB),chucVu,Number(gioLam));
    nv.tongLuong();
    nv.xepLoaiNV();
    console.log(nv);

    //thêm sv vào mangSV
    dsnv.themNV(nv);
    console.log(dsnv.mangNV);

}