import { router } from "./src/router"

addEventListener('fetch', handleRequest)

async function handleRequest(event) {

    return event.respondWith(router.handle(event.request))

}