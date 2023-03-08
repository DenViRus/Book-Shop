export default class BSActions {
  constructor() {
    this.newEl = null;
    this.data = null;
  }

  createElem(el, elAttr, cont = "") {
    const elem = document.createElement(el);
    for (const prop in elAttr) {
      if (Object.hasOwnProperty.call(elAttr, prop)) {
        const val = elAttr[prop];
        elem.setAttribute(prop, val);
      }
    }
    if (cont != "") elem.textContent = cont;
    this.newEl = elem;
    return this.newEl;
  }

  addEl(parEl, ...els) {
    parEl.append(...els);
  }

  prepEl(parEl, ...els) {
    parEl.prepend(...els);
  }

  replEl(el1, el2) {
    el2.replaceWith(el1);
  }

  beforEl(el, ...prevEls) {
    el.before(...prevEls);
  }

  afterEl(el, ...nextEls) {
    el.after(...nextEls);
  }

  getDataReq = async (url, id) => {
    const resp = await fetch(url);
    if (resp.status >= 200 && resp.status < 300) {
      this.data = await resp.json();
      if (id) {
        return this.data.find((el) => el.id === id);
      }
      return this.data;
    }
    console.log(`ERROR!!, ${response}, ${response.status}`);
    return false;
  };

  getElByID(arr, id) {
    return arr.find((el) => el.id === id);
  }

  getIndByID(arr, id) {
    return arr.findIndex((el) => el.id === id);
  }

  checkInkludeByID(arr, id) {
    return arr.map((data) => data.id).includes(id);
  }
}
