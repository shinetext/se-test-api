#### The Request:
Make POST requests to `https://shine-se-test-api.herokuapp.com/` with a JSON payload that includes a `goal` property.

**Example Request:**
```
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"goal":"be more joyful"}' \
     https://shine-se-test-api.herokuapp.com/
```


#### The Response:
Successful responses will return JSON with a `content` property that's set to some URL.

**Example Response:**
```
{"content":"http://daily.shinetext.com/2017-03-09"}
```