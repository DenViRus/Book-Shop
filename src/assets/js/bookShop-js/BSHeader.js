export default class BSHeader {
  constructor(box, utils, actions) {
    this.box = box;

    this.utils = utils;
    this.actions = actions;
  }

  async getHeader() {
    const header = this.actions.createElem('header', 'header', {id: 'header'});
    const headerRow = this.actions.createElem('div', 'row header-row');
    const headerLogoBox = this.actions.createElem('div', 'header-logo-box');
    const headerContBox = this.actions.createElem('div', 'header-cont-box');

    const headerLogo = this.actions.createElem('a', 'header-logo', {id: 'headerLogo', href: '#header'});
    const headerLogoImgBox = this.actions.createElem('div', 'header-logo-img-box');
    const headerNavBox = this.actions.createElem('div', 'header-nav-box');
    const headerHeading = this.actions.createElem('h1', 'heading header-heading', {}, 'Read Your Book!');


    const logoData = await this.utils.getUtil('bsLogo');

    const headerLogoImg = this.actions.createElem('img', 'header-logo-img', { src: logoData.src, alt: logoData.alt});

    const headerNav = this.actions.createElem('nav', 'header-nav', {id: 'headerNav'});
    const headerNavList = this.actions.createElem('ul', 'header-nav-list');

    const headerNavListItemData = [{cont: 'About Us', id: 'aboutUs', href: '#'}, {cont: 'Our Books', id: 'ourBooks', href: '#main'}, {cont: 'Contact Us', id: 'contactUs', href: '#footer'}]
    for (const data of headerNavListItemData) {
      const headerNavItem = this.actions.createElem('li', 'header-nav-item');
      const headerNavLink = this.actions.createElem('a', 'paragraph header-nav-link', {id: data.id, href: data.href}, data.cont);
      this.actions.addElem(headerNavLink, headerNavItem);
      this.actions.addElem(headerNavItem, headerNavList);
    }



    this.actions.addElem(headerLogoImg, headerLogoImgBox);
    this.actions.addElem(headerLogoImgBox, headerLogo);
    this.actions.addElem(headerLogo, headerLogoBox);



    this.actions.addElem(headerNavList, headerNav);
    this.actions.addElem(headerNav, headerNavBox);
    this.actions.addElem(headerNavBox, headerContBox);


    this.actions.addElem(headerHeading, headerContBox);



    this.actions.addElem(headerLogoBox, headerRow);
    this.actions.addElem(headerContBox, headerRow);

    this.actions.addElem(headerRow, header);

    this.actions.addElem(header, this.box);
    return header;
  }

  bsHeaderControl() {
    this.getHeader();

  }
}
