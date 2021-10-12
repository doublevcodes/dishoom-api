/**
 * @fileoverview Contains the router which is crucial to the functionality
 * of the API. It decides what action should be taken upon incoming requests.
 * @package
 */

import { Router } from "itty-router"
import { authorise } from "./middleware";
import { getValue, postValue } from "./core"

export let router = Router({base: '/api'})

router.all('*', authorise)

router.get('/:id', async ({ params }) => await getValue(params.id))
router.post('/', async (request) => await postValue((await request.json())['content']))
