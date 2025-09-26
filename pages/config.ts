//@ts-check

export const config = {

    url : {
        baseURL : 'https://www.demoblaze.com/',
        cartPage : 'https://www.demoblaze.com/cart.html'
    },

    credentials : {
        username : 'LightIt',
        password : 'test123'
    },

    formData : {
        name : 'LightIt',
        country : 'Argentina',
        city : 'Buenos Aires',
        creditCardNumber : '1234 5678 9012',
        monthExpiration : '01',
        yearExpiration : '2030',
    },

    products : {
        samsungS6 : 'Samsung galaxy s6',
        nokiaLumia : 'Nokia lumia 1520'
    }


}

export type Config = typeof config
