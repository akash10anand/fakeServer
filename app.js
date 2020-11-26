const fastify = require("fastify")({ logger: true });

fastify.get("/health", { logLevel: "error" }, async () => {
    return {
        Message: `ping-${Date.now()}`,
    };
});

fastify.post("/post", { logLevel: "error" }, async (request, reply) => {
    return {
        body: request.body,
        headers: request.headers,
        query: request.query
    };
});

fastify.route({
    method: ['GET', 'POST'],
    url: '/path_params/:some_param',
    handler: async (request, reply) => {
        return {
            body: request.body,
            headers: request.headers,
            params: request.params,
            query: request.query
        }
    }
});

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        // request needs to have a querystring with a `name` parameter
        querystring: {
            name: { type: 'string' }
        },
        // the response needs to be an object with an `hello` property of type 'string'
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    // this function is executed for every request before the handler is executed
    preHandler: async (request, reply) => {
        // E.g. check authentication
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

module.exports = fastify;