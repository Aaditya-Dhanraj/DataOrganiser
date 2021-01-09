module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/all_domain": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/all_domain/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./app/components/AppLink/index.js":
/*!*****************************************!*\
  !*** ./app/components/AppLink/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppLink = ({
  href,
  children
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, __jsx("a", null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLink);

/***/ }),

/***/ "./app/components/AppNotification/NotificationItem.js":
/*!************************************************************!*\
  !*** ./app/components/AppNotification/NotificationItem.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationItem = ({
  notification
}) => {
  const {
    icon,
    image,
    title,
    time
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-mr-3",
    alt: image,
    src: image
  }), __jsx("div", {
    className: "gx-media-body gx-align-self-center"
  }, __jsx("p", {
    className: "gx-fs-sm gx-mb-0"
  }, title), __jsx("i", {
    className: `icon icon-${icon} gx-pr-2`
  }), " ", __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/AppNotification/data.js":
/*!************************************************!*\
  !*** ./app/components/AppNotification/data.js ***!
  \************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  image: 'https://via.placeholder.com/150x150',
  title: "Stella Johnson has recently posted an album",
  time: "4:10 PM",
  icon: "thumb-up gx-text-blue"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Alex Brown has shared Martin Guptil's post",
  time: "5:18 PM",
  icon: "chat gx-text-grey"
}, {
  image: 'https://via.placeholder.com/640x420',
  title: "Domnic Brown has sent you a group invitation for Global Health",
  time: "5:36 PM",
  icon: "birthday text-info"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "John Smith has birthday today",
  time: "5:54 PM",
  icon: "birthday gx-text-warning"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Chris has updated his profile picture",
  time: "5:25 PM",
  icon: "profile gx-text-grey"
}];

/***/ }),

/***/ "./app/components/AppNotification/index.js":
/*!*************************************************!*\
  !*** ./app/components/AppNotification/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/AppNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/AppNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AppNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Notifications"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppNotification);

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx("img", {
  src: "/images/loader.svg",
  alt: "loader",
  style: {
    height: 60
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ "./app/components/MailNotification/NotificationItem.js":
/*!*************************************************************!*\
  !*** ./app/components/MailNotification/NotificationItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationItem = ({
  notification
}) => {
  const {
    image,
    badge,
    name,
    time,
    message
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx("div", {
    className: "gx-user-thumb gx-mr-3"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40",
    alt: image,
    src: image
  }), badge > 0 ? __jsx("span", {
    className: "gx-badge gx-badge-danger gx-text-white gx-rounded-circle"
  }, badge) : null), __jsx("div", {
    className: "gx-media-body"
  }, __jsx("div", {
    className: "gx-flex-row gx-justify-content-between gx-align-items-center"
  }, __jsx("h5", {
    className: "gx-text-capitalize gx-user-name gx-mb-0"
  }, __jsx("span", {
    className: "gx-link"
  }, name)), __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))), __jsx("p", {
    className: "gx-fs-sm"
  }, message), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-reply gx-pr-2"
  }), "Reply"), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-custom-view gx-pr-2"
  }), "Read")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/MailNotification/data.js":
/*!*************************************************!*\
  !*** ./app/components/MailNotification/data.js ***!
  \*************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  id: 1,
  image: "https://via.placeholder.com/150",
  name: "Domnic Brown",
  time: "6:19 PM",
  message: "There are many variations of passages of...",
  badge: 5
}, {
  id: 2,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "4:18 PM",
  message: "Lorem Ipsum is simply dummy text of the..."
}, {
  id: 3,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "7:10 PM",
  message: "The point of using Lorem Ipsum is that it has a...",
  badge: 8
}, {
  id: 4,
  image: "https://via.placeholder.com/150",
  name: "alex dolgove",
  time: "5:10 PM",
  message: "It is a long established fact that a reader will..."
}, {
  id: 5,
  image: "https://via.placeholder.com/150",
  name: "Domnic Harris",
  time: "7:35 PM",
  message: "All the Lorem Ipsum generators on the...",
  badge: 3
}];

/***/ }),

/***/ "./app/components/MailNotification/index.js":
/*!**************************************************!*\
  !*** ./app/components/MailNotification/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/MailNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/MailNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MailNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Messages"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailNotification);

/***/ }),

/***/ "./app/components/SearchBox/index.js":
/*!*******************************************!*\
  !*** ./app/components/SearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchBox = ({
  styleName,
  placeholder,
  onChange,
  value
}) => {
  return __jsx("div", {
    className: `gx-search-bar ${styleName}`
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    className: "ant-input",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), __jsx("span", {
    className: "gx-search-icon gx-pointer"
  }, __jsx("i", {
    className: "icon icon-search"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);
SearchBox.defaultProps = {
  styleName: "",
  value: ""
};

/***/ }),

/***/ "./app/components/UserInfo/index.js":
/*!******************************************!*\
  !*** ./app/components/UserInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Auth */ "./redux/actions/Auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const UserInfo = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const userMenuOptions = __jsx("ul", {
    className: "gx-user-popover"
  }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
    onClick: () => dispatch(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__["onLogout"])(router))
  }, "Logout"));

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: userMenuOptions,
    trigger: "click"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "/images/images/avatar/domnic-harris.png",
    className: "gx-avatar gx-pointer",
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./app/core/Customizer/index.js":
/*!**************************************!*\
  !*** ./app/core/Customizer/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React, {useState} from "react";
// import {Button, Drawer, Radio} from "antd";
// import {useDispatch, useSelector} from "react-redux";
// import CustomScrollbars from "../../../util/CustomScrollbars";
// import {setThemeType} from "../../../redux/actions/Setting";
//
// import {
//   BLUE,
//   BLUE_DARK_TEXT_COLOR,
//   BLUE_SEC,
//   DARK_BLUE,
//   DARK_BLUE_DARK_TEXT_COLOR,
//   DARK_BLUE_SEC,
//   DEEP_ORANGE,
//   DEEP_ORANGE_DARK_TEXT_COLOR,
//   DEEP_ORANGE_SEC,
//   LAYOUT_TYPE_BOXED,
//   LAYOUT_TYPE_FRAMED,
//   LAYOUT_TYPE_FULL,
//   LIGHT_BLUE,
//   LIGHT_BLUE_DARK_TEXT_COLOR,
//   LIGHT_BLUE_SEC,
//   LIGHT_PURPLE,
//   LIGHT_PURPLE_1,
//   LIGHT_PURPLE_1_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_1_SEC,
//   LIGHT_PURPLE_2,
//   LIGHT_PURPLE_2_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_2_SEC,
//   LIGHT_PURPLE_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_SEC,
//   NAV_STYLE_ABOVE_HEADER,
//   NAV_STYLE_BELOW_HEADER,
//   NAV_STYLE_DARK_HORIZONTAL,
//   NAV_STYLE_DEFAULT_HORIZONTAL,
//   NAV_STYLE_DRAWER,
//   NAV_STYLE_FIXED,
//   NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
//   NAV_STYLE_MINI_SIDEBAR,
//   NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
//   NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
//   ORANGE,
//   ORANGE_DARK_TEXT_COLOR,
//   ORANGE_SEC,
//   RED,
//   RED_DARK_TEXT_COLOR,
//   RED_SEC,
//   THEME_TYPE_DARK,
//   THEME_TYPE_LITE,
//   THEME_TYPE_SEMI_DARK
// } from "../../../constants/ThemeSetting";
// import {onNavStyleChange} from "../../../redux/actions";
//
// const CustomizerSystem = () => {
//
//   const [isCustomizerOpened, setIsCustomizerOpened] = useState(false);
//   const dispatch = useDispatch();
//
//   const themeType = useSelector(({settings}) => settings.themeType);
//   const themeColor = useSelector(({settings}) => settings.themeColor);
//   const navStyle = useSelector(({settings}) => settings.navStyle);
//   const layoutType = useSelector(({settings}) => settings.layoutType);
//
//   console.log(" in  customizer", themeColor);
//
//   const handleColorChange = (filename) => {
//     // console.log("filename", filename);
//     // let link = document.createElement('link');
//     // link.type = 'text/css';
//     // link.rel = 'stylesheet';
//     // link.className = 'gx-style';
//     // link.href = `/css/${filename}.css`;
//
//     // setTimeout(() => {
//     //   const children = document.getElementsByClassName('gx-style');
//     //
//     //   if (children.length > 1) {
//     //     for (let index = 0; index < children.length; index++) {
//     //       if ((index + 1) < children.length) {
//     //         const child = children[index];
//     //         child.parentNode.removeChild(child);
//     //       }
//     //     }
//     //   }
//     // }, 10000);
//     // console.log("my link ",link);
//     // document.body.appendChild(link);
//     // dispatch(setThemeColor(filename));
//   };
//
//   const toggleCustomizer = () => {
//     setIsCustomizerOpened(!isCustomizerOpened);
//   };
//
//   const onThemeTypeChange = (e) => {
//     dispatch(setThemeType(e.target.value));
//   };
//
//   const onNavStyleChanges = (navStyle) => {
//     dispatch(onNavStyleChange(navStyle));
//   };
//
//   const getCustomizerContent = () => {
//
//     // if (themeType === THEME_TYPE_DARK) {
//     //   document.body.classList.add('dark-theme');
//     //   let link = document.createElement('link');
//     //   link.type = 'text/css';
//     //   link.rel = 'stylesheet';
//     //   link.href = "/css/dark_theme.css";
//     //   link.className = 'style_dark_theme';
//     //   document.body.appendChild(link);
//     // } else if (document.body.classList.contains('dark-theme')) {
//     //   document.body.classList.remove('dark-theme');
//     //   const children = document.getElementsByClassName('style_dark_theme');
//     //   if (children.length > 1) {
//     //     for (let index = 0; index < children.length; index++) {
//     //       if (index < children.length) {
//     //         const child = children[index];
//     //         child.parentNode.removeChild(child);
//     //       }
//     //     }
//     //   }
//     }
//
//     return <CustomScrollbars className="gx-customizer">
//       <div className="gx-customizer-item">
//         <h6 className="gx-mb-3 gx-text-uppercase">Theme</h6>
//         <Radio.Group value={themeType} onChange={onThemeTypeChange}>
//           <Radio.Button value={THEME_TYPE_LITE}>Lite</Radio.Button>
//           <Radio.Button value={THEME_TYPE_SEMI_DARK}>Semi Dark</Radio.Button>
//           <Radio.Button value={THEME_TYPE_DARK}>Dark</Radio.Button>
//         </Radio.Group>
//       </div>
//       <div className="gx-customizer-item">
//         {getPresetColors(themeColor)}
//       </div>
//
//       <h6 className="gx-mb-3 gx-text-uppercase">Nav Style</h6>
//
//       {getNavStyles(navStyle)}
//
//       <h6 className="gx-mb-3 gx-text-uppercase">Layout</h6>
//
//       {getLayoutsTypes(layoutType)}
//     </CustomScrollbars>
//   };
//
//   const handleThemeColor = (fileName) => {
//     // handleColorChange(fileName);
//   };
//
//   const handleLayoutTypes = (layoutType) => {
//     // dispatch(onLayoutTypeChange(layoutType));
//   };
//
//   const getPresetColors = (themeColor) => {
//     return <ul className="gx-color-option gx-list-inline">
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple")}
//           style={{backgroundColor: LIGHT_PURPLE_SEC, color: LIGHT_PURPLE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-light-purple ${themeColor === LIGHT_PURPLE && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("red")}
//           style={{backgroundColor: RED_SEC, color: RED_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-red ${themeColor === RED && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("blue")}
//           style={{backgroundColor: BLUE_SEC, color: BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-blue ${themeColor === BLUE && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("dark_blue")}
//           style={{backgroundColor: DARK_BLUE_SEC, color: DARK_BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-dark-blue ${themeColor === DARK_BLUE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("orange")}
//           style={{backgroundColor: ORANGE_SEC, color: ORANGE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-orange ${themeColor === ORANGE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_blue")}
//           style={{backgroundColor: LIGHT_BLUE_SEC, color: LIGHT_BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-light-blue ${themeColor === LIGHT_BLUE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("deep_orange")}
//           style={{backgroundColor: DEEP_ORANGE_SEC, color: DEEP_ORANGE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-deep-orange ${themeColor === DEEP_ORANGE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple_1")}
//           style={{
//             backgroundColor: LIGHT_PURPLE_1_SEC,
//             color: LIGHT_PURPLE_1_DARK_TEXT_COLOR
//           }}
//           className={`gx-link gx-color-light-purple1 ${themeColor === LIGHT_PURPLE_1 && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple_2")}
//           style={{
//             backgroundColor: LIGHT_PURPLE_2_SEC,
//             color: LIGHT_PURPLE_2_DARK_TEXT_COLOR
//           }}
//           className={`gx-link gx-color-light-purple2 ${themeColor === LIGHT_PURPLE_2 && 'active'}`}/>
//       </li>
//     </ul>
//   };
//
//   const getLayoutsTypes = (layoutType) => {
//     return <ul className="gx-layout-option gx-list-inline">
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_FRAMED)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_FRAMED && 'active'}`}>
//         <img src={('/images/layouts/framed.png')} alt='framed'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_FULL)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_FULL && 'active'}`}>
//         <img src={('/images/layouts/full width.png')} alt='full width'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_BOXED)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_BOXED && 'active'}`}>
//         <img src={('/images/layouts/boxed.png')} alt='boxed'/>
//         </span>
//       </li>
//     </ul>
//   };
//
//   const getNavStyles = (navStyle) => {
//     return <ul className="gx-nav-option gx-list-inline">
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_FIXED)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_FIXED && 'active'}`}>
//         <img src={('/images/layouts/fixed.png')} alt='fixed'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_MINI_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_MINI_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/mini sidebar.png')} alt='mini sidebar'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DRAWER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DRAWER && 'active'}`}>
//         <img src={('/images/layouts/drawer nav.png')} alt='drawer nav'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_NO_HEADER_MINI_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/no header mini sidebar.png')} alt='no hader mini sidebar'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/vertical no header.png')} alt='vertical no header'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DEFAULT_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DEFAULT_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/default horizontal.png')} alt='default horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DARK_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DARK_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/dark horizontal.png')} alt='dark horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_INSIDE_HEADER_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/inside header horizontal.png')} alt='inside header horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_BELOW_HEADER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_BELOW_HEADER && 'active'}`}>
//         <img src={('/images/layouts/below header.png')} alt='below header'/>
//         </span>
//       </li>
//
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_ABOVE_HEADER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_ABOVE_HEADER && 'active'}`}>
//         <img src={('/images/layouts/top to header.png')} alt='top to header'/>
//         </span>
//       </li>
//     </ul>
//   };
//
//   return (
//     <>
//       <Drawer
//         placement="right"
//         closable={false}
//         onClose={toggleCustomizer}
//         visible={isCustomizerOpened}>
//         {
//           getCustomizerContent()
//         }
//       </Drawer>
//       <div className="gx-customizer-option">
//         <Button type="primary" onClick={toggleCustomizer}>
//           <i className="icon icon-setting fxicon-hc-spin gx-d-block"/>
//         </Button>
//       </div>
//     </>
//   );
// };
//
// export default CustomizerSystem;


const Index = () => {
  return __jsx("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./app/core/Layout/index.js":
/*!**********************************!*\
  !*** ./app/core/Layout/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sidebar */ "./app/core/Sidebar/index.js");
/* harmony import */ var _Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/HorizontalDefault */ "./app/core/Topbar/HorizontalDefault/index.js");
/* harmony import */ var _Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Topbar/HorizontalDark */ "./app/core/Topbar/HorizontalDark/index.js");
/* harmony import */ var _Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Topbar/InsideHeader */ "./app/core/Topbar/InsideHeader/index.js");
/* harmony import */ var _Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Topbar/AboveHeader */ "./app/core/Topbar/AboveHeader/index.js");
/* harmony import */ var _Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Topbar/BelowHeader */ "./app/core/Topbar/BelowHeader/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Topbar */ "./app/core/Topbar/index.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/config */ "./util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Topbar/NoHeaderNotification */ "./app/core/Topbar/NoHeaderNotification/index.js");
/* harmony import */ var _lngProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lngProvider */ "./lngProvider/index.js");
/* harmony import */ var _Customizer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Customizer */ "./app/core/Customizer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const {
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const AppLayout = ({
  children
}) => {
  const {
    themeType,
    locale,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings);

  const getContainerClass = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DARK_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_BELOW_HEADER"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_ABOVE_HEADER"]:
        return "gx-container-wrap";

      default:
        return '';
    }
  };

  const getNavStyles = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return __jsx(_Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_5__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DARK_HORIZONTAL"]:
        return __jsx(_Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_6__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return __jsx(_Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_ABOVE_HEADER"]:
        return __jsx(_Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_BELOW_HEADER"]:
        return __jsx(_Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_FIXED"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DRAWER"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_MINI_SIDEBAR"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
        return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
        return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      default:
        return null;
    }
  };

  let bodyClass = "";

  if (themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["THEME_TYPE_DARK"]) {
    bodyClass = "dark-theme";
  }

  const currentAppLocale = _lngProvider__WEBPACK_IMPORTED_MODULE_14__["default"][locale.locale];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["ConfigProvider"], {
    locale: currentAppLocale.antd
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: `gx-app-layout ${bodyClass}`
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, getNavStyles(navStyle), __jsx(Content, {
    className: `gx-layout-content ${getContainerClass(navStyle)}`
  }, __jsx("div", {
    className: "gx-main-content-wrapper"
  }, children), __jsx(Footer, null, __jsx("div", {
    className: "gx-layout-footer-content"
  }, _util_config__WEBPACK_IMPORTED_MODULE_11__["footerText"])))), __jsx(_Customizer__WEBPACK_IMPORTED_MODULE_15__["default"], null))));
};

const mapStateToProps = ({
  settings
}) => {
  const {
    width,
    themeType,
    layoutType,
    navStyle,
    locale
  } = settings;
  return {
    width,
    themeType,
    layoutType,
    navStyle,
    locale
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(AppLayout));

/***/ }),

/***/ "./app/core/Sidebar/AppsNavigation.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/AppsNavigation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppsNavigation = () => __jsx("ul", {
  className: "gx-app-nav"
}, __jsx("li", null, __jsx("i", {
  className: "icon icon-search-new"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-notification"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-chat-new"
})));

/* harmony default export */ __webpack_exports__["default"] = (AppsNavigation);

/***/ }),

/***/ "./app/core/Sidebar/SidebarContent.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/SidebarContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLogo */ "./app/core/Sidebar/SidebarLogo.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ "./app/core/Sidebar/UserProfile.js");
/* harmony import */ var _AppsNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppsNavigation */ "./app/core/Sidebar/AppsNavigation.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup;

const SidebarContent = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  let {
    navStyle,
    themeType,
    pathname
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(({
    settings
  }) => settings);

  const getNoHeaderClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
      return "gx-no-header-notifications";
    }

    return "";
  };

  const getNavStyleSubMenuClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
      return "gx-no-header-submenu-popup";
    }

    return "";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["setPathName"])(router.pathname));
  }, [router.pathname]);
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "gx-sidebar-content"
  }, __jsx("div", {
    className: `gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`
  }, __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_AppsNavigation__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-layout-sider-scrollbar"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["THEME_TYPE_LITE"] ? "lite" : "dark",
    mode: "inline"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "all_domain"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/all_domain"
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("i", {
    className: "icon icon-dasbhoard"
  }), "Domain List")))))));
};

SidebarContent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./app/core/Sidebar/SidebarLogo.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/SidebarLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SidebarLogo = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    width,
    themeType,
    navCollapsed
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings);
  let navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);

  if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] && navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
    navStyle = _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"];
  }

  return __jsx("div", {
    className: "gx-layout-sider-header"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? __jsx("div", {
    className: "gx-linebar"
  }, __jsx("i", {
    className: `gx-icon-btn icon icon-${navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? 'menu-unfold' : 'menu-fold'} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? 'gx-text-white' : ''}`,
    onClick: () => {
      if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"]));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]));
      }
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "gx-site-logo"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] && width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] ? __jsx("img", {
    alt: "lo",
    src: "/images/w-logo.png"
  }) : themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? __jsx("img", {
    alt: "logo1",
    src: "/images/logo-white.png"
  }) : __jsx("img", {
    alt: "logo2",
    src: "/images/logo.png"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarLogo);

/***/ }),

/***/ "./app/core/Sidebar/UserProfile.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/UserProfile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Auth */ "./redux/actions/Auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const userMenuOptions = __jsx("ul", {
    className: "gx-user-popover"
  }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
    onClick: () => dispatch(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__["onLogout"])(route))
  }, "Logout"));

  return __jsx("div", {
    className: "gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    placement: "bottomRight",
    content: userMenuOptions,
    trigger: "click"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "/images/avatar/domnic-harris.png",
    className: "gx-size-40 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("span", {
    className: "gx-avatar-name"
  }, "Rob Farnandies", __jsx("i", {
    className: "icon icon-chevron-down gx-fs-xxs gx-ml-2"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./app/core/Sidebar/index.js":
/*!***********************************!*\
  !*** ./app/core/Sidebar/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarContent */ "./app/core/Sidebar/SidebarContent.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

const Sidebar = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    themeType,
    navCollapsed,
    width,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings);

  const onToggleCollapsedNav = () => {
    dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__["toggleCollapsedSideNav"])(!navCollapsed));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__["updateWindowWidth"])(window.innerWidth));
    });
  }, [dispatch]);
  let drawerStyle = "gx-collapsed-sidebar";

  if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"]) {
    drawerStyle = "";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
    drawerStyle = "gx-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }

  if ((navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }

  return __jsx(Sider, {
    className: `gx-app-sidebar ${drawerStyle} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-layout-sider-dark' : null}`,
    trigger: null,
    collapsed: width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? false : navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? "lite" : "dark",
    collapsible: true
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"] || width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: `gx-drawer-sidebar ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-drawer-sidebar-dark' : null}`,
    placement: "left",
    closable: false,
    onClose: onToggleCollapsedNav,
    visible: navCollapsed
  }, __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./app/core/Topbar/AboveHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/AboveHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Blog"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Apps"));

function handleMenuClick() {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AboveHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-above-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))), __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.login"
  })), __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.signUp"
  })))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      if (width <= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__["TAB_SIZE"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
      }
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboveHeader);

/***/ }),

/***/ "./app/core/Topbar/BelowHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/BelowHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const BelowHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BelowHeader);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDark/index.js":
/*!*************************************************!*\
  !*** ./app/core/Topbar/HorizontalDark/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HorizontalDark = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalDark);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDefault/index.js":
/*!****************************************************!*\
  !*** ./app/core/Topbar/HorizontalDefault/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HorizontalDefault = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      console.log("navCollapsed", !navCollapsed);
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo-white.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      z: true,
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalDefault);

/***/ }),

/***/ "./app/core/Topbar/HorizontalNav.js":
/*!******************************************!*\
  !*** ./app/core/Topbar/HorizontalNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _components_AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLink */ "./app/components/AppLink/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup;

const HorizontalNav = () => {
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const pathname = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.pathname);

  const getNavStyleSubMenuClass = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return "gx-menu-horizontal gx-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_BELOW_HEADER"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_ABOVE_HEADER"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";

      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    mode: "horizontal"
  }, __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "main",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "sidebar.main"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dashboard",
    title: __jsx("span", null, " ", __jsx("i", {
      className: "icon icon-dasbhoard"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "sidebar.dashboard"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "sample"
  }, __jsx(_components_AppLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/all_domain"
  }, __jsx("i", {
    className: "icon icon-crypto"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "sidebar.dashboard.crypto"
  }))))));
};

HorizontalNav.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalNav);

/***/ }),

/***/ "./app/core/Topbar/InsideHeader/index.js":
/*!***********************************************!*\
  !*** ./app/core/Topbar/InsideHeader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

const InsideHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};

const mapStateToProps = ({
  settings
}) => {
  const {
    locale,
    navCollapsed
  } = settings;
  return {
    locale,
    navCollapsed
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  toggleCollapsedSideNav: _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"],
  switchLanguage: _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"]
})(InsideHeader));

/***/ }),

/***/ "./app/core/Topbar/NoHeaderNotification/index.js":
/*!*******************************************************!*\
  !*** ./app/core/Topbar/NoHeaderNotification/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NoHeaderNotification = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  return __jsx("div", {
    className: "gx-no-header-horizontal"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx("div", {
    className: "gx-no-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-no-header-horizontal-top-center"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "app.announced"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoHeaderNotification);

/***/ }),

/***/ "./app/core/Topbar/index.js":
/*!**********************************!*\
  !*** ./app/core/Topbar/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const Topbar = () => {
  const {
    locale,
    width,
    navCollapsed,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings);
  const {
    searchText,
    setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_4__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx(Header, null, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_DRAWER"] || (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_MINI_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? __jsx("div", {
    className: "gx-linebar gx-mr-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer",
    src: "/images/w-logo.png"
  })), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    }),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  }))))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  }), __jsx("span", {
    className: "gx-pl-2 gx-language-name"
  }, locale.name), __jsx("i", {
    className: "icon icon-chevron-down gx-pl-2"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./app/core/Topbar/languageData.js":
/*!*****************************************!*\
  !*** ./app/core/Topbar/languageData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languageData = [{
  languageId: 'english',
  locale: 'en',
  name: 'English',
  icon: 'us'
}, {
  languageId: 'chinese',
  locale: 'zh',
  name: 'Chinese',
  icon: 'cn'
}, {
  languageId: 'spanish',
  locale: 'es',
  name: 'Spanish',
  icon: 'es'
}, {
  languageId: 'french',
  locale: 'fr',
  name: 'French',
  icon: 'fr'
}, {
  languageId: 'italian',
  locale: 'it',
  name: 'Italian',
  icon: 'it'
}, {
  languageId: 'saudi-arabia',
  locale: 'ar',
  name: 'Arabic',
  icon: 'sa'
}];
/* harmony default export */ __webpack_exports__["default"] = (languageData);

/***/ }),

/***/ "./app/hoc/securedPage/index.js":
/*!**************************************!*\
  !*** ./app/hoc/securedPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withData */ "./app/hoc/securedPage/withData.js");
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withLayout */ "./app/hoc/securedPage/withLayout.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(_withData__WEBPACK_IMPORTED_MODULE_1__["default"], _withLayout__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./app/hoc/securedPage/withData.js":
/*!*****************************************!*\
  !*** ./app/hoc/securedPage/withData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CircularProgress */ "./app/components/CircularProgress/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => props => {
  const {
    authUser,
    loadUser
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    auth
  }) => auth);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!authUser && !loadUser) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signin");
    }
  }, [authUser, loadUser]);
  if (!authUser || loadUser) return __jsx(_components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  return __jsx(ComposedComponent, props);
});

/***/ }),

