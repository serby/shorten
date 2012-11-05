# shorten - Convert integer IDs to short textual IDs and vice versa. Ideal for URL shortening.

A JavaScript implementation of [flickr's](http://www.flickr.com/groups/api/discuss/72157616713786392/) ID shortener.

[![build status](https://secure.travis-ci.org/serby/###.png)](http://travis-ci.org/serby/shortern)

## Installation

      npm install shorten

## Usage

```js
var shorten = require('shorten')()
assert.equals(shorten.encode(200), '9H3'))
assert.equals(shorten.decode('9H3', 200))
```

## Credits
[Paul Serby](https://github.com/serby/) follow me on twitter [@serby](http://twitter.com/serby)

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)