'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = require('tslib');
var enzyme_1 = require('enzyme');
var react_1 = tslib_1.__importDefault(require('react'));
var Spinner_1 = require('../Spinner');
describe('Spinner component', function() {
  it('renders its contents', function() {
    var spinner = (0, enzyme_1.shallow)(
      react_1.default.createElement(Spinner_1.Spinner, null),
    );
    expect(spinner.find('.ui__spinner')).toHaveLength(1);
  });
  it('snapshot renders default spinner', function() {
    var spinner = (0, enzyme_1.shallow)(
      react_1.default.createElement(Spinner_1.Spinner, null),
    );
    expect(spinner).toMatchSnapshot();
  });
});
//# sourceMappingURL=Spinner.test.js.map
