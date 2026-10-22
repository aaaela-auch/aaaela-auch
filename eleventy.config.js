const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
module.exports = function (cfg) {
  cfg.setLibrary("md", markdownIt({ html: true, breaks: true, linkify: true }));
  cfg.addPassthroughCopy("src/img");
  cfg.addPassthroughCopy("src/css");
  cfg.addPassthroughCopy("src/admin");
  cfg.addDataExtension("yml,yaml", c => yaml.load(c));
  cfg.addFilter("nl2br", s => (s || "").replace(/\n/g, "<br>"));
  return { dir: { input: "src", output: "_site" }, markdownTemplateEngine: false };
};
