"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Home = _interopRequireDefault(require("./page/Home"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/App.tsx
//define peliculas y pasa a componentes.

//app es un componente de tipo funcion de reactx
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Home["default"], null));
};
var _default = exports["default"] = App;