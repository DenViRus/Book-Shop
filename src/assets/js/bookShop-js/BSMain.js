export default class BSMain {
  constructor(cardBox, cartBox, orderFormBox, popupBox, utils, actions, dragAndDrop) {
    this.cardBox = cardBox;
    this.cartBox = cartBox;
    this.orderFormBox = orderFormBox;
    this.popupBox = popupBox;

    this.utils = utils;
    this.actions = actions;
    this.dragAndDrop = dragAndDrop;

    this.cardData = null;

    this.cartData = null;
    this.cartCardData = null;

    this.popupData = null;

    this.main = null;
    this.mainRow = null;

    this.cdbx = null;
    this.cdbxfld = null;
    this.cdbxCard = null;

    this.ctbx = null;
    this.ctbxfld = null;
    this.ctbxttlprs = null;
    this.ctbxbtnbx = null;
    this.ctbxCard = null;

    this.orfmbx = null;
    this.orfm = null;
    this.validInps = null;
    this.orfmSubBtn = null;

    this.pppbx = null;

    this.dragCard = null;
    this.dropCardData = null;
    this.dropCard = null;
    this.shiftX = null;
    this.shiftY = null;
    this.dropEls = null;
    this.noDropEls = null;
    this.drop = null;
  }

  async getMain() {
    this.cardData = await this.utils.getBooks();
    this.cartData = [];

    this.main = this.actions.createElem("main", { class: "main", id: "main" });
    this.mainRow = this.actions.createElem("div", { class: "row main-row" });

    this.cdbx = this.cardBox.getCardBox(this.cardData);
    this.cdbxfld = this.cdbx.querySelector(".cdbx-card-field");

    this.ctbx = this.cartBox.getCartBox();
    this.ctbxfld = this.ctbx.querySelector(".ctbx-card-field");
    this.ctbxttlprs = this.ctbx.querySelector(".ctbx-total-price");
    this.ctbxbtnbx = this.ctbx.querySelector(".ctbx-btn-box");
    this.cartBox.checkCart(this.cartData, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);

    this.orfmbx = this.orderFormBox.getOrderFormBox();
    this.orfm = this.orfmbx.querySelector(".orfm-form");
    this.validInps = [
      ...this.orfm.querySelector(".orfm-persData-fld").querySelectorAll(".orfm-inp"),
      ...this.orfm.querySelector(".orfm-addrData-fld").querySelectorAll(".orfm-inp"),
      ...this.orfm.querySelector(".orfm-dateData-fld").querySelectorAll(".orfm-inp"),
    ];
    this.orfmSubBtn = this.orfm.querySelector(".orfm-sub-btn");

    this.actions.addEl(this.mainRow, this.cdbx, this.ctbx);

    this.actions.addEl(this.main, this.mainRow);

    return this.main;
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

      if (this.target.closest(".popup-cls-btn") || (this.cdbx.contains(this.pppbx) && this.target.closest(".card-box") && !this.target.closest(".popup-box") && !this.target.closest(".cdbx-card-btn-box"))) {
        this.pppbx.remove();
        this.popupData = null;
        this.pppbx = null;
      }

      if (this.target.closest(".popup-add-btn")) {
        this.cartBox.addCartCard(this.target, this.popupData, this.cartData, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
        this.cardBox.checkCardBtn(this.popupData, this.cartData, this.cdbxfld);
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
        this.orderFormBox.checkOrfmSubBtn(this.cartData, this.validInps, this.orfmSubBtn);
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
        this.orderFormBox.checkOrfmSubBtn(this.cartData, this.validInps, this.orfmSubBtn);
      }

      if (this.target.closest(".ctbx-order-btn")) {
        this.actions.replEl(this.orfmbx, this.cdbx);
        this.orderFormBox.checkOrfmSubBtn(this.cartData, this.validInps, this.orfmSubBtn);
      }
    };
    this.ctbx.addEventListener("click", cartListener1);

    const mainRowListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".cdbx-card") && !this.target.closest(".cdbx-card-btn-box")) {
        event.preventDefault();

        this.dragCard = this.target.closest(".cdbx-card");
        this.dropCardData = this.actions.getElByID(this.cardData, this.dragCard.id);
        this.dropCard = this.dragAndDrop.getDropCard(this.dropCardData);

        this.shiftX = event.pageX - (this.mainRow.getBoundingClientRect().left + window.pageXOffset);
        this.shiftY = event.pageY - (this.mainRow.getBoundingClientRect().top + window.pageYOffset);

        this.dropEls = [this.ctbxfld];
        this.noDropEls = [this.mainRow, ...this.cdbxfld.querySelectorAll(".cdbx-card")];

        this.dragAndDrop.startDrag(this.mainRow, this.dropCard, this.dragCard, this.shiftX, this.shiftY, this.dropEls, this.noDropEls);
      }

      if (this.target.closest(".ctbx-card") && !this.target.closest(".ctbx-card-act-box")) {
        event.preventDefault();

        this.dragCard = this.target.closest(".ctbx-card");
        this.dropCardData = this.actions.getElByID(this.cartData, this.dragCard.dataset.ctbxcardid);
        this.dropCard = this.dragAndDrop.getDropCard(this.dropCardData);

        this.shiftX = event.pageX - (this.mainRow.getBoundingClientRect().left + window.pageXOffset);
        this.shiftY = event.pageY - (this.mainRow.getBoundingClientRect().top + window.pageYOffset);

        this.noDropEls = [this.ctbxfld];
        this.dropEls = [this.mainRow, ...this.cdbxfld.querySelectorAll(".cdbx-card")];

        this.dragAndDrop.startDrag(this.mainRow, this.dropCard, this.dragCard, this.shiftX, this.shiftY, this.dropEls, this.noDropEls);
      }
    };
    this.mainRow.addEventListener("mousedown", mainRowListener1);

    const mainRowListener2 = (event) => {
      this.target = event.target;

      if (this.mainRow.contains(this.dropCard)) {
        event.preventDefault();

        this.shiftX = event.pageX - (this.mainRow.getBoundingClientRect().left + window.pageXOffset);
        this.shiftY = event.pageY - (this.mainRow.getBoundingClientRect().top + window.pageYOffset);

        this.dragAndDrop.moveDrag(this.dropCard, this.shiftX, this.shiftY);
      }
    };
    this.mainRow.addEventListener("mousemove", mainRowListener2);

    const mainRowListener3 = (event) => {
      this.target = event.target;

      if (this.mainRow.contains(this.dropCard) && this.dragCard.classList.contains("cdbx-card")) {
        event.preventDefault();

        this.drop = this.dragAndDrop.finishDrag(this.dropCard, this.dragCard, this.dropEls, this.noDropEls, event.clientX, event.clientY);
        if (this.drop) {
          this.cartCardData = this.actions.getElByID(this.cardData, this.dropCardData.id);

          if (this.actions.checkInkludeByID(this.cartData, this.dropCardData.id)) {
            this.ctbxCard = [...this.ctbxfld.querySelectorAll(".ctbx-card")].find((el) => el.dataset.ctbxcardid === this.dropCardData.id);
            this.cartBox.plusCartCard(this.cartCardData, this.cartData, this.ctbxCard, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
          } else {
            this.target = this.cdbxfld.querySelector(`#${this.cartCardData.id}`).querySelector(".cdbx-card-add-btn");

            this.cartBox.addCartCard(this.target, this.cartCardData, this.cartData, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
            this.popupBox.checkPopup(this.cartCardData, this.popupData, this.cartData, this.cdbx, this.pppbx);
          }
        }
      }

      if (this.mainRow.contains(this.dropCard) && this.dragCard.classList.contains("ctbx-card")) {
        event.preventDefault();

        this.drop = this.dragAndDrop.finishDrag(this.dropCard, this.dragCard, this.dropEls, this.noDropEls, event.clientX, event.clientY);

        if (this.drop) {
          this.cartCardData = this.actions.getElByID(this.cartData, this.dropCardData.id);
          this.ctbxCard = [...this.ctbxfld.querySelectorAll(".ctbx-card")].find((el) => el.dataset.ctbxcardid === this.dropCardData.id);

          this.cartBox.remCartCard(this.cartCardData, this.cartData, this.ctbxCard, this.ctbxfld, this.ctbxttlprs, this.ctbxbtnbx);
          this.popupBox.checkPopup(this.cartCardData, this.popupData, this.cartData, this.cdbx, this.pppbx);
          this.cardBox.checkCardBtn(this.cartCardData, this.cartData, this.cdbxfld);
          this.orderFormBox.checkOrfmSubBtn(this.cartData, this.validInps, this.orfmSubBtn);
        }
      }
    };
    this.mainRow.addEventListener("mouseup", mainRowListener3);

    const mainRowListener4 = (event) => {
      this.target = event.target;

      if (this.mainRow.contains(this.dropCard) && this.dragCard.classList.contains("cdbx-card")) {
        event.preventDefault();
        this.dragAndDrop.removeAt(this.dropCard, this.dragCard, this.dropEls, this.noDropEls);
      }

      if (this.mainRow.contains(this.dropCard) && this.dragCard.classList.contains("ctbx-card")) {
        event.preventDefault();
        this.dragAndDrop.removeAt(this.dropCard, this.dragCard, this.dropEls, this.noDropEls);
      }
    };
    this.mainRow.addEventListener("mouseleave", mainRowListener4);

    const ordFormListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest(".orfm-sub-btn")) {
        event.preventDefault();
        console.log(this.orfm);
      }

      if (this.target.closest(".orfm-giftData-lbl")) {
        this.orderFormBox.checkOrfmGift(this.target.closest(".orfm-giftData-fld"));
      }

      if (this.target.closest(".orfm-head-btn")) this.actions.replEl(this.cdbx, this.orfmbx);
    };
    this.orfmbx.addEventListener("click", ordFormListener1);

    const ordFormListener2 = (event) => {
      this.target = event.target;

      if (this.target.closest(".orfm-persData-name-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmName(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-persData-surname-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmSurname(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-persData-phone-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmPhone(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-persData-emale-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmEmale(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-addrData-country-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmCountry(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-addrData-city-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmCity(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-addrData-street-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmStreet(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-addrData-house-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmHouse(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-addrData-flat-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmFlat(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-dateData-date-inp")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmDate(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-persData-fld") || this.target.closest(".orfm-addrData-fld") || this.target.closest(".orfm-dateData-fld")) {
        event.preventDefault();
        this.orderFormBox.checkOrfmSubBtn(this.cartData, this.validInps, this.orfmSubBtn);
      }
    };
    this.orfmbx.addEventListener("focusout", ordFormListener2);

    const ordFormListener3 = (event) => {
      this.target = event.target;
      if (this.target.closest(".orfm-persData-fld") || this.target.closest(".orfm-addrData-fld") || this.target.closest(".orfm-dateData-fld")) {
        event.preventDefault();
        this.orderFormBox.remValidation(this.target, this.target.closest(".orfm-lbl"));
      }

      if (this.target.closest(".orfm-inp") && event.key === "Enter") {
        event.preventDefault();
        return;
      }
    };
    this.orfmbx.addEventListener("keyup", ordFormListener3);

    const ordFormListener4 = (event) => {
      this.target = event.target;

      if (this.target.closest(".orfm-persData-phone-inp") && this.target.value.length > 15 && event.key !== "Backspace") {
        event.preventDefault();
        return;
      }

      if (this.target.closest(".orfm-inp") && event.key === "Enter") {
        event.preventDefault();
        return;
      }
    };
    this.orfmbx.addEventListener("keydown", ordFormListener4);
  }
}