/***/ "./app/hoc/securedPage/withLayout.js":
/*!*******************************************!*\
  !*** ./app/hoc/securedPage/withLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Layout */ "./app/core/Layout/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => props => __jsx(_core_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(ComposedComponent, props)));

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, SWITCH_LANGUAGE, FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SHOW_MESSAGE, HIDE_MESSAGE, ON_SHOW_LOADER, ON_HIDE_LOADER, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNIN_GOOGLE_USER, SIGNIN_GOOGLE_USER_SUCCESS, SIGNIN_FACEBOOK_USER, SIGNIN_FACEBOOK_USER_SUCCESS, SIGNIN_TWITTER_USER, SIGNIN_TWITTER_USER_SUCCESS, SIGNIN_GITHUB_USER, SIGNIN_GITHUB_USER_SUCCESS, SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNOUT_USER, SIGNOUT_USER_SUCCESS, INIT_URL, USER_TOKEN_SET, SET_AUTH_USER_DATA, UPDATE_LOAD_USER, GET_STICKY, NOTES_UPDATE, FETCH_ALL_NOTES_SUCCESS, UPDATE_ALL_NOTES_SUCCESS, GET_All_CONTACT_SUCCESS, ON_ADD_CONTACT_SUCCESS, UPDATE_CONTACT_SUCCESS, DELETE_CONTACT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_COLLAPSED_NAV", function() { return TOGGLE_COLLAPSED_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_WIDTH", function() { return WINDOW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LANGUAGE", function() { return SWITCH_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_START", function() { return FETCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUCCESS", function() { return FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ERROR", function() { return FETCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MESSAGE", function() { return SHOW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MESSAGE", function() { return HIDE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SHOW_LOADER", function() { return ON_SHOW_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_HIDE_LOADER", function() { return ON_HIDE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER", function() { return SIGNUP_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER_SUCCESS", function() { return SIGNUP_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GOOGLE_USER", function() { return SIGNIN_GOOGLE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GOOGLE_USER_SUCCESS", function() { return SIGNIN_GOOGLE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FACEBOOK_USER", function() { return SIGNIN_FACEBOOK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FACEBOOK_USER_SUCCESS", function() { return SIGNIN_FACEBOOK_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_TWITTER_USER", function() { return SIGNIN_TWITTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_TWITTER_USER_SUCCESS", function() { return SIGNIN_TWITTER_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GITHUB_USER", function() { return SIGNIN_GITHUB_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GITHUB_USER_SUCCESS", function() { return SIGNIN_GITHUB_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER", function() { return SIGNIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER_SUCCESS", function() { return SIGNIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT_USER", function() { return SIGNOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT_USER_SUCCESS", function() { return SIGNOUT_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_URL", function() { return INIT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TOKEN_SET", function() { return USER_TOKEN_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_USER_DATA", function() { return SET_AUTH_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOAD_USER", function() { return UPDATE_LOAD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STICKY", function() { return GET_STICKY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTES_UPDATE", function() { return NOTES_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_NOTES_SUCCESS", function() { return FETCH_ALL_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ALL_NOTES_SUCCESS", function() { return UPDATE_ALL_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_All_CONTACT_SUCCESS", function() { return GET_All_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_ADD_CONTACT_SUCCESS", function() { return ON_ADD_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTACT_SUCCESS", function() { return UPDATE_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CONTACT_SUCCESS", function() { return DELETE_CONTACT_SUCCESS; });
// Customizer const
const TOGGLE_COLLAPSED_NAV = 'TOGGLE_COLLAPSE_MENU';
const WINDOW_WIDTH = 'WINDOW-WIDTH';
const SWITCH_LANGUAGE = 'SWITCH-LANGUAGE'; //Contact Module const

const FETCH_START = 'fetch_start';
const FETCH_SUCCESS = 'fetch_success';
const FETCH_ERROR = 'fetch_error';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const ON_SHOW_LOADER = 'ON_SHOW_LOADER';
const ON_HIDE_LOADER = 'ON_HIDE_LOADER'; //Auth const

const SIGNUP_USER = 'SIGNUP_USER';
const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
const SIGNIN_GOOGLE_USER = 'SIGNIN_GOOGLE_USER';
const SIGNIN_GOOGLE_USER_SUCCESS = 'SIGNIN_GOOGLE_USER_SUCCESS';
const SIGNIN_FACEBOOK_USER = 'SIGNIN_FACEBOOK_USER';
const SIGNIN_FACEBOOK_USER_SUCCESS = 'SIGNIN_FACEBOOK_USER_SUCCESS';
const SIGNIN_TWITTER_USER = 'SIGNIN_TWITTER_USER';
const SIGNIN_TWITTER_USER_SUCCESS = 'SIGNIN_TWITTER_USER_SUCCESS';
const SIGNIN_GITHUB_USER = 'SIGNIN_GITHUB_USER';
const SIGNIN_GITHUB_USER_SUCCESS = 'signin_github_user_success';
const SIGNIN_USER = 'SIGNIN_USER';
const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
const SIGNOUT_USER = 'SIGNOUT_USER';
const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS';
const INIT_URL = 'INIT_URL';
const USER_TOKEN_SET = 'USER_TOKEN_SET';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const UPDATE_LOAD_USER = 'UPDATE_LOAD_USER'; //Sticky

const GET_STICKY = 'GET_STICKY';
const NOTES_UPDATE = 'NOTES_UPDATE';
const FETCH_ALL_NOTES_SUCCESS = 'FETCH_ALL_NOTES_SUCCESS';
const UPDATE_ALL_NOTES_SUCCESS = 'UPDATE_ALL_NOTES_SUCCESS'; //Contact

const GET_All_CONTACT_SUCCESS = 'GET_All_CONTACT_SUCCESS';
const ON_ADD_CONTACT_SUCCESS = 'ON_ADD_CONTACT_SUCCESS';
const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';

/***/ }),

/***/ "./constants/ThemeSetting.js":
/*!***********************************!*\
  !*** ./constants/ThemeSetting.js ***!
  \***********************************/
/*! exports provided: THEME_TYPE, THEME_TYPE_LITE, THEME_TYPE_DARK, THEME_TYPE_SEMI_DARK, THEME_COLOR_SELECTION, THEME_COLOR_SELECTION_PRESET, THEME_COLOR_SELECTION_CUSTOMIZE, HORIZONTAL_NAVIGATION, HORIZONTAL_MENU_POSITION, ABOVE_THE_HEADER, INSIDE_THE_HEADER, BELOW_THE_HEADER, VERTICAL_NAVIGATION, NAV_STYLE_MINI, LAYOUT_TYPE, SET_PATH_NAME, LAYOUT_TYPE_FRAMED, LAYOUT_TYPE_BOXED, LAYOUT_TYPE_FULL, NAV_STYLE, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, NAV_STYLE_DRAWER, NAV_STYLE_NO_HEADER_MINI_SIDEBAR, NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR, NAV_STYLE_DEFAULT_HORIZONTAL, NAV_STYLE_DARK_HORIZONTAL, NAV_STYLE_INSIDE_HEADER_HORIZONTAL, NAV_STYLE_BELOW_HEADER, NAV_STYLE_ABOVE_HEADER, LIGHT_PURPLE, LIGHT_PURPLE_SEC, LIGHT_PURPLE_NAV_DARK_BG, LIGHT_PURPLE_DARK_TEXT_COLOR, RED, RED_SEC, RED_NAV_DARK_BG, RED_DARK_TEXT_COLOR, BLUE, BLUE_SEC, BLUE_NAV_DARK_BG, BLUE_DARK_TEXT_COLOR, DARK_BLUE, DARK_BLUE_SEC, DARK_BLUE_NAV_DARK_BG, DARK_BLUE_DARK_TEXT_COLOR, ORANGE, ORANGE_SEC, ORANGE_NAV_DARK_BG, ORANGE_DARK_TEXT_COLOR, LIGHT_BLUE, LIGHT_BLUE_SEC, LIGHT_BLUE_NAV_DARK_BG, LIGHT_BLUE_DARK_TEXT_COLOR, DEEP_ORANGE, DEEP_ORANGE_SEC, DEEP_ORANGE_NAV_DARK_BG, DEEP_ORANGE_DARK_TEXT_COLOR, LIGHT_PURPLE_1, LIGHT_PURPLE_1_SEC, LIGHT_PURPLE_1_NAV_DARK_BG, LIGHT_PURPLE_1_DARK_TEXT_COLOR, LIGHT_PURPLE_2, LIGHT_PURPLE_2_SEC, LIGHT_PURPLE_2_NAV_DARK_BG, LIGHT_PURPLE_2_DARK_TEXT_COLOR, TAB_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE", function() { return THEME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_LITE", function() { return THEME_TYPE_LITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_DARK", function() { return THEME_TYPE_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_SEMI_DARK", function() { return THEME_TYPE_SEMI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION", function() { return THEME_COLOR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_PRESET", function() { return THEME_COLOR_SELECTION_PRESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_CUSTOMIZE", function() { return THEME_COLOR_SELECTION_CUSTOMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_NAVIGATION", function() { return HORIZONTAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_MENU_POSITION", function() { return HORIZONTAL_MENU_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOVE_THE_HEADER", function() { return ABOVE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSIDE_THE_HEADER", function() { return INSIDE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BELOW_THE_HEADER", function() { return BELOW_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL_NAVIGATION", function() { return VERTICAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI", function() { return NAV_STYLE_MINI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE", function() { return LAYOUT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PATH_NAME", function() { return SET_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FRAMED", function() { return LAYOUT_TYPE_FRAMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_BOXED", function() { return LAYOUT_TYPE_BOXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FULL", function() { return LAYOUT_TYPE_FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE", function() { return NAV_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_FIXED", function() { return NAV_STYLE_FIXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI_SIDEBAR", function() { return NAV_STYLE_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DRAWER", function() { return NAV_STYLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_MINI_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DEFAULT_HORIZONTAL", function() { return NAV_STYLE_DEFAULT_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DARK_HORIZONTAL", function() { return NAV_STYLE_DARK_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_INSIDE_HEADER_HORIZONTAL", function() { return NAV_STYLE_INSIDE_HEADER_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_BELOW_HEADER", function() { return NAV_STYLE_BELOW_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_ABOVE_HEADER", function() { return NAV_STYLE_ABOVE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_SEC", function() { return LIGHT_PURPLE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_NAV_DARK_BG", function() { return LIGHT_PURPLE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_SEC", function() { return RED_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_NAV_DARK_BG", function() { return RED_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_DARK_TEXT_COLOR", function() { return RED_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_SEC", function() { return BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_NAV_DARK_BG", function() { return BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_DARK_TEXT_COLOR", function() { return BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE", function() { return DARK_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_SEC", function() { return DARK_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_NAV_DARK_BG", function() { return DARK_BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_DARK_TEXT_COLOR", function() { return DARK_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE", function() { return ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_SEC", function() { return ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_NAV_DARK_BG", function() { return ORANGE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_DARK_TEXT_COLOR", function() { return ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE", function() { return LIGHT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_SEC", function() { return LIGHT_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_NAV_DARK_BG", function() { return LIGHT_BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_DARK_TEXT_COLOR", function() { return LIGHT_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE", function() { return DEEP_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_SEC", function() { return DEEP_ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_NAV_DARK_BG", function() { return DEEP_ORANGE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_DARK_TEXT_COLOR", function() { return DEEP_ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1", function() { return LIGHT_PURPLE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_SEC", function() { return LIGHT_PURPLE_1_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_NAV_DARK_BG", function() { return LIGHT_PURPLE_1_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_1_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2", function() { return LIGHT_PURPLE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_SEC", function() { return LIGHT_PURPLE_2_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_NAV_DARK_BG", function() { return LIGHT_PURPLE_2_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_2_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_SIZE", function() { return TAB_SIZE; });
// Customizer const
const THEME_TYPE = 'THEME_TYPE';
const THEME_TYPE_LITE = 'THEME_TYPE_LITE';
const THEME_TYPE_DARK = 'THEME_TYPE_DARK';
const THEME_TYPE_SEMI_DARK = 'THEME_TYPE_SEMI_DARK';
const THEME_COLOR_SELECTION = 'THEME_COLOR_SELECTION';
const THEME_COLOR_SELECTION_PRESET = 'THEME_COLOR_SELECTION_PRESET';
const THEME_COLOR_SELECTION_CUSTOMIZE = 'THEME_COLOR_SELECTION_CUSTOMIZE';
const HORIZONTAL_NAVIGATION = 'HORIZONTAL_NAVIGATION';
const HORIZONTAL_MENU_POSITION = 'HORIZONTAL_MENU_POSITION';
const ABOVE_THE_HEADER = 'ABOVE_THE_HEADER';
const INSIDE_THE_HEADER = 'INSIDE_THE_HEADER';
const BELOW_THE_HEADER = 'BELOW_THE_HEADER';
const VERTICAL_NAVIGATION = 'VERTICAL_NAVIGATION';
const NAV_STYLE_MINI = 'NAV_STYLE_MINI';
const LAYOUT_TYPE = 'LAYOUT_TYPE';
const SET_PATH_NAME = 'SET_PATH_NAME';
const LAYOUT_TYPE_FRAMED = 'LAYOUT_TYPE_FRAMED';
const LAYOUT_TYPE_BOXED = 'LAYOUT_TYPE_BOXED';
const LAYOUT_TYPE_FULL = 'LAYOUT_TYPE_FULL';
const NAV_STYLE = 'NAV_STYLE';
const NAV_STYLE_FIXED = 'NAV_STYLE_FIXED';
const NAV_STYLE_MINI_SIDEBAR = 'NAV_STYLE_MINI_SIDEBAR';
const NAV_STYLE_DRAWER = 'NAV_STYLE_DRAWER';
const NAV_STYLE_NO_HEADER_MINI_SIDEBAR = 'NAV_STYLE_NO_HEADER_MINI_SIDEBAR';
const NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR = 'NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR';
const NAV_STYLE_DEFAULT_HORIZONTAL = 'NAV_STYLE_DEFAULT_HORIZONTAL';
const NAV_STYLE_DARK_HORIZONTAL = 'NAV_STYLE_DARK_HORIZONTAL';
const NAV_STYLE_INSIDE_HEADER_HORIZONTAL = 'NAV_STYLE_INSIDE_HEADER_HORIZONTAL';
const NAV_STYLE_BELOW_HEADER = 'NAV_STYLE_BELOW_HEADER';
const NAV_STYLE_ABOVE_HEADER = 'NAV_STYLE_ABOVE_HEADER';
const LIGHT_PURPLE = '#8A2BE2';
const LIGHT_PURPLE_SEC = '#00B378';
const LIGHT_PURPLE_NAV_DARK_BG = '#32394F';
const LIGHT_PURPLE_DARK_TEXT_COLOR = '#9799AC';
const RED = '#FF2B7A';
const RED_SEC = '#00D9C9';
const RED_NAV_DARK_BG = '#3C3766';
const RED_DARK_TEXT_COLOR = '#878BAB';
const BLUE = '#3DA4E6';
const BLUE_SEC = '#FCB53B';
const BLUE_NAV_DARK_BG = '#444342';
const BLUE_DARK_TEXT_COLOR = '#AAA59A';
const DARK_BLUE = '#0469B9';
const DARK_BLUE_SEC = '#17BDE5';
const DARK_BLUE_NAV_DARK_BG = '#086880';
const DARK_BLUE_DARK_TEXT_COLOR = '#9DDAE9';
const ORANGE = '#F18805';
const ORANGE_SEC = '#F1D065';
const ORANGE_NAV_DARK_BG = '#272932';
const ORANGE_DARK_TEXT_COLOR = '#ABA895';
const LIGHT_BLUE = '#6A95FF';
const LIGHT_BLUE_SEC = '#59DCFF';
const LIGHT_BLUE_NAV_DARK_BG = '#1B2642';
const LIGHT_BLUE_DARK_TEXT_COLOR = '#92A2C8';
const DEEP_ORANGE = '#F87060';
const DEEP_ORANGE_SEC = '#70A288';
const DEEP_ORANGE_NAV_DARK_BG = '#08415C';
const DEEP_ORANGE_DARK_TEXT_COLOR = '#97B8C7';
const LIGHT_PURPLE_1 = '#A172E7';
const LIGHT_PURPLE_1_SEC = '#E14594';
const LIGHT_PURPLE_1_NAV_DARK_BG = '#182952';
const LIGHT_PURPLE_1_DARK_TEXT_COLOR = '#8288B4';
const LIGHT_PURPLE_2 = '#956FE7';
const LIGHT_PURPLE_2_SEC = '#64D7D6';
const LIGHT_PURPLE_2_NAV_DARK_BG = '#284C7C';
const LIGHT_PURPLE_2_DARK_TEXT_COLOR = '#5782BB';
const TAB_SIZE = 992;

/***/ }),

/***/ "./lngProvider/entries/ar_SA.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/ar_SA.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json");
var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'ar'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/en-US.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/en-US.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json");
var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const EnLang = {
  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'en-US'
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "./lngProvider/entries/es_ES.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/es_ES.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/ca_ES */ "antd/lib/locale-provider/ca_ES");
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json");
var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'es'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/fr_FR.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/fr_FR.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/fr_FR */ "antd/lib/locale-provider/fr_FR");
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json");
var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'fr-FR'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/it_IT.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/it_IT.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/it_IT */ "antd/lib/locale-provider/it_IT");
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json");
var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'it-IT'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/zh-Hans-CN.js":
/*!*******************************************!*\
  !*** ./lngProvider/entries/zh-Hans-CN.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json");
var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ZhLan = {
  messages: _objectSpread({}, _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__),
  antd: null,
  locale: 'zh-Hans-CN'
};
/* harmony default export */ __webpack_exports__["default"] = (ZhLan);

/***/ }),

/***/ "./lngProvider/index.js":
/*!******************************!*\
  !*** ./lngProvider/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "./lngProvider/entries/en-US.js");
/* harmony import */ var _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/zh-Hans-CN */ "./lngProvider/entries/zh-Hans-CN.js");
/* harmony import */ var _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entries/ar_SA */ "./lngProvider/entries/ar_SA.js");
/* harmony import */ var _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entries/it_IT */ "./lngProvider/entries/it_IT.js");
/* harmony import */ var _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries/es_ES */ "./lngProvider/entries/es_ES.js");
/* harmony import */ var _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries/fr_FR */ "./lngProvider/entries/fr_FR.js");






const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  zh: _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
  ar: _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__["default"],
  it: _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__["default"],
  es: _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__["default"],
  fr: _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "./lngProvider/locales/ar_SA.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/ar_SA.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.pickers, sidebar.notes, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"سيتم إصدار نسخة جديدة في 25 ديسمبر. ترّقب!\",\"sidebar.main\":\"الأساسية\",\"sidebar.dashboard\":\"لوحة القيادة\",\"sidebar.layouts\":\"تخطيطات\",\"sidebar.dashboard.crm\":\"إدارة علاقات العملاء\",\"sidebar.components\":\"المكونات\",\"sidebar.components.general\":\"جنرال لواء\",\"sidebar.general.button\":\"زر\",\"sidebar.general.icon\":\"أيقونة\",\"sidebar.components.navigation\":\"التنقل\",\"sidebar.navigation.affix\":\"لصق\",\"sidebar.navigation.breadcrumb\":\"التفصيلي\",\"sidebar.navigation.dropdown\":\"اسقاط\",\"sidebar.navigation.menu\":\"قائمة طعام\",\"sidebar.navigation.pagination\":\"ترقيم الصفحات\",\"sidebar.navigation.steps\":\"خطوات\",\"sidebar.components.dataEntry\":\"ادخال بيانات\",\"sidebar.dataEntry.autoComplete\":\"الإكمال التلقائي\",\"sidebar.dataEntry.checkbox\":\"مربع\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"منتقي التاريخ\",\"sidebar.dataEntry.form\":\"شكل\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"إدخال\",\"sidebar.dataEntry.mention\":\"أشير\",\"sidebar.dataEntry.rate\":\"معدل\",\"sidebar.dataEntry.radio\":\"راديو\",\"sidebar.dataEntry.switch\":\"مفتاح كهربائي\",\"sidebar.dataEntry.slider\":\"المنزلق\",\"sidebar.dataEntry.select\":\"تحديد\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"نقل\",\"sidebar.dataEntry.timePicker\":\"منتقي الوقت\",\"sidebar.dataEntry.upload\":\"تحميل\",\"sidebar.components.dataDisplay\":\"عرض البيانات\",\"sidebar.dataDisplay.avatar\":\"الصورة الرمزية\",\"sidebar.dataDisplay.badge\":\"شارة\",\"sidebar.dataDisplay.collapse\":\"انهدام\",\"sidebar.dataDisplay.carousel\":\"دائري\",\"sidebar.dataDisplay.card\":\"بطاقة\",\"sidebar.dataDisplay.calender\":\"التقويم\",\"sidebar.dataDisplay.list\":\"قائمة\",\"sidebar.dataDisplay.popover\":\"قائمة\",\"sidebar.dataDisplay.tree\":\"شجرة\",\"sidebar.dataDisplay.toolTips\":\"تلميحات\",\"sidebar.dataDisplay.timeLine\":\"الجدول الزمني\",\"sidebar.dataDisplay.tag\":\"بطاقة\",\"sidebar.dataDisplay.tabs\":\"علامات التبويب\",\"sidebar.dataDisplay.table\":\"الطاولة\",\"sidebar.components.feedBack\":\"ردود الفعل\",\"sidebar.feedBack.alert\":\"محزر\",\"sidebar.feedBack.modal\":\"شكلي\",\"sidebar.feedBack.message\":\"رسالة\",\"sidebar.feedBack.notification\":\"إعلام\",\"sidebar.feedBack.progress\":\"تقدم\",\"sidebar.feedBack.popConfirm\":\"البوب تأكيد\",\"sidebar.feedBack.spin\":\"غزل\",\"sidebar.components.other\":\"آخر\",\"sidebar.other.anchor\":\"مذيع الأخبار\",\"sidebar.other.backTop\":\"عودة أعلى\",\"sidebar.other.divider\":\"مقسم\",\"sidebar.widgets\":\"الحاجيات\",\"sidebar.metrics\":\"قياس\",\"sidebar.view\":\"رأي\",\"sidebar.view.basicTable\":\"الجدول الأساسي\",\"sidebar.view.dataTable\":\"جدول البيانات\",\"sidebar.extensions\":\"ملحقات\",\"sidebar.extensions.editior\":\"محرر\",\"sidebar.extensions.dragNDrop\":\"السحب والإسقاط\",\"sidebar.extensions.sweetAlert\":\"الحلو تنبيه\",\"sidebar.extensions.notification\":\"إعلام\",\"sidebar.extensions.reactDates\":\"رد فعل التواريخ\",\"sidebar.extensions.dropZone\":\"إسقاط المنطقة\",\"sidebar.googleMap\":\"خرائط جوجل\",\"sidebar.charts\":\"الرسوم البيانية\",\"sidebar.apps\":\"التطبيقات\",\"sidebar.mailApp\":\"تطبيق البريد\",\"sidebar.todoApp\":\"تودو التطبيق\",\"sidebar.contactsApp\":\"اتصالات التطبيق\",\"sidebar.chatApp\":\"تطبيق الدردشة\",\"sidebar.pickers\":\"جامعي\",\"sidebar.notes\":\"ملاحظات\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"التاريخ والوقت\",\"sidebar.pickers.colorPickers\":\"قارورة اللون\",\"sidebar.chart\":\"خريطة\",\"sidebar.chart.line\":\"خط الرسم البياني\",\"sidebar.chart.bar\":\"شريط الرسم البياني\",\"sidebar.chart.area\":\"مخطط المساحة\",\"sidebar.chart.composed\":\"الرسم البياني\",\"sidebar.chart.scatter\":\"مخطط مبعثر\",\"sidebar.chart.pie\":\"مخطط دائري\",\"sidebar.chart.radial\":\"مخطط نصف قطري\",\"sidebar.chart.radar\":\"مخطط الرادار\",\"sidebar.chart.tree\":\"مخطط شجرة\",\"sidebar.map\":\"خرائط جوجل\",\"sidebar.map.simple\":\"خرائط جوجل...\",\"sidebar.map.styled\":\"خريطة نصب\",\"sidebar.map.geoLocation\":\"الموقع الجغرافي\",\"sidebar.map.mapDirection\":\"خريطة الاتجاه\",\"sidebar.map.overlay\":\"تراكب الخريطة\",\"sidebar.map.kmLayer\":\"خريطة كم طبقة\",\"sidebar.map.popupInfo\":\"معلومات المنبثقة من الخريطة\",\"sidebar.map.trafficLayer\":\"خريطة حركة المرور\",\"sidebar.map.streetView\":\"منظر الشارع\",\"sidebar.map.eventListener\":\"مستمع الحدث\",\"sidebar.map.mapDrawing\":\"خريطة الرسم\",\"sidebar.map.mapClustering\":\"خريطة المجموعات\",\"sidebar.modules\":\"وحدات\",\"sidebar.calendar\":\"التقويم\",\"sidebar.calendar.basic\":\"الأساسية\",\"sidebar.calendar.cultures\":\"الثقافات\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"يظهر فجأة\",\"sidebar.calendar.rendering\":\"استدعاء\",\"sidebar.calendar.selectable\":\"اختيار\",\"sidebar.calendar.timeslots\":\"فتحات الوقت\",\"sidebar.mail.title\":\"بريد\",\"sidebar.mail.compose\":\"مؤلف موسيقى\",\"sidebar.mail.mailbox\":\"صندوق بريد\",\"sidebar.mail.filters\":\"مرشحات\",\"sidebar.mail.labels\":\"تسميات\",\"sidebar.eCommerce\":\"التجارة الإلكترونية\",\"sidebar.eCommerce.productList\":\"قائمة المنتجات\",\"sidebar.eCommerce.productGrid\":\"شبكة المنتج\",\"sidebar.extraComponents\":\"مكونات اضافية\",\"sidebar.inBuiltApp\":\"تطبيقات مدمجة\",\"sidebar.extraElements.callouts\":\"صرخ\",\"sidebar.extraElements.testimonials\":\"الشهادات - التوصيات\",\"sidebar.timeLine\":\"الجدول الزمني\",\"sidebar.timeLine.default\":\"افتراضي\",\"sidebar.timeLine.defaultwithIcons\":\"الافتراضي مع الرموز\",\"sidebar.timeLine.leftAligned\":\"اليسار الانحياز\",\"sidebar.extraElements.pricingTable\":\"جدول التسعير\",\"sidebar.customViews\":\"طرق عرض مخصصة\",\"sidebar.listType\":\"نوع القائمة\",\"sidebar.listType.extras\":\"إضافات\",\"sidebar.listType.plainListView\":\"عرض قائمة بسيطة\",\"sidebar.listType.withDivider\":\"قائمة بسيطة مع المفرق\",\"sidebar.listType.cardListView\":\"عرض قائمة البطاقات\",\"sidebar.extraPages.404\":\"404 خطأ الصفحة\",\"sidebar.extraPages.500\":\"500 خطأ الصفحة\",\"sidebar.extraPages\":\"صفحات اضافية\",\"app.userAuth\":\"مصادقة المستخدم\",\"app.userAuth.login\":\"تسجيل الدخول\",\"app.userAuth.signIn\":\"تسجيل الدخول\",\"app.userAuth.send\":\"إرسال\",\"app.userAuth.bySigning\":\"من خلال التسجيل ، يمكنك الاستفادة من الميزات الكاملة لخدماتنا.\",\"app.userAuth.or\":\"أو\",\"app.userAuth.forgotPassword\":\"هل نسيت كلمة المرور\",\"app.userAuth.forgot\":\"لا تقلق. استعادة كلمة المرور أمر سهل. فقط أخبرنا بالبريد الإلكتروني الذي قمت بالتسجيل به مع jumbo\",\"app.userAuth.signUp\":\"سجل\",\"app.userAuth.getAccount\":\"الحصول على حساب !!!\",\"app.userAuth.resetPassword\":\"إعادة ضبط كلمة المرور\",\"app.userAuth.reset\":\"إعادة تعيين\",\"app.userAuth.lockScreen\":\"اقفل الشاشة\",\"app.userAuth.unLock\":\"فتح\",\"appModule.enterPasswordUnlock\":\"أدخل كلمة المرور الخاصة بك لفتح الشاشة!\",\"appModule.enterPasswordReset\":\"أدخل كلمة مرور جديدة لحسابك\",\"appModule.loginSuccessfully\":\"تسجيل الدخول بنجاح\",\"appModule.password\":\"كلمه السر\",\"appModule.email\":\"البريد الإلكتروني\",\"appModule.name\":\"اسم\",\"appModule.phone\":\"هاتف\",\"appModule.designation\":\"تعيين\",\"appModule.regsiter\":\"تسجيل\",\"appModule.regsiterNow\":\"تسجيل رقم\",\"appModule.hvAccount\":\"لديك حساب\",\"appModule.createAccount\":\"انشئ حساب\",\"appModule.termAndCondition\":\"الشروط و الأحكام\",\"appModule.iAccept\":\"بالاشتراك ، أوافق\",\"todo\":\"لكى يفعل\",\"todo.addTask\":\"إضافة مهمة\",\"todo.all\":\"الكل\",\"todo.filters\":\"مرشحات\",\"todo.labels\":\"تسميات\",\"chat.selectUserChat\":\"اختر المستخدم لبدء الدردشة\",\"chat.selectContactChat\":\"حدد جهة اتصال لبدء الدردشة\",\"chat.chatUser\":\"دردشات\",\"chat.contacts\":\"جهات الاتصال\",\"chat.searchStartNewChat\":\"ابحث أو ابدأ محادثة جديدة\",\"chat.typeMessage\":\"اكتب واضغط على Enter لإرسال الرسالة\",\"chat.status\":\"انها حالة .... وليس يومياتك ...\",\"contact.saveContact\":\"حفظ الاتصال\",\"contact.addContact\":\"إضافة جهة اتصال\",\"contact.searchContact\":\"بحث الاتصال\",\"mail.mailbox\":\"صندوق بريد\",\"mail.compose\":\"مؤلف موسيقى\",\"mail.filters\":\"مرشحات\",\"mail.labels\":\"تسميات\",\"mail.title\":\"رسالة جديدة\",\"eCommerce.buyNow\":\"اشتري الآن\",\"eCommerce.addToCart\":\"أضف إلى السلة\",\"eCommerce.readMore\":\"اقرأ أكثر\",\"callouts.viewRange\":\"عرض النطاق\",\"callouts.basic\":\"الأساسية\",\"extraElements.callout\":\"عنصر إضافي\",\"testimonials.basic\":\"الأساسية\",\"testimonials.classic\":\"كلاسيكي\",\"testimonials.standard\":\"اساسي\",\"extraElements.testimonials\":\"الشهادات - التوصيات\",\"button.modify\":\"تعديل\",\"button.delete\":\"حذف\",\"pricingTable.basic\":\"الأساسية\",\"pricingTable.circle\":\"دائرة\",\"pricingTable.classic\":\"كلاسيكي\",\"pricingTable.dark\":\"داكن\",\"pricingTable.personal\":\"الشخصية\",\"pricingTable.easyTranslation\":\"الترجمة السهلة\",\"pricingTable.awesomeGoogleFonts\":\"رائع جوجل الخطوط\",\"pricingTable.hotelBookingSystem\":\"نظام حجز الفنادق\",\"pricingTable.emailComposeInterface\":\"البريد الإلكتروني تأليف واجهة\",\"pricingTable.locationFinderApp\":\"موقع الباحث عن التطبيق\",\"pricingTable.buyNow\":\"اشتري الآن\",\"pricingTable.business\":\"اعمال\",\"pricingTable.professional\":\"المحترفين\",\"button.yes\":\"نعم فعلا\",\"button.no\":\"لا\",\"extraPages.404Msg\":\"عفوًا ، حدث خطأ. الصفحة غير موجودة!\",\"extraPages.500Msg\":\"عذرا ، الخادم يذهب بشكل خاطئ\",\"extraPages.goHome\":\"الذهاب إلى المنزل\",\"extension.sweetAlerts\":\"تنبيهات حلوة\",\"sweetAlerts.basic\":\"الأساسية\",\"sweetAlerts.description\":\"مع الوصف\",\"sweetAlerts.success\":\"نجاح\",\"sweetAlerts.warning\":\"تحذير\",\"sweetAlerts.custom\":\"العادة\",\"sweetAlerts.htmlTag\":\"علامة Html\",\"sweetAlerts.prompt\":\"مستعجل\",\"sweetAlerts.itsBlue\":\"إنه أزرق!\",\"sweetAlerts.passwordPrompt\":\"كلمة المرور موجه\",\"sweetAlerts.customStyle\":\"نمط مخصص\",\"sweetAlerts.itPretty\":\"إنها جميلة ، أليس كذلك؟\",\"sweetAlerts.btnClicked\":\"لقد قمت بالنقر فوق الزر!\",\"sweetAlerts.youWillFind\":\"سوف تجد أنهم يصل!\",\"sweetAlerts.youWillNotAble\":\"لن تكون قادرًا على استرداد هذا الملف الوهمي!\",\"sweetAlerts.hereIsaMessage\":\"هنا رسالة!\",\"sweetAlerts.goodJob\":\"عمل جيد!\",\"sweetAlerts.yesDeleteIt\":\"نعم ، احذفها!\",\"sweetAlerts.areYouSure\":\"هل أنت واثق؟\",\"sweetAlerts.doYouLikeThumb\":\"هل تحب الإبهام؟\",\"sweetAlerts.anInput\":\"مدخلا!\",\"sweetAlerts.writeSomethingInteresting\":\"اكتب شيئًا مثيرًا للاهتمام:\",\"sweetAlerts.writeSomething\":\"أكتب شيئا\",\"sweetAlerts.youMustEnterPassword\":\"يجب عليك إدخال كلمة المرور الخاصة بك!\",\"sweetAlerts.enterPassword\":\"أدخل كلمة المرور\",\"extension.notification\":\"إعلام\",\"notification.infoMsg\":\"رسالة المعلومات\",\"notification.successMessage\":\"نجاح رسالة\",\"notification.warningMessage\":\"رسالة تحذير\",\"notification.closeAfter3000ms\":\"أغلق بعد 3000 مللي ثانية\",\"notification.errorMessage\":\"رسالة خطأ\",\"notification.titleHere\":\"العنوان هنا\",\"notification.clickMe\":\"انقر فوق لي!\",\"notification.info\":\"معلومات\",\"notification.success\":\"نجاح\",\"notification.warning\":\"تحذير\",\"notification.error\":\"خطأ\",\"sidebar.editors\":\"المحررين\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"محرر WYSIWYG\",\"picker.color.alpha\":\"الفا القاطنون\",\"picker.color.hue\":\"هيو جامعي\",\"picker.color.circle\":\"دائرة منتقي\",\"picker.color.compact\":\"القارضون المدمجة\",\"picker.color.block\":\"بلوك جامعي\",\"picker.color.chrome\":\"كروم المنتقون\",\"picker.color.github\":\"جيثب بيكرز\",\"picker.color.twitter\":\"قارعي التغريد\",\"picker.color.withRedux\":\"مع Redux\",\"picker.color.sketch\":\"صانعي رسم\",\"picker.color.material\":\"جامعي المواد\",\"picker.color.slider\":\"المتزلجون جامعي\",\"picker.color.basic\":\"القتلة الأساسيين\",\"picker.color.basicToggle\":\"تبديل الأساسي\",\"picker.color.custom\":\"جامعي مخصص\",\"picker.color.customPointer\":\"مؤشر مخصص\",\"picker.color.photoshop\":\"قارورة فوتوشوب\",\"picker.color.swatches\":\"حوامل المنتزعون\",\"picker.color.basicPositioning\":\"المواقع الأساسية\",\"sidebar.documents\":\"مستندات\",\"sidebar.documents.changelog\":\"التغيير\",\"sidebar.documents.installation\":\"التركيب\",\"sidebar.dashboard.listing\":\"قائمة\",\"sidebar.dashboard.crypto\":\"التشفير\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"مع الرسوم المتحركة\",\"sidebar.map.curved.lines\":\"مع الخطوط المنحنية\",\"sidebar.map.zooming.countries\":\"البلدان التكبير\",\"sidebar.map.patterns\":\"خريطة مع أنماط\",\"sidebar.map.capitals.map\":\"خريطة العواصم\",\"sidebar.map.markers\":\"علامات الخريطة\",\"sidebar.map.flight.routes\":\"رحلات الطيران\",\"sidebar.map.choropleth\":\"خريطة الحرارة\",\"sidebar.map.grouped.countries\":\"الدول المتجمعة\",\"sidebar.map.bubbles\":\"خريطة مع فقاعات\",\"sidebar.map.drill.down\":\"حفر أسفل الخريطة\",\"sidebar.map.multiple.areas\":\"مجالات متعددة\",\"sidebar.map.weather\":\"خريطة الطقس\",\"sidebar.extensions.shuffle\":\"خلط\",\"sidebar.extensions.profile\":\"الملف الشخصي\",\"sidebar.social\":\"التطبيقات الاجتماعية\"}");

/***/ }),

