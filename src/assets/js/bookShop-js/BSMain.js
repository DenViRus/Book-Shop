export default class BSMain {
  constructor(cardBox, cartBox, orderFormBox, popupBox, utils, actions) {
    this.cardBox = cardBox;
    this.cartBox = cartBox;
    this.orderFormBox = orderFormBox;
    this.popupBox = popupBox;

    this.utils = utils;
    this.actions = actions;

    this.cardData = null;

    this.cartData = null;
    this.cartCardData = null;

    this.popupData = null;

    this.cdbx = null;
    this.cdbxfld = null;
    this.cdbxCard = null;

    this.ctbx = null;
    this.ctbxfld = null;
    this.ctbxttlprs = null;
    this.ctbxbtnbx = null;
    this.ctbxCard = null;

    this.orfmbx = null;

    this.pppbx = null;
  }

  async getMain() {
    this.cardData = await this.utils.getBooks();
    this.cartData = [];

    this.cdbx = this.cardBox.getCardBox(this.cardData);
    this.cdbxfld = this.cdbx.querySelector(".cdbx-card-field");

    this.ctbx = this.cartBox.getCartBox();
    this.ctbxfld = this.ctbx.querySelector(".ctbx-card-field");
    this.ctbxttlprs = this.ctbx.querySelector(".ctbx-total-price");
    this.ctbxbtnbx = this.ctbx.querySelector(".ctbx-btn-box");
    this.cartBox.checkCart(this.cartData, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);

    this.orfmbx = this.orderFormBox.getOrderFormBox();

    const main = this.actions.createElem("main", { class: "main", id: "main" });
    const mainRow = this.actions.createElem("div", { class: "row main-row" });

    this.actions.addEl(mainRow, this.cdbx, this.ctbx);

    this.actions.addEl(main, mainRow);

    return main;
  }

  mainControl() {
    const cardListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".cdbx-card-show-btn")) {
        if (this.cdbx.contains(this.pppbx)) {
          const newPopupData = this.actions.getElByID(this.cardData, this.target.closest(".cdbx-card").id);
          if (this.popupData.id === newPopupData.id) {
            return;
          } else {
            const inCart = this.actions.checkInkludeByID(this.cartData, newPopupData.id);
            const newPppbx = this.popupBox.getPopupBox(newPopupData, inCart);
            this.actions.replEl(newPppbx, this.pppbx);
            this.popupData = newPopupData;
            this.pppbx = newPppbx;
          }
        } else {
          this.popupData = this.actions.getElByID(this.cardData, this.target.closest(".cdbx-card").id);
          const inCart = this.actions.checkInkludeByID(this.cartData, this.popupData.id);
          this.pppbx = this.popupBox.getPopupBox(this.popupData, inCart);
          this.actions.prepEl(this.cdbx, this.pppbx);
        }
      }

      if (this.target.closest(".popup-cls-btn")) {
        this.pppbx.remove();
        this.popupData = null;
        this.pppbx = null;
      }

      if (this.target.closest(".popup-add-btn")) {
        this.cartBox.addCartCard(this.target, this.popupData, this.cartData, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
        this.cardBox.checkCardBtn(this.cartCardData, this.cartData, this.cdbxfld);
      }

      if (this.target.closest(".cdbx-card-add-btn")) {
        this.cartCardData = this.actions.getElByID(this.cardData, this.target.closest(".cdbx-card").id);

        this.cartBox.addCartCard(this.target, this.cartCardData, this.cartData, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
        this.popupBox.checkPopup(this.cartCardData, this.popupData, this.cartData, this.cdbx, this.pppbx);
      }
    };
    this.cdbx.addEventListener("click", cardListener1);

    const cartListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".ctbx-card-remove-btn")) {
        this.ctbxCard = this.target.closest(".ctbx-card");
        this.cartCardData = this.actions.getElByID(this.cardData, this.ctbxCard.dataset.ctbxcardid);

        this.cartBox.remCartCard(this.cartCardData, this.cartData, this.ctbxCard, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
        this.popupBox.checkPopup(this.cartCardData, this.popupData, this.cartData, this.cdbx, this.pppbx);
        this.cardBox.checkCardBtn(this.cartCardData, this.cartData, this.cdbxfld);
      }

      if (this.target.closest(".ctbx-card-plus-btn")) {
        this.ctbxCard = this.target.closest(".ctbx-card");
        this.cartCardData = this.actions.getElByID(this.cardData, this.ctbxCard.dataset.ctbxcardid);

        this.cartBox.plusCartCard(this.cartCardData, this.cartData, this.ctbxCard, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
      }

      if (this.target.closest(".ctbx-card-minus-btn")) {
        this.ctbxCard = this.target.closest(".ctbx-card");
        this.cartCardData = this.actions.getElByID(this.cardData, this.ctbxCard.dataset.ctbxcardid);

        this.cartBox.minusCartCard(this.cartCardData, this.cartData, this.ctbxCard, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
        this.popupBox.checkPopup(this.cartCardData, this.popupData, this.cartData, this.cdbx, this.pppbx);
        this.cardBox.checkCardBtn(this.cartCardData, this.cartData, this.cdbxfld);
      }

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
