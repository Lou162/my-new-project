import requests

url = "http://192.168.5.252/fog/taskstate"

payload = "{\"taskTypeID\":1}"
headers = {
  'fog-api-token': 'ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=',
  'fog-user-token': 'OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM=',
  'Content-Type': 'text/plain',
  'Cookie': 'PHPSESSID=k29ikigtmsc6qrobv9f6a1kfd2'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
