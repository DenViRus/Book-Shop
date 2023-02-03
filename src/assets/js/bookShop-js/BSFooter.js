export default class BSFooter {
  constructor(utils, actions) {
    this.utils = utils;
    this.actions = actions;
  }

  async getfooter() {
    const footerImgData = await this.utils.getUtil("readingGirl2");
    const pamLogoData = await this.utils.getUtil("pamLogo");

    const footer = this.actions.createElem("footer", { class: "footer", id: "footer" });
    const footerRow = this.actions.createElem("div", { class: "row footer-row" });

    const footerContBox = this.actions.createElem("div", { class: "footer-cont-box" });
    const footerImgBox = this.actions.createElem("div", { class: "footer-img-box" });
    const footerDevBox = this.actions.createElem("div", { class: "footer-dev-box" });

    const footerContHeading = this.actions.createElem("h3", { class: "heading footer-cont-heading" }, "Our Contacts:");

    const footerContLinkData = [
      { class: "paragraph footer-cont-mail-link", id: "footerContMailLink", href: "mailto:email@bookShop.com", cont: "email@bookShop.com" },
      { class: "paragraph footer-cont-phone-link", id: "footerContPhoneLink", href: "tel:+333 555 777", cont: "333 555 777" },
      { class: "paragraph footer-cont-telegram-link", id: "footerContTelegramLink", href: "https://telegram.me/BookShop", cont: "@BookShop" },
    ];

    const footerImg = this.actions.createElem("img", { class: "footer-img", src: footerImgData.src, alt: footerImgData.alt });
    const footerDevHubtLink = this.actions.createElem("a", { class: "paragraph footer-dev-hub-link", id: "footerDevHubLink", href: "https://github.com/DenViRus", target: "_blank" }, "DenViRus");
    const footerDevLogoLink = this.actions.createElem("a", { class: "footer-dev-logo-link", id: "footerDevLogoLink", href: "https://github.com/rolling-scopes-school/js-fe-course-en/tree/main/UpSkillMe", target: "_blank" });
    const footerDevLogoImg = this.actions.createElem("img", { class: "footer-dev-logo-img", src: pamLogoData.src, alt: pamLogoData.alt });

    this.actions.addEl(footerContBox, footerContHeading);

    for (const data of footerContLinkData) {
      const footerContLink = this.actions.createElem("a", { class: data.class, id: data.id, href: data.href, target: "_blank" }, data.cont);
      this.actions.addEl(footerContBox, footerContLink);
    }

    this.actions.addEl(footerImgBox, footerImg);

    this.actions.addEl(footerDevLogoLink, footerDevLogoImg);

    this.actions.addEl(footerDevBox, footerDevHubtLink, footerDevLogoLink);

    this.actions.addEl(footerRow, footerContBox, footerImgBox, footerDevBox);

    this.actions.addEl(footer, footerRow);

    return footer;
  }
}
