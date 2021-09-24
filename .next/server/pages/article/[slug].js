"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894,888];
exports.modules = {

/***/ 8875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react-markdown"
const external_react_markdown_namespaceObject = require("react-markdown");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
;// CONCATENATED MODULE: external "react-moment"
const external_react_moment_namespaceObject = require("react-moment");
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_namespaceObject);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(6347);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: ./components/seo.js
var components_seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(1422);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/article/[slug].js










const Article = ({
  article,
  categories
}) => {
  const imageUrl = (0,media/* getStrapiMedia */.$)(article.image);
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    categories: categories,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_seo/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "banner",
      className: "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
      "data-src": imageUrl,
      "data-srcset": imageUrl,
      "data-uk-img": true,
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: article.title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-container uk-container-small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
          source: article.content,
          escapeHtml: false
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "uk-divider-small"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-grid-small uk-flex-left",
          "data-uk-grid": "true",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: article.author.picture && /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
              image: article.author.picture
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-width-expand",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "uk-margin-remove-bottom",
              children: ["By ", article.author.name]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "uk-text-meta uk-margin-remove-top",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_moment_default()), {
                format: "MMM Do YYYY",
                children: article.published_at
              })
            })]
          })]
        })]
      })
    })]
  });
};

async function getStaticPaths() {
  const articles = await (0,api/* fetchAPI */.I)("/articles");
  return {
    paths: articles.map(article => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const articles = await (0,api/* fetchAPI */.I)(`/articles?slug=${params.slug}`);
  const categories = await (0,api/* fetchAPI */.I)("/categories");
  return {
    props: {
      article: articles[0],
      categories
    },
    revalidate: 1
  };
}
/* harmony default export */ const _slug_ = (Article);

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544,61,672,592], () => (__webpack_exec__(8875)));
module.exports = __webpack_exports__;

})();