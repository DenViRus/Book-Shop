export default class BSCartBox {
  constructor(utils, actions) {
    this.utils = utils;
    this.actions = actions;
  }

  getCartBox() {
    const cartBox = this.actions.createElem("div", { class: "cart-box", id: "cartBox" });

    const ctBxHeadBox = this.actions.createElem("div", { class: "ctbx-head-box" });
    const ctBxHead = this.actions.createElem("h2", { class: "heading ctbx-head" }, "Your Cart");
    const ctBxHeadImg = this.actions.createElem("div", { class: "ctbx-head-img" });

    const ctbxCardField = this.actions.createElem("div", { class: "ctbx-card-field empty-field", id: "ctbxCardField" });

    const ctBxTotal = this.actions.createElem("div", { class: "ctbx-total" });
    const ctBxTotaltext = this.actions.createElem("span", { class: "paragraph ctbx-total-text" }, "Total:");
    const ctBxTotalprice = this.actions.createElem("span", { class: "heading ctbx-total-price" }, "0");
    const ctBxTotalSign = this.actions.createElem("span", { class: "heading ctbx-total-sign" }, "$");

    const ctBxBtnBox = this.actions.createElem("div", { class: "ctbx-btn-box" });

    const ctBxOrderBtn = this.actions.createElem("button", { class: "ctbx-order-btn", type: "button", id: "ctBxOrderBtn" }, "Confirm Order");

    this.actions.addEl(ctBxHeadBox, ctBxHead, ctBxHeadImg);

    this.actions.addEl(ctBxTotal, ctBxTotaltext, ctBxTotalprice, ctBxTotalSign);

    this.actions.addEl(ctBxBtnBox, ctBxOrderBtn);

    this.actions.addEl(cartBox, ctBxHeadBox, ctbxCardField, ctBxTotal, ctBxBtnBox);

    return cartBox;
  }
}
