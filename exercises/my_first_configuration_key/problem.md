# MY FIRST CONFIGURATION KEY

Welcome to the Confit Workshop! To get to know the workshop mechanic, we'll 
start with an easy exercise.

## Explanation

Confit makes easy to specify and retrieve your application configuration.
This configuration is specified in a `config.json` inside a `config` folder.
This JSON file contains key value pairs that are loaded at runtime.
The advantage of this is that all your application configuration is in a single,
well-known place; and you can swap it out without having to touch a single line of code.

## Example

```json
{
  "myConfigKey": "myConfigValue",
  "number": 1337,
  "isAwesome": true
}
```

## Tasks

1. Write a script that prints the following message to console: `I will learn Confit!`
2. Next to the file from task #1, create a `config` folder that contains a `config.json` file. 
  This file should contain a `name` configuration key with your name as value.
