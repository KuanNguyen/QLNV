function DanhSachNhanVien() {
    //thuộc tính
    //mảng các đối tượng sinh viên
    this.mangNV = [];

    //phương thức
    //truyền tham số là đối tượng sv
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }
    // this.timViTri = function(tk){
    //     //giả sử viTri chưa tìm thấy nên = -1
    //     console.log(tk);
        
    //     var viTri = -1;
    //     //Duyệt mảng và so sanh mã để tìm sinh viên trong mảng
    //     this.mangNV.map(function(nv,index){
    //         if(nv.taiKhoan === tk){
    //             //tìm thấy
    //             viTri = index;
    //         }
    //     });

    //     //trả kết quả vị trí tìm thấy ra khỏi hàm để sử dụng ở các hàm khác
    //     return viTri;
    // }
    // this.xoaNV = function(tk) {
    //     var viTri = this.timViTri(tk);
    //     console.log(tk, viTri);

    //     if(viTri > -1){
    //         //tìm thấy
    //         //splice(vị trí bắt đầu xóa, số lượng cần xóa tính từ vị trí bắt đầu)
    //         //splice(1, 3) => xóa các phần tử có index 1,2,3
    //         this.mangNV.splice(viTri,1);
    //     }
    // }


    // this.capNhatNV = function(nv){
    //     var viTri = this.timViTri(nv.taiKhoan);
    //     if(viTri > -1){
    //         //tìm thấy
    //         dsnv.mangNV[viTri] = nv
    //     }
    // }
    
}