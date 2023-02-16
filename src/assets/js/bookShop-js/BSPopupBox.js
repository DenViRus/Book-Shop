export default class BSPopupBox {
  constructor(utils, actions) {
    this.utils = utils;
    this.actions = actions;
  }

  getPopupBox(popupData, inCart) {
    const popupBox = this.actions.createElem("div", { class: "popup-box", id: "popupBox" });

    const popupImgBox = this.actions.createElem("div", { class: "popup-img-box" });
    const popupImg = this.actions.createElem("img", { class: "popup-img", src: popupData.src375, alt: "book image" });

    const popupContBox = this.actions.createElem("div", { class: "popup-cont-box" });
    const popupClsBtn = this.actions.createElem("button", { class: "popup-cls-btn", type: "button" });

    const popupInfoBox = this.actions.createElem("div", { class: "popup-info-box" });
    const popupHead = this.actions.createElem("h4", { class: "heading popup-head" }, popupData.title);
    const popupParagAuth = this.actions.createElem("p", { class: "paragraph popup-parag-auth" }, popupData.author);
    const popupParagDesc = this.actions.createElem("p", { class: "paragraph popup-parag-desc" }, popupData.description);

    const popupActBox = this.actions.createElem("div", { class: "popup-act-box" });
    const popupPrice = this.actions.createElem("span", { class: "heading popup-price" }, popupData.price);
    const popupSign = this.actions.createElem("span", { class: "heading popup-sign" }, "$");
    const popupAddBtn = this.actions.createElem("button", { class: "popup-add-btn", type: "button" }, "Add");
    if (inCart) popupAddBtn.setAttribute("disabled", "disabled");

    this.actions.addEl(popupImgBox, popupImg);

    this.actions.addEl(popupInfoBox, popupHead, popupParagAuth, popupParagDesc);

    this.actions.addEl(popupActBox, popupPrice, popupSign, popupAddBtn);

    this.actions.addEl(popupContBox, popupClsBtn, popupInfoBox, popupActBox);

    this.actions.addEl(popupBox, popupImgBox, popupContBox);

    return popupBox;
  }

  checkPopup(cartCardData, popupData, cartData, cardBox, popupbox) {
    if (cardBox.contains(popupbox) && popupData.id === cartCardData.id) {
      if (this.actions.checkInkludeByID(cartData, popupData.id)) {
        popupbox.querySelector(".popup-add-btn").setAttribute("disabled", "disabled");
      } else {
        popupbox.querySelector(".popup-add-btn").removeAttribute("disabled");
      }
    }
  }
}
