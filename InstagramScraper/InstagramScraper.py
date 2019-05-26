# -*- coding: utf-8 -*-
#!/usr/bin/env python3

import requests
import argparse
import re
import sys
import os
import json
import webbrowser

def catchID(user):

	url = "https://www.instagram.com/{}"
	
	req = requests.get(url.format(user))
	
	html = req.text
	
	if not req.ok:
		print("Invalid user!")
	else:
		##print(req.content)
		return re.findall('"id":"(.*?)",', html)[0]

def catchDATA(id):

	url = "https://i.instagram.com/api/v1/users/{}/info/"
	
	req = requests.get(url.format(id))
	
	if not req.ok:
		print("Invalid user!")
	else:
		return req.json()

def main():
	
	parser = argparse.ArgumentParser()
	
	parser.add_argument('user', action="store")
	
	input = parser.parse_args()
	
	user = input.user
	
	id = catchID(user)
	
	data = catchDATA(id)
	
	with open('user.json', 'w') as json_file:  
		json.dump(data, json_file)
		
	webbrowser.open_new_tab('index.html')

if __name__ == "__main__":
    main()
