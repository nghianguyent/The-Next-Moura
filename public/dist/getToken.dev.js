'use strict'

var urlParams = new URLSearchParams(window.location.search)
var res = {
    success: urlParams.get('success'),
    token: urlParams.get('token'),
}
localStorage.setItem('token', JSON.stringify(res.token))
window.location.replace('http://localhost:3000/')
