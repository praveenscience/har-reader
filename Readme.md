# Creating my own HAR Reader

I generally use a complex rendering engine to create a few content heavy websites locally. When I do, the original files that generate the website will be mostly using a server side language like PHP or Node JS (along with more complexity). What I might need would be a static site with a few assets and HTML files to host it in GitHub or other similar platforms.

What I generally do is to run them locally using http://localhost/ and just filter out the only assets that are called while rendering the page. This is done by capturing all the network requests in a HTTP Archive and then getting the URLs that are needed and rebuilding the target static website.

## HAR & HAR Reader

So what's this HAR? [HAR (HTTP Archive)](https://go.praveen.science?redirect=https://www.google.com/url?q=http://www.softwareishard.com/har/viewer/) is a file format used by several HTTP session tools to export the captured data. The format is basically a JSON object with a particular field distribution. In any case, please note that not all the fields are mandatory, and many times some information won't be saved to the file.

Also beware, HAR files contain sensitive data!

* content of the pages you downloaded while recording
* your cookies, which will allow anyone with the HAR file to impersonate your account
* all the information that you submitted while recording: personal details, passwords, credit card numbers...

I have been using [Google HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/), a part of [G Suite toolbox](https://toolbox.googleapps.com/apps/main/). This is a nice app by Google to analyse the captured HAR files, but there's a big downside to it.

## Motivation & Current Issues

The HAR Analyzer by Google works on client side and depending on your machine and browser, it may not handle huge files. I am using a [MacBook Pro 15" Retina with 2.8 GHz CPU and 16 GB of RAM](https://blog.praveen.science/my-personal-development-environment/), but unfortunately, even such a system is not capable of handling more than 50 MB of JSON file processing. I had to think of a way and had a thought, if it's just processing JSON, all I need would be a JavaScript engine!

## Node JS to the rescue!

Google Chrome has been praised as containing one of the [best JavaScript engines](https://go.praveen.science/?redirect=https://developers.redhat.com/blog/2016/05/31/javascript-engine-performance-comparison-v8-charkra-chakra-core-2/), which is V8 and that's the same engine being used in Node JS. All I need is just the engine and not a browser. Now that I have got the JavaScript engine, these are the steps I thought of:

1. Read the HAR file as string and store it locally.
2. Parse the string as JavaScript, as HAR files is just a big JSON file.
3. Get the path of the URL entries and push it to an array.
4. Join the contents of the array in the way I want.
5. Writing it to a new file as showing it is too mainstream.

## Blog Post

I have covered the whole thing in my blog post here. Read more on [Creating my own HAR Reader](https://blog.praveen.science/creating-my-own-har-reader) on my blog.