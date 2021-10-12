/**
 * @fileoverview Contains functions which provide the core functionality
 * of Dishoom. This is mainly interaction with Workers KV.
 * @package
 */

import { error, status } from "itty-router-extras"

/**
 * Get a value from the Dishoom KV namespace.
 * @param {string} key The requested key to get.
 * @returns {Response}
 */
export async function getValue(key) {

    let value = await DISHOOM_KV_NAMESPACE.get(key, {
        type: "text",
        cacheTtl: 7200
    })
    
    return status(200, value)
}

/**
 * Post a value under a UUID to the Dishoom KV namespace.
 * @param {string} value The value to post to KV.
 * @returns {Response}
 */
export async function postValue(value) {

    const uuid = await (await fetch('https://uuid.rocks/plain')).text()
    await DISHOOM_KV_NAMESPACE.put(uuid, value, {
        expirationTtl: 18000
    })

    return status(201, {message: "Created resource", uuid: uuid})

}