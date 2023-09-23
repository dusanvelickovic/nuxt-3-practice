export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = getQuery(event)

    // handle post date
    // const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_CzVoPqDCZuf3i2INPJ7JKQKamtEHmJ2xu5R2ASXx')
    
    return data;
})