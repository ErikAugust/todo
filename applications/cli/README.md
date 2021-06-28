@eaj/todo-cli
=============

CLI for Todo

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@eaj/todo-cli.svg)](https://npmjs.org/package/@eaj/todo-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@eaj/todo-cli.svg)](https://npmjs.org/package/@eaj/todo-cli)
[![License](https://img.shields.io/npm/l/@eaj/todo-cli.svg)](https://github.com/ErikAugust/todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @eaj/todo-cli
$ todo COMMAND
running command...
$ todo (-v|--version|version)
@eaj/todo-cli/0.0.0 darwin-x64 node-v12.18.4
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo action [FILE]`](#todo-action-file)
* [`todo add`](#todo-add)
* [`todo complete [SHORTCODE]`](#todo-complete-shortcode)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list [CATEGORY]`](#todo-list-category)
* [`todo start`](#todo-start)

## `todo action [FILE]`

describe the command here

```
USAGE
  $ todo action [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/action.ts](https://github.com/ErikAugust/todo/blob/v0.0.0/src/commands/action.ts)_

## `todo add`

add a new todo list item

```
USAGE
  $ todo add

OPTIONS
  -c, --category=category  [default: inbox] category where item will be added
  -u, --url=url            hyperlink relating to item (example: "https://google.com")
```

_See code: [src/commands/add.ts](https://github.com/ErikAugust/todo/blob/v0.0.0/src/commands/add.ts)_

## `todo complete [SHORTCODE]`

mark item or action as complete

```
USAGE
  $ todo complete [SHORTCODE]

ARGUMENTS
  SHORTCODE  shortcode of item or action to complete
```

_See code: [src/commands/complete.ts](https://github.com/ErikAugust/todo/blob/v0.0.0/src/commands/complete.ts)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todo list [CATEGORY]`

view list of todo items

```
USAGE
  $ todo list [CATEGORY]

ARGUMENTS
  CATEGORY  list by category of items
```

_See code: [src/commands/list.ts](https://github.com/ErikAugust/todo/blob/v0.0.0/src/commands/list.ts)_

## `todo start`

start a new todo list

```
USAGE
  $ todo start
```

_See code: [src/commands/start.ts](https://github.com/ErikAugust/todo/blob/v0.0.0/src/commands/start.ts)_
<!-- commandsstop -->
