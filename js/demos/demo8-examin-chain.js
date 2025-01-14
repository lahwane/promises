'use strict'

foo()

function foo() {
    Promise.resolve(17)
        .then(x => {
            // const y = 10
            return x + y
        })
        .then(z => console.log('z:', z))
        .catch(err => {
            console.log('Issues1:', err)
            // return 100
            return Promise.reject(17)
        })
        .then(x => {
            // console.log('x:', x)
            return x + 1
        })
        .then(res => console.log('Success:', res))
        .then(res1 => { console.log('res1', res1) })

        .catch(err => {
            console.log('Issues2:', err)
        })
        .finally(() => {
            console.log('FINALLYYY');
        })
}







function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

function goo() {
    wait(200)
        // Example:  This line gets undefined as parameter
        // and return a promise that is resolved to foo
        .then(() => new Promise(resolve => resolve('foo')))
        .then(x => x) // the value of x is wrapped by a new promise
        .then(b => console.log('b:', b)) // Prints: 'foo'
        .then(() => null)
        .then(c => console.log('c:', c)) // Prints: null
        .then(() => { throw new Error('Big Problem') })
        .then(
            // Nothing is logged here due to the error above:
            d => console.log(`d: ${d}`)
        )
        .catch(err => console.log('Err is', err))
        // With the previous exception handled, we can continue:
        .then(f => console.log(`f: ${f}`)) // Prints: f: undefined
        // The following doesn't log. e was already handled,
        // so this handler doesn't get called:
        .catch(e => console.log('Nothing to catch', e))
        .then(() => { throw new Error('Hopa, Abale') })
        .then(g => console.log(`g: ${g}`))
        .catch(h => console.log(h)) // Prints: Error: Hopa, Abale
        .finally(() => console.log('Finally always happen'))
}
