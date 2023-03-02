'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Error = void 0;
var tslib_1 = require('tslib');
var react_1 = tslib_1.__importDefault(require('react'));
function Error(props) {
  return react_1.default.createElement(
    'svg',
    tslib_1.__assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
      },
      props,
    ),
    react_1.default.createElement('path', {
      d:
        'M9.172 16.242L12 13.414 14.828 16.242 16.242 14.828 13.414 12 16.242 9.172 14.828 7.758 12 10.586 9.172 7.758 7.758 9.172 10.586 12 7.758 14.828z',
    }),
    react_1.default.createElement('path', {
      d:
        'M12,22c5.514,0,10-4.486,10-10S17.514,2,12,2S2,6.486,2,12S6.486,22,12,22z M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8 s-8-3.589-8-8S7.589,4,12,4z',
    }),
  );
}
exports.Error = Error;
//# sourceMappingURL=Error.js.map