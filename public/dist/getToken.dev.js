'use strict'

var urlParams = new URLSearchParams(window.location.search)
var res = {
    success: urlParams.get('success'),
    token: urlParams.get('token'),
}
localStorage.setItem('res', JSON.stringify(res))
console.log(localStorage.getItem('res'))
