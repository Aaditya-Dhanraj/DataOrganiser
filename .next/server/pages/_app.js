module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_vendors_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/vendors/style */ "./public/vendors/style.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_AuthProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/AuthProvider */ "./util/AuthProvider.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Page = ({
  Component,
  pageProps,
  store
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Wieldy- Admin Dashboard")), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store
  }, __jsx(_util_AuthProvider__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(Component, pageProps)))));
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(Page));

/***/ }),

/***/ "./public/loader.css":
/*!***************************!*\
  !*** ./public/loader.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/flag/sprite-flags-24x24.css":
/*!****************************************************!*\
  !*** ./public/vendors/flag/sprite-flags-24x24.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/gaxon/styles.css":
/*!*****************************************!*\
  !*** ./public/vendors/gaxon/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/noir-pro/styles.css":
/*!********************************************!*\
  !*** ./public/vendors/noir-pro/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/style.js":
/*!*********************************!*\
  !*** ./public/vendors/style.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/sprite-flags-24x24.css */ "./public/vendors/flag/sprite-flags-24x24.css");
/* harmony import */ var _flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaxon/styles.css */ "./public/vendors/gaxon/styles.css");
/* harmony import */ var _gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.css */ "./public/loader.css");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noir-pro/styles.css */ "./public/vendors/noir-pro/styles.css");
/* harmony import */ var _noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3__);





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

/***/ "./redux/reducers/Auth.js":
/*!********************************!*\
  !*** ./redux/reducers/Auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INIT_STATE = {
  authUser: null,
  loadUser: true,
  token: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH_USER_DATA"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          authUser: action.payload,
          loadUser: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_TOKEN_SET"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          token: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOAD_USER"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadUser: false
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/Common.js":
/*!**********************************!*\
  !*** ./redux/reducers/Common.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INIT_STATE = {
  error: "",
  loading: false,
  message: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: true
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: action.payload,
          loading: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.payload,
          message: ''
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: '',
          message: ''
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/Settings.js":
/*!************************************!*\
  !*** ./redux/reducers/Settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialSettings = {
  navCollapsed: true,
  navStyle: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_FIXED"],
  themeType: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE_SEMI_DARK"],
  pathname: '',
  width: 1367,
  isDirectionRTL: false,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navCollapsed: action.navCollapsed
      });

    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"]:
      console.log(action);
      return _objectSpread(_objectSpread({}, state), {}, {
        pathname: action.pathname
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        width: action.width
      });

    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        themeType: action.themeType
      });

    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navStyle: action.navStyle
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        locale: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./redux/reducers/Settings.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "./redux/reducers/Auth.js");
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common */ "./redux/reducers/Common.js");




const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  settings: _Settings__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _Auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  common: _Common__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./redux/reducers/index.js");
/* harmony import */ var _util_Utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Utility */ "./util/Utility.js");





const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a]));
  let currentState = store.getState();
  store.subscribe(() => {
    // keep track of the previous and current state to compare changesAppLayout/index.j
    let previousState = currentState;
    currentState = store.getState(); // if the token changes set the value in localStorage and axios headers

    if (previousState.auth.token !== currentState.auth.token) {
      const token = currentState.auth.token;
      Object(_util_Utility__WEBPACK_IMPORTED_MODULE_3__["setAccessToken"])(token);
    }
  });
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./util/AppHooks.js":
/*!**************************!*\
  !*** ./util/AppHooks.js ***!
  \**************************/
/*! exports provided: useAuthToken, useAuthUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthToken", function() { return useAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthUser", function() { return useAuthUser; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Api */ "./util/Api.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useAuthToken = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(({
    auth
  }) => auth);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const validateAuth = async () => {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["fetchStart"])());
      const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
      const token = cookies.get("token");
      console.log("token: =====>", token);

      if (!token) {
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSuccess"])());
        return;
      }

      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["setAUthToken"])(token));

      try {
        const {
          data
        } = await _Api__WEBPACK_IMPORTED_MODULE_4__["default"].post("auth/me");
        console.log("data: ", data);
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSuccess"])());
        dispatch({
          type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_AUTH_USER_DATA"],
          payload: data.user
        });
        return;
      } catch (err) {
        console.log("err in auth: ", err);
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSuccess"])());
        return;
      }
    };

    const checkAuth = () => {
      Promise.all([validateAuth()]).then(() => {
        setLoading(false);
        dispatch({
          type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_5__["UPDATE_LOAD_USER"]
        });
      });
    };

    checkAuth();
  }, [dispatch]);
  return [loading, user];
};
const useAuthUser = () => {
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(({
    auth
  }) => auth);

  if (user) {
    return _objectSpread({
      id: 1
    }, user);
  }

  return [null];
};

/***/ }),

