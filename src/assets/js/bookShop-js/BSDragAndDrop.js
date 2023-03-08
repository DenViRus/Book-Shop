export default class BSDragAndDrop {
  constructor(actions) {
    this.actions = actions;
  }

  getDropCard(dropCardData) {
    const dropCard = this.actions.createElem("div", { class: "drop-card" });

    const dropCardImgBox = this.actions.createElem("div", { class: "drop-card-img-box" });
    const dropCardImg = this.actions.createElem("img", { class: "drop-card-img", src: dropCardData.src130, alt: "book image" });

    const dropCardInfoBox = this.actions.createElem("div", { class: "drop-card-info-box" });
    const dropCardHead = this.actions.createElem("h4", { class: "heading drop-card-head" }, dropCardData.title);
    const dropCardParag = this.actions.createElem("p", { class: "paragraph drop-card-parag" }, dropCardData.author);

    const dropCardPriceBox = this.actions.createElem("div", { class: "drop-card-price-box" });
    const dropCardPrice = this.actions.createElem("span", { class: "heading drop-card-price" }, dropCardData.price);
    const dropCardSign = this.actions.createElem("span", { class: "heading drop-card-sign" }, "$");

    this.actions.addEl(dropCardImgBox, dropCardImg);
    this.actions.addEl(dropCardInfoBox, dropCardHead, dropCardParag);
    this.actions.addEl(dropCardPriceBox, dropCardPrice, dropCardSign);
    this.actions.addEl(dropCard, dropCardImgBox, dropCardInfoBox, dropCardPriceBox);

    return dropCard;
  }

  moveAt(dropCard, shiftX, shiftY) {
    dropCard.style.left = `${shiftX - dropCard.offsetWidth / 2}px`;
    dropCard.style.top = `${shiftY - dropCard.offsetHeight / 2}px`;
  }

  removeAt(dropCard, dragCard, dropEls, noDropEls) {
    for (const noDropEl of noDropEls) {
      noDropEl.classList.remove("no-droppable");
    }

    for (const dropEl of dropEls) {
      dropEl.classList.remove("droppable");
    }

    dragCard.classList.remove("drag-card");
    dropCard.remove();
  }

  startDrag(mainRow, dropCard, dragCard, shiftX, shiftY, dropEls, noDropEls) {
    for (const noDropEl of noDropEls) {
      noDropEl.classList.add("no-droppable");
    }

    for (const dropEl of dropEls) {
      dropEl.classList.add("droppable");
    }

    dragCard.classList.add("drag-card");
    this.actions.prepEl(mainRow, dropCard);

    this.moveAt(dropCard, shiftX, shiftY);
  }

  moveDrag(dropCard, shiftX, shiftY) {
    this.moveAt(dropCard, shiftX, shiftY);
  }

  finishDrag(dropCard, dragCard, dropEls, noDropEls, clientX, clientY) {
    let result = null;
    const el = document.elementFromPoint(clientX, clientY).closest(".ctbx-card-field");
    if (dragCard.classList.contains("cdbx-card")) result = el ? true : false;
    if (dragCard.classList.contains("ctbx-card")) result = !el ? true : false;
    this.removeAt(dropCard, dragCard, dropEls, noDropEls);
    return result;
  }
}
