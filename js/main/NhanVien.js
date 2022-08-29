

function NhanVien(taiKhoanNV,tenNv,email,password,ngayLam,luongCB,chucVu,gioLam){
    this.taiKhoanNV = taiKhoanNV;
    this.tenNv = tenNv;
    this.email =email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";


    this.tinhTongLuong = function(){
        if(this.chucVu == "Sếp"){
            this.tongLuong = luongCB *3
        }else if(this.chucVu == "Trưởng phòng"){
            this.tongLuong = luongCB *2
        }else if (this.chucVu == "Nhân viên"){
            this.tongLuong = luongCB 
        }else
            this.tongLuong = "Chưa Xác Định Được"
    }
    
    this.xepLoaiNv= function(){
        if(this.gioLam >=192){
            this.xepLoai = "Xuất Sắc"
        }else if(this.gioLam >= 176){
            this.xepLoai = "Giỏi"
        }else if(this.gioLam >= 160){
            this.xepLoai = "Khá"
        }else{
            this.xepLoai = "Trung Bình"
        }
    }

}

