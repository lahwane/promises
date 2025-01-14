'use strict'

demo1()

function demo1() {


    //* ------------------- Axios -------------------
    //* axios (common JS library for AJAX) works with promises:

    // const prm1 = axios.get('https://api.github.com/users/vyaron')
    // console.log('prm1:', prm1)

    // prm1.then(res => {
    //     console.log('res:', res)
    //     const user = res.data
    //     console.log('user:', user)
    // })



    //* ------------------- fetch -------------------
    //* fetch function (built in function for AJAX) returns a promise:

    // const prm2 = fetch('https://api.github.com/users/vyaron')
    // console.log('prm2:', prm2)

    // prm2.then(res => {
    //     console.log('res:', res)
    //     const prmUser = res.json()
    //     console.log('prmUser:', prmUser)
    //     prmUser.then(user => {
    //         console.log('user:', user)
    //     })
    // })



    //* ------------------- Swal -------------------
    //* SWAL (common JS library for simple modals)
    //* works with a promise API:

    // const isConfirmed = confirm('Sure?')
    // console.log('Hi')
    // console.log('isConfirmed:', isConfirmed)

    // const prm3 = Swal.fire({
    //     title: 'Should we?',
    //     showDenyButton: true,
    // })

    // console.log('prm3:', prm3)

    // prm3.then(res => {
    //     console.log('res:', res)
    // })


}