/***/ "./lngProvider/locales/en_US.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/en_US.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.wall, sidebar.notes, sidebar.crud, sidebar.pickers, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.map, sidebar.algolia, sidebar.firebase.crud, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"A new version will be released on December 25th. Stay tuned!\",\"sidebar.main\":\"Main\",\"sidebar.dashboard\":\"Dashboard\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Components\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Button\",\"sidebar.general.icon\":\"Icon\",\"sidebar.components.navigation\":\"Navigation\",\"sidebar.navigation.affix\":\"Affix\",\"sidebar.navigation.breadcrumb\":\"Breadcrumb\",\"sidebar.navigation.dropdown\":\"Dropdown\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Steps\",\"sidebar.components.dataEntry\":\"Data Entry\",\"sidebar.dataEntry.autoComplete\":\"AutoComplete\",\"sidebar.dataEntry.checkbox\":\"Checkbox\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Datepicker\",\"sidebar.dataEntry.form\":\"Form\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Input\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Rate\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Switch\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Select\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfer\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Upload\",\"sidebar.components.dataDisplay\":\"Data Display\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Collapse\",\"sidebar.dataDisplay.carousel\":\"Carousel\",\"sidebar.dataDisplay.card\":\"Card\",\"sidebar.dataDisplay.calender\":\"Calender\",\"sidebar.dataDisplay.list\":\"List\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Tree\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Timeline\",\"sidebar.dataDisplay.tag\":\"Tag\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Feedback\",\"sidebar.feedBack.alert\":\"Alert\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Progress\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Spin\",\"sidebar.components.other\":\"Other\",\"sidebar.other.anchor\":\"Anchor\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divider\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Metrics\",\"sidebar.view\":\"View\",\"sidebar.view.basicTable\":\"Basic Table\",\"sidebar.view.dataTable\":\"Data Table\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Editior\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"React Dates\",\"sidebar.extensions.dropZone\":\"Drop Zone\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Charts\",\"sidebar.apps\":\"Apps\",\"sidebar.mailApp\":\"Mail App\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"Chat App\",\"sidebar.wall\":\"Wall App\",\"sidebar.notes\":\"Notes\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers\":\"Pickers\",\"sidebar.pickers.dateTimePickers\":\"Date & Time Pickers\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Chart\",\"sidebar.chart.line\":\"Line Chart\",\"sidebar.chart.bar\":\"Bar Chart\",\"sidebar.chart.area\":\"Area Chart\",\"sidebar.chart.composed\":\"Composed Chart\",\"sidebar.chart.scatter\":\"Scatter Chart\",\"sidebar.chart.pie\":\"Pie Chart\",\"sidebar.chart.radial\":\"Radial Chart\",\"sidebar.chart.radar\":\"Radar Chart\",\"sidebar.chart.tree\":\"Tree Chart\",\"sidebar.map.simple\":\"Simple Map\",\"sidebar.map.styled\":\"Styled Map\",\"sidebar.map.geoLocation\":\"Geo Location\",\"sidebar.map.mapDirection\":\"Map Direction\",\"sidebar.map.overlay\":\"Map Overlay\",\"sidebar.map.kmLayer\":\"Map Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Map Traffic Layer\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Map Drawing\",\"sidebar.map.mapClustering\":\"Map Clustering\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendar\",\"sidebar.calendar.basic\":\"Basic\",\"sidebar.calendar.cultures\":\"Cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Popup\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"Selectable\",\"sidebar.calendar.timeslots\":\"Timeslots\",\"sidebar.mail.title\":\"Mail\",\"sidebar.mail.compose\":\"COMPOSE\",\"sidebar.mail.mailbox\":\"Mailbox\",\"sidebar.mail.filters\":\"Filters\",\"sidebar.mail.labels\":\"Labels\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Product List\",\"sidebar.eCommerce.productGrid\":\"Product Grid\",\"sidebar.extraComponents\":\"Extra Components\",\"sidebar.inBuiltApp\":\"In-built Apps\",\"sidebar.extraElements.callouts\":\"Callout\",\"sidebar.extraElements.testimonials\":\"Testimonials\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Default\",\"sidebar.timeLine.defaultwithIcons\":\"Default with Icons\",\"sidebar.timeLine.leftAligned\":\"Left Aligned\",\"sidebar.extraElements.pricingTable\":\"Pricing Table\",\"sidebar.customViews\":\"Custom Views\",\"sidebar.listType\":\"List Type\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Plain List View\",\"sidebar.listType.withDivider\":\"Plain List with Divider\",\"sidebar.listType.cardListView\":\"Cards List View\",\"sidebar.extraPages.404\":\"404 Error Page\",\"sidebar.extraPages.500\":\"500 Error Page\",\"sidebar.extraPages\":\"Extra Pages\",\"app.userAuth\":\"User Auth\",\"app.userAuth.login\":\"Login\",\"app.userAuth.signIn\":\"Sign In\",\"app.userAuth.send\":\"SEND\",\"app.userAuth.bySigning\":\"By Signing Up, you can avail full features of our services.\",\"app.userAuth.or\":\"or\",\"app.userAuth.forgotPassword\":\"Forgot Password\",\"app.userAuth.forgot\":\"Don't worry. Recovering the password is easy.Just tell us the email you have registered with jumbo\",\"app.userAuth.signUp\":\"Sign Up\",\"app.userAuth.getAccount\":\"Get an account !!!\",\"app.userAuth.resetPassword\":\"Reset Password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Lock Screen\",\"app.userAuth.unLock\":\"UNLOCK\",\"appModule.enterPasswordUnlock\":\"Enter your password to unlock the screen!\",\"appModule.enterPasswordReset\":\"Enter a new password for your account\",\"appModule.loginSuccessfully\":\"Login Successfully\",\"appModule.password\":\"Password\",\"appModule.email\":\"Email\",\"appModule.name\":\"Name\",\"appModule.phone\":\"Phone\",\"appModule.designation\":\"Designation\",\"appModule.regsiter\":\"Regsiter\",\"appModule.regsiterNow\":\"Regsiter No\",\"appModule.hvAccount\":\"Have an account\",\"appModule.createAccount\":\"Create an account\",\"appModule.termAndCondition\":\"Term & Condition\",\"appModule.iAccept\":\"by signing up, I accept\",\"todo\":\"To-Do\",\"todo.addTask\":\"ADD TASK\",\"todo.all\":\"All\",\"todo.filters\":\"Filters\",\"todo.labels\":\"Labels\",\"chat.selectUserChat\":\"Select User to start Chat\",\"chat.selectContactChat\":\"Select contact to start Chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Search or start new chat\",\"chat.typeMessage\":\"Type and hit enter to send message\",\"chat.status\":\"it's a status....not your diary...\",\"contact.saveContact\":\"Save Contact\",\"contact.addContact\":\"Add Contact\",\"contact.searchContact\":\"Search contact\",\"mail.mailbox\":\"Mailbox\",\"mail.compose\":\"COMPOSE\",\"mail.filters\":\"Filters\",\"mail.labels\":\"Labels\",\"mail.title\":\"New Message\",\"eCommerce.buyNow\":\"Buy Now\",\"eCommerce.addToCart\":\"Add To Cart\",\"eCommerce.readMore\":\"Read More\",\"callouts.viewRange\":\"VIEW RANGE\",\"callouts.basic\":\"Basic\",\"extraElements.callout\":\"Extra Element\",\"testimonials.basic\":\"Basic\",\"testimonials.classic\":\"Classic\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonials\",\"button.modify\":\"Modify\",\"button.delete\":\"Delete\",\"pricingTable.basic\":\"Basic\",\"pricingTable.circle\":\"Circle\",\"pricingTable.classic\":\"Classic\",\"pricingTable.dark\":\"Dark\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Easy Translation\",\"pricingTable.awesomeGoogleFonts\":\"Awesome Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Hotel Booking System\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"buy now\",\"pricingTable.business\":\"BUSINESS\",\"pricingTable.professional\":\"PROFESSIONAL\",\"button.yes\":\"Yes\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Oops, an error has occurred. Page not found!\",\"extraPages.500Msg\":\"Sorry, server goes wrong\",\"extraPages.goHome\":\"Go to Home\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"Basic\",\"sweetAlerts.description\":\"With Description\",\"sweetAlerts.success\":\"Success\",\"sweetAlerts.warning\":\"Warning\",\"sweetAlerts.custom\":\"Custom\",\"sweetAlerts.htmlTag\":\"Html Tag\",\"sweetAlerts.prompt\":\"Prompt\",\"sweetAlerts.itsBlue\":\"It's Green!\",\"sweetAlerts.passwordPrompt\":\"Password Prompt\",\"sweetAlerts.customStyle\":\"Custom Style\",\"sweetAlerts.itPretty\":\"It's pretty, isn't it?\",\"sweetAlerts.btnClicked\":\"You clicked the button!\",\"sweetAlerts.youWillFind\":\"You will find they are up!\",\"sweetAlerts.youWillNotAble\":\"You will not be able to recover this imaginary file!\",\"sweetAlerts.hereIsaMessage\":\"Here's a message!\",\"sweetAlerts.goodJob\":\"Good job!\",\"sweetAlerts.yesDeleteIt\":\"Yes, delete it!\",\"sweetAlerts.areYouSure\":\"Are you sure?\",\"sweetAlerts.doYouLikeThumb\":\"Do you like thumbs?\",\"sweetAlerts.anInput\":\"An input!\",\"sweetAlerts.writeSomethingInteresting\":\"Write something interesting:\",\"sweetAlerts.writeSomething\":\"Write something\",\"sweetAlerts.youMustEnterPassword\":\"You must enter your password!\",\"sweetAlerts.enterPassword\":\"Enter Password\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Info message\",\"notification.successMessage\":\"Success message\",\"notification.warningMessage\":\"Warning message\",\"notification.closeAfter3000ms\":\"Close after 3000ms\",\"notification.errorMessage\":\"Error message\",\"notification.titleHere\":\"Title here\",\"notification.clickMe\":\"Click me!\",\"notification.info\":\"Info\",\"notification.success\":\"Success\",\"notification.warning\":\"Warning\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSISWYG Editor\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Hue Pickers\",\"picker.color.circle\":\"Circle Pickers\",\"picker.color.compact\":\"Compact Pickers\",\"picker.color.block\":\"Block Pickers\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Twitter Pickers\",\"picker.color.withRedux\":\"With Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Material Pickers\",\"picker.color.slider\":\"Slider Pickers\",\"picker.color.basic\":\"Basic Pickers\",\"picker.color.basicToggle\":\"Basic Toggle\",\"picker.color.custom\":\"Custom Pickers\",\"picker.color.customPointer\":\"Custom Pointer\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Swatches Pickers\",\"picker.color.basicPositioning\":\"Basic Positioning\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.map\":\"Map\",\"sidebar.algolia\":\"Algolia\",\"sidebar.firebase.crud\":\"Firebase Curd\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"With Animations\",\"sidebar.map.curved.lines\":\"With Curved Lines\",\"sidebar.map.zooming.countries\":\"Zooming Countries\",\"sidebar.map.patterns\":\"Map With Patterns\",\"sidebar.map.capitals.map\":\"Capitals Map\",\"sidebar.map.markers\":\"Map Markers\",\"sidebar.map.flight.routes\":\"Flight Routes\",\"sidebar.map.choropleth\":\"Heat Map\",\"sidebar.map.grouped.countries\":\"Grouped Countries\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Multiple Areas\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Shuffle\",\"sidebar.extensions.profile\":\"Profile\",\"sidebar.social\":\"Social Apps\"}");

/***/ }),

