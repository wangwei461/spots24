Page({
  data: {
    one: "",
    two: "",
    three: "",
    fore: "",
    inputTxt: "",
    pos: -1,
    disabled1: "default",
    disabled2: "default",
    disabled3: "default",
    disabled4: "default",
  },
  checkBtnClick: function(e) {
    console.log(11)
  },
  tipsBtnClick: function(e) {},
  oneBtnClick: function(e) {
    this.getNumMath();
    var v;
    if (this.data.disabled1 != "default") {
      this.setData({
        disabled1: "default"
      });
    } else {
      if (!this.checkExist(this.data.one)) {
        v = this.data.inputTxt + this.data.one;
      } else {
        v = this.data.inputTxt;
      }
      this.setData({
        inputTxt: v,
        disabled1: "primary"
      });
    }
  },
  twoBtnClick: function(e) {
    var v;
    if (this.data.disabled2 != "default") {
      this.setData({
        disabled2: "default"
      });
    } else {
      if (!this.checkExist(this.data.two)) {
        v = this.data.inputTxt + this.data.two;
      } else {
        v = this.data.inputTxt;
      }
      this.setData({
        inputTxt: v,
        disabled2: "primary"
      });
    }
  },
  threeBtnClick: function(e) {
    var v;
    if (this.data.disabled3 != "default") {
      this.setData({
        disabled3: "default"
      });
    } else {
      if (!this.checkExist(this.data.three)) {
        v = this.data.inputTxt + this.data.three;
      } else {
        v = this.data.inputTxt;
      }
      this.setData({
        inputTxt: v,
        disabled3: "primary"
      });
    }
  },
  foreBtnClick: function(e) {
    var v;
    if (this.data.disabled4 != "default") {
      this.setData({
        disabled4: "default"
      });
    } else {
      if (!this.checkExist(this.data.fore)) {
        v = this.data.inputTxt + this.data.fore;
      } else {
        v = this.data.inputTxt;
      }
      this.setData({
        inputTxt: v,
        disabled4: "primary"
      });
    }
  },
  // inputValue: function(e) {
  //   // this.setData({
  //   //   inputTxt: e.detail.value
  //   // });

  //   var value = e.detail.value
  //   var pos = e.detail.cursor
  //   if (pos != -1) {
  //     //光标在中间
  //     var left = e.detail.value.slice(0, pos)
  //     //计算光标的位置
  //     // pos = left.replace(/11/g, '2').length
  //   }
  //   console.log(value)
  //   console.log(pos)
  // },
  btnClickJia: function(e) {
    var v = this.data.inputTxt + e.currentTarget.dataset.ch;
    this.setData({
      inputTxt: v
    });
  },
  btnClickJian: function(e) {
    var v = this.data.inputTxt + e.currentTarget.dataset.ch;
    this.setData({
      inputTxt: v
    });
  },
  btnClickCheng: function(e) {
    console.log(e.currentTarget.dataset.ch)
    var v = this.data.inputTxt + e.currentTarget.dataset.ch;
    this.setData({
      inputTxt: v
    });
  },
  btnClickChu: function(e) {
    var v = this.data.inputTxt + e.currentTarget.dataset.ch;
    this.setData({
      inputTxt: v
    });
  },
  btnClickLeft: function(e) {
    var v = this.data.inputTxt + e.currentTarget.dataset.ch;
    this.setData({
      inputTxt: v
    });
  },
  btnClickRight: function(e) {
    var v = this.data.inputTxt + e.currentTarget.dataset.ch;
    this.setData({
      inputTxt: v
    });
  },
  checkExist: function(v) {
    var s = this.data.inputTxt;
    if (s.indexOf(v) > -1) {
      return true;
    }
  },
  getNumMath: function() {
    var v;
    while ((v = Math.ceil(Math.random() * 10)) == 10) {}
    //  console.log(v)

    return v;
  },
  onLoad: function(e) {
    var vv = [4];
    // while (true){
    //   vv.push(this.getNumMath());
    //   vv.push(this.getNumMath());
    //   vv.push(this.getNumMath());
    //   vv.push(this.getNumMath());

    //   for (var i=0;i < 4;i++){
    //     for (var j = i; j < 4; j++){
    //       if ()
    //     }
    //   }
    // }

    this.setData({
      one: this.getNumMath(),
      two: this.getNumMath(),
      three: this.getNumMath(),
      fore: this.getNumMath()
    });
  }

})