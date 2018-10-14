var Twit = require('twit')

var T = new Twit({
  consumer_key:         'AJ1UNHfhZnFdDk3QOJcArmKHL',
  consumer_secret:      'v8goB0Y8cp6eie1dXKAp2BRBfvi0WnK2zVvgNbOA5IwmTUZ2QD',
  access_token:         '2303020602-ZZGGTjl47qKQFrxHzjAsl2319Pn2W5RWLYz9hLo',
  access_token_secret:  'DIAJDXdWoiuQLs2rJ9zsFa1XcAj2vLOPNB09c1Ij3rByB',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  stream a sample of public statuses
//
/*var stream = T.stream('statuses/sample')

stream.on('tweet', function (tweet) {
  console.log(tweet)
})
*/
//
//  filter the twitter public stream by the word 'mango'.
//
var stream = T.stream('statuses/filter', { track: 'trump' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

//stream.on('tweet', tweet => console.log(tweet.text));

//
// filter the public stream by the latitude/longitude bounded box of San Francisco
//
/*var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

var stream = T.stream('statuses/filter', { locations: sanFrancisco })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})
*/
//
// filter the public stream by english tweets containing `#apple`
//
/*
var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

*/