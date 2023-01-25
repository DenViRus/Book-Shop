export default class BSController {
  constructor(box, header, main, cardBox, cartBox, footer, utils, actions) {
    this.box = box;
    this.header = header;
    this.main = main;
    this.cardBox = cardBox;
    this.cartBox = cartBox;
    this.footer = footer;
    this.utils = utils;
    this.actions = actions;



    this.bsHeader = null;
    this.bsMain = null;
    this.bsFooter = null;

  }

  async bsStart() {
    this.bsHeader = await this.header.getHeader();
    this.bsMain = await this.main.getMain();
    this.bsFooter = await this.footer.getfooter();

    this.actions.addElem(this.bsHeader, this.box);
    this.actions.addElem(this.bsMain, this.box);
    this.actions.addElem(this.bsFooter, this.box);

  }

  bsControl() {
    this.bsStart();
  }
}
