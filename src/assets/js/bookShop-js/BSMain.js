export default class BSMain {
  constructor(cardBox, cartBox, orderFormBox, popupBox, utils, actions) {
    this.cardBox = cardBox;
    this.cartBox = cartBox;
    this.orderFormBox = orderFormBox;
    this.popupBox = popupBox;

    this.utils = utils;
    this.actions = actions;

    this.cardData = null;

    this.popupData = null;

    this.cdbx = null;
    this.ctbx = null;
    this.orfmbx = null;

    this.pppbx = null;
  }

  async getMain() {
    this.cardData = await this.utils.getBooks();

    this.cdbx = this.cardBox.getCardBox(this.cardData);
    this.ctbx = this.cartBox.getCartBox();
    this.orfmbx = this.orderFormBox.getOrderFormBox();

    const main = this.actions.createElem("main", { class: "main", id: "main" });
    const mainRow = this.actions.createElem("div", { class: "row main-row" });

    this.actions.addEl(mainRow, this.cdbx, this.ctbx);

    this.actions.addEl(main, mainRow);

    ////////////////////////////////////////////
    // const expPopup = this.popupBox.getPopupBox(this.cardData[5]);
    // this.actions.prepEl(this.cdbx, expPopup);

    //////////////////////////////////////////////

    return main;
  }

  mainControl() {
    const cardListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".cdbx-card-show-btn")) {
        if (this.cdbx.contains(this.pppbx)) {
          const newPopupData = this.actions.getElbyID(this.cardData, this.target.closest(".cdbx-card").id);
          if (this.popupData.id === newPopupData.id) {
            return;
          } else {
            const newPppbx = this.popupBox.getPopupBox(newPopupData);
            this.actions.replEl(newPppbx, this.pppbx);
            this.popupData = newPopupData;
            this.pppbx = newPppbx;
          }
        } else {
          this.popupData = this.actions.getElbyID(this.cardData, this.target.closest(".cdbx-card").id);
          this.pppbx = this.popupBox.getPopupBox(this.popupData);
          this.actions.prepEl(this.cdbx, this.pppbx);
        }
      }

      if (this.target.closest(".popup-cls-btn")) {
        this.pppbx.remove();
        this.popupData = null;
        this.pppbx = null;
      }
    };
    this.cdbx.addEventListener("click", cardListener1);

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
