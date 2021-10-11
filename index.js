import { Router } from 'itty-router'
import { error, status } from 'itty-router-extras';

let router = Router({ base: '/api' })

/**
 * 
 * @param {Request} request
 */
function requireAccessToken(request) {
    if (!request.headers.has('Authorization')) {
        return error(401, 'No Authorization provided')
    }
    let AUTH_HEADER = request.headers.get('Authorization')
    if (AUTH_HEADER != "qwerty") {
        return error(403, 'Invalid Authorization')
    }
}

/**
 * 
 * @param {Request} request 
 */
async function createNewRecord(request) {
    let body = await request.json()
    const UUID = crypto.randomUUID()
    const TTL = 600
    await DISHOOM_RECORDS.put(UUID, body['content'], { expirationTtl: TTL })
    return status(201, `Resource created with ID ${UUID}. The TTL is 600 seconds`)
}

router.all('*', requireAccessToken)

router.get('/', (_) => {
    return new Response("HIII")
})

router.post('/new', createNewRecord)

router.get('/:id', ({ params }) => {
    new Response(`Here is the data in that ID: ${DISHOOM_RECORDS.get(params.id)}`)
})

addEventListener('fetch', event => {
    event.respondWith(router.handle(event.request))
})