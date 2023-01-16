
export default class BSUtils {
  constructor(actions) {
    this.actions = actions;
    this.utilsUrl = './../../assets/json/utils.json';
    this.booksUrl = './../../assets/json/books.json';
  }

  async getUtils() {
    return this.utils = await this.actions.getDataReq(this.utilsUrl);
  }

  async getUtil(name) {
    return this.util = await this.actions.getDataReq(this.utilsUrl, name);
  }


  bsUtilsControl() {

  }

}