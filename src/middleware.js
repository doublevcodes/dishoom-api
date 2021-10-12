/**
 * @fileoverview Contains any middlewares which are applied to inbound requests.
 * The itty-router-extras dependency provides easier Response construction
 * helper functions.
 * @package
 */

import { error } from "itty-router-extras" 

/**
 * Global constants used within this package
 */
const CONSTANTS = {
    AUTH_HEADER: 'Authorization',
    AUTH_HEADER_VALUE: 'qwerty'
}

/**
 * The inbound request should carry valid authorisation
 * credentials. This should be an `Authorization` header.
 * @param {Request} request The inbound request
 * @returns {(Response|null)} null represents a valid request
 */
export async function authorise(request) {

    if (!request.headers.has(CONSTANTS.AUTH_HEADER)) {
        return error(401, "Authorization header not provided")
    }

    if (request.headers.get(CONSTANTS.AUTH_HEADER) !== CONSTANTS.AUTH_HEADER_VALUE) {
        return error(403, "Invalid Authorization header value - Access forbidden")
    }

}