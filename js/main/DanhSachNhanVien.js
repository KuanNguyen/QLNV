
function DanhSachNhanVien() {
  this.arrayNV = [];
  this.themNv = function (nv) {
      this.arrayNV.push(nv)
  }
  this.timNv = function(tk) {
      var viTriNv = -1;

      this.arrayNV.map(function (nv, index) {
          if (nv.taiKhoanNV === tk) {
              viTriNv = index;
          }
      });
      return viTriNv;
  }
  this.xoaNv = function (tk) {
      var viTriNv = this.timNv(tk);
      if (viTriNv > -1) {
          this.arrayNV.splice(viTriNv, 1)
      }
  }
  this.capNhatNv = function(nv){
      var viTriNv = this.timNv(nv.taiKhoanNV);
      if(viTriNv > -1){
          
          dsnv.arrayNV[viTriNv] = nv
      }
  }
  this.tim = function(tuLoai){
      var mangTK=[];
      this.arrayNV.map(function(nv){
          var viTriTK = nv.xepLoai.toLowerCase().indexOf(tuLoai.toLowerCase());
          if(viTriTK >-1){
              mangTK.push(nv);
          }
      });
      return mangTK;
  }
}