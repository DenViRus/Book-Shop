export default class BSOrderFormBox {
  constructor(utils, actions) {
    this.utils = utils;
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
    const orfmSubBtn = this.actions.createElem("button", { class: "orfm-sub-btn", type: "submit", id: "orfmSubBtn" }, "Complete Order");

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
            maxlength: "12",
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
          tagCont: "Name:",
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
            minlength: "5",
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
            maxlength: "15",
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
            for: "orfmAddrDataСityInp",
          },
          tagCont: "",
        },

        {
          tagName: "span",
          tagAttr: {
            class: "paragraph orfm-span orfm-addrData-span",
          },
          tagCont: "Сity:",
        },

        {
          tagName: "input",
          tagAttr: {
            class: "orfm-inp orfm-addrData-city-inp",
            type: "text",
            name: "orfmAddrDataСity",
            id: "orfmAddrDataСityInp",
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
            id: "orfmDateDataDateInp",
            autocomplete: "off",
            minlength: "3",
            maxlength: "20",
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
          tagCont: "Cash:",
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
          tagCont: "Card:",
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
}
