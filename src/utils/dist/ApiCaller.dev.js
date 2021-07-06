'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports.remove = exports.put = exports.post = exports.get = exports.request = void 0

var _axios = _interopRequireDefault(require('axios'))

var _objectAssign = _interopRequireDefault(require('object-assign'))

var _config = require('../config')

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

var request = function request(endpoint, method) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
    var body = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {}
    return (0, _axios['default'])({
        url: _config.API_URL + endpoint,
        method: method,
        headers: (0, _objectAssign['default'])({}, headers),
        params: (0, _objectAssign['default'])(params),
        data: body,
    })
}

exports.request = request

var get = function get(endpoint) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
    return request(endpoint, 'GET', headers, params)
}

exports.get = get

var post = function post(endpoint) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
    return request(endpoint, 'POST', headers, params, body)
}

exports.post = post

var put = function put(endpoint) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
    return request(endpoint, 'PUT', headers, params, body)
}

exports.put = put

var remove = function remove(endpoint) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
    return request(endpoint, 'DELETE', headers, params, body)
}

exports.remove = remove
