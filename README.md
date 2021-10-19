# SmallHook

A simple and tiny Webhook parser for GitHub. It uses mustache template engine to create an output text.

## Usage


```js
const { render } = require('smallhook');

const template = `{{ sender.login }} pushed to {{ repository.full_name }}`;

// payload is an object from GitHub Webhook
// the first argument is from X-GitHub-Event http header

const output = render('push', payload, template);

console.log(output);

// OUTPUT:
// seanghay pushed to seanghay/smallhook
```