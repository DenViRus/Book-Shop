export default class BSCardBox {
  constructor(utils, actions) {
    this.utils = utils;
    this.actions = actions;
  }

  async getCardBox() {
    const cardData = await this.utils.getBooks();

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

      this.actions.addElem(cdBxCardImg, cdBxCardImgBox);

      this.actions.addElem(cdBxCardPrice, cdBxCardPriceBox);
      this.actions.addElem(cdBxCardSign, cdBxCardPriceBox);

      this.actions.addElem(cdBxCardHead, cdBxCardInfoBox);
      this.actions.addElem(cdBxCardParag, cdBxCardInfoBox);

      this.actions.addElem(cdBxCardShowBtn, cdBxCardBtnBox);
      this.actions.addElem(cdBxCardAddBtn, cdBxCardBtnBox);

      this.actions.addElem(cdBxCardImgBox, cdBxCard);
      this.actions.addElem(cdBxCardInfoBox, cdBxCard);
      this.actions.addElem(cdBxCardPriceBox, cdBxCard);
      this.actions.addElem(cdBxCardBtnBox, cdBxCard);

      this.actions.addElem(cdBxCard, cdBxCardField);
    }

    this.actions.addElem(cdBxHead, cdBxHeadBox);
    this.actions.addElem(cdBxHeadImg, cdBxHeadBox);

    this.actions.addElem(cdBxHeadBox, cardBox);
    this.actions.addElem(cdBxCardField, cardBox);

    return cardBox;
  }

  bsCardBoxControl() {}
}
