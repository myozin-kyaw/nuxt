export default defineEventHandler(async (event) => {

    // handle query params
    const { name } = getQuery(event)

    // handle post body
    const { age } = await readBody(event)

    return {
        message:  `Hello Message from server api ${name} and age is ${age}`,
    }
})