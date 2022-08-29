
var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.arrayNV));
    
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != undefined) {
        dsnv.arrayNV = JSON.parse(localStorage.getItem("DSNV"));
    }
    hienThiNhanVien(dsnv.arrayNV);
}
getLocalStorage();


function themNhanVien() {
    var taiKhoanNV = getELE('tknv').value;
    var tenNv = getELE('name').value;
    var email = getELE('email').value;
    var password = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCB = getELE('luongCB').value;
    var chucVu = getELE('chucvu').value;
    var gioLam = getELE('gioLam').value;
    var isValid = true;

    isValid &= 
      validation.checkEmpty(
        taiKhoanNV, "tbTKNV", "Vui lòng nhập mã nhân viên"
        )&&validation.checkTkTrung(
          taiKhoanNV,"tbTKNV","Tài Khoản Nhân Viên đã tồn tại",dsnv.arrayNV
          )&& validation.checkTkNv(
            taiKhoanNV,"tbTKNV","Tài Khoản Chỉ Được Nhập Từ 4 Đến 6 Số");

    isValid &= 
      validation.checkEmpty(
        tenNv, "tbTen", "Vui lòng nhập tên nhân viên"
        )&& validation.checkTenNv(
          tenNv,"tbTen","Tên Nhân Viên Không Hợp Lệ (Chỉ có thể nhập chữ, không tồn tại số và kí hiệu đặc biệt)");

    isValid &= 
      validation.checkEmpty(email, "tbEmail", "Vui lòng nhập email nhân viên"
      )&& validation.checkEmail(email,"tbEmail", "Email Không Đúng Định Dạng");

    isValid &= 
      validation.checkEmpty(
        password, "tbMatKhau", "vui lòng nhập mật khẩu nhân viên"
        )&& validation.checkMk(password,"tbMatKhau","Mật Khẩu Chưa Đúng Định Dạng (Phải bao Gồm Chữ In Hoa, Chữ Thường,Số và Ký Tự Đặc Biệt Từ 6 đến 10 Ký Tự)");

    isValid &= 
      validation.checkEmpty(ngayLam, "tbNgay", "Vui lòng nhập ngày làm của nhân viên"
      )&& validation.checkNgayLam(ngayLam, "tbNgay", "Ngày Làm của Nhân Viên Không Đúng Định Dạng(Định dạng ngày MM/DD/YYYY)");

    isValid &= 
      validation.checkEmpty(
        luongCB, "tbLuongCB", "Vui lòng nhập lương nhân viên"
        )&& validation.checkLuong(luongCB,"tbLuongCB","Lương Chưa Đúng Định Dạng , phải từ 1 triệu đến 20 triệu");

    isValid &= 
      validation.checkChucVu(
        "chucvu", "tbChucVu","Vui lòng chọn chức vụ");

    isValid &= 
      validation.checkEmpty(
        gioLam, "tbGiolam", "Vui lòng nhập giờ làm của nhân viên")
        && validation.checkGioLam(gioLam,"tbGiolam","Số Giờ Làm Không Hợp lệ (phải từ 80 đến 200 giờ))");


    if(isValid){
        var nv = new NhanVien(taiKhoanNV, tenNv, email, password, ngayLam, Number(luongCB), chucVu, Number(gioLam))
        nv.tinhTongLuong();
        nv.xepLoaiNv();
        dsnv.themNv(nv);
        hienThiNhanVien(dsnv.arrayNV);
        setLocalStorage();
        resetForm();
    }

}
getELE('btnThemNV').onclick = themNhanVien;