/***/ "./lngProvider/locales/es_ES.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/es_ES.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Se lanzará una nueva versión el 25 de diciembre. ¡Manténganse al tanto!\",\"sidebar.main\":\"Principal\",\"sidebar.dashboard\":\"Tablero\",\"sidebar.layouts\":\"Diseños\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Componentes\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Botón\",\"sidebar.general.icon\":\"Icono\",\"sidebar.components.navigation\":\"Navegación\",\"sidebar.navigation.affix\":\"Afijo\",\"sidebar.navigation.breadcrumb\":\"Migaja de pan\",\"sidebar.navigation.dropdown\":\"Desplegable\",\"sidebar.navigation.menu\":\"Menú\",\"sidebar.navigation.pagination\":\"Paginación\",\"sidebar.navigation.steps\":\"Pasos\",\"sidebar.components.dataEntry\":\"Entrada de datos\",\"sidebar.dataEntry.autoComplete\":\"Autocompletar\",\"sidebar.dataEntry.checkbox\":\"Caja\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Selector de fechas\",\"sidebar.dataEntry.form\":\"Formar\",\"sidebar.dataEntry.inputNumber\":\"Número de entrada\",\"sidebar.dataEntry.input\":\"Entrada\",\"sidebar.dataEntry.mention\":\"Mencionar\",\"sidebar.dataEntry.rate\":\"Tarifa\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Cambiar\",\"sidebar.dataEntry.slider\":\"Control deslizante\",\"sidebar.dataEntry.select\":\"Seleccionar\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transferir\",\"sidebar.dataEntry.timePicker\":\"Selector de tiempo\",\"sidebar.dataEntry.upload\":\"Subir\",\"sidebar.components.dataDisplay\":\"Visualización de datos\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Colapso\",\"sidebar.dataDisplay.carousel\":\"Carrusel\",\"sidebar.dataDisplay.card\":\"Tarjeta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Lista\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Árbol\",\"sidebar.dataDisplay.toolTips\":\"Información sobre herramientas\",\"sidebar.dataDisplay.timeLine\":\"Cronología\",\"sidebar.dataDisplay.tag\":\"Etiqueta\",\"sidebar.dataDisplay.tabs\":\"Pestañas\",\"sidebar.dataDisplay.table\":\"Mesa\",\"sidebar.components.feedBack\":\"Realimentación\",\"sidebar.feedBack.alert\":\"Alerta\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Mensaje\",\"sidebar.feedBack.notification\":\"Notificación\",\"sidebar.feedBack.progress\":\"Progreso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Girar\",\"sidebar.components.other\":\"Otro\",\"sidebar.other.anchor\":\"Ancla\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisor\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrica\",\"sidebar.view\":\"Ver\",\"sidebar.view.basicTable\":\"Tabla básica\",\"sidebar.view.dataTable\":\"Tabla de datos\",\"sidebar.extensions\":\"Extensiones\",\"sidebar.extensions.editior\":\"Editor\",\"sidebar.extensions.dragNDrop\":\"Arrastrar y soltar\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notificación\",\"sidebar.extensions.reactDates\":\"Fechas de reacción\",\"sidebar.extensions.dropZone\":\"Zona de descenso\",\"sidebar.googleMap\":\"Mapa de Google\",\"sidebar.charts\":\"Gráficos\",\"sidebar.apps\":\"Aplicaciones\",\"sidebar.mailApp\":\"Aplicación de correo\",\"sidebar.todoApp\":\"Aplicación de Todo\",\"sidebar.contactsApp\":\"Aplicación Contactos\",\"sidebar.chatApp\":\"Aplicación de chat\",\"sidebar.notes\":\"Notas\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Selector de fecha y hora\",\"sidebar.pickers.colorPickers\":\"Selector de color\",\"sidebar.chart\":\"Gráfico\",\"sidebar.chart.line\":\"Gráfico de linea\",\"sidebar.chart.bar\":\"Gráfico de barras\",\"sidebar.chart.area\":\"Carta de área\",\"sidebar.chart.composed\":\"Gráfico compuesto\",\"sidebar.chart.scatter\":\"Gráfico de dispersión\",\"sidebar.chart.pie\":\"Gráfico circular\",\"sidebar.chart.radial\":\"Gráfico radial\",\"sidebar.chart.radar\":\"Gráfico de radar\",\"sidebar.chart.tree\":\"Árbol de Carta\",\"sidebar.map\":\"Mapa de Google\",\"sidebar.map.simple\":\"Mapa simple\",\"sidebar.map.styled\":\"Mapa de estilo\",\"sidebar.map.geoLocation\":\"Ubicación geográfica\",\"sidebar.map.mapDirection\":\"Dirección del mapa\",\"sidebar.map.overlay\":\"Superposición de mapa\",\"sidebar.map.kmLayer\":\"Mapa Km Layer\",\"sidebar.map.popupInfo\":\"Mapa de información emergente\",\"sidebar.map.trafficLayer\":\"Mapa Traffic Layer\",\"sidebar.map.streetView\":\"vista de calle\",\"sidebar.map.eventListener\":\"Escucha del evento\",\"sidebar.map.mapDrawing\":\"Mapa de dibujo\",\"sidebar.map.mapClustering\":\"Agrupación de mapas\",\"sidebar.modules\":\"Módulos\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"BASIC\",\"sidebar.calendar.cultures\":\"Culturas\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Surgir\",\"sidebar.calendar.rendering\":\"Representación\",\"sidebar.calendar.selectable\":\"Seleccionable\",\"sidebar.calendar.timeslots\":\"Ranuras de tiempo\",\"sidebar.mail.title\":\"Correo\",\"sidebar.mail.compose\":\"COMPONER\",\"sidebar.mail.mailbox\":\"Buzón\",\"sidebar.mail.filters\":\"filtros\",\"sidebar.mail.labels\":\"Etiquetas\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Lista de productos\",\"sidebar.eCommerce.productGrid\":\"Cuadrícula de producto\",\"sidebar.extraComponents\":\"Componentes extra\",\"sidebar.inBuiltApp\":\"Aplicaciones integradas\",\"sidebar.extraElements.callouts\":\"Gritar\",\"sidebar.extraElements.testimonials\":\"Testimonios\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Defecto\",\"sidebar.timeLine.defaultwithIcons\":\"Predeterminado con iconos\",\"sidebar.timeLine.leftAligned\":\"Alineado a la izquierda\",\"sidebar.extraElements.pricingTable\":\"Tabla de precios\",\"sidebar.customViews\":\"Vistas personalizadas\",\"sidebar.listType\":\"Tipo de lista\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vista de lista simple\",\"sidebar.listType.withDivider\":\"Lista simple con divisor\",\"sidebar.listType.cardListView\":\"Vista de lista de tarjetas\",\"sidebar.extraPages.404\":\"Página de error 404\",\"sidebar.extraPages.500\":\"500 página de error\",\"sidebar.extraPages\":\"Páginas extra\",\"app.userAuth\":\"Usuario Auth\",\"app.userAuth.login\":\"Iniciar sesión\",\"app.userAuth.signIn\":\"Registrarse\",\"app.userAuth.send\":\"ENVIAR\",\"app.userAuth.bySigning\":\"Al registrarse, puede aprovechar las características completas de nuestros servicios.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Se te olvidó tu contraseña\",\"app.userAuth.forgot\":\"No te preocupes Recuperar la contraseña es fácil. Simplemente díganos el correo electrónico que ha registrado con jumbo\",\"app.userAuth.signUp\":\"Regístrate\",\"app.userAuth.getAccount\":\"Obtener una cuenta !!!\",\"app.userAuth.resetPassword\":\"Restablecer la contraseña\",\"app.userAuth.reset\":\"REINICIAR\",\"app.userAuth.lockScreen\":\"Bloquear pantalla\",\"app.userAuth.unLock\":\"DESBLOQUEAR\",\"appModule.enterPasswordUnlock\":\"¡Ingresa tu contraseña para desbloquear la pantalla!\",\"appModule.enterPasswordReset\":\"Ingrese una nueva contraseña para su cuenta\",\"appModule.loginSuccessfully\":\"Iniciar sesión exitosamente\",\"appModule.password\":\"Contraseña\",\"appModule.email\":\"Email\",\"appModule.name\":\"Nombre\",\"appModule.phone\":\"Teléfono\",\"appModule.designation\":\"Designacion\",\"appModule.regsiter\":\"Registro\",\"appModule.regsiterNow\":\"Registrarse No\",\"appModule.hvAccount\":\"Tener una cuenta\",\"appModule.createAccount\":\"Crea una cuenta\",\"appModule.termAndCondition\":\"Término y condición\",\"appModule.iAccept\":\"registrándome, acepto\",\"todo\":\"Que hacer\",\"todo.addTask\":\"AGREGAR TAREA\",\"todo.all\":\"Todas\",\"todo.filters\":\"Filtros\",\"todo.labels\":\"Etiquetas\",\"chat.selectUserChat\":\"Seleccionar usuario para iniciar el chat\",\"chat.selectContactChat\":\"Seleccionar contacto para iniciar el chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contactos\",\"chat.searchStartNewChat\":\"Buscar o iniciar un chat nuevo\",\"chat.typeMessage\":\"Escribe y presiona enter para enviar el mensaje\",\"chat.status\":\"es un estado ... no es tu diario ...\",\"contact.saveContact\":\"Guardar contacto\",\"contact.addContact\":\"Agregar contacto\",\"contact.searchContact\":\"Buscar contacto\",\"mail.mailbox\":\"Buzón\",\"mail.compose\":\"COMPONER\",\"mail.filters\":\"Filtros\",\"mail.labels\":\"Etiquetas\",\"mail.title\":\"Nuevo mensaje\",\"eCommerce.buyNow\":\"Compra ahora\",\"eCommerce.addToCart\":\"AÑADIR A LA CESTA\",\"eCommerce.readMore\":\"LEE MAS\",\"callouts.viewRange\":\"VER RANGO\",\"callouts.basic\":\"BASIC\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"BASIC\",\"testimonials.classic\":\"Clásico\",\"testimonials.standard\":\"Estándar\",\"extraElements.testimonials\":\"Testimonios\",\"button.modify\":\"Modificar\",\"button.delete\":\"Borrar\",\"pricingTable.basic\":\"BASIC\",\"pricingTable.circle\":\"Circulo\",\"pricingTable.classic\":\"Clásico\",\"pricingTable.dark\":\"Oscuro\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Traducción fácil\",\"pricingTable.awesomeGoogleFonts\":\"Fuentes increíbles de Google\",\"pricingTable.hotelBookingSystem\":\"Sistema de reserva de hotel\",\"pricingTable.emailComposeInterface\":\"Interfaz de redacción de correo electrónico\",\"pricingTable.locationFinderApp\":\"Aplicación de buscador de ubicación\",\"pricingTable.buyNow\":\"Compra ahora...\",\"pricingTable.business\":\"NEGOCIO\",\"pricingTable.professional\":\"PROFESIONAL\",\"button.yes\":\"Sí\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Vaya, ha ocurrido un error. ¡Página no encontrada!\",\"extraPages.500Msg\":\"Lo siento, el servidor sale mal\",\"extraPages.goHome\":\"Ir a casa\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"BASIC\",\"sweetAlerts.description\":\"Con descripción\",\"sweetAlerts.success\":\"Éxito\",\"sweetAlerts.warning\":\"Advertencia\",\"sweetAlerts.custom\":\"Personalizado\",\"sweetAlerts.htmlTag\":\"Etiqueta Html\",\"sweetAlerts.prompt\":\"Rápido\",\"sweetAlerts.itsBlue\":\"¡Es azul!\",\"sweetAlerts.passwordPrompt\":\"Indicación de contraseña\",\"sweetAlerts.customStyle\":\"Estilo personalizado\",\"sweetAlerts.itPretty\":\"Es lindo, ¿verdad?\",\"sweetAlerts.btnClicked\":\"Hiciste clic en el botón!\",\"sweetAlerts.youWillFind\":\"¡Encontrarás que están listos!\",\"sweetAlerts.youWillNotAble\":\"¡No podrás recuperar este archivo imaginario!\",\"sweetAlerts.hereIsaMessage\":\"¡Aquí hay un mensaje!\",\"sweetAlerts.goodJob\":\"¡Buen trabajo!\",\"sweetAlerts.yesDeleteIt\":\"Sí, eliminarlo!\",\"sweetAlerts.areYouSure\":\"¿Estás seguro?\",\"sweetAlerts.doYouLikeThumb\":\"¿Te gustan los pulgares?\",\"sweetAlerts.anInput\":\"Una entrada!\",\"sweetAlerts.writeSomethingInteresting\":\"Escribe algo interesante:\",\"sweetAlerts.writeSomething\":\"Escribe algo\",\"sweetAlerts.youMustEnterPassword\":\"¡Debes ingresar tu contraseña!\",\"sweetAlerts.enterPassword\":\"Introducir la contraseña\",\"extension.notification\":\"Notificación\",\"notification.infoMsg\":\"Mensaje de información\",\"notification.successMessage\":\"Mensaje de éxito\",\"notification.warningMessage\":\"Mensaje de advertencia\",\"notification.closeAfter3000ms\":\"Cerrar después de 3000ms\",\"notification.errorMessage\":\"Mensaje de error\",\"notification.titleHere\":\"Título aquí\",\"notification.clickMe\":\"¡Haz click en mi!\",\"notification.info\":\"Información\",\"notification.success\":\"Éxito\",\"notification.warning\":\"Advertencia\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editores\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Editor WYSIWYG\",\"picker.color.alpha\":\"Recolectores alfa\",\"picker.color.hue\":\"Recogedores de tono\",\"picker.color.circle\":\"Seleccionadores de círculo\",\"picker.color.compact\":\"Selector compacto\",\"picker.color.block\":\"Selector de bloque\",\"picker.color.chrome\":\"Recogedores de Chrome\",\"picker.color.github\":\"Segadores Github\",\"picker.color.twitter\":\"Seleccionadores de Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Recogedores de bosquejos\",\"picker.color.material\":\"Recogedores de materiales\",\"picker.color.slider\":\"Seleccionadores de control deslizante\",\"picker.color.basic\":\"Selector básico\",\"picker.color.basicToggle\":\"Alternar básico\",\"picker.color.custom\":\"Recogedores personalizados\",\"picker.color.customPointer\":\"Puntero personalizado\",\"picker.color.photoshop\":\"Selector de Photoshop\",\"picker.color.swatches\":\"Selector de muestras\",\"picker.color.basicPositioning\":\"Posicionamiento Básico\",\"sidebar.documents\":\"Documentos\",\"sidebar.documents.changelog\":\"Registro de cambios\",\"sidebar.documents.installation\":\"Instalación\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animaciones\",\"sidebar.map.curved.lines\":\"Con líneas curvas\",\"sidebar.map.zooming.countries\":\"Zooming Países\",\"sidebar.map.patterns\":\"Mapa con patrones\",\"sidebar.map.capitals.map\":\"Mapa de capitales\",\"sidebar.map.markers\":\"Marcadores de mapa\",\"sidebar.map.flight.routes\":\"Rutas de vuelo\",\"sidebar.map.choropleth\":\"Mapa de calor\",\"sidebar.map.grouped.countries\":\"Países agrupados\",\"sidebar.map.bubbles\":\"Mapa con burbujas\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Áreas múltiples\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Barajar\",\"sidebar.extensions.profile\":\"Perfil\",\"sidebar.social\":\"Aplicaciones sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/fr_FR.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/fr_FR.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Une nouvelle version sortira le 25 décembre. Restez à l'écoute!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Tableau de bord\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Composants\",\"sidebar.components.general\":\"Général\",\"sidebar.general.button\":\"Bouton\",\"sidebar.general.icon\":\"Icône\",\"sidebar.components.navigation\":\"La navigation\",\"sidebar.navigation.affix\":\"Affixe\",\"sidebar.navigation.breadcrumb\":\"Miette de pain\",\"sidebar.navigation.dropdown\":\"Menu déroulant\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Pas\",\"sidebar.components.dataEntry\":\"La saisie des données\",\"sidebar.dataEntry.autoComplete\":\"Saisie semi-automatique\",\"sidebar.dataEntry.checkbox\":\"Case à cocher\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Sélecteur de date\",\"sidebar.dataEntry.form\":\"Forme\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Contribution\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Taux\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Commutateur\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Sélectionner\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfert\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Télécharger\",\"sidebar.components.dataDisplay\":\"Affichage des données\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Effondrer\",\"sidebar.dataDisplay.carousel\":\"Carrousel\",\"sidebar.dataDisplay.card\":\"Carte\",\"sidebar.dataDisplay.calender\":\"Calendrier\",\"sidebar.dataDisplay.list\":\"liste\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Arbre\",\"sidebar.dataDisplay.toolTips\":\"Info-bulles\",\"sidebar.dataDisplay.timeLine\":\"Chronologie\",\"sidebar.dataDisplay.tag\":\"Marque\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Retour d'information\",\"sidebar.feedBack.alert\":\"Alerte\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Le progrès\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Tourner\",\"sidebar.components.other\":\"Autre\",\"sidebar.other.anchor\":\"Ancre\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Diviseur\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrique\",\"sidebar.view\":\"Vue\",\"sidebar.view.basicTable\":\"Table de base\",\"sidebar.view.dataTable\":\"Tableau de données\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Éditeur\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Alerte douce\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"Réagissez les dates\",\"sidebar.extensions.dropZone\":\"Zone de largage\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Graphiques\",\"sidebar.apps\":\"applications\",\"sidebar.mailApp\":\"Application de messagerie\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"App chat\",\"sidebar.notes\":\"Remarques\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Sélecteurs de date et d'heure\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Graphique\",\"sidebar.chart.line\":\"Graphique en ligne\",\"sidebar.chart.bar\":\"Diagramme à bandes\",\"sidebar.chart.area\":\"Graphique de zone\",\"sidebar.chart.composed\":\"Tableau composé\",\"sidebar.chart.scatter\":\"Diagramme de dispersion\",\"sidebar.chart.pie\":\"Camembert\",\"sidebar.chart.radial\":\"Graphique radial\",\"sidebar.chart.radar\":\"Graphique radar\",\"sidebar.chart.tree\":\"Arbre\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Carte simple\",\"sidebar.map.styled\":\"Carte stylée\",\"sidebar.map.geoLocation\":\"Emplacement géographique\",\"sidebar.map.mapDirection\":\"Direction de la carte\",\"sidebar.map.overlay\":\"Superposition de carte\",\"sidebar.map.kmLayer\":\"Carte Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Couche routière\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Dessin de carte\",\"sidebar.map.mapClustering\":\"Clustering de carte\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendrier\",\"sidebar.calendar.basic\":\"De base\",\"sidebar.calendar.cultures\":\"Des cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparaitre\",\"sidebar.calendar.rendering\":\"Le rendu\",\"sidebar.calendar.selectable\":\"Sélectionnable\",\"sidebar.calendar.timeslots\":\"Tranches de temps\",\"sidebar.mail.title\":\"Courrier\",\"sidebar.mail.compose\":\"COMPOSER\",\"sidebar.mail.mailbox\":\"Boites aux lettres\",\"sidebar.mail.filters\":\"filtres\",\"sidebar.mail.labels\":\"Étiquettes\",\"sidebar.eCommerce\":\"commerce électronique\",\"sidebar.eCommerce.productList\":\"Liste de produits\",\"sidebar.eCommerce.productGrid\":\"Grille de produit\",\"sidebar.extraComponents\":\"Composants supplémentaires\",\"sidebar.inBuiltApp\":\"Applications intégrées\",\"sidebar.extraElements.callouts\":\"Faire appel à\",\"sidebar.extraElements.testimonials\":\"Témoignages\",\"sidebar.timeLine\":\"Chronologie\",\"sidebar.timeLine.default\":\"Défaut\",\"sidebar.timeLine.defaultwithIcons\":\"Par défaut avec des icônes\",\"sidebar.timeLine.leftAligned\":\"Aligné à gauche\",\"sidebar.extraElements.pricingTable\":\"Tableau de tarification\",\"sidebar.customViews\":\"Affichages personnalisés\",\"sidebar.listType\":\"Type de liste\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vue en liste simple\",\"sidebar.listType.withDivider\":\"Liste simple avec diviseur\",\"sidebar.listType.cardListView\":\"Vue liste de cartes\",\"sidebar.extraPages.404\":\"404 Page d'erreur\",\"sidebar.extraPages.500\":\"500 Page d'erreur\",\"sidebar.extraPages\":\"Pages supplémentaires\",\"app.userAuth\":\"Authentification utilisateur\",\"app.userAuth.login\":\"S'identifier\",\"app.userAuth.signIn\":\"Se connecter\",\"app.userAuth.send\":\"ENVOYER\",\"app.userAuth.bySigning\":\"En vous inscrivant, vous pouvez profiter des caractéristiques complètes de nos services.\",\"app.userAuth.or\":\"ou\",\"app.userAuth.forgotPassword\":\"Mot de passe oublié\",\"app.userAuth.forgot\":\"Ne t'inquiète pas. Récupérer le mot de passe est facile. Dites-nous simplement l'email que vous avez enregistré avec jumbo\",\"app.userAuth.signUp\":\"S'inscrire\",\"app.userAuth.getAccount\":\"Avoir un compte !!!\",\"app.userAuth.resetPassword\":\"réinitialiser le mot de passe\",\"app.userAuth.reset\":\"RÉINITIALISER\",\"app.userAuth.lockScreen\":\"Écran verrouillé\",\"app.userAuth.unLock\":\"OUVRIR\",\"appModule.enterPasswordUnlock\":\"Entrez votre mot de passe pour déverrouiller l'écran!\",\"appModule.enterPasswordReset\":\"Entrez un nouveau mot de passe pour votre compte\",\"appModule.loginSuccessfully\":\"Connectez-vous avec succès\",\"appModule.password\":\"Mot de passe\",\"appModule.email\":\"Email\",\"appModule.name\":\"prénom\",\"appModule.phone\":\"Téléphone\",\"appModule.designation\":\"La désignation\",\"appModule.regsiter\":\"registre\",\"appModule.regsiterNow\":\"Inscrivez-vous Non\",\"appModule.hvAccount\":\"Avoir un compte\",\"appModule.createAccount\":\"Créer un compte\",\"appModule.termAndCondition\":\"Terme et condition\",\"appModule.iAccept\":\"en vous inscrivant, j'accepte\",\"todo\":\"Faire\",\"todo.addTask\":\"AJOUTER UNE TÂCHE\",\"todo.all\":\"Tout\",\"todo.filters\":\"Filtres\",\"todo.labels\":\"Étiquettes\",\"chat.selectUserChat\":\"Sélectionnez Utilisateur pour lancer le chat\",\"chat.selectContactChat\":\"Sélectionnez le contact pour démarrer le chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Rechercher ou démarrer une nouvelle discussion\",\"chat.typeMessage\":\"Tapez et appuyez sur Entrée pour envoyer un message\",\"chat.status\":\"c'est un statut ... pas votre journal ...\",\"contact.saveContact\":\"Enregistrer le contact\",\"contact.addContact\":\"Ajouter le contact\",\"contact.searchContact\":\"Rechercher un contact\",\"mail.mailbox\":\"Boites aux lettres\",\"mail.compose\":\"COMPOSER\",\"mail.filters\":\"Filtres\",\"mail.labels\":\"Étiquettes\",\"mail.title\":\"Nouveau message\",\"eCommerce.buyNow\":\"Acheter maintenant\",\"eCommerce.addToCart\":\"AJOUTER AU PANIER\",\"eCommerce.readMore\":\"LIRE LA SUITE\",\"callouts.viewRange\":\"VOIR LA GAMME\",\"callouts.basic\":\"De base\",\"extraElements.callout\":\"Elément supplémentaire\",\"testimonials.basic\":\"De base\",\"testimonials.classic\":\"Classique\",\"testimonials.standard\":\"la norme\",\"extraElements.testimonials\":\"Témoignages\",\"button.modify\":\"Modifier\",\"button.delete\":\"Effacer\",\"pricingTable.basic\":\"De base\",\"pricingTable.circle\":\"Cercle\",\"pricingTable.classic\":\"Classique\",\"pricingTable.dark\":\"Foncé\",\"pricingTable.personal\":\"PERSONNEL\",\"pricingTable.easyTranslation\":\"Traduction facile\",\"pricingTable.awesomeGoogleFonts\":\"Impressionnant Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Système de réservation d'hôtel\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Application de localisation\",\"pricingTable.buyNow\":\"Acheter maintenant\",\"pricingTable.business\":\"ENTREPRISE\",\"pricingTable.professional\":\"PROFESSIONNEL\",\"button.yes\":\"Oui\",\"button.no\":\"Non\",\"extraPages.404Msg\":\"Oups, une erreur s'est produite. Page non trouvée!\",\"extraPages.500Msg\":\"Désolé, le serveur va mal\",\"extraPages.goHome\":\"Aller à la maison\",\"extension.sweetAlerts\":\"Alertes douces\",\"sweetAlerts.basic\":\"De base\",\"sweetAlerts.description\":\"Avec description\",\"sweetAlerts.success\":\"Succès\",\"sweetAlerts.warning\":\"Attention\",\"sweetAlerts.custom\":\"Douane\",\"sweetAlerts.htmlTag\":\"Balise Html\",\"sweetAlerts.prompt\":\"Rapide\",\"sweetAlerts.itsBlue\":\"C'est bleu!\",\"sweetAlerts.passwordPrompt\":\"Invite de mot de passe\",\"sweetAlerts.customStyle\":\"Style personnalisé\",\"sweetAlerts.itPretty\":\"C'est joli, n'est-ce pas?\",\"sweetAlerts.btnClicked\":\"Vous avez cliqué sur le bouton!\",\"sweetAlerts.youWillFind\":\"Vous trouverez qu'ils sont en place!\",\"sweetAlerts.youWillNotAble\":\"Vous ne serez pas capable de récupérer ce fichier imaginaire!\",\"sweetAlerts.hereIsaMessage\":\"Voici un message!\",\"sweetAlerts.goodJob\":\"Bon travail!\",\"sweetAlerts.yesDeleteIt\":\"Oui, supprimez-le!\",\"sweetAlerts.areYouSure\":\"Êtes-vous sûr?\",\"sweetAlerts.doYouLikeThumb\":\"Aimez-vous les pouces?\",\"sweetAlerts.anInput\":\"Une entrée!\",\"sweetAlerts.writeSomethingInteresting\":\"Ecrire quelque chose d'intéressant:\",\"sweetAlerts.writeSomething\":\"Écris quelque chose\",\"sweetAlerts.youMustEnterPassword\":\"Vous devez entrer votre mot de passe!\",\"sweetAlerts.enterPassword\":\"Entrer le mot de passe\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Message d'information\",\"notification.successMessage\":\"Message de réussite\",\"notification.warningMessage\":\"Message d'alerte\",\"notification.closeAfter3000ms\":\"Fermer après 3000ms\",\"notification.errorMessage\":\"Message d'erreur\",\"notification.titleHere\":\"Titre ici\",\"notification.clickMe\":\"Clique moi!\",\"notification.info\":\"Info\",\"notification.success\":\"Succès\",\"notification.warning\":\"Attention\",\"notification.error\":\"Erreur\",\"sidebar.editors\":\"Éditeurs\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Éditeur WYSIWYG\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Pickers de teinte\",\"picker.color.circle\":\"Cueilleurs de cercle\",\"picker.color.compact\":\"Pickers compacts\",\"picker.color.block\":\"Ramasseurs de blocs\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Cueilleurs\",\"picker.color.twitter\":\"Capteurs Twitter\",\"picker.color.withRedux\":\"Avec Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Ramasseurs de matériel\",\"picker.color.slider\":\"Sliders Pickers\",\"picker.color.basic\":\"Cueilleurs de base\",\"picker.color.basicToggle\":\"Bascule basique\",\"picker.color.custom\":\"Pickers personnalisés\",\"picker.color.customPointer\":\"Pointeur personnalisé\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Nuanciers\",\"picker.color.basicPositioning\":\"Positionnement de base\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Inscription\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Avec des animations\",\"sidebar.map.curved.lines\":\"Avec des lignes courbes\",\"sidebar.map.zooming.countries\":\"Zoom pays\",\"sidebar.map.patterns\":\"Carte avec des motifs\",\"sidebar.map.capitals.map\":\"Carte des capitales\",\"sidebar.map.markers\":\"Marqueurs de carte\",\"sidebar.map.flight.routes\":\"Routes de vol\",\"sidebar.map.choropleth\":\"Carte de chaleur\",\"sidebar.map.grouped.countries\":\"Pays groupés\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Plusieurs zones\",\"sidebar.map.weather\":\"Carte météorologique\",\"sidebar.extensions.shuffle\":\"Mélanger\",\"sidebar.extensions.profile\":\"Profil\",\"sidebar.social\":\"Applications sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/it_IT.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/it_IT.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Una nuova versione sarà rilasciata il 25 dicembre. Rimanete sintonizzati!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Cruscotto\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"componenti\",\"sidebar.components.general\":\"Generale\",\"sidebar.general.button\":\"Pulsante\",\"sidebar.general.icon\":\"Icona\",\"sidebar.components.navigation\":\"Navigazione\",\"sidebar.navigation.affix\":\"Apporre\",\"sidebar.navigation.breadcrumb\":\"breadcrumb\",\"sidebar.navigation.dropdown\":\"Cadere in picchiata\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"paginatura\",\"sidebar.navigation.steps\":\"passi\",\"sidebar.components.dataEntry\":\"Inserimento dati\",\"sidebar.dataEntry.autoComplete\":\"Completamento automatico\",\"sidebar.dataEntry.checkbox\":\"casella di controllo\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Date picker\",\"sidebar.dataEntry.form\":\"Modulo\",\"sidebar.dataEntry.inputNumber\":\"Numero di input\",\"sidebar.dataEntry.input\":\"Ingresso\",\"sidebar.dataEntry.mention\":\"Citare\",\"sidebar.dataEntry.rate\":\"Vota\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Interruttore\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Selezionare\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Trasferimento\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Caricare\",\"sidebar.components.dataDisplay\":\"Visualizzazione dati\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Crollo\",\"sidebar.dataDisplay.carousel\":\"Giostra\",\"sidebar.dataDisplay.card\":\"Carta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Elenco\",\"sidebar.dataDisplay.popover\":\"popover\",\"sidebar.dataDisplay.tree\":\"Albero\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Sequenza temporale\",\"sidebar.dataDisplay.tag\":\"Etichetta\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"tavolo\",\"sidebar.components.feedBack\":\"Risposta\",\"sidebar.feedBack.alert\":\"Mettere in guardia\",\"sidebar.feedBack.modal\":\"Modale\",\"sidebar.feedBack.message\":\"Messaggio\",\"sidebar.feedBack.notification\":\"Notifica\",\"sidebar.feedBack.progress\":\"Progresso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Rotazione\",\"sidebar.components.other\":\"Altro\",\"sidebar.other.anchor\":\"Ancora\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisore\",\"sidebar.widgets\":\"widget\",\"sidebar.metrics\":\"Metrica\",\"sidebar.view\":\"vista\",\"sidebar.view.basicTable\":\"Tabella di base\",\"sidebar.view.dataTable\":\"Tabella dati\",\"sidebar.extensions\":\"estensioni\",\"sidebar.extensions.editior\":\"editore\",\"sidebar.extensions.dragNDrop\":\"Trascina e rilascia\",\"sidebar.extensions.sweetAlert\":\"Dolce avviso\",\"sidebar.extensions.notification\":\"Notifica\",\"sidebar.extensions.reactDates\":\"Date di Reazione\",\"sidebar.extensions.dropZone\":\"Zona di rilascio\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Grafici\",\"sidebar.apps\":\"applicazioni\",\"sidebar.mailApp\":\"App di posta\",\"sidebar.todoApp\":\"App Todo\",\"sidebar.contactsApp\":\"App Contatti\",\"sidebar.chatApp\":\"App di chat\",\"sidebar.notes\":\"Gli appunti\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Raccoglitori di data e ora\",\"sidebar.pickers.colorPickers\":\"Raccoglitori di colori\",\"sidebar.chart\":\"Grafico\",\"sidebar.chart.line\":\"Grafico a linee\",\"sidebar.chart.bar\":\"Grafico a barre\",\"sidebar.chart.area\":\"Area grafico\",\"sidebar.chart.composed\":\"Grafico composto\",\"sidebar.chart.scatter\":\"Grafico a dispersione\",\"sidebar.chart.pie\":\"Grafico a torta\",\"sidebar.chart.radial\":\"Grafico radiale\",\"sidebar.chart.radar\":\"Grafico radar\",\"sidebar.chart.tree\":\"Grafico ad albero\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Mappa semplice\",\"sidebar.map.styled\":\"Mappa in stile\",\"sidebar.map.geoLocation\":\"Posizione geografica\",\"sidebar.map.mapDirection\":\"Direzione della mappa\",\"sidebar.map.overlay\":\"Sovrapposizione mappa\",\"sidebar.map.kmLayer\":\"Mappa Km Layer\",\"sidebar.map.popupInfo\":\"Mappa Informazioni popup\",\"sidebar.map.trafficLayer\":\"Mappa dello strato di traffico\",\"sidebar.map.streetView\":\"vista stradale\",\"sidebar.map.eventListener\":\"Listener di eventi\",\"sidebar.map.mapDrawing\":\"Disegno della mappa\",\"sidebar.map.mapClustering\":\"Raggruppamento di mappe\",\"sidebar.modules\":\"moduli\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"Di base\",\"sidebar.calendar.cultures\":\"culture\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparire\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"selezionabile\",\"sidebar.calendar.timeslots\":\"Fasce orarie\",\"sidebar.mail.title\":\"posta\",\"sidebar.mail.compose\":\"COMPORRE\",\"sidebar.mail.mailbox\":\"Cassetta postale\",\"sidebar.mail.filters\":\"filtri\",\"sidebar.mail.labels\":\"etichette\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Elenco prodotti\",\"sidebar.eCommerce.productGrid\":\"Griglia del prodotto\",\"sidebar.extraComponents\":\"Componenti extra\",\"sidebar.inBuiltApp\":\"App integrate\",\"sidebar.extraElements.callouts\":\"Chiamare\",\"sidebar.extraElements.testimonials\":\"Testimonianze\",\"sidebar.timeLine\":\"Sequenza temporale\",\"sidebar.timeLine.default\":\"Predefinito\",\"sidebar.timeLine.defaultwithIcons\":\"Predefinito con icone\",\"sidebar.timeLine.leftAligned\":\"Sinistra allineata\",\"sidebar.extraElements.pricingTable\":\"Tabella dei prezzi\",\"sidebar.customViews\":\"Visualizzazioni personalizzate\",\"sidebar.listType.extras\":\"extra\",\"sidebar.listType\":\"Tipo di lista\",\"sidebar.listType.plainListView\":\"Lista semplice\",\"sidebar.listType.withDivider\":\"Lista semplice con divisore\",\"sidebar.listType.cardListView\":\"Visualizzazione elenco schede\",\"sidebar.extraPages.404\":\"404 Pagina di errore\",\"sidebar.extraPages.500\":\"500 Pagina di errore\",\"sidebar.extraPages\":\"Pagine extra\",\"app.userAuth\":\"Autenticazione dell'utente\",\"app.userAuth.login\":\"Accesso\",\"app.userAuth.signIn\":\"Registrati\",\"app.userAuth.send\":\"INVIARE\",\"app.userAuth.bySigning\":\"Con la registrazione, puoi usufruire delle funzionalità complete dei nostri servizi.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Ha dimenticato la password\",\"app.userAuth.forgot\":\"Non ti preoccupare Recuperare la password è facile. Basta dirci l'e-mail che hai registrato con jumbo\",\"app.userAuth.signUp\":\"Iscriviti\",\"app.userAuth.getAccount\":\"Ottenere un account !!!\",\"app.userAuth.resetPassword\":\"Resetta la password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Blocca schermo\",\"app.userAuth.unLock\":\"SBLOCCARE\",\"appModule.enterPasswordUnlock\":\"Inserisci la tua password per sbloccare lo schermo!\",\"appModule.enterPasswordReset\":\"Inserisci una nuova password per il tuo account\",\"appModule.loginSuccessfully\":\"Accedi con successo\",\"appModule.password\":\"Parola d'ordine\",\"appModule.email\":\"E-mail\",\"appModule.name\":\"Nome\",\"appModule.phone\":\"Telefono\",\"appModule.designation\":\"Designazione\",\"appModule.regsiter\":\"Registrare\",\"appModule.regsiterNow\":\"Registro n\",\"appModule.hvAccount\":\"Avere un conto\",\"appModule.createAccount\":\"Crea un account\",\"appModule.termAndCondition\":\"Termini e condizioni\",\"appModule.iAccept\":\"iscrivendomi, accetto\",\"todo\":\"Fare\",\"todo.addTask\":\"AGGIUNGI TASK\",\"todo.all\":\"Tutti\",\"todo.filters\":\"filtri\",\"todo.labels\":\"etichette\",\"chat.selectUserChat\":\"Seleziona Utente per avviare la chat\",\"chat.selectContactChat\":\"Seleziona contatto per avviare la chat\",\"chat.chatUser\":\"chat\",\"chat.contacts\":\"Contatti\",\"chat.searchStartNewChat\":\"Cerca o inizia nuova chat\",\"chat.typeMessage\":\"Scrivi e premi invio per inviare un messaggio\",\"chat.status\":\"è uno status .... non è il tuo diario ...\",\"contact.saveContact\":\"Salva contatto\",\"contact.addContact\":\"Aggiungi contatto\",\"contact.searchContact\":\"Cerca contatto\",\"mail.mailbox\":\"Cassetta postale\",\"mail.compose\":\"COMPORRE\",\"mail.filters\":\"filtri\",\"mail.labels\":\"etichette\",\"mail.title\":\"Nuovo messaggio\",\"eCommerce.buyNow\":\"Acquista ora\",\"eCommerce.addToCart\":\"AGGIUNGI AL CARRELLO\",\"eCommerce.readMore\":\"LEGGI DI PIÙ\",\"callouts.viewRange\":\"VISUALIZZA GAMMA\",\"callouts.basic\":\"Di base\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"Di base\",\"testimonials.classic\":\"Classico\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonianze\",\"button.modify\":\"Modificare\",\"button.delete\":\"Elimina\",\"pricingTable.basic\":\"Di base\",\"pricingTable.circle\":\"Cerchio\",\"pricingTable.classic\":\"Classico\",\"pricingTable.dark\":\"Buio\",\"pricingTable.personal\":\"PERSONALE\",\"pricingTable.easyTranslation\":\"Traduzione semplice\",\"pricingTable.awesomeGoogleFonts\":\"Font Google fantastici\",\"pricingTable.hotelBookingSystem\":\"Sistema di prenotazione alberghiera\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"acquista ora\",\"pricingTable.business\":\"ATTIVITÀ COMMERCIALE\",\"pricingTable.professional\":\"PROFESSIONALE\",\"button.yes\":\"sì\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Spiacenti, si è verificato un errore. Pagina non trovata!\",\"extraPages.500Msg\":\"Spiacente, il server va male\",\"extraPages.goHome\":\"Vai a casa\",\"extension.sweetAlerts\":\"Avvisi dolci\",\"sweetAlerts.basic\":\"Di base\",\"sweetAlerts.description\":\"Con descrizione\",\"sweetAlerts.success\":\"Successo\",\"sweetAlerts.warning\":\"avvertimento\",\"sweetAlerts.custom\":\"costume\",\"sweetAlerts.htmlTag\":\"Tag HTML\",\"sweetAlerts.prompt\":\"Richiesta\",\"sweetAlerts.itsBlue\":\"È blu!\",\"sweetAlerts.passwordPrompt\":\"Richiesta password\",\"sweetAlerts.customStyle\":\"Stile personalizzato\",\"sweetAlerts.itPretty\":\"È carino, non è vero?\",\"sweetAlerts.btnClicked\":\"Hai fatto clic sul pulsante!\",\"sweetAlerts.youWillFind\":\"Scoprirai che sono su!\",\"sweetAlerts.youWillNotAble\":\"Non sarai in grado di recuperare questo file immaginario!\",\"sweetAlerts.hereIsaMessage\":\"Ecco un messaggio!\",\"sweetAlerts.goodJob\":\"Buon lavoro!\",\"sweetAlerts.yesDeleteIt\":\"Sì, cancellalo!\",\"sweetAlerts.areYouSure\":\"Sei sicuro?\",\"sweetAlerts.doYouLikeThumb\":\"Ti piacciono i pollici?\",\"sweetAlerts.anInput\":\"Un input!\",\"sweetAlerts.writeSomethingInteresting\":\"Scrivi qualcosa di interessante:\",\"sweetAlerts.writeSomething\":\"Scrivi qualcosa\",\"sweetAlerts.youMustEnterPassword\":\"Devi inserire la tua password!\",\"sweetAlerts.enterPassword\":\"Inserire la password\",\"extension.notification\":\"Notifica\",\"notification.infoMsg\":\"Messaggio informativo\",\"notification.successMessage\":\"Messaggio di successo\",\"notification.warningMessage\":\"Messaggio di avvertimento\",\"notification.closeAfter3000ms\":\"Chiudi dopo 3000 ms\",\"notification.errorMessage\":\"Messaggio di errore\",\"notification.titleHere\":\"Titolo qui\",\"notification.clickMe\":\"Cliccami!\",\"notification.info\":\"Informazioni\",\"notification.success\":\"Successo\",\"notification.warning\":\"avvertimento\",\"notification.error\":\"Errore\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSIWYG Editor\",\"picker.color.alpha\":\"Raccoglitrici Alpha\",\"picker.color.hue\":\"Selezionatori di tinte\",\"picker.color.circle\":\"Raccoglitori di cerchi\",\"picker.color.compact\":\"Picker compatti\",\"picker.color.block\":\"Raccoglitori di blocchi\",\"picker.color.chrome\":\"Raccoglitrici di cromo\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Raccoglitori di Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Raccoglitori di schizzo\",\"picker.color.material\":\"Raccoglitori di materiale\",\"picker.color.slider\":\"Raccoglitori di cursori\",\"picker.color.basic\":\"Raccoglitori di base\",\"picker.color.basicToggle\":\"Toggle di base\",\"picker.color.custom\":\"Raccoglitori personalizzati\",\"picker.color.customPointer\":\"Puntatore personalizzato\",\"picker.color.photoshop\":\"Selettori di Photoshop\",\"picker.color.swatches\":\"Raccoglitrici di campioni\",\"picker.color.basicPositioning\":\"Posizionamento di base\",\"sidebar.documents\":\"Documenti\",\"sidebar.documents.changelog\":\"changelog\",\"sidebar.documents.installation\":\"Installazione\",\"sidebar.dashboard.listing\":\"listato\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animazioni\",\"sidebar.map.curved.lines\":\"Con linee curve\",\"sidebar.map.zooming.countries\":\"Paesi in via di sviluppo\",\"sidebar.map.patterns\":\"Mappa con modelli\",\"sidebar.map.capitals.map\":\"Mappa dei Capitali\",\"sidebar.map.markers\":\"Indicatori di mappa\",\"sidebar.map.flight.routes\":\"Itinerari di volo\",\"sidebar.map.choropleth\":\"Mappa di calore\",\"sidebar.map.grouped.countries\":\"Paesi raggruppati\",\"sidebar.map.bubbles\":\"Mappa con bolle\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Aree multiple\",\"sidebar.map.weather\":\"Mappa del tempo\",\"sidebar.extensions.shuffle\":\"rimescolare\",\"sidebar.extensions.profile\":\"Profilo\",\"sidebar.social\":\"App sociali\"}");

