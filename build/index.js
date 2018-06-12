"use strict";

require("babel-polyfill");

var _commander = _interopRequireDefault(require("commander"));

var _chalk = _interopRequireDefault(require("chalk"));

var _config = _interopRequireDefault(require("./config.json"));

var _generate = require("./generate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var addExtension = function addExtension(file) {
  return "".concat(file, ".").concat(_config.default.componentFileExtension);
};

_commander.default.version('0.1.0').option('-init', 'Initialize configuration');

_commander.default.command('init').action(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(name, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

_commander.default.command('create [name]').description('run setup commands for all envs').option('-c --class', 'Create class component').option('-p --pure', 'Create pure component').option('-f --functional', 'Create functional component').option('-r --container', 'Create redux connected component').action(
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(name, options) {
    var type, template;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = name || 'index';
            type = (0, _generate.checkType)(options);
            _context2.next = 4;
            return (0, _generate.readTemplate)(type);

          case 4:
            template = _context2.sent;
            (0, _generate.renameComponent)(name, template);
            console.log(type);
            console.log("Creating component with name ".concat(_chalk.default.red(addExtension(name))));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

_commander.default.parse(process.argv);