function hienThiNhanVien(arrayNV) {
    var content = ""
    arrayNV.map(function (nv, index) {
        content += `
            <tr>
                <td>${nv.taiKhoanNV}</td>
                <td>${nv.tenNv}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${(nv.tongLuong).toLocaleString()}</td>
                <td>${nv.xepLoai}</td>
                <td>
                        <button id="show" class="btn btn-info" data-toggle="modal"
                        data-target="#myModal" onclick="xemNhanVien('${nv.taiKhoanNV}')" >Xem</button>
                        <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoanNV}')" >Xóa</button>                   
                </td>   
            </tr>
        `;
    });
    getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(tk) {
    dsnv.xoaNv(tk);
    hienThiNhanVien(dsnv.arrayNV);
    setLocalStorage(dsnv.arrayNV)
}

function xemNhanVien(tk) {   
    var viTriNv = dsnv.timNv(tk);
    if (viTriNv > -1) {
        var nvTim = dsnv.arrayNV[viTriNv];
        getELE('tknv').value = nvTim.taiKhoanNV;
        getELE('tknv').disabled = true; 
        getELE('name').value = nvTim.tenNv;
        getELE('email').value = nvTim.email;
        getELE('password').value = nvTim.password;
        getELE('datepicker').value = nvTim.ngayLam;
        getELE('luongCB').value = nvTim.luongCB;
        getELE('chucvu').value = nvTim.chucVu;
        getELE('gioLam').value = nvTim.gioLam;
    }

}


function capNhatNhanVien() {
    var taiKhoanNV = getELE('tknv').value;
    var tenNv = getELE('name').value;
    var email = getELE('email').value;
    var password = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCB = getELE('luongCB').value;
    var chucVu = getELE('chucvu').value;
    var gioLam = getELE('gioLam').value;
    var isValid = true;

    isValid &= 
      validation.checkEmpty(
        taiKhoanNV, "tbTKNV", "Vui lòng nhập mã nhân viên"
        )&& validation.checkTkNv(
            taiKhoanNV,"tbTKNV","Tài Khoản Chỉ Được Nhập Từ 4 Đến 6 Số");

    isValid &= 
      validation.checkEmpty(
        tenNv, "tbTen", "Vui lòng nhập tên nhân viên"
        )&& validation.checkTenNv(
          tenNv,"tbTen","Tên Nhân Viên Không Hợp Lệ (Chỉ có thể nhập chữ, không tồn tại số và kí hiệu đặc biệt)");

    isValid &= 
      validation.checkEmpty(email, "tbEmail", "Vui lòng nhập email nhân viên"
      )&& validation.checkEmail(email,"tbEmail", "Email Không Đúng Định Dạng");

    isValid &= 
      validation.checkEmpty(
        password, "tbMatKhau", "vui lòng nhập mật khẩu nhân viên"
        )&& validation.checkMk(password,"tbMatKhau","Mật Khẩu Chưa Đúng Định Dạng (Phải bao Gồm Chữ In Hoa, Chữ Thường,Số và Ký Tự Đặc Biệt Từ 6 đến 10 Ký Tự)");

    isValid &= 
      validation.checkEmpty(ngayLam, "tbNgay", "Vui lòng nhập ngày làm của nhân viên"
      )&& validation.checkNgayLam(ngayLam, "tbNgay", "Ngày Làm của Nhân Viên Không Đúng Định Dạng(Định dạng ngày MM/DD/YYYY)");

    isValid &= 
      validation.checkEmpty(
        luongCB, "tbLuongCB", "Vui lòng nhập lương nhân viên"
        )&& validation.checkLuong(luongCB,"tbLuongCB","Lương Chưa Đúng Định Dạng , phải từ 1 triệu đến 20 triệu");

    isValid &= 
      validation.checkChucVu(
        "chucvu", "tbChucVu","Vui lòng chọn chức vụ");

    isValid &= 
      validation.checkEmpty(
        gioLam, "tbGiolam", "Vui lòng nhập giờ làm của nhân viên")
        && validation.checkGioLam(gioLam,"tbGiolam","Số Giờ Làm Không Hợp lệ (phải từ 80 đến 200 giờ))");


        if(isValid){
              var nv = new NhanVien(taiKhoanNV, tenNv, email, password, ngayLam, Number(luongCB), chucVu, Number(gioLam))
              nv.tinhTongLuong();
              nv.xepLoaiNv(); 
              dsnv.capNhatNv(nv);
              hienThiNhanVien(dsnv.arrayNV);
              setLocalStorage();
              resetForm();
           }
      



}
getELE('btnCapNhat').onclick = capNhatNhanVien;

function dong() {
    document.querySelector(".sp-thongbao").innerHTML= "";
    resetForm()
}
getELE("btnDong").onclick = dong;

function resetForm(){
    getELE("formNV").reset();
    getELE('tknv').disabled = false;
}


function timNhanVien(){
    var tuLoai =getELE("searchName").value;
    var mangTK = dsnv.tim(tuLoai.trim());
    hienThiNhanVien(mangTK);
}
getELE("searchName").onkeyup = timNhanVien;