/***/ }),

/***/ "./lngProvider/locales/zh-Hans.json":
/*!******************************************!*\
  !*** ./lngProvider/locales/zh-Hans.json ***!
  \******************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.dashboard.crm, sidebar.layouts, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"新版本将于12月25日发布。 敬请关注！\",\"sidebar.main\":\"主要\",\"sidebar.dashboard\":\"仪表板\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.layouts\":\"布局\",\"sidebar.components\":\"组件\",\"sidebar.components.general\":\"一般\",\"sidebar.general.button\":\"按键\",\"sidebar.general.icon\":\"图标\",\"sidebar.components.navigation\":\"导航\",\"sidebar.navigation.affix\":\"词缀\",\"sidebar.navigation.breadcrumb\":\"面包屑\",\"sidebar.navigation.dropdown\":\"落下\",\"sidebar.navigation.menu\":\"菜单\",\"sidebar.navigation.pagination\":\"分页\",\"sidebar.navigation.steps\":\"脚步\",\"sidebar.components.dataEntry\":\"数据输入\",\"sidebar.dataEntry.autoComplete\":\"自动完成\",\"sidebar.dataEntry.checkbox\":\"复选框\",\"sidebar.dataEntry.cascader\":\"卡斯卡德\",\"sidebar.dataEntry.datePicker\":\"日期选择器\",\"sidebar.dataEntry.form\":\"形成\",\"sidebar.dataEntry.inputNumber\":\"输入号码\",\"sidebar.dataEntry.input\":\"输入\",\"sidebar.dataEntry.mention\":\"提到\",\"sidebar.dataEntry.rate\":\"率\",\"sidebar.dataEntry.radio\":\"无线电\",\"sidebar.dataEntry.switch\":\"开关\",\"sidebar.dataEntry.slider\":\"滑块\",\"sidebar.dataEntry.select\":\"选择\",\"sidebar.dataEntry.treeSelect\":\"树选择\",\"sidebar.dataEntry.transfer\":\"转让\",\"sidebar.dataEntry.timePicker\":\"时间选择器\",\"sidebar.dataEntry.upload\":\"上传\",\"sidebar.components.dataDisplay\":\"数据显示\",\"sidebar.dataDisplay.avatar\":\"阿凡达\",\"sidebar.dataDisplay.badge\":\"徽章\",\"sidebar.dataDisplay.collapse\":\"坍方\",\"sidebar.dataDisplay.carousel\":\"圆盘传送带\",\"sidebar.dataDisplay.card\":\"卡\",\"sidebar.dataDisplay.calender\":\"日历\",\"sidebar.dataDisplay.list\":\"名单\",\"sidebar.dataDisplay.popover\":\"酥料饼\",\"sidebar.dataDisplay.tree\":\"树\",\"sidebar.dataDisplay.toolTips\":\"提示\",\"sidebar.dataDisplay.timeLine\":\"时间线\",\"sidebar.dataDisplay.tag\":\"标签\",\"sidebar.dataDisplay.tabs\":\"标签\",\"sidebar.dataDisplay.table\":\"表\",\"sidebar.components.feedBack\":\"反馈\",\"sidebar.feedBack.alert\":\"警报\",\"sidebar.feedBack.modal\":\"语气\",\"sidebar.feedBack.message\":\"信息\",\"sidebar.feedBack.notification\":\"通知\",\"sidebar.feedBack.progress\":\"进展\",\"sidebar.feedBack.popConfirm\":\"流行确认\",\"sidebar.feedBack.spin\":\"纺\",\"sidebar.components.other\":\"其他\",\"sidebar.other.anchor\":\"锚\",\"sidebar.other.backTop\":\"返回顶部\",\"sidebar.other.divider\":\"分频器\",\"sidebar.widgets\":\"小工具\",\"sidebar.metrics\":\"度量\",\"sidebar.view\":\"视图\",\"sidebar.view.basicTable\":\"基本表\",\"sidebar.view.dataTable\":\"数据表\",\"sidebar.extensions\":\"扩展\",\"sidebar.extensions.editior\":\"编辑\",\"sidebar.extensions.dragNDrop\":\"拖放\",\"sidebar.extensions.sweetAlert\":\"甜蜜警报\",\"sidebar.extensions.notification\":\"通知\",\"sidebar.extensions.reactDates\":\"反应日期\",\"sidebar.extensions.dropZone\":\"拖放区\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.charts\":\"图表\",\"sidebar.apps\":\"应用\",\"sidebar.mailApp\":\"邮件应用\",\"sidebar.todoApp\":\"做应用程序\",\"sidebar.contactsApp\":\"联系人应用\",\"sidebar.chatApp\":\"聊天应用\",\"sidebar.notes\":\"笔记\",\"sidebar.pickers\":\"拾荒者\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"日期和时间选择器\",\"sidebar.pickers.colorPickers\":\"颜色选择器\",\"sidebar.chart\":\"图表\",\"sidebar.chart.line\":\"折线图\",\"sidebar.chart.bar\":\"条形图\",\"sidebar.chart.area\":\"面积图\",\"sidebar.chart.composed\":\"组成图表\",\"sidebar.chart.scatter\":\"散点图\",\"sidebar.chart.pie\":\"饼形图\",\"sidebar.chart.radial\":\"径向图\",\"sidebar.chart.radar\":\"雷达图\",\"sidebar.chart.tree\":\"树图\",\"sidebar.map\":\"谷歌地图\",\"sidebar.map.simple\":\"简单的地图\",\"sidebar.map.styled\":\"风格地图\",\"sidebar.map.geoLocation\":\"地理位置\",\"sidebar.map.mapDirection\":\"地图方向\",\"sidebar.map.overlay\":\"地图覆盖\",\"sidebar.map.kmLayer\":\"地图Km层\",\"sidebar.map.popupInfo\":\"地图弹出信息\",\"sidebar.map.trafficLayer\":\"映射流量层\",\"sidebar.map.streetView\":\"街景\",\"sidebar.map.eventListener\":\"事件监听器\",\"sidebar.map.mapDrawing\":\"地图绘制\",\"sidebar.map.mapClustering\":\"地图集群\",\"sidebar.modules\":\"模块\",\"sidebar.calendar\":\"日历\",\"sidebar.calendar.basic\":\"基本\",\"sidebar.calendar.cultures\":\"文化\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"弹出\",\"sidebar.calendar.rendering\":\"渲染\",\"sidebar.calendar.selectable\":\"可选\",\"sidebar.calendar.timeslots\":\"时隙\",\"sidebar.mail.title\":\"邮件\",\"sidebar.mail.compose\":\"撰写\",\"sidebar.mail.mailbox\":\"邮箱\",\"sidebar.mail.filters\":\"过滤器\",\"sidebar.mail.labels\":\"标签\",\"sidebar.eCommerce\":\"电子商务\",\"sidebar.eCommerce.productList\":\"产品列表\",\"sidebar.eCommerce.productGrid\":\"产品网格\",\"sidebar.extraComponents\":\"额外的组件\",\"sidebar.inBuiltApp\":\"内置应用程序\",\"sidebar.extraElements.callouts\":\"大喊\",\"sidebar.extraElements.testimonials\":\"褒奖\",\"sidebar.timeLine\":\"时间线\",\"sidebar.timeLine.default\":\"默认\",\"sidebar.timeLine.defaultwithIcons\":\"默认使用图标\",\"sidebar.timeLine.leftAligned\":\"左对齐\",\"sidebar.extraElements.pricingTable\":\"定价表\",\"sidebar.customViews\":\"自定义视图\",\"sidebar.listType.extras\":\"附加功能\",\"sidebar.listType\":\"列表类型\",\"sidebar.listType.plainListView\":\"普通列表视图\",\"sidebar.listType.withDivider\":\"带分隔线的普通列表\",\"sidebar.listType.cardListView\":\"卡列表视图\",\"sidebar.extraPages.404\":\"404错误页面\",\"sidebar.extraPages.500\":\"500错误页面\",\"sidebar.extraPages\":\"额外页面\",\"app.userAuth\":\"用户身份验证\",\"app.userAuth.login\":\"登录\",\"app.userAuth.signIn\":\"签到\",\"app.userAuth.send\":\"发送\",\"app.userAuth.bySigning\":\"通过注册，您可以利用我们服务的全部功能。\",\"app.userAuth.or\":\"要么\",\"app.userAuth.forgotPassword\":\"忘记密码\",\"app.userAuth.forgot\":\"别担心。 恢复密码很简单。只需告诉我们您已经注册过的超大型电子邮件\",\"app.userAuth.signUp\":\"注册\",\"app.userAuth.getAccount\":\"获得一个帐户！\",\"app.userAuth.resetPassword\":\"重设密码\",\"app.userAuth.reset\":\"重启\",\"app.userAuth.lockScreen\":\"锁屏\",\"app.userAuth.unLock\":\"开锁\",\"appModule.enterPasswordUnlock\":\"输入您的密码解锁屏幕！\",\"appModule.enterPasswordReset\":\"为您的帐户输入新密码\",\"appModule.loginSuccessfully\":\"成功登录\",\"appModule.password\":\"密码\",\"appModule.email\":\"电子邮件\",\"appModule.name\":\"名称\",\"appModule.phone\":\"电话\",\"appModule.designation\":\"指定\",\"appModule.regsiter\":\"寄存器\",\"appModule.regsiterNow\":\"注册编号\",\"appModule.hvAccount\":\"有一个账户\",\"appModule.createAccount\":\"创建一个帐户\",\"appModule.termAndCondition\":\"期限和条件\",\"appModule.iAccept\":\"通过注册，我接受\",\"todo\":\"去做\",\"todo.addTask\":\"添加任务\",\"todo.all\":\"所有\",\"todo.filters\":\"过滤器\",\"todo.labels\":\"标签\",\"chat.selectUserChat\":\"选择用户开始聊天\",\"chat.selectContactChat\":\"选择联系人即可开始聊天\",\"chat.chatUser\":\"聊天\",\"chat.contacts\":\"往来\",\"chat.searchStartNewChat\":\"搜索或开始新的聊天\",\"chat.typeMessage\":\"键入并按回车键发送消息\",\"chat.status\":\"这是一个地位....不是你的日记...\",\"contact.saveContact\":\"保存联系人\",\"contact.addContact\":\"增加联系人\",\"contact.searchContact\":\"搜索联系人\",\"mail.mailbox\":\"邮箱\",\"mail.compose\":\"撰写\",\"mail.filters\":\"过滤器\",\"mail.labels\":\"标签\",\"mail.title\":\"新消息\",\"eCommerce.buyNow\":\"立即购买\",\"eCommerce.addToCart\":\"添加到购物车\",\"eCommerce.readMore\":\"阅读更多\",\"callouts.viewRange\":\"查看范围\",\"callouts.basic\":\"基本\",\"extraElements.callout\":\"额外元素\",\"testimonials.basic\":\"基本\",\"testimonials.classic\":\"经典\",\"testimonials.standard\":\"标准\",\"extraElements.testimonials\":\"褒奖\",\"button.modify\":\"修改\",\"button.delete\":\"删除\",\"pricingTable.basic\":\"基本\",\"pricingTable.circle\":\"圈\",\"pricingTable.classic\":\"经典\",\"pricingTable.dark\":\"黑暗\",\"pricingTable.personal\":\"个人\",\"pricingTable.easyTranslation\":\"易于翻译\",\"pricingTable.awesomeGoogleFonts\":\"令人敬畏的Google字体\",\"pricingTable.hotelBookingSystem\":\"酒店预订系统\",\"pricingTable.emailComposeInterface\":\"电子邮件撰写界面\",\"pricingTable.locationFinderApp\":\"位置搜索器应用程序\",\"pricingTable.buyNow\":\"立即购买\",\"pricingTable.business\":\"商业\",\"pricingTable.professional\":\"专业的\",\"button.yes\":\"是\",\"button.no\":\"没有\",\"extraPages.404Msg\":\"糟糕，发生错误。 找不到网页！\",\"extraPages.500Msg\":\"对不起，服务器出错了\",\"extraPages.goHome\":\"回家\",\"extension.sweetAlerts\":\"甜蜜警报\",\"sweetAlerts.basic\":\"基本\",\"sweetAlerts.description\":\"带说明\",\"sweetAlerts.success\":\"成功\",\"sweetAlerts.warning\":\"警告\",\"sweetAlerts.custom\":\"习惯\",\"sweetAlerts.htmlTag\":\"HTML标记\",\"sweetAlerts.prompt\":\"提示\",\"sweetAlerts.itsBlue\":\"它是蓝色的！\",\"sweetAlerts.passwordPrompt\":\"密码提示\",\"sweetAlerts.customStyle\":\"自定义样式\",\"sweetAlerts.itPretty\":\"真漂亮，不是吗？\",\"sweetAlerts.btnClicked\":\"你点击了按钮！\",\"sweetAlerts.youWillFind\":\"你会发现他们已经起来了！\",\"sweetAlerts.youWillNotAble\":\"你将无法恢复这个虚构的文件！\",\"sweetAlerts.hereIsaMessage\":\"这是一条消息！\",\"sweetAlerts.goodJob\":\"做得好！\",\"sweetAlerts.yesDeleteIt\":\"是的，删除它！\",\"sweetAlerts.areYouSure\":\"你确定？\",\"sweetAlerts.doYouLikeThumb\":\"你喜欢大拇指吗？\",\"sweetAlerts.anInput\":\"一个输入！\",\"sweetAlerts.writeSomethingInteresting\":\"写点有趣的东西：\",\"sweetAlerts.writeSomething\":\"写一些东西\",\"sweetAlerts.youMustEnterPassword\":\"你必须输入你的密码！\",\"sweetAlerts.enterPassword\":\"输入密码\",\"extension.notification\":\"通知\",\"notification.infoMsg\":\"信息消息\",\"notification.successMessage\":\"成功消息\",\"notification.warningMessage\":\"警告信息\",\"notification.closeAfter3000ms\":\"3000ms后关闭\",\"notification.errorMessage\":\"错误信息\",\"notification.titleHere\":\"标题在这里\",\"notification.clickMe\":\"点击我！\",\"notification.info\":\"信息\",\"notification.success\":\"成功\",\"notification.warning\":\"警告\",\"notification.error\":\"错误\",\"sidebar.editors\":\"编者\",\"sidebar.editors.CKEditor\":\"CK编辑器的\",\"sidebar.editors.WYSISWYGEditor\":\"所见即所得的编辑器\",\"picker.color.alpha\":\"阿尔法挑选者\",\"picker.color.hue\":\"色相选择器\",\"picker.color.circle\":\"圈选手\",\"picker.color.compact\":\"紧凑型拾取器\",\"picker.color.block\":\"块挑选器\",\"picker.color.chrome\":\"铬挑选器\",\"picker.color.github\":\"Github捡拾器\",\"picker.color.twitter\":\"推特挑选者\",\"picker.color.withRedux\":\"与Redux\",\"picker.color.sketch\":\"素描选择器\",\"picker.color.material\":\"材料捡拾器\",\"picker.color.slider\":\"滑块挑选器\",\"picker.color.basic\":\"基本拾取器\",\"picker.color.basicToggle\":\"基本切换\",\"picker.color.custom\":\"自定义选取器\",\"picker.color.customPointer\":\"自定义指针\",\"picker.color.photoshop\":\"照片店采摘\",\"picker.color.swatches\":\"色板拾取器\",\"picker.color.basicPositioning\":\"基本定位\",\"sidebar.documents\":\"文件\",\"sidebar.documents.changelog\":\"更新日志\",\"sidebar.documents.installation\":\"安装\",\"sidebar.dashboard.listing\":\"清單\",\"sidebar.dashboard.crypto\":\"加密\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"谷歌地圖\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"隨著動畫\",\"sidebar.map.curved.lines\":\"有曲線\",\"sidebar.map.zooming.countries\":\"縮放國家\",\"sidebar.map.patterns\":\"地圖與模式\",\"sidebar.map.capitals.map\":\"首都地圖\",\"sidebar.map.markers\":\"地圖標記\",\"sidebar.map.flight.routes\":\"航線\",\"sidebar.map.choropleth\":\"熱圖\",\"sidebar.map.grouped.countries\":\"分組國家\",\"sidebar.map.bubbles\":\"映射與泡沫\",\"sidebar.map.drill.down\":\"深入研究地圖\",\"sidebar.map.multiple.areas\":\"多個領域\",\"sidebar.map.weather\":\"天氣圖\",\"sidebar.extensions.shuffle\":\"拖曳\",\"sidebar.extensions.profile\":\"輪廓\",\"sidebar.social\":\"社交應用\"}");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/all_domain/index.js":
/*!***********************************!*\
  !*** ./pages/all_domain/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/hoc/securedPage */ "./app/hoc/securedPage/index.js");
/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/asyncComponent */ "./util/asyncComponent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AllDomain = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../routes/AllDomain */ "./routes/AllDomain/index.js")));
/* harmony default export */ __webpack_exports__["default"] = (Object(_app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __jsx(AllDomain, null)));

/***/ }),

/***/ "./redux/actions/Auth.js":
/*!*******************************!*\
  !*** ./redux/actions/Auth.js ***!
  \*******************************/
/*! exports provided: setAuthUser, updateLoadUser, setAUthToken, onRegister, onLogin, onLogout, getAuthUser, getAuthUser0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthUser", function() { return setAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoadUser", function() { return updateLoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAUthToken", function() { return setAUthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRegister", function() { return onRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return getAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser0", function() { return getAuthUser0; });
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Api */ "./util/Api.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_4__);





const setAuthUser = user => {
  return dispatch => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_AUTH_USER_DATA"],
      payload: user
    });
  };
};
const updateLoadUser = () => {
  return dispatch => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE_LOAD_USER"]
    });
  };
};
const setAUthToken = token => {
  return dispatch => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["USER_TOKEN_SET"],
      payload: token
    });
  };
};
const onRegister = ({
  name,
  email,
  password
}) => {
  return dispatch => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchStart"])());
    _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post('auth/register', {
      email: email,
      password: password,
      name: name
    }).then(({
      data
    }) => {
      if (data.result) {
        if (data.token.access_token) {
          _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
          const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_4__["Cookies"]();
          cookies.set('token', data.token.access_token);
        }

        dispatch({
          type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["USER_TOKEN_SET"],
          payload: data.token.access_token
        });
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchSuccess"])());
        getAuthUser(dispatch);
      } else {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])("Some thing went wrong!"));
      }
    }).catch(function (error) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])(error.message));
    });
  };
};
const onLogin = ({
  email,
  password
}) => {
  return dispatch => {
    try {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchStart"])());
      _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post('auth/login', {
        email: email,
        password: password
      }).then(({
        data
      }) => {
        console.log("onLogin: ", data);

        if (data.result) {
          dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchSuccess"])());

          if (data.token.access_token) {
            const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_4__["Cookies"]();
            cookies.set('token', data.token.access_token);
            dispatch({
              type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["USER_TOKEN_SET"],
              payload: data.token.access_token
            });
            _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
            getAuthUser(dispatch);
          }
        } else {
          dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])(data.error));
        }
      }).catch(function (error) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])(error.message));
      });
    } catch (error) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])(error.message));
    }
  };
};
const onLogout = route => {
  console.log("onLogout");
  return dispatch => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchStart"])());
    _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post('auth/logout').then(({
      data
    }) => {
      console.log("onLogout", data);

      if (data.result) {
        route.push("/signin");
        dispatch({
          type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["USER_TOKEN_SET"],
          payload: null
        });
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchSuccess"])());
        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_4__["Cookies"]();
        cookies.remove('token');
        dispatch(setAuthUser(null));
      } else {
        console.log("onLogout data.error", data.error);
        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_4__["Cookies"]();
        cookies.remove('token');
        dispatch(setAuthUser(null));
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])(data.error));
      }
    }).catch(function (error) {
      console.log("onLogout error", error);
      const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_4__["Cookies"]();
      cookies.remove('token');
      dispatch(setAuthUser(null));
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchError"])(error.message));
    });
  };
};
const getAuthUser = dispatch => {
  dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchStart"])());
  _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post('auth/me').then(({
    data
  }) => {
    console.log("getAuthUser: ", data.user);

    if (data.result) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchSuccess"])());
      dispatch(setAuthUser(data.user));
    } else {
      dispatch(updateLoadUser());
    }
  }).catch(function (error) {
    dispatch(updateLoadUser());
  });
};
const getAuthUser0 = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = getCookie('token');
      if (token) _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchStart"])());
    dispatch(updateLoadUser(loaded));
    _util_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post('auth/me').then(({
      data
    }) => {
      if (data.result) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_0__["fetchSuccess"])());
        dispatch(setAuthUser(data.user));
      } else {
        dispatch(updateLoadUser(true));
      }
    }).catch(function (error) {
      dispatch(updateLoadUser(true));
    });
  };
};

/***/ }),

/***/ "./redux/actions/Common.js":
/*!*********************************!*\
  !*** ./redux/actions/Common.js ***!
  \*********************************/
/*! exports provided: fetchStart, fetchSuccess, fetchError, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return fetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");

const fetchStart = () => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
  });
};
const fetchSuccess = () => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
  });
};
const fetchError = error => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
    payload: error
  });
};
const showMessage = message => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"],
    payload: message
  });
};
const hideMessage = () => {
  return dispatch => dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]
  });
};

/***/ }),

/***/ "./redux/actions/Setting.js":
/*!**********************************!*\
  !*** ./redux/actions/Setting.js ***!
  \**********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, setPathName, switchLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return toggleCollapsedSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return updateWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return setThemeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return onNavStyleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return setPathName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return switchLanguage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");


function toggleCollapsedSideNav(navCollapsed) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"],
    navCollapsed
  };
}
function updateWindowWidth(width) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"],
    width
  };
}
function setThemeType(themeType) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"],
    themeType
  };
}
function onNavStyleChange(navStyle) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"],
    navStyle
  };
}
function setPathName(pathname) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"],
    pathname
  };
}
function switchLanguage(locale) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"],
    payload: locale
  };
}

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, setPathName, switchLanguage, setAuthUser, updateLoadUser, setAUthToken, onRegister, onLogin, onLogout, getAuthUser, getAuthUser0, fetchStart, fetchSuccess, fetchError, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting */ "./redux/actions/Setting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsedSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["updateWindowWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setThemeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onNavStyleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setPathName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["switchLanguage"]; });

/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./redux/actions/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAuthUser", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["setAuthUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLoadUser", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["updateLoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAUthToken", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["setAUthToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRegister", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["onRegister"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["onLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["onLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["getAuthUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthUser0", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["getAuthUser0"]; });

/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ "./redux/actions/Common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["fetchStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["fetchSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["fetchError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["hideMessage"]; });





/***/ }),

/***/ "./util/Api.js":
/*!*********************!*\
  !*** ./util/Api.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `http://g-axon.work/jwtauth/api/`,
  //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json'
  }
}));

/***/ }),

/***/ "./util/CustomScrollbars.js":
/*!**********************************!*\
  !*** ./util/CustomScrollbars.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CustomScrollbars = props => __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], _extends({}, props, {
  autoHide: true,
  universal: true,
  renderTrackHorizontal: props => __jsx("div", _extends({}, props, {
    style: {
      display: 'none'
    },
    className: "track-horizontal"
  }))
}));

/* harmony default export */ __webpack_exports__["default"] = (CustomScrollbars);

/***/ }),

/***/ "./util/IntlMessages.js":
/*!******************************!*\
  !*** ./util/IntlMessages.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "./util/asyncComponent.js":
/*!********************************!*\
  !*** ./util/asyncComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncComponent; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function asyncComponent(importComponent) {
  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {
    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  });
}

/***/ }),

/***/ "./util/config.js":
/*!************************!*\
  !*** ./util/config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  footerText: 'Copyright Company Name © 2019'
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/locale-provider/ca_ES":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ca_ES" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ca_ES");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/en_US" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/locale-provider/fr_FR":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/fr_FR" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/fr_FR");

/***/ }),

