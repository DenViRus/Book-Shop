export default class BSOrderBox {
  constructor(actions) {
    this.actions = actions;
  }

  getOrderBox(ordData, cartData) {
    const orderBox = this.actions.createElem("div", { class: "order-box", id: "orderBox" });
    const orderCont = this.actions.createElem("div", { class: "order-cont" });

    const ordHeadBox = this.actions.createElem("div", { class: "ord-box ord-head-box" });
    const ordHeadImg1 = this.actions.createElem("div", { class: "ord-head-img1" });
    const ordHead = this.actions.createElem("h2", { class: "heading ord-head" }, "Thank You For Your Order!");
    const ordHeadImg2 = this.actions.createElem("div", { class: "ord-head-img2" });

    const ordContactBox = this.actions.createElem("div", { class: "ord-box ord-contact-box" });
    const ordContactFld = this.actions.createElem("fieldset", { class: "ord-fld ord-contact-fld" });
    const ordContactLgd = this.actions.createElem("legend", { class: "heading ord-lgd ord-contact-lgd" }, "Recipient Contacts:");
    const ordContBox = this.actions.createElem("div", { class: "ord-data-box ord-cont-box" });
    const ordContHead1 = this.actions.createElem("h3", { class: "heading ord-data-head ord-cont-head" }, `${this.getOrderValue(ordData.get("orfmPersDataName"))} ${this.getOrderValue(ordData.get("orfmPersDataSurname"))}`);
    const ordContHead2 = this.actions.createElem("h3", { class: "heading ord-data-head ord-cont-head" }, `${ordData.get("orfmPersDataPhone").trim()} (${ordData.get("orfmPersDataEmale").trim()})`);

    const ordAdressBox = this.actions.createElem("div", { class: "ord-box ord-adress-box" });
    const ordAdressFld = this.actions.createElem("fieldset", { class: "ord-fld ord-adress-fld" });
    const ordAdressLgd = this.actions.createElem("legend", { class: "heading ord-lgd ord-adress-lgd" }, "Delivery Address:");
    const ordAddrBox = this.actions.createElem("div", { class: "ord-data-box ord-addr-box" });
    const ordAddrHead1 = this.actions.createElem("h3", { class: "heading ord-data-head ord-addr-head" }, `${ordData.get("orfmAddrDataCountry").trim().toUpperCase()}, ${this.getOrderValue(ordData.get("orfmAddrDataCity"))},`);
    const ordAddrHead2 = this.actions.createElem(
      "h3",
      { class: "heading ord-data-head ord-addr-head" },
      `str. ${this.getOrderValue(ordData.get("orfmAddrDataStreet"))}, bldg. ${ordData.get("orfmAddrDataHouse").trim()}, apt. ${ordData.get("orfmAddrDataFlat").trim()}`
    );

    const ordDateBox = this.actions.createElem("div", { class: "ord-box ord-date-box" });
    const ordDateFld = this.actions.createElem("fieldset", { class: "ord-fld ord-date-fld" });
    const ordDateLgd = this.actions.createElem("legend", { class: "heading ord-lgd ord-date-lgd" }, "Delivery Date:");
    const ordDelDateBox = this.actions.createElem("div", { class: "ord-data-box ord-delDate-box" });
    const ordDelDateHead1 = this.actions.createElem("h3", { class: "heading ord-data-head ord-delDate-head" }, `${ordData.get("orfmDateDataDate").trim()}`);

    const ordPaymentBox = this.actions.createElem("div", { class: "ord-box ord-payment-box" });
    const ordPaymentFld = this.actions.createElem("fieldset", { class: "ord-fld ord-payment-fld" });
    const ordPaymentLgd = this.actions.createElem("legend", { class: "heading ord-lgd ord-payment-lgd" }, "Payment Type:");
    const ordDelPayBox = this.actions.createElem("div", { class: "ord-data-box ord-pay-box" });
    const ordDelPayHead1 = this.actions.createElem("h3", { class: "heading ord-data-head ord-pay-head" }, `${this.getOrderValue(ordData.get("orfmPayData"))}`);

    const ordOrderBox = this.actions.createElem("div", { class: "ord-box ord-order-box" });
    const ordOrderFld = this.actions.createElem("fieldset", { class: "ord-fld ord-order-fld" });
    const ordOrderLgd = this.actions.createElem("legend", { class: "heading ord-lgd ord-order-lgd" }, "Your Order:");
    const ordOrdBox = this.actions.createElem("div", { class: "ord-data-box ord-ord-box" });

    let count = 1;
    for (const data of cartData) {
      const dataItem = this.getOrderCard(data, count++);
      this.actions.addEl(ordOrdBox, dataItem);
    }

    const ordOrdTotal = this.actions.createElem("div", { class: "ord-ord-total" });
    const ordOrdTotalText = this.actions.createElem("span", { class: "paragraph ord-ord-total-text" }, "Total:");
    const ctBxTotalPrice = this.actions.createElem(
      "span",
      { class: "heading ord-ord-total-price" },
      cartData.reduce((sum, cur) => sum + cur.count * cur.price, 0)
    );
    const ctBxTotalSign = this.actions.createElem("span", { class: "heading ord-ord-total-sign" }, "$");

    const ordBtnBox = this.actions.createElem("div", { class: "ord-box ord-btn-box" });
    const ordRetBtn = this.actions.createElem("button", { class: "ord-btn ord-ret-btn", type: "button", id: "ordRetBtn" }, "Back to OrderForm");
    const ordSubBtn = this.actions.createElem("button", { class: "ord-btn ord-sub-btn", type: "submit", id: "ordSubBtn" }, "Done");

    this.actions.addEl(ordOrdTotal, ordOrdTotalText, ctBxTotalPrice, ctBxTotalSign);

    this.actions.addEl(ordContBox, ordContHead1, ordContHead2);
    this.actions.addEl(ordAddrBox, ordAddrHead1, ordAddrHead2);
    this.actions.addEl(ordDelDateBox, ordDelDateHead1);
    this.actions.addEl(ordDelPayBox, ordDelPayHead1);

    this.actions.addEl(ordContactFld, ordContactLgd, ordContBox);
    this.actions.addEl(ordAdressFld, ordAdressLgd, ordAddrBox);
    this.actions.addEl(ordDateFld, ordDateLgd, ordDelDateBox);
    this.actions.addEl(ordPaymentFld, ordPaymentLgd, ordDelPayBox);
    this.actions.addEl(ordOrderFld, ordOrderLgd, ordOrdBox, ordOrdTotal);

    this.actions.addEl(ordHeadBox, ordHeadImg1, ordHead, ordHeadImg2);

    this.actions.addEl(ordContactBox, ordContactFld);
    this.actions.addEl(ordAdressBox, ordAdressFld);
    this.actions.addEl(ordDateBox, ordDateFld);
    this.actions.addEl(ordPaymentBox, ordPaymentFld);
    this.actions.addEl(ordOrderBox, ordOrderFld);

    this.actions.addEl(ordBtnBox, ordRetBtn, ordSubBtn);

    this.actions.addEl(orderCont, ordHeadBox, ordContactBox, ordAdressBox, ordDateBox, ordPaymentBox, ordOrderBox, ordBtnBox);

    if (ordData.getAll("orfmGiftData").length > 0) {
      const ordPresentBox = this.actions.createElem("div", { class: "ord-box ord-present-box" });
      const ordPresentFld = this.actions.createElem("fieldset", { class: "ord-fld ord-present-fld" });
      const ordPresentLgd = this.actions.createElem("legend", { class: "heading ord-lgd ord-present-lgd" }, "Your Gifts:");
      const ordGiftBox = this.actions.createElem("div", { class: "ord-data-box ord-gift-box" });
      let count = 1;
      for (const data of ordData.getAll("orfmGiftData")) {
        const dataItem = this.actions.createElem("h3", { class: "heading ord-data-head ord-gift-head" }, `${count++}. ${this.getOrderValue(data)}`);
        this.actions.addEl(ordGiftBox, dataItem);
      }
      this.actions.addEl(ordPresentFld, ordPresentLgd, ordGiftBox);
      this.actions.addEl(ordPresentBox, ordPresentFld);
      this.actions.afterEl(ordPaymentBox, ordPresentBox);
    }

    this.actions.addEl(orderBox, orderCont);
    return orderBox;
  }

  getOrderCard(data, num) {
    const orderCard = this.actions.createElem("div", { class: "order-card" });

    const ordCardNumBox = this.actions.createElem("div", { class: "ord-card-num-box" });
    const ordCardNum = this.actions.createElem("h4", { class: "heading ord-card-num" }, num);

    const ordCardImgBox = this.actions.createElem("div", { class: "ord-card-img-box" });
    const ordCardImg = this.actions.createElem("img", { class: "ord-card-img", src: data.src130, alt: "book image" });

    const ordCardInfBox = this.actions.createElem("div", { class: "ord-card-inf-box" });
    const ordCardHead = this.actions.createElem("h4", { class: "heading ord-card-head" }, data.title);
    const ordCardParag = this.actions.createElem("p", { class: "paragraph ord-card-parag" }, data.author);
    const ordCardCount = this.actions.createElem("span", { class: "heading ord-card-count" }, data.count);
    const ordCardX = this.actions.createElem("span", { class: "paragraph ord-card-x" }, "x");
    const ordCardPrice = this.actions.createElem("span", { class: "heading ord-card-price" }, data.price);
    const ordCardSign = this.actions.createElem("span", { class: "heading ord-card-sign" }, "$");

    this.actions.addEl(ordCardNumBox, ordCardNum);
    this.actions.addEl(ordCardImgBox, ordCardImg);
    this.actions.addEl(ordCardInfBox, ordCardHead, ordCardParag, ordCardCount, ordCardX, ordCardPrice, ordCardSign);

    this.actions.addEl(orderCard, ordCardNumBox, ordCardImgBox, ordCardInfBox);
    return orderCard;
  }

  getOrderValue(val) {
    return val.trim().replace(/^[а-яА-ЯёЁa-zA-Z]/, (u) => u.toUpperCase());
  }
}
