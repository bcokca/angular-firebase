angular-linkedin
================

#AngularJS and LinkedIn integration 

This is a proof of concept to use *Sign in with LinkedIn account* with AngularJS. It connects with LinkedIn, and retrieves some user info after the app is authorized. All the code is client side, but I have included a small node.js server with express for convenience, so you will need node.js to run it. 

#Set up instructions
You will have to get a valid API key from LinkedIn. Get one on [LinkedIn API]. You will have to add your domain on section Javascript API domains. See more details on how to set up the API on [my blog]

Look for the following lines on index.html, and replace api_key with yours:

```sh
<script type="text/javascript" src="http://platform.linkedin.com/in.js">
	api_key: xxxxxxxx
	onLoad: onLinkedInLoad
	authorize: true
</script>
```

#Installation
To launch the application:
1. npm install
2. node app.js
3. Open your browser and load the URL http://localhost:8080

# TODO
1. bla bla
2. bla bla

[firebase]: https://www.firebase.com
[my blog]: http://burhancokca.wordpress.com