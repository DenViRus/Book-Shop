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

    const ctbxCardField = this.actions.createElem("div", { class: "ctbx-card-field", id: "ctbxCardField" });

    const ctBxTotal = this.actions.createElem("div", { class: "ctbx-total" });
    const ctBxTotaltext = this.actions.createElem("span", { class: "paragraph ctbx-total-text" }, "Total:");
    const ctBxTotalprice = this.actions.createElem("span", { class: "heading ctbx-total-price" }, "");
    const ctBxTotalSign = this.actions.createElem("span", { class: "heading ctbx-total-sign" }, "$");

    const ctBxBtnBox = this.actions.createElem("div", { class: "ctbx-btn-box" });

    const ctBxOrderBtn = this.actions.createElem("button", { class: "ctbx-order-btn", type: "button", id: "ctBxOrderBtn" }, "Confirm Order");

    this.actions.addEl(ctBxHeadBox, ctBxHead, ctBxHeadImg);

    this.actions.addEl(ctBxTotal, ctBxTotaltext, ctBxTotalprice, ctBxTotalSign);

    this.actions.addEl(ctBxBtnBox, ctBxOrderBtn);

    this.actions.addEl(cartBox, ctBxHeadBox, ctbxCardField, ctBxTotal, ctBxBtnBox);

    return cartBox;
  }

  getCartBoxCard(cardData) {
    const ctBxCard = this.actions.createElem("div", { class: "ctbx-card", "data-ctbxCardID": cardData.id });

    const ctBxCardContBox = this.actions.createElem("div", { class: "ctbx-card-cont-box" });

    const ctBxCardImgBox = this.actions.createElem("div", { class: "ctbx-card-img-box" });
    const ctBxCardImg = this.actions.createElem("img", { class: "ctbx-card-img", src: cardData.src130, alt: "book image" });

    const ctBxCardInfoBox = this.actions.createElem("div", { class: "ctbx-card-info-box" });
    const ctBxCardHead = this.actions.createElem("h4", { class: "heading ctbx-card-head" }, cardData.title);
    const ctBxCardParag = this.actions.createElem("p", { class: "paragraph ctbx-card-parag" }, cardData.author);

    const ctBxCardStatBox = this.actions.createElem("div", { class: "ctbx-card-stat-box" });
    const ctBxCardStatData = [
      {
        tagName: "span",
        tagAttr: {
          class: "heading ctbx-card-count",
        },
        tagCont: cardData.count,
      },

      {
        tagName: "span",
        tagAttr: {
          class: "paragraph ctbx-card-x",
        },
        tagCont: "x",
      },

      {
        tagName: "span",
        tagAttr: {
          class: "heading ctbx-card-sum",
        },
        tagCont: cardData.price,
      },
      {
        tagName: "span",
        tagAttr: {
          class: "heading ctbx-card-sign",
        },
        tagCont: "$",
      },
    ];
    for (const data of ctBxCardStatData) {
      const statBoxEl = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
      this.actions.addEl(ctBxCardStatBox, statBoxEl);
    }

    const ctBxCardActBox = this.actions.createElem("div", { class: "ctbx-card-act-box" });
    const ctBxCardActData = [
      {
        tagName: "button",
        tagAttr: {
          class: "ctbx-card-minus-btn",
          type: "button",
        },
        tagCont: "",
      },

      {
        tagName: "button",
        tagAttr: {
          class: "ctbx-card-plus-btn",
          type: "button",
        },
        tagCont: "",
      },

      {
        tagName: "button",
        tagAttr: {
          class: "ctbx-card-remove-btn",
          type: "button",
        },
        tagCont: "Remove",
      },
    ];
    for (const data of ctBxCardActData) {
      const actBoxEl = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
      this.actions.addEl(ctBxCardActBox, actBoxEl);
    }

    this.actions.addEl(ctBxCardImgBox, ctBxCardImg);

    this.actions.addEl(ctBxCardInfoBox, ctBxCardHead, ctBxCardParag, ctBxCardStatBox);

    this.actions.addEl(ctBxCardContBox, ctBxCardImgBox, ctBxCardInfoBox);

    this.actions.addEl(ctBxCard, ctBxCardContBox, ctBxCardActBox);

    return ctBxCard;
  }

  addCartCard(target, cartCardData, cartData, cartField, ctBxTotalprice, ctbxBtnBox) {
    cartData.push(cartCardData);
    this.actions.addEl(cartField, this.getCartBoxCard(cartCardData));
    target.setAttribute("disabled", "disabled");
    this.checkCart(cartData, cartField, ctBxTotalprice, ctbxBtnBox);
  }

  remCartCard(cartCardData, cartData, cartCard, cartField, ctBxTotalprice, ctbxBtnBox) {
    cartCardData.count = 1;
    cartData.splice(this.actions.getIndByID(cartData, cartCardData.id), 1);
    cartCard.remove();
    this.checkCart(cartData, cartField, ctBxTotalprice, ctbxBtnBox);
  }

  plusCartCard(cartCardData, cartData, cartCard, cartField, ctBxTotalprice, ctbxBtnBox) {
    if (cartCardData.count < 100) {
      cartCard.querySelector(".ctbx-card-count").textContent = ++cartCardData.count;
    }
    this.checkCart(cartData, cartField, ctBxTotalprice, ctbxBtnBox);
  }

  minusCartCard(cartCardData, cartData, cartCard, cartField, ctBxTotalprice, ctbxBtnBox) {
    if (cartCardData.count > 1) {
      cartCard.querySelector(".ctbx-card-count").textContent = --cartCardData.count;
    } else {
      this.remCartCard(cartCardData, cartData, cartCard, cartField, ctBxTotalprice, ctbxBtnBox);
    }
    this.checkCart(cartData, cartField, ctBxTotalprice, ctbxBtnBox);
  }

  checkCart(cartData, cartField, ctBxTotalprice, ctbxBtnBox) {
    if (cartData.length > 0) {
      cartField.classList.remove("empty-field");
      ctBxTotalprice.textContent = cartData.reduce((sum, cur) => sum + cur.count * cur.price, 0);
      ctbxBtnBox.classList.remove("hidden");
    } else {
      cartField.classList.add("empty-field");
      ctbxBtnBox.classList.add("hidden");
      ctBxTotalprice.textContent = 0;
    }
  }
}
