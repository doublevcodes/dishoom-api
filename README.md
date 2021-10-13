<h1 align="center">Dishoom API  <img src="https://github.com/doublevcodes/dishoom-api/blob/main/icon.png" width="28" height="28"/></h1>

This Dishoom API is an internal service that serves as an
abstraction layer between the [Dishoom web interface](https://github.com/doublevcodes/dishoom) and [Workers KV](https://developers.cloudflare.com/workers/learning/how-kv-works).
The API is currently publicly accessible although this is subject to
change in future circumstances.

Being tightly coupled with the functionality being provided by the
Dishoom web interface, this API will not be strictly versioned and does
not provide any guaranteed behaviour at any point in time.

## Project information
The Dishoom API functions using key technology and frameworks. Firstly,
this API utilises the serverless architecture model - it is hosted on an
amazing platform called [Cloudflare Workers](https://workers.cloudflare.com). The REST-like functionality
is provided by an itty-bitty `npm` package built for Cloudflare Workers,
which is known as [`itty-router`](https://www.npmjs.com/package/itty-router)(the API also makes use of
[`itty-router-extras`](https://www.npmjs.com/package/itty-router)). Finally, the Dishoom API can retrieve values from
a key-value storage service known as [Workers KV](https://developers.cloudflare.com/workers/learning/how-kv-works); this storage of stateful
data in [Workers KV](https://developers.cloudflare.com/workers/learning/how-kv-works) enables content to be stored and be related to a UUIDv4
(provided by [uuid.rocks](https://uuid.rocks)).

## Utilities

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/doublevcodes/dishoom-api)
