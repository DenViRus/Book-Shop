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

  addElem(el, parEl) {
    parEl.append(el);
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

  bsActionsControl() {}
}
