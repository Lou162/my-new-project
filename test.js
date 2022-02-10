var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://192.168.5.252/fog/task/current',
  'headers': {
    'fog-api-token': 'ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=',
    'fog-user-token': 'OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM=',
    'Content-Type': 'text/plain'
  },
  body: '{"taskTypeID":1}'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  var data = JSON.parse(response.body);
  console.log(data["tasks"][0]["state"]["name"]);
});
