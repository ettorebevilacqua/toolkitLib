/*jshint esversion: 6 */
{
    var req = require("./../../utils/request");
    // compose
    API = {};
    API.get = url => {
        xhr.get('url', function(err, resp, body) {
            console.log(resp.body)
        });

        req.get({
            body: someJSONString,
            uri: "/foo",
            headers: {
                "Content-Type": "application/json"
            }
        }, function(err, resp, body) {
            // check resp.statusCode
        })
    };
    module.exports = API;
}
export function makeMap (
  str: string,
  expectsLowerCase?: boolean
): (key: string) => true | void {
  const map = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}
