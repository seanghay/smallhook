# SmallHook

[![Publish to npm Registry](https://github.com/seanghay/smallhook/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/seanghay/smallhook/actions/workflows/npm-publish.yml)

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
