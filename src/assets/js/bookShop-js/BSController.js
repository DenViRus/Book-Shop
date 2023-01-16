export default class BSController {
  constructor(box, header, utils, actions) {
    this.box = box;
    this.header = header;

    this.utils = utils;
    this.actions = actions;
  }



  bsControl() {
    this.header.bsHeaderControl()
  }
}
