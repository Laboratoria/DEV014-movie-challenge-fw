"use strict";

require("@testing-library/jest-dom");
var _react = require("@testing-library/react");
var _App = _interopRequireDefault(require("../App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('demo', function () {
  expect(true).toBe(true);
});
test("Renders the main page", function () {
  (0, _react.render)( /*#__PURE__*/React.createElement(_App["default"], null));
  expect(true).toBeTruthy();
});