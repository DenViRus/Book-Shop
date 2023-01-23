export default class BSMain {
  constructor(box, cardBox, cartBox, utils, actions) {
    this.box = box;
    this.cardBox = cardBox;
    this.cartBox = cartBox;

    this.utils = utils;
    this.actions = actions;
  }

  async getMain() {
    const main = this.actions.createElem("main", { class: "main", id: "main" });
    const mainRow = this.actions.createElem("div", { class: "row main-row" });

    const cardBox = await this.cardBox.getCardBox();

    const cartBox = this.cartBox.getCartBox();

    this.actions.addElem(cardBox, mainRow);
    this.actions.addElem(cartBox, mainRow);

    this.actions.addElem(mainRow, main);
    this.actions.addElem(main, this.box);
  }

  bsMainControl() {
    this.getMain();
  }
}
