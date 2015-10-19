mediahive_test_generator

Outline: 
1) On homepage html, input target url for testing
2) Save target url to controller
3) Ajax target url to backend
4) Backend scrapes target url webpage
5) Backend generates an array/object containing all the input fields
6) Backend sends back the fields object to the frontend
7) Frontend asynchronously generates a view that highlights all input fields
8) Frontend records all user inputs to the input fields and saves it to an object containing the input information and the corresponding field
9) Frontend ajax's that object back to the backend.
10) Backend takes that object and generates a custom script that will:
	a) Run from an npm command
	b) Scrape the url webpage
	c) Automatically input the information saved from the user
	d) Be downloadable through npm with a custom name
	e) Publish the script to npm 
