export default class BSMain {
  constructor(cardBox, cartBox, orderFormBox, utils, actions) {
    this.cardBox = cardBox;
    this.cartBox = cartBox;
    this.orderFormBox = orderFormBox;

    this.utils = utils;
    this.actions = actions;

    this.cdbx = null;
    this.ctbx = null;
    this.orfmbx = null;
  }

  async getMain() {
    const main = this.actions.createElem("main", { class: "main", id: "main" });
    const mainRow = this.actions.createElem("div", { class: "row main-row" });

    this.cdbx = await this.cardBox.getCardBox();
    this.ctbx = this.cartBox.getCartBox();
    this.orfmbx = this.orderFormBox.getOrderFormBox();

    this.actions.addEl(mainRow, this.cdbx, this.ctbx);

    this.actions.addEl(main, mainRow);

    return main;
  }

  mainControl() {
    const cartListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".ctbx-order-btn")) this.actions.replEl(this.orfmbx, this.cdbx);
    };
    this.ctbx.addEventListener("click", cartListener1);


    const orderFormListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".orfm-head-btn")) this.actions.replEl(this.cdbx, this.orfmbx);
    };
    this.orfmbx.addEventListener("click", orderFormListener1);
  }
}
