"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameComponent = exports.readTemplate = exports.checkType = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var checkType = function checkType(options) {
  if (options.class) {
    return 'class';
  }

  if (options.pure) {
    return 'pure';
  }

  if (options.functional) {
    return 'functional';
  }

  if (options.container) {
    return 'container';
  }

  return config.defaultComponentType;
};

exports.checkType = checkType;

var readTemplate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type) {
    var filePath;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filePath = _path.default.join(__dirname, 'templates', type, 'index.js');
            return _context.abrupt("return", _fsExtra.default.readFile(filePath, 'utf8'));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function readTemplate(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.readTemplate = readTemplate;

var renameComponent = function renameComponent(name, component) {
  var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return component.replace(new RegExp('COMPONENT_NAME', 'g'), capitalized);
};

exports.renameComponent = renameComponent;