/***/ "antd/lib/locale-provider/it_IT":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/it_IT" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/it_IT");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcExpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25JdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Vc2VySW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9DdXN0b21pemVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL0FwcHNOYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1NpZGViYXIvU2lkZWJhckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9TaWRlYmFyTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0Fib3ZlSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9CZWxvd0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvSG9yaXpvbnRhbERhcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0hvcml6b250YWxEZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9Ib3Jpem9udGFsTmF2LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9JbnNpZGVIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL05vSGVhZGVyTm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvbGFuZ3VhZ2VEYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC9ob2Mvc2VjdXJlZFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvYy9zZWN1cmVkUGFnZS93aXRoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9jL3NlY3VyZWRQYWdlL3dpdGhMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9UaGVtZVNldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy9hcl9TQS5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2VuLVVTLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvZXNfRVMuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy9mcl9GUi5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2l0X0lULmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvemgtSGFucy1DTi5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hbGxfZG9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL1NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0N1c3RvbVNjcm9sbGJhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9JbnRsTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9hc3luY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvY2FfRVNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZnJfRlJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvaXRfSVRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiQXBwTGluayIsImhyZWYiLCJjaGlsZHJlbiIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJub3RpZmljYXRpb24iLCJpY29uIiwiaW1hZ2UiLCJ0aXRsZSIsInRpbWUiLCJub3RpZmljYXRpb25zIiwiQXBwTm90aWZpY2F0aW9uIiwibWFwIiwiaW5kZXgiLCJDaXJjdWxhclByb2dyZXNzIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiZGVmYXVsdFByb3BzIiwiYmFkZ2UiLCJuYW1lIiwibWVzc2FnZSIsImlkIiwiTWFpbE5vdGlmaWNhdGlvbiIsIlNlYXJjaEJveCIsInN0eWxlTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIlVzZXJJbmZvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJNZW51T3B0aW9ucyIsIm9uTG9nb3V0IiwiSW5kZXgiLCJDb250ZW50IiwiRm9vdGVyIiwiTGF5b3V0IiwiQXBwTGF5b3V0IiwidGhlbWVUeXBlIiwibG9jYWxlIiwibmF2U3R5bGUiLCJ1c2VTZWxlY3RvciIsInNldHRpbmdzIiwiZ2V0Q29udGFpbmVyQ2xhc3MiLCJOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfQkVMT1dfSEVBREVSIiwiTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiIsImdldE5hdlN0eWxlcyIsIk5BVl9TVFlMRV9GSVhFRCIsIk5BVl9TVFlMRV9EUkFXRVIiLCJOQVZfU1RZTEVfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIiLCJib2R5Q2xhc3MiLCJUSEVNRV9UWVBFX0RBUksiLCJjdXJyZW50QXBwTG9jYWxlIiwiQXBwTG9jYWxlIiwiYW50ZCIsIm1lc3NhZ2VzIiwiZm9vdGVyVGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsIndpZHRoIiwibGF5b3V0VHlwZSIsImNvbm5lY3QiLCJBcHBzTmF2aWdhdGlvbiIsIlN1Yk1lbnUiLCJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIlNpZGViYXJDb250ZW50IiwicGF0aG5hbWUiLCJnZXROb0hlYWRlckNsYXNzIiwiZ2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MiLCJ1c2VFZmZlY3QiLCJzZXRQYXRoTmFtZSIsInNlbGVjdGVkS2V5cyIsInN1YnN0ciIsImRlZmF1bHRPcGVuS2V5cyIsInNwbGl0IiwiVEhFTUVfVFlQRV9MSVRFIiwicHJvcFR5cGVzIiwiU2lkZWJhckxvZ28iLCJuYXZDb2xsYXBzZWQiLCJUQUJfU0laRSIsInRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYiLCJvbk5hdlN0eWxlQ2hhbmdlIiwiVXNlclByb2ZpbGUiLCJyb3V0ZSIsIlNpZGVyIiwiU2lkZWJhciIsIm9uVG9nZ2xlQ29sbGFwc2VkTmF2Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVdpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImRyYXdlclN0eWxlIiwiSGVhZGVyIiwiT3B0aW9uIiwiU2VsZWN0IiwibWVudSIsImhhbmRsZU1lbnVDbGljayIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiQWJvdmVIZWFkZXIiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInVzZVN0YXRlIiwibGFuZ3VhZ2VNZW51IiwibGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInN3aXRjaExhbmd1YWdlIiwidXBkYXRlU2VhcmNoQ2hhdFVzZXIiLCJldnQiLCJ0YXJnZXQiLCJCZWxvd0hlYWRlciIsIkhvcml6b250YWxEYXJrIiwiSG9yaXpvbnRhbERlZmF1bHQiLCJIb3Jpem9udGFsTmF2IiwiSW5zaWRlSGVhZGVyIiwiTm9IZWFkZXJOb3RpZmljYXRpb24iLCJUb3BiYXIiLCJsYW5ndWFnZUlkIiwiY29tcG9zZSIsIldpdGhEYXRhIiwiV2l0aExheW91dCIsIkNvbXBvc2VkQ29tcG9uZW50IiwicHJvcHMiLCJhdXRoVXNlciIsImxvYWRVc2VyIiwiYXV0aCIsIlJvdXRlciIsInB1c2giLCJUT0dHTEVfQ09MTEFQU0VEX05BViIsIldJTkRPV19XSURUSCIsIlNXSVRDSF9MQU5HVUFHRSIsIkZFVENIX1NUQVJUIiwiRkVUQ0hfU1VDQ0VTUyIsIkZFVENIX0VSUk9SIiwiU0hPV19NRVNTQUdFIiwiSElERV9NRVNTQUdFIiwiT05fU0hPV19MT0FERVIiLCJPTl9ISURFX0xPQURFUiIsIlNJR05VUF9VU0VSIiwiU0lHTlVQX1VTRVJfU1VDQ0VTUyIsIlNJR05JTl9HT09HTEVfVVNFUiIsIlNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTIiwiU0lHTklOX0ZBQ0VCT09LX1VTRVIiLCJTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTIiwiU0lHTklOX1RXSVRURVJfVVNFUiIsIlNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyIsIlNJR05JTl9HSVRIVUJfVVNFUiIsIlNJR05JTl9HSVRIVUJfVVNFUl9TVUNDRVNTIiwiU0lHTklOX1VTRVIiLCJTSUdOSU5fVVNFUl9TVUNDRVNTIiwiU0lHTk9VVF9VU0VSIiwiU0lHTk9VVF9VU0VSX1NVQ0NFU1MiLCJJTklUX1VSTCIsIlVTRVJfVE9LRU5fU0VUIiwiU0VUX0FVVEhfVVNFUl9EQVRBIiwiVVBEQVRFX0xPQURfVVNFUiIsIkdFVF9TVElDS1kiLCJOT1RFU19VUERBVEUiLCJGRVRDSF9BTExfTk9URVNfU1VDQ0VTUyIsIlVQREFURV9BTExfTk9URVNfU1VDQ0VTUyIsIkdFVF9BbGxfQ09OVEFDVF9TVUNDRVNTIiwiT05fQUREX0NPTlRBQ1RfU1VDQ0VTUyIsIlVQREFURV9DT05UQUNUX1NVQ0NFU1MiLCJERUxFVEVfQ09OVEFDVF9TVUNDRVNTIiwiVEhFTUVfVFlQRSIsIlRIRU1FX1RZUEVfU0VNSV9EQVJLIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OX1BSRVNFVCIsIlRIRU1FX0NPTE9SX1NFTEVDVElPTl9DVVNUT01JWkUiLCJIT1JJWk9OVEFMX05BVklHQVRJT04iLCJIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04iLCJBQk9WRV9USEVfSEVBREVSIiwiSU5TSURFX1RIRV9IRUFERVIiLCJCRUxPV19USEVfSEVBREVSIiwiVkVSVElDQUxfTkFWSUdBVElPTiIsIk5BVl9TVFlMRV9NSU5JIiwiTEFZT1VUX1RZUEUiLCJTRVRfUEFUSF9OQU1FIiwiTEFZT1VUX1RZUEVfRlJBTUVEIiwiTEFZT1VUX1RZUEVfQk9YRUQiLCJMQVlPVVRfVFlQRV9GVUxMIiwiTkFWX1NUWUxFIiwiTElHSFRfUFVSUExFIiwiTElHSFRfUFVSUExFX1NFQyIsIkxJR0hUX1BVUlBMRV9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV9EQVJLX1RFWFRfQ09MT1IiLCJSRUQiLCJSRURfU0VDIiwiUkVEX05BVl9EQVJLX0JHIiwiUkVEX0RBUktfVEVYVF9DT0xPUiIsIkJMVUUiLCJCTFVFX1NFQyIsIkJMVUVfTkFWX0RBUktfQkciLCJCTFVFX0RBUktfVEVYVF9DT0xPUiIsIkRBUktfQkxVRSIsIkRBUktfQkxVRV9TRUMiLCJEQVJLX0JMVUVfTkFWX0RBUktfQkciLCJEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SIiwiT1JBTkdFIiwiT1JBTkdFX1NFQyIsIk9SQU5HRV9OQVZfREFSS19CRyIsIk9SQU5HRV9EQVJLX1RFWFRfQ09MT1IiLCJMSUdIVF9CTFVFIiwiTElHSFRfQkxVRV9TRUMiLCJMSUdIVF9CTFVFX05BVl9EQVJLX0JHIiwiTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1IiLCJERUVQX09SQU5HRSIsIkRFRVBfT1JBTkdFX1NFQyIsIkRFRVBfT1JBTkdFX05BVl9EQVJLX0JHIiwiREVFUF9PUkFOR0VfREFSS19URVhUX0NPTE9SIiwiTElHSFRfUFVSUExFXzEiLCJMSUdIVF9QVVJQTEVfMV9TRUMiLCJMSUdIVF9QVVJQTEVfMV9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV8xX0RBUktfVEVYVF9DT0xPUiIsIkxJR0hUX1BVUlBMRV8yIiwiTElHSFRfUFVSUExFXzJfU0VDIiwiTElHSFRfUFVSUExFXzJfTkFWX0RBUktfQkciLCJMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IiLCJzYUxhbmciLCJzYU1lc3NhZ2VzIiwiYW50ZFNBIiwiRW5MYW5nIiwiZW5NZXNzYWdlcyIsImFudGRFbiIsIlpoTGFuIiwiemhNZXNzYWdlcyIsImVuIiwiZW5MYW5nIiwiemgiLCJ6aExhbmciLCJhciIsImFyTGFuZyIsIml0IiwiaXRMYW5nIiwiZXMiLCJlc0xhbmciLCJmciIsImZyTGFuZyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImVyciIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFsbERvbWFpbiIsImFzeW5jQ29tcG9uZW50IiwiUGFnZSIsInNldEF1dGhVc2VyIiwidXNlciIsInR5cGUiLCJwYXlsb2FkIiwidXBkYXRlTG9hZFVzZXIiLCJzZXRBVXRoVG9rZW4iLCJ0b2tlbiIsIm9uUmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2hTdGFydCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJhY2Nlc3NfdG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjb29raWVzIiwiQ29va2llcyIsImZldGNoU3VjY2VzcyIsImdldEF1dGhVc2VyIiwiZmV0Y2hFcnJvciIsImNhdGNoIiwib25Mb2dpbiIsInJlbW92ZSIsImdldEF1dGhVc2VyMCIsImxvYWRlZCIsImdldENvb2tpZSIsInNob3dNZXNzYWdlIiwiaGlkZU1lc3NhZ2UiLCJzZXRUaGVtZVR5cGUiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQ3VzdG9tU2Nyb2xsYmFycyIsImRpc3BsYXkiLCJJbmplY3RNYXNzYWdlIiwiaW5qZWN0SW50bCIsIndpdGhSZWYiLCJpbXBv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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hbGxfZG9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvYWxsX2RvbWFpblwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hbGxfZG9tYWluL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBBcHBMaW5rID0gKHtocmVmLCBjaGlsZHJlbn0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExpbmsgaHJlZj17aHJlZn0+XHJcblx0XHRcdDxhPntjaGlsZHJlbn08L2E+XHJcblx0XHQ8L0xpbms+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExpbms7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7bm90aWZpY2F0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtpY29uLCBpbWFnZSwgdGl0bGUsIHRpbWV9ID0gbm90aWZpY2F0aW9uO1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhXCI+XHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MCBneC1tci0zXCJcclxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2V9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZWRpYS1ib2R5IGd4LWFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtZnMtc20gZ3gtbWItMFwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiBpY29uLSR7aWNvbn0gZ3gtcHItMmB9Lz4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbWV0YS1kYXRlXCI+PHNtYWxsPnt0aW1lfTwvc21hbGw+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW07XHJcbiIsImV4cG9ydCBjb25zdCBub3RpZmljYXRpb25zID0gW1xyXG5cclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIlN0ZWxsYSBKb2huc29uIGhhcyByZWNlbnRseSBwb3N0ZWQgYW4gYWxidW1cIixcclxuICAgIHRpbWU6IFwiNDoxMCBQTVwiLFxyXG4gICAgaWNvbjogXCJ0aHVtYi11cCBneC10ZXh0LWJsdWVcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIkFsZXggQnJvd24gaGFzIHNoYXJlZCBNYXJ0aW4gR3VwdGlsJ3MgcG9zdFwiLFxyXG4gICAgdGltZTogXCI1OjE4IFBNXCIsXHJcbiAgICBpY29uOiBcImNoYXQgZ3gtdGV4dC1ncmV5XCIsXHJcbiAgfSwge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQyMCcsXHJcbiAgICB0aXRsZTogXCJEb21uaWMgQnJvd24gaGFzIHNlbnQgeW91IGEgZ3JvdXAgaW52aXRhdGlvbiBmb3IgR2xvYmFsIEhlYWx0aFwiLFxyXG4gICAgdGltZTogXCI1OjM2IFBNXCIsXHJcbiAgICBpY29uOiBcImJpcnRoZGF5IHRleHQtaW5mb1wiLFxyXG4gIH0sIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgdGl0bGU6IFwiSm9obiBTbWl0aCBoYXMgYmlydGhkYXkgdG9kYXlcIixcclxuICAgIHRpbWU6IFwiNTo1NCBQTVwiLFxyXG4gICAgaWNvbjogXCJiaXJ0aGRheSBneC10ZXh0LXdhcm5pbmdcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIkNocmlzIGhhcyB1cGRhdGVkIGhpcyBwcm9maWxlIHBpY3R1cmVcIixcclxuICAgIHRpbWU6IFwiNToyNSBQTVwiLFxyXG4gICAgaWNvbjogXCJwcm9maWxlIGd4LXRleHQtZ3JleVwiLFxyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tIFwiLi9Ob3RpZmljYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7bm90aWZpY2F0aW9uc30gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcblxyXG5cclxuY29uc3QgQXBwTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5Ob3RpZmljYXRpb25zPC9oMz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tY2hhcnZsZXQtZG93blwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItc2Nyb2xsXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbiwgaW5kZXgpID0+IDxOb3RpZmljYXRpb25JdGVtIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufS8+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE5vdGlmaWNhdGlvbjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENpcmN1bGFyUHJvZ3Jlc3MgPSAoe2NsYXNzTmFtZX0pID0+IDxkaXYgY2xhc3NOYW1lPXtgbG9hZGVyICR7Y2xhc3NOYW1lfWB9PlxyXG4gIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkZXIuc3ZnXCIgYWx0PVwibG9hZGVyXCIgc3R5bGU9e3toZWlnaHQ6IDYwfX0vPlxyXG48L2Rpdj47XHJcbmV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3M7XHJcbkNpcmN1bGFyUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNsYXNzTmFtZTogJydcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7bm90aWZpY2F0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtpbWFnZSwgYmFkZ2UsIG5hbWUsIHRpbWUsIG1lc3NhZ2V9ID0gbm90aWZpY2F0aW9uO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC11c2VyLXRodW1iIGd4LW1yLTNcIj5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImd4LXNpemUtNDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9Lz5cclxuICAgICAgICB7YmFkZ2UgPiAwID8gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtYmFkZ2UgZ3gtYmFkZ2UtZGFuZ2VyIGd4LXRleHQtd2hpdGUgZ3gtcm91bmRlZC1jaXJjbGVcIj57YmFkZ2V9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lZGlhLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZsZXgtcm93IGd4LWp1c3RpZnktY29udGVudC1iZXR3ZWVuIGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImd4LXRleHQtY2FwaXRhbGl6ZSBneC11c2VyLW5hbWUgZ3gtbWItMFwiPjxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj57bmFtZX08L3NwYW4+PC9oNT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW1ldGEtZGF0ZVwiPjxzbWFsbD57dGltZX08L3NtYWxsPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1mcy1zbVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1idG4gZ3gtYnRuLXNtIGd4LXRvcDIgZ3gtdGV4dC1tdXRlZFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1yZXBseSBneC1wci0yXCIvPlJlcGx5PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWJ0biBneC1idG4tc20gZ3gtdG9wMiBneC10ZXh0LW11dGVkXCI+PGlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1jdXN0b20tdmlldyBneC1wci0yXCIvPlJlYWQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbTtcclxuIiwiZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkRvbW5pYyBCcm93blwiLFxyXG4gICAgdGltZTogXCI2OjE5IFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YuLi5cIixcclxuICAgIGJhZGdlOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxyXG4gICAgdGltZTogXCI0OjE4IFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZS4uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWFnZTpcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxyXG4gICAgdGltZTogXCI3OjEwIFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIlRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhLi4uXCIsXHJcbiAgICBiYWRnZTogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcImFsZXggZG9sZ292ZVwiLFxyXG4gICAgdGltZTogXCI1OjEwIFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbC4uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkRvbW5pYyBIYXJyaXNcIixcclxuICAgIHRpbWU6IFwiNzozNSBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlLi4uXCIsXHJcbiAgICBiYWRnZTogM1xyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tIFwiLi9Ob3RpZmljYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7bm90aWZpY2F0aW9uc30gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tICcuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnMnXHJcblxyXG5jb25zdCBNYWlsTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5NZXNzYWdlczwvaDM+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLWNoYXJ2bGV0LWRvd25cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLXNjcm9sbFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24sIGluZGV4KSA9PiA8Tm90aWZpY2F0aW9uSXRlbSBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0vPil9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbE5vdGlmaWNhdGlvbjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEJveCA9ICh7c3R5bGVOYW1lLCBwbGFjZWhvbGRlciwgb25DaGFuZ2UsIHZhbHVlfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BneC1zZWFyY2gtYmFyICR7c3R5bGVOYW1lfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYW50LWlucHV0XCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zZWFyY2gtaWNvbiBneC1wb2ludGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaFwiLz48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XHJcblxyXG5TZWFyY2hCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogXCJcIixcclxuICB2YWx1ZTogXCJcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtBdmF0YXIsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7b25Mb2dvdXR9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL0F1dGhcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgVXNlckluZm8gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdXNlck1lbnVPcHRpb25zID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImd4LXVzZXItcG9wb3ZlclwiPlxyXG4gICAgICA8bGk+TXkgQWNjb3VudDwvbGk+XHJcbiAgICAgIDxsaT5Db25uZWN0aW9uczwvbGk+XHJcbiAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChvbkxvZ291dChyb3V0ZXIpKX0+TG9nb3V0XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXt1c2VyTWVudU9wdGlvbnN9XHJcbiAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgPEF2YXRhciBzcmM9e1wiL2ltYWdlcy9pbWFnZXMvYXZhdGFyL2RvbW5pYy1oYXJyaXMucG5nXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyIGd4LXBvaW50ZXJcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87XHJcbiIsIi8vIGltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHtCdXR0b24sIERyYXdlciwgUmFkaW99IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG4vLyBpbXBvcnQge3NldFRoZW1lVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xyXG4vL1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIEJMVUUsXHJcbi8vICAgQkxVRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgQkxVRV9TRUMsXHJcbi8vICAgREFSS19CTFVFLFxyXG4vLyAgIERBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgREFSS19CTFVFX1NFQyxcclxuLy8gICBERUVQX09SQU5HRSxcclxuLy8gICBERUVQX09SQU5HRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgREVFUF9PUkFOR0VfU0VDLFxyXG4vLyAgIExBWU9VVF9UWVBFX0JPWEVELFxyXG4vLyAgIExBWU9VVF9UWVBFX0ZSQU1FRCxcclxuLy8gICBMQVlPVVRfVFlQRV9GVUxMLFxyXG4vLyAgIExJR0hUX0JMVUUsXHJcbi8vICAgTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgTElHSFRfQkxVRV9TRUMsXHJcbi8vICAgTElHSFRfUFVSUExFLFxyXG4vLyAgIExJR0hUX1BVUlBMRV8xLFxyXG4vLyAgIExJR0hUX1BVUlBMRV8xX0RBUktfVEVYVF9DT0xPUixcclxuLy8gICBMSUdIVF9QVVJQTEVfMV9TRUMsXHJcbi8vICAgTElHSFRfUFVSUExFXzIsXHJcbi8vICAgTElHSFRfUFVSUExFXzJfREFSS19URVhUX0NPTE9SLFxyXG4vLyAgIExJR0hUX1BVUlBMRV8yX1NFQyxcclxuLy8gICBMSUdIVF9QVVJQTEVfREFSS19URVhUX0NPTE9SLFxyXG4vLyAgIExJR0hUX1BVUlBMRV9TRUMsXHJcbi8vICAgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUixcclxuLy8gICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxyXG4vLyAgIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXHJcbi8vICAgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCxcclxuLy8gICBOQVZfU1RZTEVfRFJBV0VSLFxyXG4vLyAgIE5BVl9TVFlMRV9GSVhFRCxcclxuLy8gICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMLFxyXG4vLyAgIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXHJcbi8vICAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4vLyAgIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4vLyAgIE9SQU5HRSxcclxuLy8gICBPUkFOR0VfREFSS19URVhUX0NPTE9SLFxyXG4vLyAgIE9SQU5HRV9TRUMsXHJcbi8vICAgUkVELFxyXG4vLyAgIFJFRF9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgUkVEX1NFQyxcclxuLy8gICBUSEVNRV9UWVBFX0RBUkssXHJcbi8vICAgVEhFTUVfVFlQRV9MSVRFLFxyXG4vLyAgIFRIRU1FX1RZUEVfU0VNSV9EQVJLXHJcbi8vIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuLy8gaW1wb3J0IHtvbk5hdlN0eWxlQ2hhbmdlfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG4vL1xyXG4vLyBjb25zdCBDdXN0b21pemVyU3lzdGVtID0gKCkgPT4ge1xyXG4vL1xyXG4vLyAgIGNvbnN0IFtpc0N1c3RvbWl6ZXJPcGVuZWQsIHNldElzQ3VzdG9taXplck9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4vL1xyXG4vLyAgIGNvbnN0IHRoZW1lVHlwZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy50aGVtZVR5cGUpO1xyXG4vLyAgIGNvbnN0IHRoZW1lQ29sb3IgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVDb2xvcik7XHJcbi8vICAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xyXG4vLyAgIGNvbnN0IGxheW91dFR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubGF5b3V0VHlwZSk7XHJcbi8vXHJcbi8vICAgY29uc29sZS5sb2coXCIgaW4gIGN1c3RvbWl6ZXJcIiwgdGhlbWVDb2xvcik7XHJcbi8vXHJcbi8vICAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoZmlsZW5hbWUpID0+IHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZW5hbWVcIiwgZmlsZW5hbWUpO1xyXG4vLyAgICAgLy8gbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbi8vICAgICAvLyBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4vLyAgICAgLy8gbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbi8vICAgICAvLyBsaW5rLmNsYXNzTmFtZSA9ICdneC1zdHlsZSc7XHJcbi8vICAgICAvLyBsaW5rLmhyZWYgPSBgL2Nzcy8ke2ZpbGVuYW1lfS5jc3NgO1xyXG4vL1xyXG4vLyAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAvLyAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ3gtc3R5bGUnKTtcclxuLy8gICAgIC8vXHJcbi8vICAgICAvLyAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbi8vICAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xyXG4vLyAgICAgLy8gICAgICAgaWYgKChpbmRleCArIDEpIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbi8vICAgICAvLyAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baW5kZXhdO1xyXG4vLyAgICAgLy8gICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuLy8gICAgIC8vICAgICAgIH1cclxuLy8gICAgIC8vICAgICB9XHJcbi8vICAgICAvLyAgIH1cclxuLy8gICAgIC8vIH0sIDEwMDAwKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwibXkgbGluayBcIixsaW5rKTtcclxuLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbi8vICAgICAvLyBkaXNwYXRjaChzZXRUaGVtZUNvbG9yKGZpbGVuYW1lKSk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCB0b2dnbGVDdXN0b21pemVyID0gKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNDdXN0b21pemVyT3BlbmVkKCFpc0N1c3RvbWl6ZXJPcGVuZWQpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgY29uc3Qgb25UaGVtZVR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0VGhlbWVUeXBlKGUudGFyZ2V0LnZhbHVlKSk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCBvbk5hdlN0eWxlQ2hhbmdlcyA9IChuYXZTdHlsZSkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2gob25OYXZTdHlsZUNoYW5nZShuYXZTdHlsZSkpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgY29uc3QgZ2V0Q3VzdG9taXplckNvbnRlbnQgPSAoKSA9PiB7XHJcbi8vXHJcbi8vICAgICAvLyBpZiAodGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0RBUkspIHtcclxuLy8gICAgIC8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XHJcbi8vICAgICAvLyAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4vLyAgICAgLy8gICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4vLyAgICAgLy8gICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuLy8gICAgIC8vICAgbGluay5ocmVmID0gXCIvY3NzL2RhcmtfdGhlbWUuY3NzXCI7XHJcbi8vICAgICAvLyAgIGxpbmsuY2xhc3NOYW1lID0gJ3N0eWxlX2RhcmtfdGhlbWUnO1xyXG4vLyAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4vLyAgICAgLy8gfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpKSB7XHJcbi8vICAgICAvLyAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xyXG4vLyAgICAgLy8gICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0eWxlX2RhcmtfdGhlbWUnKTtcclxuLy8gICAgIC8vICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuLy8gICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbi8vICAgICAvLyAgICAgICBpZiAoaW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcclxuLy8gICAgIC8vICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpbmRleF07XHJcbi8vICAgICAvLyAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4vLyAgICAgLy8gICAgICAgfVxyXG4vLyAgICAgLy8gICAgIH1cclxuLy8gICAgIC8vICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmV0dXJuIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWN1c3RvbWl6ZXJcIj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jdXN0b21pemVyLWl0ZW1cIj5cclxuLy8gICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3gtbWItMyBneC10ZXh0LXVwcGVyY2FzZVwiPlRoZW1lPC9oNj5cclxuLy8gICAgICAgICA8UmFkaW8uR3JvdXAgdmFsdWU9e3RoZW1lVHlwZX0gb25DaGFuZ2U9e29uVGhlbWVUeXBlQ2hhbmdlfT5cclxuLy8gICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9e1RIRU1FX1RZUEVfTElURX0+TGl0ZTwvUmFkaW8uQnV0dG9uPlxyXG4vLyAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17VEhFTUVfVFlQRV9TRU1JX0RBUkt9PlNlbWkgRGFyazwvUmFkaW8uQnV0dG9uPlxyXG4vLyAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17VEhFTUVfVFlQRV9EQVJLfT5EYXJrPC9SYWRpby5CdXR0b24+XHJcbi8vICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY3VzdG9taXplci1pdGVtXCI+XHJcbi8vICAgICAgICAge2dldFByZXNldENvbG9ycyh0aGVtZUNvbG9yKX1cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgIDxoNiBjbGFzc05hbWU9XCJneC1tYi0zIGd4LXRleHQtdXBwZXJjYXNlXCI+TmF2IFN0eWxlPC9oNj5cclxuLy9cclxuLy8gICAgICAge2dldE5hdlN0eWxlcyhuYXZTdHlsZSl9XHJcbi8vXHJcbi8vICAgICAgIDxoNiBjbGFzc05hbWU9XCJneC1tYi0zIGd4LXRleHQtdXBwZXJjYXNlXCI+TGF5b3V0PC9oNj5cclxuLy9cclxuLy8gICAgICAge2dldExheW91dHNUeXBlcyhsYXlvdXRUeXBlKX1cclxuLy8gICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIGNvbnN0IGhhbmRsZVRoZW1lQ29sb3IgPSAoZmlsZU5hbWUpID0+IHtcclxuLy8gICAgIC8vIGhhbmRsZUNvbG9yQ2hhbmdlKGZpbGVOYW1lKTtcclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIGNvbnN0IGhhbmRsZUxheW91dFR5cGVzID0gKGxheW91dFR5cGUpID0+IHtcclxuLy8gICAgIC8vIGRpc3BhdGNoKG9uTGF5b3V0VHlwZUNoYW5nZShsYXlvdXRUeXBlKSk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCBnZXRQcmVzZXRDb2xvcnMgPSAodGhlbWVDb2xvcikgPT4ge1xyXG4vLyAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJneC1jb2xvci1vcHRpb24gZ3gtbGlzdC1pbmxpbmVcIj5cclxuLy9cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNvbG9yKFwibGlnaHRfcHVycGxlXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IExJR0hUX1BVUlBMRV9TRUMsIGNvbG9yOiBMSUdIVF9QVVJQTEVfREFSS19URVhUX0NPTE9SfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWxpbmsgZ3gtY29sb3ItbGlnaHQtcHVycGxlICR7dGhlbWVDb2xvciA9PT0gTElHSFRfUFVSUExFICYmICdhY3RpdmUnfWB9Lz5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNvbG9yKFwicmVkXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFJFRF9TRUMsIGNvbG9yOiBSRURfREFSS19URVhUX0NPTE9SfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWxpbmsgZ3gtY29sb3ItcmVkICR7dGhlbWVDb2xvciA9PT0gUkVEICYmICdhY3RpdmUnfWB9Lz5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNvbG9yKFwiYmx1ZVwiKX1cclxuLy8gICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBCTFVFX1NFQywgY29sb3I6IEJMVUVfREFSS19URVhUX0NPTE9SfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWxpbmsgZ3gtY29sb3ItYmx1ZSAke3RoZW1lQ29sb3IgPT09IEJMVUUgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJkYXJrX2JsdWVcIil9XHJcbi8vICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogREFSS19CTFVFX1NFQywgY29sb3I6IERBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1J9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1kYXJrLWJsdWUgJHt0aGVtZUNvbG9yID09PSBEQVJLX0JMVUUgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJvcmFuZ2VcIil9XHJcbi8vICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogT1JBTkdFX1NFQywgY29sb3I6IE9SQU5HRV9EQVJLX1RFWFRfQ09MT1J9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1vcmFuZ2UgJHt0aGVtZUNvbG9yID09PSBPUkFOR0UgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJsaWdodF9ibHVlXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IExJR0hUX0JMVUVfU0VDLCBjb2xvcjogTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1J9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1saWdodC1ibHVlICR7dGhlbWVDb2xvciA9PT0gTElHSFRfQkxVRSAmJiAnYWN0aXZlJ31gfS8+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vXHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhblxyXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGhlbWVDb2xvcihcImRlZXBfb3JhbmdlXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IERFRVBfT1JBTkdFX1NFQywgY29sb3I6IERFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUn19XHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e2BneC1saW5rIGd4LWNvbG9yLWRlZXAtb3JhbmdlICR7dGhlbWVDb2xvciA9PT0gREVFUF9PUkFOR0UgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJsaWdodF9wdXJwbGVfMVwiKX1cclxuLy8gICAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTElHSFRfUFVSUExFXzFfU0VDLFxyXG4vLyAgICAgICAgICAgICBjb2xvcjogTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1saWdodC1wdXJwbGUxICR7dGhlbWVDb2xvciA9PT0gTElHSFRfUFVSUExFXzEgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJsaWdodF9wdXJwbGVfMlwiKX1cclxuLy8gICAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTElHSFRfUFVSUExFXzJfU0VDLFxyXG4vLyAgICAgICAgICAgICBjb2xvcjogTElHSFRfUFVSUExFXzJfREFSS19URVhUX0NPTE9SXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1saWdodC1wdXJwbGUyICR7dGhlbWVDb2xvciA9PT0gTElHSFRfUFVSUExFXzIgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vLyAgICAgPC91bD5cclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIGNvbnN0IGdldExheW91dHNUeXBlcyA9IChsYXlvdXRUeXBlKSA9PiB7XHJcbi8vICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImd4LWxheW91dC1vcHRpb24gZ3gtbGlzdC1pbmxpbmVcIj5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxheW91dFR5cGVzKExBWU9VVF9UWVBFX0ZSQU1FRCl9XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtcG9pbnRlciAke2xheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0ZSQU1FRCAmJiAnYWN0aXZlJ31gfT5cclxuLy8gICAgICAgICA8aW1nIHNyYz17KCcvaW1hZ2VzL2xheW91dHMvZnJhbWVkLnBuZycpfSBhbHQ9J2ZyYW1lZCcvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxheW91dFR5cGVzKExBWU9VVF9UWVBFX0ZVTEwpfVxyXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGd4LXBvaW50ZXIgJHtsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRV9GVUxMICYmICdhY3RpdmUnfWB9PlxyXG4vLyAgICAgICAgIDxpbWcgc3JjPXsoJy9pbWFnZXMvbGF5b3V0cy9mdWxsIHdpZHRoLnBuZycpfSBhbHQ9J2Z1bGwgd2lkdGgnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYXlvdXRUeXBlcyhMQVlPVVRfVFlQRV9CT1hFRCl9XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtcG9pbnRlciAke2xheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0JPWEVEICYmICdhY3RpdmUnfWB9PlxyXG4vLyAgICAgICAgIDxpbWcgc3JjPXsoJy9pbWFnZXMvbGF5b3V0cy9ib3hlZC5wbmcnKX0gYWx0PSdib3hlZCcvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCBnZXROYXZTdHlsZXMgPSAobmF2U3R5bGUpID0+IHtcclxuLy8gICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZ3gtbmF2LW9wdGlvbiBneC1saXN0LWlubGluZVwiPlxyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gb25OYXZTdHlsZUNoYW5nZXMoTkFWX1NUWUxFX0ZJWEVEKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCAmJiAnYWN0aXZlJ31gfT5cclxuLy8gICAgICAgICA8aW1nIHNyYz17KCcvaW1hZ2VzL2xheW91dHMvZml4ZWQucG5nJyl9IGFsdD0nZml4ZWQnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfTUlOSV9TSURFQkFSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL21pbmkgc2lkZWJhci5wbmcnKX0gYWx0PSdtaW5pIHNpZGViYXInLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfRFJBV0VSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2RyYXdlciBuYXYucG5nJyl9IGFsdD0nZHJhd2VyIG5hdicvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uTmF2U3R5bGVDaGFuZ2VzKE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSICYmICdhY3RpdmUnfWB9PlxyXG4vLyAgICAgICAgIDxpbWcgc3JjPXsoJy9pbWFnZXMvbGF5b3V0cy9ubyBoZWFkZXIgbWluaSBzaWRlYmFyLnBuZycpfSBhbHQ9J25vIGhhZGVyIG1pbmkgc2lkZWJhcicvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uTmF2U3R5bGVDaGFuZ2VzKE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUil9XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtcG9pbnRlciAke25hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL3ZlcnRpY2FsIG5vIGhlYWRlci5wbmcnKX0gYWx0PSd2ZXJ0aWNhbCBubyBoZWFkZXInLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2RlZmF1bHQgaG9yaXpvbnRhbC5wbmcnKX0gYWx0PSdkZWZhdWx0IGhvcml6b250YWwnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2RhcmsgaG9yaXpvbnRhbC5wbmcnKX0gYWx0PSdkYXJrIGhvcml6b250YWwnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2luc2lkZSBoZWFkZXIgaG9yaXpvbnRhbC5wbmcnKX0gYWx0PSdpbnNpZGUgaGVhZGVyIGhvcml6b250YWwnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfQkVMT1dfSEVBREVSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9CRUxPV19IRUFERVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2JlbG93IGhlYWRlci5wbmcnKX0gYWx0PSdiZWxvdyBoZWFkZXInLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vXHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfQUJPVkVfSEVBREVSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL3RvcCB0byBoZWFkZXIucG5nJyl9IGFsdD0ndG9wIHRvIGhlYWRlcicvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPD5cclxuLy8gICAgICAgPERyYXdlclxyXG4vLyAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuLy8gICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbi8vICAgICAgICAgb25DbG9zZT17dG9nZ2xlQ3VzdG9taXplcn1cclxuLy8gICAgICAgICB2aXNpYmxlPXtpc0N1c3RvbWl6ZXJPcGVuZWR9PlxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGdldEN1c3RvbWl6ZXJDb250ZW50KClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIDwvRHJhd2VyPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWN1c3RvbWl6ZXItb3B0aW9uXCI+XHJcbi8vICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RvZ2dsZUN1c3RvbWl6ZXJ9PlxyXG4vLyAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmcgZnhpY29uLWhjLXNwaW4gZ3gtZC1ibG9ja1wiLz5cclxuLy8gICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8Lz5cclxuLy8gICApO1xyXG4vLyB9O1xyXG4vL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBDdXN0b21pemVyU3lzdGVtO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29uZmlnUHJvdmlkZXIsIExheW91dH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtJbnRsUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5pbXBvcnQge2Nvbm5lY3QsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9TaWRlYmFyXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsRGVmYXVsdCBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEZWZhdWx0XCI7XHJcbmltcG9ydCBIb3Jpem9udGFsRGFyayBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEYXJrXCI7XHJcbmltcG9ydCBJbnNpZGVIZWFkZXIgZnJvbSBcIi4uL1RvcGJhci9JbnNpZGVIZWFkZXJcIjtcclxuaW1wb3J0IEFib3ZlSGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQWJvdmVIZWFkZXJcIjtcclxuaW1wb3J0IEJlbG93SGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQmVsb3dIZWFkZXJcIjtcclxuaW1wb3J0IFRvcGJhciBmcm9tIFwiLi4vVG9wYmFyXCI7XHJcbmltcG9ydCB7Zm9vdGVyVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUixcclxuICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxyXG4gIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXHJcbiAgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCxcclxuICBOQVZfU1RZTEVfRFJBV0VSLFxyXG4gIE5BVl9TVFlMRV9GSVhFRCxcclxuICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMLFxyXG4gIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4gIFRIRU1FX1RZUEVfREFSS1xyXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcbmltcG9ydCBOb0hlYWRlck5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vVG9wYmFyL05vSGVhZGVyTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBBcHBMb2NhbGUgZnJvbSBcIi4uLy4uLy4uL2xuZ1Byb3ZpZGVyXCI7XHJcbmltcG9ydCBDdXN0b21pemVyIGZyb20gXCIuLi9DdXN0b21pemVyXCI7XHJcblxyXG5jb25zdCB7Q29udGVudCwgRm9vdGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdGhlbWVUeXBlLCAgbG9jYWxlLCBuYXZTdHlsZX0gPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MpXHJcbiAgY29uc3QgZ2V0Q29udGFpbmVyQ2xhc3MgPSAobmF2U3R5bGUpID0+IHtcclxuICAgIHN3aXRjaCAobmF2U3R5bGUpIHtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMOlxyXG4gICAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTDpcclxuICAgICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUw6XHJcbiAgICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSOlxyXG4gICAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUjpcclxuICAgICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGdldE5hdlN0eWxlcyA9IChuYXZTdHlsZSkgPT4ge1xyXG4gICAgc3dpdGNoIChuYXZTdHlsZSkge1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwgOlxyXG4gICAgICAgIHJldHVybiA8SG9yaXpvbnRhbERlZmF1bHQvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIDpcclxuICAgICAgICByZXR1cm4gPEhvcml6b250YWxEYXJrLz47XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCA6XHJcbiAgICAgICAgcmV0dXJuIDxJbnNpZGVIZWFkZXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSIDpcclxuICAgICAgICByZXR1cm4gPEFib3ZlSGVhZGVyLz47XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0JFTE9XX0hFQURFUiA6XHJcbiAgICAgICAgcmV0dXJuIDxCZWxvd0hlYWRlci8+O1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9GSVhFRCA6XHJcbiAgICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfRFJBV0VSIDpcclxuICAgICAgICByZXR1cm4gPFRvcGJhci8+O1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgOlxyXG4gICAgICAgIHJldHVybiA8VG9wYmFyLz47XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgOlxyXG4gICAgICAgIHJldHVybiA8Tm9IZWFkZXJOb3RpZmljYXRpb24vPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgOlxyXG4gICAgICAgIHJldHVybiA8Tm9IZWFkZXJOb3RpZmljYXRpb24vPjtcclxuICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGJvZHlDbGFzcyA9IFwiXCI7XHJcbiAgaWYgKHRoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9EQVJLKSB7XHJcbiAgICBib2R5Q2xhc3MgPSBcImRhcmstdGhlbWVcIlxyXG4gIH1cclxuICBjb25zdCBjdXJyZW50QXBwTG9jYWxlID0gQXBwTG9jYWxlW2xvY2FsZS5sb2NhbGVdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29uZmlnUHJvdmlkZXIgbG9jYWxlPXtjdXJyZW50QXBwTG9jYWxlLmFudGR9PlxyXG4gICAgICA8SW50bFByb3ZpZGVyXHJcbiAgICAgICAgbG9jYWxlPXtjdXJyZW50QXBwTG9jYWxlLmxvY2FsZX1cclxuICAgICAgICBtZXNzYWdlcz17Y3VycmVudEFwcExvY2FsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgPExheW91dCBjbGFzc05hbWU9e2BneC1hcHAtbGF5b3V0ICR7Ym9keUNsYXNzfWB9PlxyXG4gICAgICAgICAgPFNpZGViYXIvPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge2dldE5hdlN0eWxlcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT17YGd4LWxheW91dC1jb250ZW50ICR7Z2V0Q29udGFpbmVyQ2xhc3MobmF2U3R5bGUpfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbi1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Rm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sYXlvdXQtZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAge2Zvb3RlclRleHR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8Q3VzdG9taXplci8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvSW50bFByb3ZpZGVyPlxyXG4gICAgPC9Db25maWdQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7c2V0dGluZ3N9KSA9PiB7XHJcbiAgY29uc3Qge3dpZHRoLCB0aGVtZVR5cGUsIGxheW91dFR5cGUsIG5hdlN0eWxlLCBsb2NhbGV9ID0gc2V0dGluZ3M7XHJcbiAgcmV0dXJuIHt3aWR0aCwgdGhlbWVUeXBlLCBsYXlvdXRUeXBlLCBuYXZTdHlsZSwgbG9jYWxlfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwTGF5b3V0KTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcHNOYXZpZ2F0aW9uID0gKCkgPT5cclxuICA8dWwgY2xhc3NOYW1lPVwiZ3gtYXBwLW5hdlwiPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvbGk+XHJcbiAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L2xpPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz48L2xpPlxyXG4gIDwvdWw+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwc05hdmlnYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBTaWRlYmFyTG9nbyBmcm9tIFwiLi9TaWRlYmFyTG9nb1wiO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuaW1wb3J0IEFwcHNOYXZpZ2F0aW9uIGZyb20gXCIuL0FwcHNOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4gIFRIRU1FX1RZUEVfTElURSxcclxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0UGF0aE5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcclxuY29uc3QgTWVudUl0ZW1Hcm91cCA9IE1lbnUuSXRlbUdyb3VwO1xyXG5cclxuY29uc3QgU2lkZWJhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGxldCB7IG5hdlN0eWxlLCB0aGVtZVR5cGUsIHBhdGhuYW1lIH0gPSB1c2VTZWxlY3RvcihcclxuICAgICh7IHNldHRpbmdzIH0pID0+IHNldHRpbmdzXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZ2V0Tm9IZWFkZXJDbGFzcyA9IChuYXZTdHlsZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgfHxcclxuICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUlxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBcImd4LW5vLWhlYWRlci1ub3RpZmljYXRpb25zXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG4gIGNvbnN0IGdldE5hdlN0eWxlU3ViTWVudUNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XHJcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XHJcbiAgICAgIHJldHVybiBcImd4LW5vLWhlYWRlci1zdWJtZW51LXBvcHVwXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0UGF0aE5hbWUocm91dGVyLnBhdGhuYW1lKSk7XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZEtleXMgPSBwYXRobmFtZS5zdWJzdHIoMSk7XHJcbiAgY29uc3QgZGVmYXVsdE9wZW5LZXlzID0gc2VsZWN0ZWRLZXlzLnNwbGl0KFwiL1wiKVsxXTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNpZGViYXJMb2dvIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2lkZWJhci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtc2lkZWJhci1ub3RpZmljYXRpb25zICR7Z2V0Tm9IZWFkZXJDbGFzcyhuYXZTdHlsZSl9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VXNlclByb2ZpbGUgLz5cclxuICAgICAgICAgIDxBcHBzTmF2aWdhdGlvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWxheW91dC1zaWRlci1zY3JvbGxiYXJcIj5cclxuICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W2RlZmF1bHRPcGVuS2V5c119XHJcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3NlbGVjdGVkS2V5c119XHJcbiAgICAgICAgICAgIHRoZW1lPXt0aGVtZVR5cGUgPT09IFRIRU1FX1RZUEVfTElURSA/IFwibGl0ZVwiIDogXCJkYXJrXCJ9XHJcbiAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImFsbF9kb21haW5cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FsbF9kb21haW5cIj5cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1kYXNiaG9hcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBEb21haW4gTGlzdFxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNpZGViYXJDb250ZW50LnByb3BUeXBlcyA9IHt9O1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ29udGVudDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7b25OYXZTdHlsZUNoYW5nZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xyXG5pbXBvcnQge1xyXG4gIE5BVl9TVFlMRV9EUkFXRVIsXHJcbiAgTkFWX1NUWUxFX0ZJWEVELFxyXG4gIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXHJcbiAgVEFCX1NJWkUsXHJcbiAgVEhFTUVfVFlQRV9MSVRFXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuXHJcblxyXG5jb25zdCBTaWRlYmFyTG9nbyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge3dpZHRoLCB0aGVtZVR5cGUsIG5hdkNvbGxhcHNlZH0gPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MpO1xyXG4gIGxldCBuYXZTdHlsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZTdHlsZSk7XHJcbiAgaWYgKHdpZHRoIDwgVEFCX1NJWkUgJiYgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCkge1xyXG4gICAgbmF2U3R5bGUgPSBOQVZfU1RZTEVfRFJBV0VSO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1sYXlvdXQtc2lkZXItaGVhZGVyXCI+XHJcbiAgICAgIHsobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUikgPyA8ZGl2IGNsYXNzTmFtZT1cImd4LWxpbmViYXJcIj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtaWNvbi1idG4gaWNvbiBpY29uLSR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgPyAnbWVudS11bmZvbGQnIDogJ21lbnUtZm9sZCd9ICR7dGhlbWVUeXBlICE9PSBUSEVNRV9UWVBFX0xJVEUgPyAnZ3gtdGV4dC13aGl0ZScgOiAnJ31gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2gob25OYXZTdHlsZUNoYW5nZShOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChvbk5hdlN0eWxlQ2hhbmdlKE5BVl9TVFlMRV9GSVhFRCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+IDogbnVsbH1cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImd4LXNpdGUtbG9nb1wiPlxyXG4gICAgICAgIHtuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIgJiYgd2lkdGggPj0gVEFCX1NJWkUgP1xyXG4gICAgICAgICAgPGltZyBhbHQ9XCJsb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+IDpcclxuICAgICAgICAgIHRoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID9cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dvMVwiIHNyYz17KFwiL2ltYWdlcy9sb2dvLXdoaXRlLnBuZ1wiKX0vPiA6XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwibG9nbzJcIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz59XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckxvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBQb3BvdmVyfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge29uTG9nb3V0fSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9BdXRoXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgdXNlck1lbnVPcHRpb25zID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImd4LXVzZXItcG9wb3ZlclwiPlxyXG4gICAgICA8bGk+TXkgQWNjb3VudDwvbGk+XHJcbiAgICAgIDxsaT5Db25uZWN0aW9uczwvbGk+XHJcbiAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChvbkxvZ291dChyb3V0ZSkpfT5Mb2dvdXRcclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1tYi00IGd4LWF2YXRhci1yb3dcIj5cclxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXt1c2VyTWVudU9wdGlvbnN9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXtcIi9pbWFnZXMvYXZhdGFyL2RvbW5pYy1oYXJyaXMucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1zaXplLTQwIGd4LXBvaW50ZXIgZ3gtbXItM1wiIGFsdD1cIlwiLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1hdmF0YXItbmFtZVwiPlJvYiBGYXJuYW5kaWVzPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGV2cm9uLWRvd24gZ3gtZnMteHhzIGd4LW1sLTJcIi8+PC9zcGFuPlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtEcmF3ZXIsIExheW91dH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBTaWRlYmFyQ29udGVudCBmcm9tIFwiLi9TaWRlYmFyQ29udGVudFwiO1xyXG5pbXBvcnQge3RvZ2dsZUNvbGxhcHNlZFNpZGVOYXYsIHVwZGF0ZVdpbmRvd1dpZHRofSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XHJcbmltcG9ydCB7XHJcbiAgTkFWX1NUWUxFX0RSQVdFUixcclxuICBOQVZfU1RZTEVfRklYRUQsXHJcbiAgTkFWX1NUWUxFX01JTklfU0lERUJBUixcclxuICBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIsXHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIsXHJcbiAgVEFCX1NJWkUsXHJcbiAgVEhFTUVfVFlQRV9MSVRFXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuXHJcbmNvbnN0IHtTaWRlcn0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHt0aGVtZVR5cGUsIG5hdkNvbGxhcHNlZCwgd2lkdGgsIG5hdlN0eWxlfSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncyk7XHJcblxyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbGxhcHNlZE5hdiA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkpO1xyXG4gICAgfSlcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblxyXG4gIGxldCBkcmF3ZXJTdHlsZSA9IFwiZ3gtY29sbGFwc2VkLXNpZGViYXJcIjtcclxuXHJcbiAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQpIHtcclxuICAgIGRyYXdlclN0eWxlID0gXCJcIjtcclxuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUikge1xyXG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LW1pbmktc2lkZWJhciBneC1taW5pLWN1c3RvbS1zaWRlYmFyXCI7XHJcbiAgfSBlbHNlIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSKSB7XHJcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtY3VzdG9tLXNpZGViYXJcIlxyXG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIpIHtcclxuICAgIGRyYXdlclN0eWxlID0gXCJneC1taW5pLXNpZGViYXJcIjtcclxuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRFJBV0VSKSB7XHJcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtY29sbGFwc2VkLXNpZGViYXJcIlxyXG4gIH1cclxuICBpZiAoKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVJcclxuICAgIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpICYmIHdpZHRoIDwgVEFCX1NJWkUpIHtcclxuICAgIGRyYXdlclN0eWxlID0gXCJneC1jb2xsYXBzZWQtc2lkZWJhclwiXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZXJcclxuICAgICAgY2xhc3NOYW1lPXtgZ3gtYXBwLXNpZGViYXIgJHtkcmF3ZXJTdHlsZX0gJHt0aGVtZVR5cGUgIT09IFRIRU1FX1RZUEVfTElURSA/ICdneC1sYXlvdXQtc2lkZXItZGFyaycgOiBudWxsfWB9XHJcbiAgICAgIHRyaWdnZXI9e251bGx9XHJcbiAgICAgIGNvbGxhcHNlZD17KHdpZHRoIDwgVEFCX1NJWkUgPyBmYWxzZSA6IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUil9XHJcbiAgICAgIHRoZW1lPXt0aGVtZVR5cGUgPT09IFRIRU1FX1RZUEVfTElURSA/IFwibGl0ZVwiIDogXCJkYXJrXCJ9XHJcbiAgICAgIGNvbGxhcHNpYmxlPlxyXG4gICAgICB7XHJcbiAgICAgICAgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIgfHwgd2lkdGggPCBUQUJfU0laRSA/XHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWRyYXdlci1zaWRlYmFyICR7dGhlbWVUeXBlICE9PSBUSEVNRV9UWVBFX0xJVEUgPyAnZ3gtZHJhd2VyLXNpZGViYXItZGFyaycgOiBudWxsfWB9XHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uVG9nZ2xlQ29sbGFwc2VkTmF2fVxyXG4gICAgICAgICAgICB2aXNpYmxlPXtuYXZDb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICA8U2lkZWJhckNvbnRlbnQvPlxyXG4gICAgICAgICAgPC9EcmF3ZXI+IDpcclxuICAgICAgICAgIDxTaWRlYmFyQ29udGVudC8+XHJcbiAgICAgIH1cclxuICAgIDwvU2lkZXI+KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyLCBTZWxlY3R9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5cclxuaW1wb3J0IGxhbmd1YWdlRGF0YSBmcm9tIFwiLi4vbGFuZ3VhZ2VEYXRhXCI7XHJcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgQXBwTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuXHJcbmltcG9ydCB7VEFCX1NJWkV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkJsb2c8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkFwcHM8L01lbnUuSXRlbT5cclxuICA8L01lbnU+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2soKSB7XHJcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG59XHJcblxyXG5cclxuY29uc3QgQWJvdmVIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5sb2NhbGUpO1xyXG4gIGNvbnN0IG5hdkNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5uYXZDb2xsYXBzZWQpO1xyXG4gIGNvbnN0IHdpZHRoID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLndpZHRoKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxyXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbCBneC1oZWFkZXItaG9yaXpvbnRhbC1kYXJrIGd4LWFib3ZlLWhlYWRlci1ob3Jpem9udGFsXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtY3VydmUgZ3gtZC1ub25lIGd4LWQtbGctYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtZmxleFwiPlxyXG4gICAgICAgICAgICA8SG9yaXpvbnRhbE5hdi8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LWxpbmVzXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2V0dGluZ1wiLz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFwcHMtbmV3XCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+PEludGxNZXNzYWdlcyBpZD1cImFwcC51c2VyQXV0aC5sb2dpblwiLz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25VcFwiLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCA8PSBUQUJfU0laRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KCFuYXZDb2xsYXBzZWQpKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtbXIteHMtMyBneC1wdC14cy0xIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5Qcm9kdWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1mbGV4XCI+PERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3ZlSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyLCBTZWxlY3R9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcbmNvbnN0IG1lbnUgPSAoXHJcbiAgPE1lbnUgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5CbG9nczwvTWVudS5JdGVtPlxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayhlKSB7XHJcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG59XHJcblxyXG5jb25zdCBCZWxvd0hlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XHJcblxyXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcclxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XHJcbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZShsYW5ndWFnZSkpXHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlLXRleHRcIj57bGFuZ3VhZ2UubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0N1c3RvbVNjcm9sbGJhcnM+KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2VhcmNoQ2hhdFVzZXIgPSAoZXZ0KSA9PiB7XHJcbiAgICBzZXRTZWFyY2hUZXh0KGV2dC50YXJnZXQudmFsdWUpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwgZ3gtaGVhZGVyLWhvcml6b250YWwtZGFyayBneC1iZWxvdy1oZWFkZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LW1yLXhzLTMgZ3gtcHQteHMtMSBneC13LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtbm9uZSBneC1kLWxnLWJsb2NrIGd4LXBvaW50ZXIgZ3gtbXIteHMtNSBneC1sb2dvXCIgc3JjPXsoXCIvaW1hZ2VzL2xvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1zZWFyY2ggZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxyXG5cclxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImx1Y3lcIiBzdHlsZT17e3dpZHRoOiAxMjB9fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+UHJvZHVjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsdWN5XCI+QXBwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+QmxvZ3M8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaCBneC1kLWlubGluZS1ibG9jayBneC1kLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoLW5ld1wiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tc2dcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8TWFpbE5vdGlmaWNhdGlvbi8+fSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zdGF0dXMgZ3gtc3RhdHVzLXJ0bCBneC1zbWFsbCBneC1vcmFuZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtsYW5ndWFnZU1lbnUoKX0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj48aVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGZsYWctJHtsb2NhbGUuaWNvbn1gfS8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LXVzZXItbmF2XCI+PFVzZXJJbmZvLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtY3VydmUgZ3gtZC1ub25lIGd4LWQtbGctYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtZmxleFwiPlxyXG4gICAgICAgICAgICA8SG9yaXpvbnRhbE5hdi8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LWxpbmVzXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2V0dGluZ1wiLz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFwcHMtbmV3XCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlbG93SGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyLCBTZWxlY3R9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xyXG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcbmNvbnN0IG1lbnUgPSAoXHJcbiAgPE1lbnUgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5CbG9nczwvTWVudS5JdGVtPlxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayhlKSB7XHJcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG59XHJcblxyXG5jb25zdCBIb3Jpem9udGFsRGFyayA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XHJcblxyXG5cclxuICBjb25zdCBsYW5ndWFnZU1lbnUgPSAoKSA9PiAoXHJcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgIHtsYW5ndWFnZURhdGEubWFwKGxhbmd1YWdlID0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsIGd4LWhlYWRlci1ob3Jpem9udGFsLWRhcmtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+TG9naW48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5TaWdudXA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpbi1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtbXIteHMtMyBneC1wdC14cy0xIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5Qcm9kdWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1mbGV4XCI+PERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1ub3RpZmljYXRpb25cIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tc2dcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXs8TWFpbE5vdGlmaWNhdGlvbi8+fSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdC1uZXdcIi8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zdGF0dXMgZ3gtc3RhdHVzLXJ0bCBneC1zbWFsbCBneC1vcmFuZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtsYW5ndWFnZU1lbnUoKX0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj48aVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGZsYWctJHtsb2NhbGUuaWNvbn1gfS8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LXVzZXItbmF2XCI+PFVzZXJJbmZvLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1kLW5vbmUgZ3gtZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsRGFyaztcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIExheW91dCwgTWVudSwgbWVzc2FnZSwgUG9wb3ZlciwgU2VsZWN0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcclxuaW1wb3J0IGxhbmd1YWdlRGF0YSBmcm9tIFwiLi4vbGFuZ3VhZ2VEYXRhXCI7XHJcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgQXBwTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5cclxuY29uc3Qge0hlYWRlcn0gPSBMYXlvdXQ7XHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcbmNvbnN0IG1lbnUgPSAoXHJcbiAgPE1lbnUgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlByb2R1Y3RzPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5BcHBzPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5CbG9nczwvTWVudS5JdGVtPlxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayhlKSB7XHJcbiAgbWVzc2FnZS5pbmZvKCdDbGljayBvbiBtZW51IGl0ZW0uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG59XHJcblxyXG5jb25zdCBIb3Jpem9udGFsRGVmYXVsdCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XHJcblxyXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcclxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XHJcbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZShsYW5ndWFnZSkpXHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlLXRleHRcIj57bGFuZ3VhZ2UubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0N1c3RvbVNjcm9sbGJhcnM+KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2VhcmNoQ2hhdFVzZXIgPSAoZXZ0KSA9PiB7XHJcbiAgICBzZXRTZWFyY2hUZXh0KGV2dC50YXJnZXQudmFsdWUpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsZXJ0IGd4LW1yLTNcIi8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PEludGxNZXNzYWdlcyBpZD1cImFwcC5hbm5vdW5jZWRcIi8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxvZ2luLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+TG9naW48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5TaWdudXA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2Q29sbGFwc2VkXCIsIW5hdkNvbGxhcHNlZClcclxuICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlciBneC13LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtbm9uZSBneC1kLWxnLWJsb2NrIGd4LXBvaW50ZXIgZ3gtbXIteHMtNSBneC1sb2dvXCIgc3JjPXsoXCIvaW1hZ2VzL2xvZ28td2hpdGUucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1zZWFyY2ggZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxyXG5cclxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImx1Y3lcIiBzdHlsZT17e3dpZHRoOiAxMjB9fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+UHJvZHVjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsdWN5XCI+QXBwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIllpbWluZ2hlXCI+QmxvZ3M8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaCBneC1kLWlubGluZS1ibG9jayBneC1kLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5IDxJY29uIHR5cGU9XCJkb3duXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiIHpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1jdXJ2ZSBneC1kLW5vbmUgZ3gtZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbERlZmF1bHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IHtcclxuICBOQVZfU1RZTEVfQUJPVkVfSEVBREVSLFxyXG4gIE5BVl9TVFlMRV9CRUxPV19IRUFERVIsXHJcbiAgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCxcclxuICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuaW1wb3J0IEFwcExpbmsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTGlua1wiO1xyXG5cclxuXHJcbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnU7XHJcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcclxuXHJcbmNvbnN0IEhvcml6b250YWxOYXYgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IG5hdlN0eWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdlN0eWxlKTtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy5wYXRobmFtZSk7XHJcblxyXG4gIGNvbnN0IGdldE5hdlN0eWxlU3ViTWVudUNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKG5hdlN0eWxlKSB7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTDpcclxuICAgICAgICByZXR1cm4gXCJneC1tZW51LWhvcml6b250YWwgZ3gtc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUw6XHJcbiAgICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsIGd4LXN1Ym1lbnUtcG9wdXAtY3VydmUgZ3gtaW5zaWRlLXN1Ym1lbnUtcG9wdXAtY3VydmVcIjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSOlxyXG4gICAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbCBneC1zdWJtZW51LXBvcHVwLWN1cnZlIGd4LWJlbG93LXN1Ym1lbnUtcG9wdXAtY3VydmVcIjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSOlxyXG4gICAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbCBneC1zdWJtZW51LXBvcHVwLWN1cnZlIGd4LWFib3ZlLXN1Ym1lbnUtcG9wdXAtY3VydmVcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJneC1tZW51LWhvcml6b250YWxcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RlZEtleXMgPSBwYXRobmFtZS5zdWJzdHIoMSk7XHJcbiAgY29uc3QgZGVmYXVsdE9wZW5LZXlzID0gc2VsZWN0ZWRLZXlzLnNwbGl0KCcvJylbMV07XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8TWVudVxyXG4gICAgICBkZWZhdWx0T3BlbktleXM9e1tkZWZhdWx0T3BlbktleXNdfVxyXG4gICAgICBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleXNdfVxyXG4gICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSBrZXk9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm1haW5cIi8+fT5cclxuXHJcbiAgICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9XCJneC1tZW51LWhvcml6b250YWxcIiBrZXk9XCJkYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj4gPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWRhc2Job2FyZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZFwiLz48L3NwYW4+fT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2FtcGxlXCI+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvYWxsX2RvbWFpblwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcnlwdG9cIi8+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkLmNyeXB0b1wiLz5cclxuICAgICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgIDwvTWVudT5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbkhvcml6b250YWxOYXYucHJvcFR5cGVzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsTmF2O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIExheW91dCwgTWVudSwgbWVzc2FnZSwgUG9wb3Zlcn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcclxuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IE1haWxOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkFwcHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcclxuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcclxufVxyXG5cclxuY29uc3QgSW5zaWRlSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcclxuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxyXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbCBneC1oZWFkZXItaG9yaXpvbnRhbC1kYXJrIGd4LWluc2lkZS1oZWFkZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTMgNmVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtbXIteHMtMyBneC1wdC14cy0xIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtY3VydmUgZ3gtZC1ub25lIGd4LWQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbE5hdi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtzZXR0aW5nc30pID0+IHtcclxuICBjb25zdCB7bG9jYWxlLCBuYXZDb2xsYXBzZWR9ID0gc2V0dGluZ3M7XHJcbiAgcmV0dXJuIHtsb2NhbGUsIG5hdkNvbGxhcHNlZH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt0b2dnbGVDb2xsYXBzZWRTaWRlTmF2LCBzd2l0Y2hMYW5ndWFnZX0pKEluc2lkZUhlYWRlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3RvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IE5vSGVhZGVyTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxyXG4gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbm8taGVhZGVyLWhvcml6b250YWwtdG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uby1oZWFkZXItaG9yaXpvbnRhbC10b3AtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb0hlYWRlck5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xheW91dCwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuL2xhbmd1YWdlRGF0YVwiO1xyXG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XHJcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgQXBwTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XHJcblxyXG5cclxuaW1wb3J0IHtOQVZfU1RZTEVfRFJBV0VSLCBOQVZfU1RZTEVfRklYRUQsIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsIFRBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IFRvcGJhciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qge2xvY2FsZSwgd2lkdGgsIG5hdkNvbGxhcHNlZCwgbmF2U3R5bGV9ID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzKTtcclxuICBjb25zdCB7c2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dH0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBsYW5ndWFnZU1lbnUgPSAoKSA9PiAoXHJcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgIHtsYW5ndWFnZURhdGEubWFwKGxhbmd1YWdlID0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyPlxyXG4gICAgICB7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIgfHwgKChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSAmJiB3aWR0aCA8IFRBQl9TSVpFKSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1saW5lYmFyIGd4LW1yLTNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1tZW51XCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlclwiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG5cclxuICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxyXG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XHJcbiAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxyXG4gICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3dpZHRoID49IFRBQl9TSVpFID8gbnVsbCA6XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfVxyXG4gICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcGwtMiBneC1sYW5ndWFnZS1uYW1lXCI+e2xvY2FsZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoZXZyb24tZG93biBneC1wbC0yXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3dpZHRoID49IFRBQl9TSVpFID8gbnVsbCA6XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wYmFyO1xyXG4iLCJjb25zdCBsYW5ndWFnZURhdGEgPSBbXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2VuZ2xpc2gnLFxyXG4gICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgaWNvbjogJ3VzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2NoaW5lc2UnLFxyXG4gICAgbG9jYWxlOiAnemgnLFxyXG4gICAgbmFtZTogJ0NoaW5lc2UnLFxyXG4gICAgaWNvbjogJ2NuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ3NwYW5pc2gnLFxyXG4gICAgbG9jYWxlOiAnZXMnLFxyXG4gICAgbmFtZTogJ1NwYW5pc2gnLFxyXG4gICAgaWNvbjogJ2VzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2ZyZW5jaCcsXHJcbiAgICBsb2NhbGU6ICdmcicsXHJcbiAgICBuYW1lOiAnRnJlbmNoJyxcclxuICAgIGljb246ICdmcidcclxuICB9LFxyXG4gIHtcclxuICAgIGxhbmd1YWdlSWQ6ICdpdGFsaWFuJyxcclxuICAgIGxvY2FsZTogJ2l0JyxcclxuICAgIG5hbWU6ICdJdGFsaWFuJyxcclxuICAgIGljb246ICdpdCdcclxuICB9LFxyXG4gIHtcclxuICAgIGxhbmd1YWdlSWQ6ICdzYXVkaS1hcmFiaWEnLFxyXG4gICAgbG9jYWxlOiAnYXInLFxyXG4gICAgbmFtZTogJ0FyYWJpYycsXHJcbiAgICBpY29uOiAnc2EnXHJcbiAgfVxyXG5cclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2VEYXRhO1xyXG4iLCJpbXBvcnQge2NvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFdpdGhEYXRhIGZyb20gJy4vd2l0aERhdGEnO1xyXG5pbXBvcnQgV2l0aExheW91dCBmcm9tICcuL3dpdGhMYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuICBXaXRoRGF0YSxcclxuICBXaXRoTGF5b3V0LFxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKENvbXBvc2VkQ29tcG9uZW50KSA9PiAocHJvcHMpID0+IHtcclxuICBjb25zdCB7YXV0aFVzZXIsIGxvYWRVc2VyfSA9IHVzZVNlbGVjdG9yKCh7YXV0aH0pID0+IGF1dGgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRoVXNlciAmJiAhbG9hZFVzZXIpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoVXNlciwgbG9hZFVzZXJdKTtcclxuXHJcbiAgaWYgKCFhdXRoVXNlciB8fCBsb2FkVXNlcikgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzLz47XHJcblxyXG4gIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb3JlL0xheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiBwcm9wcyA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxDb21wb3NlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcbiIsIi8vIEN1c3RvbWl6ZXIgY29uc3RcclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9DT0xMQVBTRURfTkFWID0gJ1RPR0dMRV9DT0xMQVBTRV9NRU5VJztcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19XSURUSCA9ICdXSU5ET1ctV0lEVEgnO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0xBTkdVQUdFID0gJ1NXSVRDSC1MQU5HVUFHRSc7XHJcblxyXG4vL0NvbnRhY3QgTW9kdWxlIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVEFSVCA9ICdmZXRjaF9zdGFydCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVUNDRVNTID0gJ2ZldGNoX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfRVJST1IgPSAnZmV0Y2hfZXJyb3InO1xyXG5leHBvcnQgY29uc3QgU0hPV19NRVNTQUdFID0gJ1NIT1dfTUVTU0FHRSc7XHJcbmV4cG9ydCBjb25zdCBISURFX01FU1NBR0UgPSAnSElERV9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IE9OX1NIT1dfTE9BREVSID0gJ09OX1NIT1dfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IE9OX0hJREVfTE9BREVSID0gJ09OX0hJREVfTE9BREVSJztcclxuXHJcbi8vQXV0aCBjb25zdFxyXG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVIgPSAnU0lHTlVQX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVJfU1VDQ0VTUyA9ICdTSUdOVVBfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9HT09HTEVfVVNFUiA9ICdTSUdOSU5fR09PR0xFX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MgPSAnU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0ZBQ0VCT09LX1VTRVIgPSAnU0lHTklOX0ZBQ0VCT09LX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0ZBQ0VCT09LX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9UV0lUVEVSX1VTRVIgPSAnU0lHTklOX1RXSVRURVJfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fVFdJVFRFUl9VU0VSX1NVQ0NFU1MgPSAnU0lHTklOX1RXSVRURVJfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9HSVRIVUJfVVNFUiA9ICdTSUdOSU5fR0lUSFVCX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dJVEhVQl9VU0VSX1NVQ0NFU1MgPSAnc2lnbmluX2dpdGh1Yl91c2VyX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1VTRVIgPSAnU0lHTklOX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05PVVRfVVNFUiA9ICdTSUdOT1VUX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTk9VVF9VU0VSX1NVQ0NFU1MgPSAnU0lHTk9VVF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgSU5JVF9VUkwgPSAnSU5JVF9VUkwnO1xyXG5leHBvcnQgY29uc3QgVVNFUl9UT0tFTl9TRVQgPSAnVVNFUl9UT0tFTl9TRVQnO1xyXG5leHBvcnQgY29uc3QgU0VUX0FVVEhfVVNFUl9EQVRBID0gJ1NFVF9BVVRIX1VTRVJfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9BRF9VU0VSID0gJ1VQREFURV9MT0FEX1VTRVInO1xyXG5cclxuLy9TdGlja3lcclxuZXhwb3J0IGNvbnN0IEdFVF9TVElDS1kgPSAnR0VUX1NUSUNLWSc7XHJcbmV4cG9ydCBjb25zdCBOT1RFU19VUERBVEUgPSAnTk9URVNfVVBEQVRFJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX0FMTF9OT1RFU19TVUNDRVNTID0gJ0ZFVENIX0FMTF9OT1RFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9BTExfTk9URVNfU1VDQ0VTUyA9ICdVUERBVEVfQUxMX05PVEVTX1NVQ0NFU1MnO1xyXG5cclxuLy9Db250YWN0XHJcbmV4cG9ydCBjb25zdCBHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUyA9ICdHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBPTl9BRERfQ09OVEFDVF9TVUNDRVNTID0gJ09OX0FERF9DT05UQUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUz0nVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09OVEFDVF9TVUNDRVNTPSdERUxFVEVfQ09OVEFDVF9TVUNDRVNTJztcclxuXHJcblxyXG4iLCIvLyBDdXN0b21pemVyIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFID0gJ1RIRU1FX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRV9MSVRFID0gJ1RIRU1FX1RZUEVfTElURSc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFX0RBUksgPSAnVEhFTUVfVFlQRV9EQVJLJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEVfU0VNSV9EQVJLID0gJ1RIRU1FX1RZUEVfU0VNSV9EQVJLJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTic7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTl9QUkVTRVQnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSA9ICdUSEVNRV9DT0xPUl9TRUxFQ1RJT05fQ1VTVE9NSVpFJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX05BVklHQVRJT04gPSAnSE9SSVpPTlRBTF9OQVZJR0FUSU9OJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04gPSAnSE9SSVpPTlRBTF9NRU5VX1BPU0lUSU9OJztcclxuZXhwb3J0IGNvbnN0IEFCT1ZFX1RIRV9IRUFERVIgPSAnQUJPVkVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBJTlNJREVfVEhFX0hFQURFUiA9ICdJTlNJREVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBCRUxPV19USEVfSEVBREVSID0gJ0JFTE9XX1RIRV9IRUFERVInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZFUlRJQ0FMX05BVklHQVRJT04gPSAnVkVSVElDQUxfTkFWSUdBVElPTic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTUlOSSA9ICdOQVZfU1RZTEVfTUlOSSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEUgPSAnTEFZT1VUX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BBVEhfTkFNRSA9ICdTRVRfUEFUSF9OQU1FJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRV9GUkFNRUQgPSAnTEFZT1VUX1RZUEVfRlJBTUVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0JPWEVEID0gJ0xBWU9VVF9UWVBFX0JPWEVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0ZVTEwgPSAnTEFZT1VUX1RZUEVfRlVMTCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRSA9ICdOQVZfU1RZTEUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9GSVhFRCA9ICdOQVZfU1RZTEVfRklYRUQnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTUlOSV9TSURFQkFSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9EUkFXRVIgPSAnTkFWX1NUWUxFX0RSQVdFUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgPSAnTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSJztcclxuXHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMID0gJ05BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCA9ICdOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgPSAnTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfQkVMT1dfSEVBREVSID0gJ05BVl9TVFlMRV9CRUxPV19IRUFERVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiA9ICdOQVZfU1RZTEVfQUJPVkVfSEVBREVSJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFID0gJyM4QTJCRTInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFX1NFQyA9ICcjMDBCMzc4JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9OQVZfREFSS19CRyA9ICcjMzIzOTRGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9EQVJLX1RFWFRfQ09MT1IgPSAnIzk3OTlBQyc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVEID0gJyNGRjJCN0EnO1xyXG5leHBvcnQgY29uc3QgUkVEX1NFQyA9ICcjMDBEOUM5JztcclxuZXhwb3J0IGNvbnN0IFJFRF9OQVZfREFSS19CRyA9ICcjM0MzNzY2JztcclxuZXhwb3J0IGNvbnN0IFJFRF9EQVJLX1RFWFRfQ09MT1IgPSAnIzg3OEJBQic7XHJcblxyXG5leHBvcnQgY29uc3QgQkxVRSA9ICcjM0RBNEU2JztcclxuZXhwb3J0IGNvbnN0IEJMVUVfU0VDID0gJyNGQ0I1M0InO1xyXG5leHBvcnQgY29uc3QgQkxVRV9OQVZfREFSS19CRyA9ICcjNDQ0MzQyJztcclxuZXhwb3J0IGNvbnN0IEJMVUVfREFSS19URVhUX0NPTE9SID0gJyNBQUE1OUEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRSA9ICcjMDQ2OUI5JztcclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRV9TRUMgPSAnIzE3QkRFNSc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfTkFWX0RBUktfQkcgPSAnIzA4Njg4MCc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SID0gJyM5RERBRTknO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9SQU5HRSA9ICcjRjE4ODA1JztcclxuZXhwb3J0IGNvbnN0IE9SQU5HRV9TRUMgPSAnI0YxRDA2NSc7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfTkFWX0RBUktfQkcgPSAnIzI3MjkzMic7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfREFSS19URVhUX0NPTE9SID0gJyNBQkE4OTUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUUgPSAnIzZBOTVGRic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX1NFQyA9ICcjNTlEQ0ZGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUVfTkFWX0RBUktfQkcgPSAnIzFCMjY0Mic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTJBMkM4JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgREVFUF9PUkFOR0UgPSAnI0Y4NzA2MCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9TRUMgPSAnIzcwQTI4OCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9OQVZfREFSS19CRyA9ICcjMDg0MTVDJztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTdCOEM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMSA9ICcjQTE3MkU3JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xX1NFQyA9ICcjRTE0NTk0JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xX05BVl9EQVJLX0JHID0gJyMxODI5NTInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SID0gJyM4Mjg4QjQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yID0gJyM5NTZGRTcnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfU0VDID0gJyM2NEQ3RDYnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfTkFWX0RBUktfQkcgPSAnIzI4NEM3Qyc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IgPSAnIzU3ODJCQic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRBQl9TSVpFID0gOTkyO1xyXG4iLCJpbXBvcnQgYW50ZFNBIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVNcIjtcclxuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvYXJfU0EuanNvblwiO1xyXG5cclxuY29uc3Qgc2FMYW5nID0ge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICAuLi5zYU1lc3NhZ2VzXHJcbiAgfSxcclxuICBhbnRkOiBhbnRkU0EsXHJcbiAgbG9jYWxlOiAnYXInLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XHJcbiIsImltcG9ydCBhbnRkRW4gZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiO1xyXG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9lbl9VUy5qc29uXCI7XHJcblxyXG5jb25zdCBFbkxhbmcgPSB7XHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIC4uLmVuTWVzc2FnZXNcclxuICB9LFxyXG4gIGFudGQ6IGFudGRFbixcclxuICBsb2NhbGU6ICdlbi1VUycsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVuTGFuZztcclxuIiwiaW1wb3J0IGFudGRTQSBmcm9tIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NhX0VTXCI7XHJcbmltcG9ydCBzYU1lc3NhZ2VzIGZyb20gXCIuLi9sb2NhbGVzL2VzX0VTLmpzb25cIjtcclxuXHJcbmNvbnN0IHNhTGFuZyA9IHtcclxuICBtZXNzYWdlczoge1xyXG4gICAgLi4uc2FNZXNzYWdlc1xyXG4gIH0sXHJcbiAgYW50ZDogYW50ZFNBLFxyXG4gIGxvY2FsZTogJ2VzJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2FMYW5nO1xyXG4iLCJpbXBvcnQgYW50ZFNBIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZnJfRlJcIjtcclxuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvZnJfRlIuanNvblwiO1xyXG5cclxuY29uc3Qgc2FMYW5nID0ge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICAuLi5zYU1lc3NhZ2VzXHJcbiAgfSxcclxuICBhbnRkOiBhbnRkU0EsXHJcbiAgbG9jYWxlOiAnZnItRlInLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XHJcbiIsImltcG9ydCBhbnRkU0EgZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiO1xyXG5pbXBvcnQgc2FNZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9pdF9JVC5qc29uXCI7XHJcblxyXG5jb25zdCBzYUxhbmcgPSB7XHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIC4uLnNhTWVzc2FnZXNcclxuICB9LFxyXG4gIGFudGQ6IGFudGRTQSxcclxuICBsb2NhbGU6ICdpdC1JVCcsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNhTGFuZztcclxuIiwiaW1wb3J0IHpoTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvemgtSGFucy5qc29uXCI7XHJcblxyXG5jb25zdCBaaExhbiA9IHtcclxuICBtZXNzYWdlczoge1xyXG4gICAgLi4uemhNZXNzYWdlc1xyXG4gIH0sXHJcbiAgYW50ZDogbnVsbCxcclxuICBsb2NhbGU6ICd6aC1IYW5zLUNOJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgWmhMYW47XHJcbiIsImltcG9ydCBlbkxhbmcgZnJvbSBcIi4vZW50cmllcy9lbi1VU1wiO1xyXG5pbXBvcnQgemhMYW5nIGZyb20gXCIuL2VudHJpZXMvemgtSGFucy1DTlwiO1xyXG5pbXBvcnQgYXJMYW5nIGZyb20gXCIuL2VudHJpZXMvYXJfU0FcIjtcclxuaW1wb3J0IGl0TGFuZyBmcm9tIFwiLi9lbnRyaWVzL2l0X0lUXCI7XHJcbmltcG9ydCBlc0xhbmcgZnJvbSBcIi4vZW50cmllcy9lc19FU1wiO1xyXG5pbXBvcnQgZnJMYW5nIGZyb20gXCIuL2VudHJpZXMvZnJfRlJcIjtcclxuXHJcbmNvbnN0IEFwcExvY2FsZSA9IHtcclxuICBlbjogZW5MYW5nLFxyXG4gIHpoOiB6aExhbmcsXHJcbiAgYXI6IGFyTGFuZyxcclxuICBpdDogaXRMYW5nLFxyXG4gIGVzOiBlc0xhbmcsXHJcbiAgZnI6IGZyTGFuZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTG9jYWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vYXBwL2hvYy9zZWN1cmVkUGFnZSc7XHJcbmltcG9ydCBhc3luY0NvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsL2FzeW5jQ29tcG9uZW50J1xyXG5cclxuY29uc3QgQWxsRG9tYWluID0gYXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KCcuLi8uLi9yb3V0ZXMvQWxsRG9tYWluJykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZSgoKSA9PiA8QWxsRG9tYWluLz4pO1xyXG4iLCJpbXBvcnQge2ZldGNoRXJyb3IsIGZldGNoU3RhcnQsIGZldGNoU3VjY2Vzc30gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi91dGlsL0FwaSc7XHJcbmltcG9ydCB7U0VUX0FVVEhfVVNFUl9EQVRBLCBVUERBVEVfTE9BRF9VU0VSLCBVU0VSX1RPS0VOX1NFVH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBdXRoVXNlciA9IHVzZXIgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNFVF9BVVRIX1VTRVJfREFUQSxcclxuICAgICAgcGF5bG9hZDogdXNlcixcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTG9hZFVzZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBEQVRFX0xPQURfVVNFUixcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXRBVXRoVG9rZW4gPSB0b2tlbiA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVNFUl9UT0tFTl9TRVQsXHJcbiAgICAgIHBheWxvYWQ6IHRva2VuLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblJlZ2lzdGVyID0gKHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoU3RhcnQoKSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnYXV0aC9yZWdpc3RlcicsIHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgIGlmIChkYXRhLnRva2VuLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVTRVJfVE9LRU5fU0VULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLnRva2VuLmFjY2Vzc190b2tlblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaFN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgICBnZXRBdXRoVXNlcihkaXNwYXRjaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKGZldGNoRXJyb3IoXCJTb21lIHRoaW5nIHdlbnQgd3JvbmchXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkxvZ2luID0gKHtlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoU3RhcnQoKSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJ2F1dGgvbG9naW4nLCB7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9naW46IFwiLCBkYXRhKTtcclxuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRva2VuLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVU0VSX1RPS0VOX1NFVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgIGdldEF1dGhVc2VyKGRpc3BhdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihkYXRhLmVycm9yKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG9uTG9nb3V0ID0gKHJvdXRlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJvbkxvZ291dFwiKTtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hTdGFydCgpKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KCdhdXRoL2xvZ291dCcpXHJcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9nb3V0XCIsIGRhdGEpO1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgcm91dGUucHVzaChcIi9zaWduaW5cIik7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVTRVJfVE9LRU5fU0VULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBudWxsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKGZldGNoU3VjY2VzcygpKTtcclxuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRBdXRoVXNlcihudWxsKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib25Mb2dvdXQgZGF0YS5lcnJvclwiLCBkYXRhLmVycm9yKTtcclxuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRBdXRoVXNlcihudWxsKSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaEVycm9yKGRhdGEuZXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9nb3V0IGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgICBjb29raWVzLnJlbW92ZSgndG9rZW4nKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRBdXRoVXNlcihudWxsKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXV0aFVzZXIgPSAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpO1xyXG4gIGF4aW9zXHJcbiAgICAucG9zdCgnYXV0aC9tZScpXHJcbiAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QXV0aFVzZXI6IFwiLCBkYXRhLnVzZXIpXHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU3VjY2VzcygpKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRBdXRoVXNlcihkYXRhLnVzZXIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVMb2FkVXNlcigpKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlTG9hZFVzZXIoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEF1dGhVc2VyMCA9IChsb2FkZWQgPSBmYWxzZSwgdG9rZW4pID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuICAgICAgaWYgKHRva2VuKVxyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKGZldGNoU3RhcnQoKSk7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVMb2FkVXNlcihsb2FkZWQpKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KCdhdXRoL21lJylcclxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hTdWNjZXNzKCkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0QXV0aFVzZXIoZGF0YS51c2VyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUxvYWRVc2VyKHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVMb2FkVXNlcih0cnVlKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7RkVUQ0hfRVJST1IsIEZFVENIX1NUQVJULCBGRVRDSF9TVUNDRVNTLCBISURFX01FU1NBR0UsIFNIT1dfTUVTU0FHRX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfU1RBUlRcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3VjY2VzcyA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBGRVRDSF9TVUNDRVNTXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfRVJST1IsXHJcbiAgICBwYXlsb2FkOiBlcnJvclxyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd01lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IFNIT1dfTUVTU0FHRSxcclxuICAgIHBheWxvYWQ6IG1lc3NhZ2VcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVNZXNzYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEhJREVfTUVTU0FHRVxyXG4gIH0pXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U1dJVENIX0xBTkdVQUdFLCBUT0dHTEVfQ09MTEFQU0VEX05BViwgV0lORE9XX1dJRFRIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7TkFWX1NUWUxFLCBTRVRfUEFUSF9OQU1FLCBUSEVNRV9UWVBFfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2KG5hdkNvbGxhcHNlZCkge1xyXG4gIHJldHVybiB7dHlwZTogVE9HR0xFX0NPTExBUFNFRF9OQVYsIG5hdkNvbGxhcHNlZH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaW5kb3dXaWR0aCh3aWR0aCkge1xyXG4gIHJldHVybiB7dHlwZTogV0lORE9XX1dJRFRILCB3aWR0aH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZVR5cGUodGhlbWVUeXBlKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBUSEVNRV9UWVBFLCB0aGVtZVR5cGV9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZTdHlsZUNoYW5nZShuYXZTdHlsZSkge1xyXG4gIHJldHVybiB7dHlwZTogTkFWX1NUWUxFLCBuYXZTdHlsZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXRoTmFtZShwYXRobmFtZSkge1xyXG4gIHJldHVybiB7dHlwZTogU0VUX1BBVEhfTkFNRSwgcGF0aG5hbWV9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoTGFuZ3VhZ2UobG9jYWxlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNXSVRDSF9MQU5HVUFHRSxcclxuICAgIHBheWxvYWQ6IGxvY2FsZVxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9TZXR0aW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9BdXRoJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21tb24nO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgaHR0cDovL2ctYXhvbi53b3JrL2p3dGF1dGgvYXBpL2AsIC8vWU9VUl9BUElfVVJMIEhFUkVcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7U2Nyb2xsYmFyc30gZnJvbSBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCI7XHJcblxyXG5jb25zdCBDdXN0b21TY3JvbGxiYXJzID0gKHByb3BzKSA9PiA8U2Nyb2xsYmFycyAgey4uLnByb3BzfSBhdXRvSGlkZSB1bml2ZXJzYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclRyYWNrSG9yaXpvbnRhbD17cHJvcHMgPT4gPGRpdiB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYWNrLWhvcml6b250YWxcIi8+fS8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU2Nyb2xsYmFycztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IEluamVjdE1hc3NhZ2UgPSBwcm9wcyA9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ucHJvcHN9IC8+O1xyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKEluamVjdE1hc3NhZ2UsIHtcclxuICB3aXRoUmVmOiBmYWxzZSxcclxufSk7XHJcbiIsImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzeW5jQ29tcG9uZW50KGltcG9ydENvbXBvbmVudCkge1xyXG5cclxuICByZXR1cm4gZHluYW1pYyhpbXBvcnRDb21wb25lbnQsXHJcbiAgICB7XHJcbiAgICAgIGxvYWRpbmc6ICgpID0+IDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgIH0pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGZvb3RlclRleHQ6ICdDb3B5cmlnaHQgQ29tcGFueSBOYW1lIMKpIDIwMTknLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NhX0VTXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZnJfRlJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2l0X0lUXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9