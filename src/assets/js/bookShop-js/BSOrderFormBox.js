export default class BSOrderFormBox {
  constructor(actions) {
    this.actions = actions;
  }

  getOrderFormBox() {
    const orderFormBox = this.actions.createElem("div", { class: "orderForm-box", id: "orderFormBox" });

    const orfmHeadBox = this.actions.createElem("div", { class: "orfm-head-box" });
    const orfmHeadBtn = this.actions.createElem("button", { class: "orfm-head-btn", type: "button", id: "orfmHeadBtn" }, "Back to Books");
    const orfmHead = this.actions.createElem("h2", { class: "heading orfm-head" }, "Your Order Form");
    const orfmHeadImg = this.actions.createElem("div", { class: "orfm-head-img" });

    const orfmForm = this.actions.createElem("form", { class: "orfm-form", id: "orfmForm" });

    const orfmBtnBox = this.actions.createElem("div", { class: "orfm-box orfm-btn-box" });
    const orfmSubBtn = this.actions.createElem("button", { class: "orfm-sub-btn", type: "submit", disabled: "", id: "orfmSubBtn" }, "Complete Order");

    const orfmPersDataBox = this.actions.createElem("div", { class: "orfm-box orfm-persData-box" });
    const orfmPersDataFld = this.actions.createElem("fieldset", { class: "orfm-fld orfm-persData-fld" });
    const orfmPersData = [
      {
        tagName: "legend",
        tagAttr: {
          class: "heading orfm-lgd orfm-persData-lgd",
        },
        tagCont: "Contacts:",
      },

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-persData-lbl",
            for: "orfmPersDataNameInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-persData-span",
          },
          tagCont: "Name:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-persData-name-inp",
            type: "text",
            name: "orfmPersDataName",
            id: "orfmPersDataNameInp",
            autocomplete: "off",
            minlength: "4",
            maxlength: "20",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-persData-lbl",
            for: "orfmPersDataSurnameInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-persData-span",
          },
          tagCont: "Surname:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-persData-surname-inp",
            type: "text",
            name: "orfmPersDataSurname",
            id: "orfmPersDataSurnameInp",
            autocomplete: "off",
            minlength: "5",
            maxlength: "25",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-persData-lbl",
            for: "orfmPersDataPhoneInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-persData-span",
          },
          tagCont: "Phone:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-persData-phone-inp",
            type: "number",
            name: "orfmPersDataPhone",
            id: "orfmPersDataPhoneInp",
            autocomplete: "off",
            minlength: "10",
            maxlength: "15",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-persData-lbl",
            for: "orfmPersDataEmaleInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-persData-span",
          },
          tagCont: "Emale:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-persData-emale-inp",
            type: "text",
            name: "orfmPersDataEmale",
            id: "orfmPersDataEmaleInp",
            autocomplete: "off",
            minlength: "5",
            maxlength: "25",
          },
          tagCont: "",
        },
      ],
    ];
    for (const data of orfmPersData) {
      if (Array.isArray(data)) {
        const dataItem1 = this.actions.createElem(data[0].tagName, data[0].tagAttr, data[0].tagCont);
        const dataItem2 = this.actions.createElem(data[1].tagName, data[1].tagAttr, data[1].tagCont);
        const dataItem3 = this.actions.createElem(data[2].tagName, data[2].tagAttr, data[2].tagCont);
        this.actions.addEl(dataItem1, dataItem2, dataItem3);
        this.actions.addEl(orfmPersDataFld, dataItem1);
      } else {
        const dataItem = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
        this.actions.addEl(orfmPersDataFld, dataItem);
      }
    }

    const orfmAddrDataBox = this.actions.createElem("div", { class: "orfm-box orfm-addrData-box" });
    const orfmAddrDataFld = this.actions.createElem("fieldset", { class: "orfm-fld orfm-addrData-fld" });
    const orfmAddrData = [
      {
        tagName: "legend",
        tagAttr: {
          class: "heading orfm-lgd orfm-addrData-lgd",
        },
        tagCont: "Address:",
      },

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-addrData-lbl",
            for: "orfmAddrDataCountryInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-addrData-span",
          },
          tagCont: "Country:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-addrData-country-inp",
            type: "text",
            name: "orfmAddrDataCountry",
            id: "orfmAddrDataCountryInp",
            autocomplete: "off",
            minlength: "3",
            maxlength: "20",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-addrData-lbl",
            for: "orfmAddrDataCityInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-addrData-span",
          },
          tagCont: "City:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-addrData-city-inp",
            type: "text",
            name: "orfmAddrDataCity",
            id: "orfmAddrDataCityInp",
            autocomplete: "off",
            minlength: "3",
            maxlength: "20",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-addrData-lbl",
            for: "orfmAddrDataStreetInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-addrData-span",
          },
          tagCont: "Street:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-addrData-street-inp",
            type: "text",
            name: "orfmAddrDataStreet",
            id: "orfmAddrDataStreetInp",
            autocomplete: "off",
            minlength: "5",
            maxlength: "20",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-addrData-lbl",
            for: "orfmAddrDataHouseInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-addrData-span",
          },
          tagCont: "House:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-addrData-house-inp",
            type: "text",
            name: "orfmAddrDataHouse",
            id: "orfmAddrDataHouseInp",
            autocomplete: "off",
            minlength: "1",
            maxlength: "5",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-addrData-lbl",
            for: "orfmAddrDataFlatInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-addrData-span",
          },
          tagCont: "Flat:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-addrData-flat-inp",
            type: "text",
            name: "orfmAddrDataFlat",
            id: "orfmAddrDataFlatInp",
            autocomplete: "off",
            minlength: "1",
            maxlength: "5",
          },
          tagCont: "",
        },
      ],
    ];
    for (const data of orfmAddrData) {
      if (Array.isArray(data)) {
        const dataItem1 = this.actions.createElem(data[0].tagName, data[0].tagAttr, data[0].tagCont);
        const dataItem2 = this.actions.createElem(data[1].tagName, data[1].tagAttr, data[1].tagCont);
        const dataItem3 = this.actions.createElem(data[2].tagName, data[2].tagAttr, data[2].tagCont);
        this.actions.addEl(dataItem1, dataItem2, dataItem3);
        this.actions.addEl(orfmAddrDataFld, dataItem1);
      } else {
        const dataItem = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
        this.actions.addEl(orfmAddrDataFld, dataItem);
      }
    }
    const orfmDateDataBox = this.actions.createElem("div", { class: "orfm-box orfm-dateData-box" });
    const orfmDateDataFld = this.actions.createElem("fieldset", { class: "orfm-fld orfm-dateData-fld" });
    const orfmDateData = [
      {
        tagName: "legend",
        tagAttr: {
          class: "heading orfm-lgd orfm-dateData-lgd",
        },
        tagCont: "Date:",
      },

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-dateData-lbl",
            for: "orfmDateDataDateInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-dateData-span",
          },
          tagCont: "Delivery Date:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-dateData-date-inp",
            type: "date",
            name: "orfmDateDataDate",
            min: this.getTomorrowDate(),
            id: "orfmDateDataDateInp",
          },
          tagCont: "",
        },
      ],
    ];
    for (const data of orfmDateData) {
      if (Array.isArray(data)) {
        const dataItem1 = this.actions.createElem(data[0].tagName, data[0].tagAttr, data[0].tagCont);
        const dataItem2 = this.actions.createElem(data[1].tagName, data[1].tagAttr, data[1].tagCont);
        const dataItem3 = this.actions.createElem(data[2].tagName, data[2].tagAttr, data[2].tagCont);
        this.actions.addEl(dataItem1, dataItem2, dataItem3);
        this.actions.addEl(orfmDateDataFld, dataItem1);
      } else {
        const dataItem = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
        this.actions.addEl(orfmDateDataFld, dataItem);
      }
    }
    const orfmPayDataBox = this.actions.createElem("div", { class: "orfm-box orfm-payData-box" });
    const orfmPayDataFld = this.actions.createElem("fieldset", { class: "orfm-fld orfm-payData-fld" });
    const orfmPayData = [
      {
        tagName: "legend",
        tagAttr: {
          class: "heading orfm-lgd orfm-payData-lgd",
        },
        tagCont: "Choose Payment Type:",
      },
      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-payData-lbl",
            for: "orfmPayDataCashInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-payData-span",
          },
          tagCont: "Cash",
        },

        {
          tagName: "div",
          tagAttr: {
            class: "orfm-checkSign orfm-payData-checkSign",
          },
          tagCont: "",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-payData-cash-inp",
            type: "radio",
            name: "orfmPayData",
            value: "cash",
            id: "orfmPayDataCashInp",
            checked: "",
          },
          tagCont: "",
        },
      ],
      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-payData-lbl",
            for: "orfmPayDataCardInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-payData-span",
          },
          tagCont: "Card",
        },

        {
          tagName: "div",
          tagAttr: {
            class: "orfm-checkSign orfm-payData-checkSign",
          },
          tagCont: "",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-payData-card-inp",
            type: "radio",
            name: "orfmPayData",
            value: "card",
            id: "orfmPayDataCardInp",
          },
          tagCont: "",
        },
      ],
    ];
    for (const data of orfmPayData) {
      if (Array.isArray(data)) {
        const dataItem1 = this.actions.createElem(data[0].tagName, data[0].tagAttr, data[0].tagCont);
        const dataItem2 = this.actions.createElem(data[1].tagName, data[1].tagAttr, data[1].tagCont);
        const dataItem3 = this.actions.createElem(data[2].tagName, data[2].tagAttr, data[2].tagCont);
        const dataItem4 = this.actions.createElem(data[3].tagName, data[3].tagAttr, data[3].tagCont);
        this.actions.addEl(dataItem1, dataItem4, dataItem3, dataItem2);
        this.actions.addEl(orfmPayDataFld, dataItem1);
      } else {
        const dataItem = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
        this.actions.addEl(orfmPayDataFld, dataItem);
      }
    }
    const orfmGiftDataBox = this.actions.createElem("div", { class: "orfm-box orfm-giftData-box" });
    const orfmGiftDataFld = this.actions.createElem("fieldset", { class: "orfm-fld orfm-giftData-fld" });
    const orfmGiftData = [
      {
        tagName: "legend",
        tagAttr: {
          class: "heading orfm-lgd orfm-giftData-lgd",
        },
        tagCont: "Choose 2 Gifts:",
      },

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-giftData-lbl",
            for: "orfmGiftDataPackInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-giftData-span",
          },
          tagCont: "Pack as a gift",
        },

        {
          tagName: "div",
          tagAttr: {
            class: "orfm-checkSign orfm-giftData-checkSign",
          },
          tagCont: "",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-giftData-pack-inp",
            type: "checkbox",
            name: "orfmGiftData",
            value: "pack as a gift",
            id: "orfmGiftDataPackInp",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-giftData-lbl",
            for: "orfmGiftDataPostInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-giftData-span",
          },
          tagCont: "Add postcard",
        },

        {
          tagName: "div",
          tagAttr: {
            class: "orfm-checkSign orfm-giftData-checkSign",
          },
          tagCont: "",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-giftData-post-inp",
            type: "checkbox",
            name: "orfmGiftData",
            value: "add postcard",
            id: "orfmGiftDataPostInp",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-giftData-lbl",
            for: "orfmGiftDataDiscInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-giftData-span",
          },
          tagCont: "Provide 2% discount to the next time",
        },

        {
          tagName: "div",
          tagAttr: {
            class: "orfm-checkSign orfm-giftData-checkSign",
          },
          tagCont: "",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-giftData-disc-inp",
            type: "checkbox",
            name: "orfmGiftData",
            value: "provide 2% discount to the next time",
            id: "orfmGiftDataDiscInp",
          },
          tagCont: "",
        },
      ],

      [
        {
          tagName: "label",
          tagAttr: {
            class: "orfm-lbl orfm-giftData-lbl",
            for: "orfmGiftDataPenInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-giftData-span",
          },
          tagCont: "Branded pen or pencil",
        },

        {
          tagName: "div",
          tagAttr: {
            class: "orfm-checkSign orfm-giftData-checkSign",
          },
          tagCont: "",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-giftData-pen-inp",
            type: "checkbox",
            name: "orfmGiftData",
            value: "Branded pen or pencil",
            id: "orfmGiftDataPenInp",
          },
          tagCont: "",
        },
      ],
    ];
    for (const data of orfmGiftData) {
      if (Array.isArray(data)) {
        const dataItem1 = this.actions.createElem(data[0].tagName, data[0].tagAttr, data[0].tagCont);
        const dataItem2 = this.actions.createElem(data[1].tagName, data[1].tagAttr, data[1].tagCont);
        const dataItem3 = this.actions.createElem(data[2].tagName, data[2].tagAttr, data[2].tagCont);
        const dataItem4 = this.actions.createElem(data[3].tagName, data[3].tagAttr, data[3].tagCont);
        this.actions.addEl(dataItem1, dataItem4, dataItem3, dataItem2);
        this.actions.addEl(orfmGiftDataFld, dataItem1);
      } else {
        const dataItem = this.actions.createElem(data.tagName, data.tagAttr, data.tagCont);
        this.actions.addEl(orfmGiftDataFld, dataItem);
      }
    }

    this.actions.addEl(orfmHeadBox, orfmHeadBtn, orfmHead, orfmHeadImg);

    this.actions.addEl(orfmBtnBox, orfmSubBtn);

    this.actions.addEl(orfmPersDataBox, orfmPersDataFld);
    this.actions.addEl(orfmAddrDataBox, orfmAddrDataFld);
    this.actions.addEl(orfmDateDataBox, orfmDateDataFld);
    this.actions.addEl(orfmPayDataBox, orfmPayDataFld);
    this.actions.addEl(orfmGiftDataBox, orfmGiftDataFld);

    this.actions.addEl(orfmForm, orfmPersDataBox, orfmAddrDataBox, orfmDateDataBox, orfmPayDataBox, orfmGiftDataBox, orfmBtnBox);

    this.actions.addEl(orderFormBox, orfmHeadBox, orfmForm);

    return orderFormBox;
  }

  getTomorrowDate() {
    const today = new Date();
    const needDay = today.getDate() + 1 < 10 ? `0${today.getDate() + 1}` : today.getDate() + 1;
    const needMonth = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const needYear = today.getFullYear();
    return `${needYear}-${needMonth}-${needDay}`;
  }

  getErMes(box, mes) {
    this.actions.addEl(box, this.actions.createElem("span", { class: "paragraph er-mes" }, mes));
  }

  remErMes(box) {
    box.querySelector(".er-mes").remove();
  }

  makeValid(el) {
    el.classList.add("valid");
  }

  makeValidHead(box) {
    box.querySelector(".orfm-span").classList.add("valid-head");
  }

  makeNoValid(el) {
    el.classList.add("noValid");
  }

  makeNoValidHead(box) {
    box.querySelector(".orfm-span").classList.add("noValid-head");
  }

  remValidation(el, box) {
    if (el.classList.contains("noValid")) {
      el.classList.remove("noValid");
      box.querySelector(".orfm-span").classList.remove("noValid-head");
      this.remErMes(box);
    }
    if (el.classList.contains("valid")) {
      el.classList.remove("valid");
      box.querySelector(".orfm-span").classList.remove("valid-head");
    }
  }

  checkOrfmName(el, box) {
    this.remValidation(el, box);
    if (/[^а-яА-ЯёЁa-zA-Z]+/g.test(el.value) || el.value.length < 4) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 4 letters, without numbers and spaces!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmSurname(el, box) {
    this.remValidation(el, box);
    if (/[^а-яА-ЯёЁa-zA-Z]+/g.test(el.value) || el.value.length < 5) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 5 letters, without numbers and spaces!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmPhone(el, box) {
    this.remValidation(el, box);
    if (/[^0-9]+/g.test(el.value) || el.value.length < 10) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 10 letters, without letters and spaces!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmEmale(el, box) {
    this.remValidation(el, box);
    if (!/[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-Z]+/g.test(el.value) || el.value.length < 5) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 5 letters and numbers, symbol @ is required!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmCountry(el, box) {
    this.remValidation(el, box);
    if (/[^а-яА-ЯёЁa-zA-Z -]+/g.test(el.value) || el.value.length < 3) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 3 letters, without numbers!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmCity(el, box) {
    this.remValidation(el, box);
    if (/[^а-яА-ЯёЁa-zA-Z -]+/g.test(el.value) || el.value.length < 3) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 3 letters, without numbers!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmStreet(el, box) {
    this.remValidation(el, box);
    if (/[^а-яА-ЯёЁa-zA-Z0-9 -]+/g.test(el.value) || el.value.length < 5) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 5 letters and numbers!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmHouse(el, box) {
    this.remValidation(el, box);
    if (!/^[1-9]+[0-9]*$/g.test(el.value) || el.value.length < 1) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 1 number, without letters and spaces!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmFlat(el, box) {
    this.remValidation(el, box);
    if (!/^[1-9]+[-0-9]*$/g.test(el.value) || el.value.length < 1) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Not less than 1 number, without letters and spaces!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmDate(el, box) {
    this.remValidation(el, box);
    if (new Date(el.min) > new Date(el.value) || el.value.length < 1) {
      this.makeNoValid(el);
      this.makeNoValidHead(box);
      this.getErMes(box, "Сhoose the date not earlier than tomorrow!");
    } else {
      this.makeValid(el);
      this.makeValidHead(box);
    }
  }

  checkOrfmGift(box) {
    if ([...box.querySelectorAll(".orfm-inp")].filter((gift) => gift.checked).length > 1) {
      [...box.querySelectorAll(".orfm-inp")].filter((noGift) => noGift.checked === false).forEach((noGift) => noGift.setAttribute("disabled", ""));
    } else {
      [...box.querySelectorAll(".orfm-inp")].filter((noGift) => noGift.checked === false).forEach((noGift) => noGift.removeAttribute("disabled"));
    }
  }

  checkOrfmSubBtn(cartData, validInps, orfmSubBtn) {
    if (cartData.length > 0 && validInps.every((el) => el.classList.contains("valid"))) {
      orfmSubBtn.removeAttribute("disabled");
    } else {
      orfmSubBtn.setAttribute("disabled", "");
    }
  }
}
