const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');


const GITHUB_EVENTS = [
  "commit_comment",
  "create",
  "delete",
  "deployment",
  "deployment_status",
  "fork",
  "gollum",
  "issue_comment",
  "issues",
  "member",
  "membership",
  "page_build",
  "public",
  "pull_request",
  "pull_request_review_comment",
  "push",
  "release",
  "repository",
  "status",
  "team_add",
  "watch",
];

function extractEventFromHeaders(headers) {
  for (const item of Object.entries(headers)) {
    const header = item[0];
    if (header && header.toLowerCase() === 'x-github-event') {
      return item[1];
    }
  }
  return null;
}

function isEventNameValid(eventName) {
  return GITHUB_EVENTS.includes(eventName);
}

function render(eventName, body, templateContent = readTemplate(eventName)) {
  if (!isEventNameValid(eventName)) return null;
  return Mustache.render(templateContent, body, null, { escape: (v) => v });
}

function readTemplate(eventName) {
  const templatePath = path.join(__dirname, 'template', eventName + '.md');
  if (fs.existsSync(templatePath)) {
    return fs.readFileSync(templatePath, "utf8");
  }
  return null;
}

module.exports = {
  render,
  extractEventFromHeaders,
  isEventNameValid,
};


