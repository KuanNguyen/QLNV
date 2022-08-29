

function Validation() {
  this.checkEmpty = function (inputValue, spanID, message) {
      if (inputValue.trim() != "") {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
  }
  this.checkTkTrung = function (inputValue, spanID, message, arrayNV) {
      var isExist = false;
      isExist = arrayNV.some(function (nv, index) {
          return nv.taiKhoanNV === inputValue.replaceAll(" ", "");
      });
      if (isExist) {
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          return false
      } else {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true
      }
  }
  this.checkTkNv = function (inputValue, spanID, message) {
      var patter = /^[0-9]{4,6}$/;
      if (inputValue.match(patter)) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
  }
  this.checkTenNv = function (inputValue, spanID, message) {
      var patter = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
      if (inputValue.match(patter)) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
  }
  this.checkEmail = function (inputValue, spanID, message) {
      var patter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (inputValue.match(patter)) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
  }
  this.checkMk = function (inputValue, spanID, message) {
      var patter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
      if (inputValue.match(patter)) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
  }
 
  this.checkNgayLam = function (inputValue, spanID, message) {
      var patter = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
      if (inputValue.match(patter)) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false
  }

  this.checkLuong = function (inputValue, spanID, message) {
    var patter =  /^[0-9]{7,8}$/;
    if (inputValue.match(patter)&& inputValue <= 2e7 ) {
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true
    }
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false
  }

  this.checkChucVu = function (selectID, spanID, message) {
      var indexCV = document.getElementById(selectID).selectedIndex;
      if (indexCV != 0) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false
  }
  this.checkGioLam = function (inputValue, spanID, message) {
      var patter = /[1-9]\d*(?:\.\d{2,3})?/;
      if (inputValue.match(patter) && inputValue <= 200 && inputValue >= 80) {

          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true
      }
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false
  }
}