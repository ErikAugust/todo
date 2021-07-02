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
@eaj/todo-cli/0.0.1 darwin-x64 node-v12.18.4
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo action SHORTCODE`](#todo-action-shortcode)
* [`todo active`](#todo-active)
* [`todo add`](#todo-add)
* [`todo complete [SHORTCODE]`](#todo-complete-shortcode)
* [`todo due SHORTCODE`](#todo-due-shortcode)
* [`todo empty`](#todo-empty)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list [CATEGORY]`](#todo-list-category)
* [`todo note SHORTCODE`](#todo-note-shortcode)
* [`todo start`](#todo-start)
* [`todo trash [CATEGORY]`](#todo-trash-category)
* [`todo url SHORTCODE URL`](#todo-url-shortcode-url)
* [`todo view SHORTCODE`](#todo-view-shortcode)

## `todo action SHORTCODE`

adds action to given item

```
USAGE
  $ todo action SHORTCODE

ARGUMENTS
  SHORTCODE  shortcode of item to add action
```

_See code: [src/commands/action.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/action.ts)_

## `todo active`

sets archived items to active

```
USAGE
  $ todo active
```

_See code: [src/commands/active.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/active.ts)_

## `todo add`

add a new todo list item

```
USAGE
  $ todo add

OPTIONS
  -c, --category=category  [default: inbox] category where item will be added
  -u, --url=url            hyperlink relating to item (example: "https://google.com")

ALIASES
  $ todo new
```

_See code: [src/commands/add.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/add.ts)_

## `todo complete [SHORTCODE]`

mark item or action as complete

```
USAGE
  $ todo complete [SHORTCODE]

ARGUMENTS
  SHORTCODE  shortcode of item or action to complete
```

_See code: [src/commands/complete.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/complete.ts)_

## `todo due SHORTCODE`

set the due date of an item or action

```
USAGE
  $ todo due SHORTCODE

ARGUMENTS
  SHORTCODE  shortcode of item or action to complete
```

_See code: [src/commands/due.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/due.ts)_

## `todo empty`

empties the trash bin

```
USAGE
  $ todo empty
```

_See code: [src/commands/empty.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/empty.ts)_

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

OPTIONS
  -l, --list=list  [default: list] list to be shown
```

_See code: [src/commands/list.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/list.ts)_

## `todo note SHORTCODE`

add a note to the specified item or action

```
USAGE
  $ todo note SHORTCODE

ARGUMENTS
  SHORTCODE  shortcode of item to add action
```

_See code: [src/commands/note.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/note.ts)_

## `todo start`

start a new todo list

```
USAGE
  $ todo start
```

_See code: [src/commands/start.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/start.ts)_

## `todo trash [CATEGORY]`

move selected items to trash

```
USAGE
  $ todo trash [CATEGORY]

ARGUMENTS
  CATEGORY  list by category of items
```

_See code: [src/commands/trash.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/trash.ts)_

## `todo url SHORTCODE URL`

add a url to item or action

```
USAGE
  $ todo url SHORTCODE URL

ARGUMENTS
  SHORTCODE  shortcode of item to add url
  URL        url to set as item url
```

_See code: [src/commands/url.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/url.ts)_

## `todo view SHORTCODE`

view information for an item or action

```
USAGE
  $ todo view SHORTCODE

ARGUMENTS
  SHORTCODE  shortcode of item or action to view
```

_See code: [src/commands/view.ts](https://github.com/ErikAugust/todo/blob/v0.0.1/src/commands/view.ts)_
<!-- commandsstop -->
