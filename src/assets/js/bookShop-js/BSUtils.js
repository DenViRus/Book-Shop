export default class BSUtils {
  constructor(actions) {
    this.actions = actions;
    this.utilsUrl = "./../../assets/json/utils.json";
    this.booksUrl = "./../../assets/json/books.json";
  }

  async getUtils() {
    return (this.utils = await this.actions.getDataReq(this.utilsUrl));
  }

  async getUtil(id) {
    return (this.util = await this.actions.getDataReq(this.utilsUrl, id));
  }

  async getBooks() {
    return (this.books = [...(await this.actions.getDataReq(this.booksUrl))].map((item) => {
      item["id"] = item.title.replace(/\W/g, "").replace(/(.)\1+/g, "$1");
      item["count"] = 1;
      return item;
    }));
  }
}