/***/ "./util/AuthProvider.js":
/*!******************************!*\
  !*** ./util/AuthProvider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHooks */ "./util/AppHooks.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AuthRoutes = ({
  children
}) => {
  Object(_AppHooks__WEBPACK_IMPORTED_MODULE_1__["useAuthToken"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthRoutes);
AuthRoutes.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

/***/ }),

/***/ "./util/Utility.js":
/*!*************************!*\
  !*** ./util/Utility.js ***!
  \*************************/
/*! exports provided: setAccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccessToken", function() { return setAccessToken; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./util/Api.js");

const setAccessToken = token => {
  _Api__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9UaGVtZVNldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdmVuZG9ycy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL0F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9BcHBIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL1V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJUT0dHTEVfQ09MTEFQU0VEX05BViIsIldJTkRPV19XSURUSCIsIlNXSVRDSF9MQU5HVUFHRSIsIkZFVENIX1NUQVJUIiwiRkVUQ0hfU1VDQ0VTUyIsIkZFVENIX0VSUk9SIiwiU0hPV19NRVNTQUdFIiwiSElERV9NRVNTQUdFIiwiT05fU0hPV19MT0FERVIiLCJPTl9ISURFX0xPQURFUiIsIlNJR05VUF9VU0VSIiwiU0lHTlVQX1VTRVJfU1VDQ0VTUyIsIlNJR05JTl9HT09HTEVfVVNFUiIsIlNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTIiwiU0lHTklOX0ZBQ0VCT09LX1VTRVIiLCJTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTIiwiU0lHTklOX1RXSVRURVJfVVNFUiIsIlNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyIsIlNJR05JTl9HSVRIVUJfVVNFUiIsIlNJR05JTl9HSVRIVUJfVVNFUl9TVUNDRVNTIiwiU0lHTklOX1VTRVIiLCJTSUdOSU5fVVNFUl9TVUNDRVNTIiwiU0lHTk9VVF9VU0VSIiwiU0lHTk9VVF9VU0VSX1NVQ0NFU1MiLCJJTklUX1VSTCIsIlVTRVJfVE9LRU5fU0VUIiwiU0VUX0FVVEhfVVNFUl9EQVRBIiwiVVBEQVRFX0xPQURfVVNFUiIsIkdFVF9TVElDS1kiLCJOT1RFU19VUERBVEUiLCJGRVRDSF9BTExfTk9URVNfU1VDQ0VTUyIsIlVQREFURV9BTExfTk9URVNfU1VDQ0VTUyIsIkdFVF9BbGxfQ09OVEFDVF9TVUNDRVNTIiwiT05fQUREX0NPTlRBQ1RfU1VDQ0VTUyIsIlVQREFURV9DT05UQUNUX1NVQ0NFU1MiLCJERUxFVEVfQ09OVEFDVF9TVUNDRVNTIiwiVEhFTUVfVFlQRSIsIlRIRU1FX1RZUEVfTElURSIsIlRIRU1FX1RZUEVfREFSSyIsIlRIRU1FX1RZUEVfU0VNSV9EQVJLIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OX1BSRVNFVCIsIlRIRU1FX0NPTE9SX1NFTEVDVElPTl9DVVNUT01JWkUiLCJIT1JJWk9OVEFMX05BVklHQVRJT04iLCJIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04iLCJBQk9WRV9USEVfSEVBREVSIiwiSU5TSURFX1RIRV9IRUFERVIiLCJCRUxPV19USEVfSEVBREVSIiwiVkVSVElDQUxfTkFWSUdBVElPTiIsIk5BVl9TVFlMRV9NSU5JIiwiTEFZT1VUX1RZUEUiLCJTRVRfUEFUSF9OQU1FIiwiTEFZT1VUX1RZUEVfRlJBTUVEIiwiTEFZT1VUX1RZUEVfQk9YRUQiLCJMQVlPVVRfVFlQRV9GVUxMIiwiTkFWX1NUWUxFIiwiTkFWX1NUWUxFX0ZJWEVEIiwiTkFWX1NUWUxFX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9EUkFXRVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiIsIk5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9CRUxPV19IRUFERVIiLCJOQVZfU1RZTEVfQUJPVkVfSEVBREVSIiwiTElHSFRfUFVSUExFIiwiTElHSFRfUFVSUExFX1NFQyIsIkxJR0hUX1BVUlBMRV9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV9EQVJLX1RFWFRfQ09MT1IiLCJSRUQiLCJSRURfU0VDIiwiUkVEX05BVl9EQVJLX0JHIiwiUkVEX0RBUktfVEVYVF9DT0xPUiIsIkJMVUUiLCJCTFVFX1NFQyIsIkJMVUVfTkFWX0RBUktfQkciLCJCTFVFX0RBUktfVEVYVF9DT0xPUiIsIkRBUktfQkxVRSIsIkRBUktfQkxVRV9TRUMiLCJEQVJLX0JMVUVfTkFWX0RBUktfQkciLCJEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SIiwiT1JBTkdFIiwiT1JBTkdFX1NFQyIsIk9SQU5HRV9OQVZfREFSS19CRyIsIk9SQU5HRV9EQVJLX1RFWFRfQ09MT1IiLCJMSUdIVF9CTFVFIiwiTElHSFRfQkxVRV9TRUMiLCJMSUdIVF9CTFVFX05BVl9EQVJLX0JHIiwiTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1IiLCJERUVQX09SQU5HRSIsIkRFRVBfT1JBTkdFX1NFQyIsIkRFRVBfT1JBTkdFX05BVl9EQVJLX0JHIiwiREVFUF9PUkFOR0VfREFSS19URVhUX0NPTE9SIiwiTElHSFRfUFVSUExFXzEiLCJMSUdIVF9QVVJQTEVfMV9TRUMiLCJMSUdIVF9QVVJQTEVfMV9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV8xX0RBUktfVEVYVF9DT0xPUiIsIkxJR0hUX1BVUlBMRV8yIiwiTElHSFRfUFVSUExFXzJfU0VDIiwiTElHSFRfUFVSUExFXzJfTkFWX0RBUktfQkciLCJMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IiLCJUQUJfU0laRSIsIlBhZ2UiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsInNldEF1dGhVc2VyIiwidXNlciIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ1cGRhdGVMb2FkVXNlciIsInNldEFVdGhUb2tlbiIsInRva2VuIiwib25SZWdpc3RlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2hTdGFydCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJkYXRhIiwicmVzdWx0IiwiYWNjZXNzX3Rva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY29va2llcyIsIkNvb2tpZXMiLCJzZXQiLCJmZXRjaFN1Y2Nlc3MiLCJnZXRBdXRoVXNlciIsImZldGNoRXJyb3IiLCJjYXRjaCIsImVycm9yIiwibWVzc2FnZSIsIm9uTG9naW4iLCJjb25zb2xlIiwibG9nIiwib25Mb2dvdXQiLCJyb3V0ZSIsInB1c2giLCJyZW1vdmUiLCJnZXRBdXRoVXNlcjAiLCJsb2FkZWQiLCJnZXRDb29raWUiLCJzaG93TWVzc2FnZSIsImhpZGVNZXNzYWdlIiwidG9nZ2xlQ29sbGFwc2VkU2lkZU5hdiIsIm5hdkNvbGxhcHNlZCIsInVwZGF0ZVdpbmRvd1dpZHRoIiwid2lkdGgiLCJzZXRUaGVtZVR5cGUiLCJ0aGVtZVR5cGUiLCJvbk5hdlN0eWxlQ2hhbmdlIiwibmF2U3R5bGUiLCJzZXRQYXRoTmFtZSIsInBhdGhuYW1lIiwic3dpdGNoTGFuZ3VhZ2UiLCJsb2NhbGUiLCJJTklUX1NUQVRFIiwiYXV0aFVzZXIiLCJsb2FkVXNlciIsInN0YXRlIiwiYWN0aW9uIiwibG9hZGluZyIsImluaXRpYWxTZXR0aW5ncyIsImlzRGlyZWN0aW9uUlRMIiwibGFuZ3VhZ2VJZCIsImljb24iLCJzZXR0aW5ncyIsInJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiU2V0dGluZ3MiLCJhdXRoIiwiQXV0aCIsIkNvbW1vbiIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsInRodW5rIiwiY3VycmVudFN0YXRlIiwiZ2V0U3RhdGUiLCJzdWJzY3JpYmUiLCJwcmV2aW91c1N0YXRlIiwic2V0QWNjZXNzVG9rZW4iLCJjcmVhdGUiLCJiYXNlVVJMIiwidXNlQXV0aFRva2VuIiwidXNlRGlzcGF0Y2giLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZUVmZmVjdCIsInZhbGlkYXRlQXV0aCIsImdldCIsImp3dEF4aW9zIiwiZXJyIiwiY2hlY2tBdXRoIiwiUHJvbWlzZSIsImFsbCIsInVzZUF1dGhVc2VyIiwiaWQiLCJBdXRoUm91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QUFDRSxTQUFYLEdBQXVCO0FBQ3RCRCxVQUFRLEVBQUVFLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESCxDQUF2QixDOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU12QixjQUFjLEdBQUc5RSxLQUFLLElBQUk7QUFDdENNLDhDQUFLLENBQUNNLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsZUFBOUIsSUFBaUQsWUFBWWQsS0FBN0Q7QUFDQSxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEN1c3RvbWl6ZXIgY29uc3RcclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9DT0xMQVBTRURfTkFWID0gJ1RPR0dMRV9DT0xMQVBTRV9NRU5VJztcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19XSURUSCA9ICdXSU5ET1ctV0lEVEgnO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0xBTkdVQUdFID0gJ1NXSVRDSC1MQU5HVUFHRSc7XHJcblxyXG4vL0NvbnRhY3QgTW9kdWxlIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVEFSVCA9ICdmZXRjaF9zdGFydCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVUNDRVNTID0gJ2ZldGNoX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfRVJST1IgPSAnZmV0Y2hfZXJyb3InO1xyXG5leHBvcnQgY29uc3QgU0hPV19NRVNTQUdFID0gJ1NIT1dfTUVTU0FHRSc7XHJcbmV4cG9ydCBjb25zdCBISURFX01FU1NBR0UgPSAnSElERV9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IE9OX1NIT1dfTE9BREVSID0gJ09OX1NIT1dfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IE9OX0hJREVfTE9BREVSID0gJ09OX0hJREVfTE9BREVSJztcclxuXHJcbi8vQXV0aCBjb25zdFxyXG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVIgPSAnU0lHTlVQX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVJfU1VDQ0VTUyA9ICdTSUdOVVBfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9HT09HTEVfVVNFUiA9ICdTSUdOSU5fR09PR0xFX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MgPSAnU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0ZBQ0VCT09LX1VTRVIgPSAnU0lHTklOX0ZBQ0VCT09LX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0ZBQ0VCT09LX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9UV0lUVEVSX1VTRVIgPSAnU0lHTklOX1RXSVRURVJfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fVFdJVFRFUl9VU0VSX1NVQ0NFU1MgPSAnU0lHTklOX1RXSVRURVJfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9HSVRIVUJfVVNFUiA9ICdTSUdOSU5fR0lUSFVCX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dJVEhVQl9VU0VSX1NVQ0NFU1MgPSAnc2lnbmluX2dpdGh1Yl91c2VyX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1VTRVIgPSAnU0lHTklOX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05PVVRfVVNFUiA9ICdTSUdOT1VUX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTk9VVF9VU0VSX1NVQ0NFU1MgPSAnU0lHTk9VVF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgSU5JVF9VUkwgPSAnSU5JVF9VUkwnO1xyXG5leHBvcnQgY29uc3QgVVNFUl9UT0tFTl9TRVQgPSAnVVNFUl9UT0tFTl9TRVQnO1xyXG5leHBvcnQgY29uc3QgU0VUX0FVVEhfVVNFUl9EQVRBID0gJ1NFVF9BVVRIX1VTRVJfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9BRF9VU0VSID0gJ1VQREFURV9MT0FEX1VTRVInO1xyXG5cclxuLy9TdGlja3lcclxuZXhwb3J0IGNvbnN0IEdFVF9TVElDS1kgPSAnR0VUX1NUSUNLWSc7XHJcbmV4cG9ydCBjb25zdCBOT1RFU19VUERBVEUgPSAnTk9URVNfVVBEQVRFJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX0FMTF9OT1RFU19TVUNDRVNTID0gJ0ZFVENIX0FMTF9OT1RFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9BTExfTk9URVNfU1VDQ0VTUyA9ICdVUERBVEVfQUxMX05PVEVTX1NVQ0NFU1MnO1xyXG5cclxuLy9Db250YWN0XHJcbmV4cG9ydCBjb25zdCBHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUyA9ICdHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBPTl9BRERfQ09OVEFDVF9TVUNDRVNTID0gJ09OX0FERF9DT05UQUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUz0nVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09OVEFDVF9TVUNDRVNTPSdERUxFVEVfQ09OVEFDVF9TVUNDRVNTJztcclxuXHJcblxyXG4iLCIvLyBDdXN0b21pemVyIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFID0gJ1RIRU1FX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRV9MSVRFID0gJ1RIRU1FX1RZUEVfTElURSc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFX0RBUksgPSAnVEhFTUVfVFlQRV9EQVJLJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEVfU0VNSV9EQVJLID0gJ1RIRU1FX1RZUEVfU0VNSV9EQVJLJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTic7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTl9QUkVTRVQnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSA9ICdUSEVNRV9DT0xPUl9TRUxFQ1RJT05fQ1VTVE9NSVpFJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX05BVklHQVRJT04gPSAnSE9SSVpPTlRBTF9OQVZJR0FUSU9OJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04gPSAnSE9SSVpPTlRBTF9NRU5VX1BPU0lUSU9OJztcclxuZXhwb3J0IGNvbnN0IEFCT1ZFX1RIRV9IRUFERVIgPSAnQUJPVkVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBJTlNJREVfVEhFX0hFQURFUiA9ICdJTlNJREVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBCRUxPV19USEVfSEVBREVSID0gJ0JFTE9XX1RIRV9IRUFERVInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZFUlRJQ0FMX05BVklHQVRJT04gPSAnVkVSVElDQUxfTkFWSUdBVElPTic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTUlOSSA9ICdOQVZfU1RZTEVfTUlOSSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEUgPSAnTEFZT1VUX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BBVEhfTkFNRSA9ICdTRVRfUEFUSF9OQU1FJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRV9GUkFNRUQgPSAnTEFZT1VUX1RZUEVfRlJBTUVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0JPWEVEID0gJ0xBWU9VVF9UWVBFX0JPWEVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0ZVTEwgPSAnTEFZT1VUX1RZUEVfRlVMTCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRSA9ICdOQVZfU1RZTEUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9GSVhFRCA9ICdOQVZfU1RZTEVfRklYRUQnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTUlOSV9TSURFQkFSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9EUkFXRVIgPSAnTkFWX1NUWUxFX0RSQVdFUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgPSAnTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSJztcclxuXHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMID0gJ05BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCA9ICdOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgPSAnTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfQkVMT1dfSEVBREVSID0gJ05BVl9TVFlMRV9CRUxPV19IRUFERVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiA9ICdOQVZfU1RZTEVfQUJPVkVfSEVBREVSJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFID0gJyM4QTJCRTInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFX1NFQyA9ICcjMDBCMzc4JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9OQVZfREFSS19CRyA9ICcjMzIzOTRGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9EQVJLX1RFWFRfQ09MT1IgPSAnIzk3OTlBQyc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVEID0gJyNGRjJCN0EnO1xyXG5leHBvcnQgY29uc3QgUkVEX1NFQyA9ICcjMDBEOUM5JztcclxuZXhwb3J0IGNvbnN0IFJFRF9OQVZfREFSS19CRyA9ICcjM0MzNzY2JztcclxuZXhwb3J0IGNvbnN0IFJFRF9EQVJLX1RFWFRfQ09MT1IgPSAnIzg3OEJBQic7XHJcblxyXG5leHBvcnQgY29uc3QgQkxVRSA9ICcjM0RBNEU2JztcclxuZXhwb3J0IGNvbnN0IEJMVUVfU0VDID0gJyNGQ0I1M0InO1xyXG5leHBvcnQgY29uc3QgQkxVRV9OQVZfREFSS19CRyA9ICcjNDQ0MzQyJztcclxuZXhwb3J0IGNvbnN0IEJMVUVfREFSS19URVhUX0NPTE9SID0gJyNBQUE1OUEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRSA9ICcjMDQ2OUI5JztcclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRV9TRUMgPSAnIzE3QkRFNSc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfTkFWX0RBUktfQkcgPSAnIzA4Njg4MCc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SID0gJyM5RERBRTknO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9SQU5HRSA9ICcjRjE4ODA1JztcclxuZXhwb3J0IGNvbnN0IE9SQU5HRV9TRUMgPSAnI0YxRDA2NSc7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfTkFWX0RBUktfQkcgPSAnIzI3MjkzMic7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfREFSS19URVhUX0NPTE9SID0gJyNBQkE4OTUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUUgPSAnIzZBOTVGRic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX1NFQyA9ICcjNTlEQ0ZGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUVfTkFWX0RBUktfQkcgPSAnIzFCMjY0Mic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTJBMkM4JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgREVFUF9PUkFOR0UgPSAnI0Y4NzA2MCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9TRUMgPSAnIzcwQTI4OCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9OQVZfREFSS19CRyA9ICcjMDg0MTVDJztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTdCOEM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMSA9ICcjQTE3MkU3JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xX1NFQyA9ICcjRTE0NTk0JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xX05BVl9EQVJLX0JHID0gJyMxODI5NTInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SID0gJyM4Mjg4QjQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yID0gJyM5NTZGRTcnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfU0VDID0gJyM2NEQ3RDYnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfTkFWX0RBUktfQkcgPSAnIzI4NEM3Qyc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IgPSAnIzU3ODJCQic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRBQl9TSVpFID0gOTkyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5cclxuaW1wb3J0IFwiLi4vcHVibGljL3ZlbmRvcnMvc3R5bGVcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBpbml0U3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEF1dGhSb3V0ZXMgZnJvbSBcIi4uL3V0aWwvQXV0aFByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCBQYWdlID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+V2llbGR5LSBBZG1pbiBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8QXV0aFJvdXRlcz5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9BdXRoUm91dGVzPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKFBhZ2UpO1xyXG4iLCJpbXBvcnQgXCIuL2ZsYWcvc3ByaXRlLWZsYWdzLTI0eDI0LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2dheG9uL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vbG9hZGVyLmNzc1wiO1xyXG5pbXBvcnQgXCIuL25vaXItcHJvL3N0eWxlcy5jc3NcIjtcclxuIiwiaW1wb3J0IHtmZXRjaEVycm9yLCBmZXRjaFN0YXJ0LCBmZXRjaFN1Y2Nlc3N9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vdXRpbC9BcGknO1xyXG5pbXBvcnQge1NFVF9BVVRIX1VTRVJfREFUQSwgVVBEQVRFX0xPQURfVVNFUiwgVVNFUl9UT0tFTl9TRVR9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHtDb29raWVzfSBmcm9tICdyZWFjdC1jb29raWUnXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QXV0aFVzZXIgPSB1c2VyID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVRfQVVUSF9VU0VSX0RBVEEsXHJcbiAgICAgIHBheWxvYWQ6IHVzZXIsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvYWRVc2VyID0gKCkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9MT0FEX1VTRVIsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc2V0QVV0aFRva2VuID0gdG9rZW4gPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVTRVJfVE9LRU5fU0VULFxyXG4gICAgICBwYXlsb2FkOiB0b2tlbixcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25SZWdpc3RlciA9ICh7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoJ2F1dGgvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAoZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVU0VSX1RPS0VOX1NFVCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hTdWNjZXNzKCkpO1xyXG4gICAgICAgICAgZ2V0QXV0aFVzZXIoZGlzcGF0Y2gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaEVycm9yKFwiU29tZSB0aGluZyB3ZW50IHdyb25nIVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25Mb2dpbiA9ICh7ZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KCdhdXRoL2xvZ2luJywge1xyXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvbkxvZ2luOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hTdWNjZXNzKCkpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVVNFUl9UT0tFTl9TRVQsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhLnRva2VuLmFjY2Vzc190b2tlblxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICBnZXRBdXRoVXNlcihkaXNwYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoRXJyb3IoZGF0YS5lcnJvcikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBvbkxvZ291dCA9IChyb3V0ZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwib25Mb2dvdXRcIik7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoU3RhcnQoKSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnYXV0aC9sb2dvdXQnKVxyXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkxvZ291dFwiLCBkYXRhKTtcclxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgIHJvdXRlLnB1c2goXCIvc2lnbmluXCIpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVU0VSX1RPS0VOX1NFVCxcclxuICAgICAgICAgICAgcGF5bG9hZDogbnVsbFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaFN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0QXV0aFVzZXIobnVsbCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9nb3V0IGRhdGEuZXJyb3JcIiwgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0QXV0aFVzZXIobnVsbCkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hFcnJvcihkYXRhLmVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkxvZ291dCBlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QXV0aFVzZXIobnVsbCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEF1dGhVc2VyID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goZmV0Y2hTdGFydCgpKTtcclxuICBheGlvc1xyXG4gICAgLnBvc3QoJ2F1dGgvbWUnKVxyXG4gICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImdldEF1dGhVc2VyOiBcIiwgZGF0YS51c2VyKVxyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QXV0aFVzZXIoZGF0YS51c2VyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlTG9hZFVzZXIoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxvYWRVc2VyKCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoVXNlcjAgPSAobG9hZGVkID0gZmFsc2UsIHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcbiAgICAgIGlmICh0b2tlbilcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpO1xyXG4gICAgZGlzcGF0Y2godXBkYXRlTG9hZFVzZXIobG9hZGVkKSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnYXV0aC9tZScpXHJcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKGZldGNoU3VjY2VzcygpKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldEF1dGhVc2VyKGRhdGEudXNlcikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVMb2FkVXNlcih0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlTG9hZFVzZXIodHJ1ZSkpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQge0ZFVENIX0VSUk9SLCBGRVRDSF9TVEFSVCwgRkVUQ0hfU1VDQ0VTUywgSElERV9NRVNTQUdFLCBTSE9XX01FU1NBR0V9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZFVENIX1NUQVJUXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRkVUQ0hfU1VDQ0VTU1xyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZFVENIX0VSUk9SLFxyXG4gICAgcGF5bG9hZDogZXJyb3JcclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBTSE9XX01FU1NBR0UsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlTWVzc2FnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBISURFX01FU1NBR0VcclxuICB9KVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1NXSVRDSF9MQU5HVUFHRSwgVE9HR0xFX0NPTExBUFNFRF9OQVYsIFdJTkRPV19XSURUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQge05BVl9TVFlMRSwgU0VUX1BBVEhfTkFNRSwgVEhFTUVfVFlQRX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdihuYXZDb2xsYXBzZWQpIHtcclxuICByZXR1cm4ge3R5cGU6IFRPR0dMRV9DT0xMQVBTRURfTkFWLCBuYXZDb2xsYXBzZWR9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2luZG93V2lkdGgod2lkdGgpIHtcclxuICByZXR1cm4ge3R5cGU6IFdJTkRPV19XSURUSCwgd2lkdGh9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWVUeXBlKHRoZW1lVHlwZSkge1xyXG4gIHJldHVybiB7dHlwZTogVEhFTUVfVFlQRSwgdGhlbWVUeXBlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2U3R5bGVDaGFuZ2UobmF2U3R5bGUpIHtcclxuICByZXR1cm4ge3R5cGU6IE5BVl9TVFlMRSwgbmF2U3R5bGV9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGF0aE5hbWUocGF0aG5hbWUpIHtcclxuICByZXR1cm4ge3R5cGU6IFNFVF9QQVRIX05BTUUsIHBhdGhuYW1lfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaExhbmd1YWdlKGxvY2FsZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTV0lUQ0hfTEFOR1VBR0UsXHJcbiAgICBwYXlsb2FkOiBsb2NhbGVcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vU2V0dGluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQXV0aCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29tbW9uJztcclxuIiwiaW1wb3J0IHtTRVRfQVVUSF9VU0VSX0RBVEEsIFVQREFURV9MT0FEX1VTRVIsIFVTRVJfVE9LRU5fU0VUfSBmcm9tICcuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuY29uc3QgSU5JVF9TVEFURSA9IHtcclxuICBhdXRoVXNlcjogbnVsbCxcclxuICBsb2FkVXNlcjogdHJ1ZSxcclxuICB0b2tlbjogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRfQVVUSF9VU0VSX0RBVEE6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhdXRoVXNlcjogYWN0aW9uLnBheWxvYWQsIGxvYWRVc2VyOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgVVNFUl9UT0tFTl9TRVQ6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQREFURV9MT0FEX1VTRVI6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkVXNlcjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQge0ZFVENIX0VSUk9SLCBGRVRDSF9TVEFSVCwgRkVUQ0hfU1VDQ0VTUywgSElERV9NRVNTQUdFLCBTSE9XX01FU1NBR0V9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIlxyXG5cclxuY29uc3QgSU5JVF9TVEFURSA9IHtcclxuICBlcnJvcjogXCJcIixcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBtZXNzYWdlOiAnJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGRVRDSF9TVEFSVDoge1xyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIG1lc3NhZ2U6ICcnLCBsb2FkaW5nOiB0cnVlfTtcclxuICAgIH1cclxuICAgIGNhc2UgRkVUQ0hfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIG1lc3NhZ2U6ICcnLCBsb2FkaW5nOiBmYWxzZX07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNIT1dfTUVTU0FHRToge1xyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIG1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLCBsb2FkaW5nOiBmYWxzZX07XHJcbiAgICB9XHJcbiAgICBjYXNlIEZFVENIX0VSUk9SOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQsIG1lc3NhZ2U6ICcnfTtcclxuICAgIH1cclxuICAgIGNhc2UgSElERV9NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogJycsIG1lc3NhZ2U6ICcnfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTV0lUQ0hfTEFOR1VBR0UsIFRPR0dMRV9DT0xMQVBTRURfTkFWLCBXSU5ET1dfV0lEVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICBOQVZfU1RZTEUsXHJcbiAgTkFWX1NUWUxFX0ZJWEVELFxyXG4gIFNFVF9QQVRIX05BTUUsXHJcbiAgVEhFTUVfVFlQRSxcclxuICBUSEVNRV9UWVBFX1NFTUlfREFSS1xyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU2V0dGluZ3MgPSB7XHJcbiAgbmF2Q29sbGFwc2VkOiB0cnVlLFxyXG4gIG5hdlN0eWxlOiBOQVZfU1RZTEVfRklYRUQsXHJcbiAgdGhlbWVUeXBlOiBUSEVNRV9UWVBFX1NFTUlfREFSSyxcclxuICBwYXRobmFtZTogJycsXHJcbiAgd2lkdGg6IDEzNjcsXHJcbiAgaXNEaXJlY3Rpb25SVEw6IGZhbHNlLFxyXG4gIGxvY2FsZToge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2VuZ2xpc2gnLFxyXG4gICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgaWNvbjogJ3VzJ1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0gKHN0YXRlID0gaW5pdGlhbFNldHRpbmdzLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRPR0dMRV9DT0xMQVBTRURfTkFWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdkNvbGxhcHNlZDogYWN0aW9uLm5hdkNvbGxhcHNlZFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfUEFUSF9OQU1FOlxyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGF0aG5hbWU6IGFjdGlvbi5wYXRobmFtZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBXSU5ET1dfV0lEVEg6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgd2lkdGg6IGFjdGlvbi53aWR0aCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVEhFTUVfVFlQRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0aGVtZVR5cGU6IGFjdGlvbi50aGVtZVR5cGVcclxuICAgICAgfTtcclxuICAgIGNhc2UgTkFWX1NUWUxFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdlN0eWxlOiBhY3Rpb24ubmF2U3R5bGVcclxuICAgICAgfTtcclxuICAgIGNhc2UgU1dJVENIX0xBTkdVQUdFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvY2FsZTogYWN0aW9uLnBheWxvYWQsXHJcblxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldHRpbmdzO1xyXG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9BdXRoXCI7XHJcbmltcG9ydCBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHNldHRpbmdzOiBTZXR0aW5ncyxcclxuICBhdXRoOiBBdXRoLFxyXG4gIGNvbW1vbjogQ29tbW9uLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzO1xyXG4iLCJpbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7c2V0QWNjZXNzVG9rZW59IGZyb20gXCIuLi8uLi91dGlsL1V0aWxpdHlcIjtcclxuXHJcblxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zdCB7Y29tcG9zZVdpdGhEZXZUb29sc30gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcclxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUgPSB7fSkge1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICByZWR1Y2VycyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGJpbmRNaWRkbGV3YXJlKFt0aHVua10pXHJcbiAgKTtcclxuICBsZXQgY3VycmVudFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgc3RhdGUgdG8gY29tcGFyZSBjaGFuZ2VzQXBwTGF5b3V0L2luZGV4LmpcclxuICAgIGxldCBwcmV2aW91c1N0YXRlID0gY3VycmVudFN0YXRlO1xyXG4gICAgY3VycmVudFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgIC8vIGlmIHRoZSB0b2tlbiBjaGFuZ2VzIHNldCB0aGUgdmFsdWUgaW4gbG9jYWxTdG9yYWdlIGFuZCBheGlvcyBoZWFkZXJzXHJcbiAgICBpZiAocHJldmlvdXNTdGF0ZS5hdXRoLnRva2VuICE9PSBjdXJyZW50U3RhdGUuYXV0aC50b2tlbikge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGN1cnJlbnRTdGF0ZS5hdXRoLnRva2VuO1xyXG4gICAgICBzZXRBY2Nlc3NUb2tlbih0b2tlbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYGh0dHA6Ly9nLWF4b24ud29yay9qd3RhdXRoL2FwaS9gLCAvL1lPVVJfQVBJX1VSTCBIRVJFXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHtmZXRjaFN0YXJ0LCBmZXRjaFN1Y2Nlc3MsIHNldEFVdGhUb2tlbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IGp3dEF4aW9zIGZyb20gJy4vQXBpJ1xyXG5pbXBvcnQge1NFVF9BVVRIX1VTRVJfREFUQSwgVVBEQVRFX0xPQURfVVNFUn0gZnJvbSBcIi4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGhUb2tlbiA9ICgpID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3IoKHthdXRofSkgPT4gYXV0aCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdmFsaWRhdGVBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChmZXRjaFN0YXJ0KCkpO1xyXG5cdFx0XHRjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHRcdFx0Y29uc3QgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInRva2VuOiA9PT09PT5cIiwgdG9rZW4pXHJcblx0XHRcdGlmICghdG9rZW4pIHtcclxuXHRcdFx0XHRkaXNwYXRjaChmZXRjaFN1Y2Nlc3MoKSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRpc3BhdGNoKHNldEFVdGhUb2tlbih0b2tlbikpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHtkYXRhfSA9IGF3YWl0IGp3dEF4aW9zLnBvc3QoXCJhdXRoL21lXCIpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZGF0YTogXCIsIGRhdGEpXHJcblx0XHRcdFx0ZGlzcGF0Y2goZmV0Y2hTdWNjZXNzKCkpO1xyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFNFVF9BVVRIX1VTRVJfREFUQSxcclxuXHRcdFx0XHRcdHBheWxvYWQ6IGRhdGEudXNlclxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJlcnIgaW4gYXV0aDogXCIsZXJyKVxyXG5cdFx0XHRcdGRpc3BhdGNoKGZldGNoU3VjY2VzcygpKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgY2hlY2tBdXRoID0gKCkgPT4ge1xyXG5cdFx0XHRQcm9taXNlLmFsbChbdmFsaWRhdGVBdXRoKCldKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRkaXNwYXRjaCh7dHlwZTogVVBEQVRFX0xPQURfVVNFUn0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0XHRjaGVja0F1dGgoKTtcclxuXHR9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblx0cmV0dXJuIFtsb2FkaW5nLCB1c2VyXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoVXNlciA9ICgpID0+IHtcclxuXHRjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3Rvcigoe2F1dGh9KSA9PiBhdXRoKTtcclxuXHJcblx0aWYgKHVzZXIpIHtcclxuXHRcdHJldHVybiB7aWQ6IDEsIC4uLnVzZXJ9O1xyXG5cdH1cclxuXHRyZXR1cm4gW251bGxdO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlQXV0aFRva2VufSBmcm9tIFwiLi9BcHBIb29rc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBBdXRoUm91dGVzID0gKHtjaGlsZHJlbn0pID0+IHtcclxuXHR1c2VBdXRoVG9rZW4oKTtcclxuXHJcblx0cmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSb3V0ZXM7XHJcblxyXG5BdXRoUm91dGVzLnByb3BUeXBlcyA9IHtcclxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi9BcGknXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWNjZXNzVG9rZW4gPSB0b2tlbiA9PiB7XHJcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRva2VuO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9