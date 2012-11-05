module.exports = function (options) {

  // Allow a custom alphabet to be defined
  var alphabet = options && options.alphabet
    || '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'

  function encode(num) {
    var baseCount = alphabet.length
      , div
      , mod
      , encoded

    encoded = ''

    while (num >= baseCount) {
      div = num / baseCount
      mod = (num - (baseCount * parseInt(div, 10)))
      encoded = alphabet[mod] + encoded
      num = parseInt(div, 10)
    }
    if (num) {
      encoded = alphabet[num] + encoded
      return encoded
    }
  }

  function decode(encoded) {
    var decoded = 0
      , multi = 1
      , digit

    while (encoded.length > 0) {
      digit = encoded[encoded.length - 1]
      decoded += multi * alphabet.indexOf(digit)
      multi = multi * alphabet.length
      encoded = encoded.substring(0, encoded.length - 1)
    }
    return decoded
  }

  return (
    { encode: encode
    , decode: decode
    }
  )
}