export default class BSCardBox {
  constructor(actions) {
    this.actions = actions;
  }

  getCardBox(cardData) {
    const cardBox = this.actions.createElem("div", { class: "card-box", id: "cardBox" });

    const cdBxHeadBox = this.actions.createElem("div", { class: "cdbx-head-box" });
    const cdBxHead = this.actions.createElem("h2", { class: "heading cdbx-head" }, "Our Books");
    const cdBxHeadImg = this.actions.createElem("div", { class: "cdbx-head-img" });

    const cdBxCardField = this.actions.createElem("div", { class: "cdbx-card-field", id: "cdbxCardField" });

    for (const data of cardData) {
      const cdBxCard = this.actions.createElem("div", { class: "cdbx-card", id: data.id });

      const cdBxCardImgBox = this.actions.createElem("div", { class: "cdbx-card-img-box" });
      const cdBxCardImg = this.actions.createElem("img", { class: "cdbx-card-img", src: data.src250, alt: "book image" });

      const cdBxCardInfoBox = this.actions.createElem("div", { class: "cdbx-card-info-box" });
      const cdBxCardHead = this.actions.createElem("h4", { class: "heading cdbx-card-head" }, data.title);
      const cdBxCardParag = this.actions.createElem("p", { class: "paragraph cdbx-card-parag" }, data.author);

      const cdBxCardPriceBox = this.actions.createElem("div", { class: "cdbx-card-price-box" });
      const cdBxCardPrice = this.actions.createElem("span", { class: "heading cdbx-card-price" }, data.price);
      const cdBxCardSign = this.actions.createElem("span", { class: "heading cdbx-card-sign" }, "$");

      const cdBxCardBtnBox = this.actions.createElem("div", { class: "cdbx-card-btn-box" });

      const cdBxCardShowBtn = this.actions.createElem("button", { class: "cdbx-card-show-btn", type: "button" }, "Show More");
      const cdBxCardAddBtn = this.actions.createElem("button", { class: "cdbx-card-add-btn", type: "button" }, "Add");

      this.actions.addEl(cdBxCardImgBox, cdBxCardImg);

      this.actions.addEl(cdBxCardPriceBox, cdBxCardPrice, cdBxCardSign);

      this.actions.addEl(cdBxCardInfoBox, cdBxCardHead, cdBxCardParag);

      this.actions.addEl(cdBxCardBtnBox, cdBxCardShowBtn, cdBxCardAddBtn);

      this.actions.addEl(cdBxCard, cdBxCardImgBox, cdBxCardInfoBox, cdBxCardPriceBox, cdBxCardBtnBox);

      this.actions.addEl(cdBxCardField, cdBxCard);
    }

    this.actions.addEl(cdBxHeadBox, cdBxHead, cdBxHeadImg);
    this.actions.addEl(cdBxHeadBox, cdBxHead, cdBxHeadImg);

    this.actions.addEl(cardBox, cdBxHeadBox, cdBxCardField);

    return cardBox;
  }

  checkCardBtn(cartCardData, cartData, cdbxField) {
    if (this.actions.checkInkludeByID(cartData, cartCardData.id)) {
      cdbxField.querySelector(`#${cartCardData.id}`).querySelector(".cdbx-card-add-btn").setAttribute("disabled", "");
    } else {
      cdbxField.querySelector(`#${cartCardData.id}`).querySelector(".cdbx-card-add-btn").removeAttribute("disabled");
    }
  }
}
