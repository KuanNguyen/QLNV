
function NhanVien(taiKhoan, tenNV, email, password, ngayLam, chucVu, luongCB, gioLam) {
    //thuộc tính
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.luongCB = luongCB;
    this.gioLam = gioLam;
    this.xepLoai = '';
    this.tongLuong = 0;



    //phương thức
    this.tongLuong = function () {
        if (chucVu == "Sếp") {
            // Sep
            this.luong = this.luongCB * 3;
        } else if (chucVu == "Trưởng phòng") {
            // Truong phong
            this.luong = this.luongCB * 2;
        } else if (chucVu == "Nhân viên") {
            // Nhan vien
            this.luong = this.luongCB;
        }
    }

    this.xepLoaiNV = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176) {
            this.xepLoai = "Nhân Viên giỏi";
        } else if (this.gioLam >= 160) {
            this.xepLoai = "Nhân viên khá";
        } else if (this.gioLam < 160) {
            this.xepLoai = " Nhân viên trung bình";
        }
    }
}

