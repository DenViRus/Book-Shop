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

    this.actions.addElem(this.cdbx, mainRow);

    this.actions.addElem(this.ctbx, mainRow);

    this.actions.addElem(mainRow, main);

    return main;
  }

  mainControl() {
    const cartListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".ctbx-order-btn")) this.actions.replElem(this.orfmbx, this.cdbx);
    };
    this.ctbx.addEventListener("click", cartListener1);
    

    const orderFormListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".orfm-head-btn")) this.actions.replElem(this.cdbx, this.orfmbx);
    };
    this.orfmbx.addEventListener("click", orderFormListener1);
  }
}
