'use strict'

function getPromiseFor(value, time = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value !== undefined) resolve(value)
        }, time)
    })
}


function getArrayOf(...values) {
    return values
}


