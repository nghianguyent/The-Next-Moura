'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports['default'] = void 0

var _jwtDecode = _interopRequireDefault(require('jwt-decode'))

var _config = require('./../config')

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

function _typeof(obj) {
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        _typeof = function _typeof(obj) {
            return typeof obj
        }
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    return Constructor
}

var LocalStorageUtils =
    /*#__PURE__*/
    (function () {
        function LocalStorageUtils() {
            _classCallCheck(this, LocalStorageUtils)
        }

        _createClass(LocalStorageUtils, [
            {
                key: 'getItem',
                // get item
                value: function getItem(key) {
                    var defaultValue =
                        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '""'

                    if (typeof localStorage === 'undefined') {
                        return undefined
                    }

                    var item = localStorage.getItem(key)

                    if (item && item === 'undefined') {
                        item = defaultValue
                    }

                    return JSON.parse(item)
                }, // set item
            },
            {
                key: 'setItem',
                value: function setItem(key) {
                    var value =
                        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''

                    if (
                        (typeof localStorage === 'undefined'
                            ? 'undefined'
                            : _typeof(localStorage)) !== undefined
                    ) {
                        localStorage.setItem(key, JSON.stringify(value))
                    }
                }, // delete Item
            },
            {
                key: 'removeItem',
                value: function removeItem(key) {
                    if (typeof localStorage !== 'undefined') {
                        localStorage.removeItem(key)
                    }
                }, //function on user change
            },
            {
                key: 'getUser',
                value: function getUser() {
                    if (typeof localStorage !== 'undefined') {
                        var token = this.getItem(_config.LOCALSTORAGE_TOKEN_NAME)

                        if (token) {
                            try {
                                // jwt_decode(token)
                                return (0, _jwtDecode['default'])(token)
                            } catch (err) {
                                if (err.response && err.response.status === 401) {
                                    this.deleteUser()
                                }
                            }
                        } else return token
                    }

                    return undefined
                },
            },
            {
                key: 'deleteUser',
                value: function deleteUser() {
                    localStorage.removeItem(_config.LOCALSTORAGE_TOKEN_NAME)
                },
            },
            {
                key: 'getToken',
                value: function getToken() {
                    return this.getItem(_config.LOCALSTORAGE_TOKEN_NAME)
                },
            },
            {
                key: 'clear',
                value: function clear() {
                    localStorage.clear()
                },
            },
        ])

        return LocalStorageUtils
    })()

var _default = new LocalStorageUtils()

exports['default'] = _default
