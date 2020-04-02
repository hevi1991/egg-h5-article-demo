"use strict";

const Service = require("egg").Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert("article", params);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.select("article");
      return result;
    } catch (error) {
      return null;
    }
  }

  async detail(id) {
    if (!id) {
      console.log("id缺失");
    }
    try {
      const result = await this.app.mysql.get("article", { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = ArticleService;
