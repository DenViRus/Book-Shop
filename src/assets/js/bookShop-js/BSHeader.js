export default class BSHeader {
  constructor(utils, actions) {
    this.utils = utils;
    this.actions = actions;
  }

  async getHeader() {
    const logoData = await this.utils.getUtil("bsLogo");
    const headerImgData = await this.utils.getUtil("readingGirl1");

    const header = this.actions.createElem("header", { class: "header", id: "header" });
    const headerRow = this.actions.createElem("div", { class: "row header-row" });

    const headerLogoBox = this.actions.createElem("div", { class: "header-logo-box" });
    const headerContBox = this.actions.createElem("div", { class: "header-cont-box" });
    const headerImgBox = this.actions.createElem("div", { class: "header-img-box" });

    const headerLogo = this.actions.createElem("a", { class: "header-logo", id: "headerLogo", href: "#header" });
    const headerLogoImgBox = this.actions.createElem("div", { class: "header-logo-img-box" });
    const headerNavBox = this.actions.createElem("div", { class: "header-nav-box" });
    const headerHeading = this.actions.createElem("h1", { class: "heading header-heading" }, "Read Your Book!");

    const headerLogoImg = this.actions.createElem("img", { class: "header-logo-img", src: logoData.src, alt: logoData.alt });

    const headerNav = this.actions.createElem("nav", { class: "header-nav", id: "headerNav" });
    const headerNavList = this.actions.createElem("ul", { class: "header-nav-list" });

    const headerNavListItemData = [
      { cont: "About Us", id: "aboutUs", href: "#" },
      { cont: "Our Books", id: "ourBooks", href: "#main" },
      { cont: "Our Contacts", id: "contactUs", href: "#footer" },
    ];
    for (const data of headerNavListItemData) {
      const headerNavItem = this.actions.createElem("li", { class: "header-nav-item" });
      const headerNavLink = this.actions.createElem("a", { class: "paragraph header-nav-link", id: data.id, href: data.href }, data.cont);
      this.actions.addEl(headerNavItem, headerNavLink);
      this.actions.addEl(headerNavList, headerNavItem);
    }

    const headerImg = this.actions.createElem("img", { class: "header-img", src: headerImgData.src, alt: headerImgData.alt });

    this.actions.addEl(headerLogoImgBox, headerLogoImg);
    this.actions.addEl(headerLogo, headerLogoImgBox);
    this.actions.addEl(headerLogoBox, headerLogo);

    this.actions.addEl(headerNav, headerNavList);
    this.actions.addEl(headerNavBox, headerNav);
    this.actions.addEl(headerContBox, headerNavBox);

    this.actions.addEl(headerContBox, headerHeading);

    this.actions.addEl(headerImgBox, headerImg);

    this.actions.addEl(headerRow, headerLogoBox, headerContBox, headerImgBox);

    this.actions.addEl(header, headerRow);
    return header;
  }
}
