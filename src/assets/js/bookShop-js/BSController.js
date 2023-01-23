export default class BSController {
  constructor(box, header, main, cardBox, cartBox, utils, actions) {
    this.box = box;
    this.header = header;
    this.main = main;
    this.cardBox = cardBox;
    this.cartBox = cartBox;

    this.utils = utils;
    this.actions = actions;
  }

  bsControl() {
    this.header.bsHeaderControl();
    this.main.bsMainControl();


  }
}
