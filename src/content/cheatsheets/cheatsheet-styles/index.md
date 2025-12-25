
Intro
-----

Variants
--------


### H2 sections

| `-one-column` | |
| `-two-column` | _(default)_|
| `-three-column` | |
| `-left-reference` | 3 columns<br>_(short first column)_ |

See: [H2 sections](#two-columns)

### H3 sections

| `-prime` | Highlight |

See: [H3 sections](#h3-sections-1)

### Tables

| `-bold-first` | Bold first column |
| `-headers` | Show headers |
| `-left-align` | Don't right align last column |
| `-mute-em` | Lower opacity for italics |
| `-no-wrap` | Don't wrap text |
| `-shortcuts` | Shortcut keys |

See: [Tables](#tables-1)

### Code

| `-box-chars` | Less line height<br>_for box drawing chars_ |
| `-setup` | Gray background |
| `-wrap` | Enables line-wrapping |

See: [Code](#code-1)

### Paragraphs

| `-setup` | Gray background |
| `-crosslink` | Has arrow on the link |


See: [Paragraphs](#paragraphs-1)

### Lists

| `-also-see` | Lighter background |
| `-four-column` | |
| `-six-column` | |

See: [Lists](#lists-1)

### Adding variants


```
## Section

```

Devhints uses Kramdown, and supports adding classes via Kramdown's syntax.

H3 sections
-----------


### Supported

Each section can have the following children:

#### White

- `pre`
- `ul`
- `table`

#### Gray

- `p`
- `h4`

### Prime section


This is a section with ``. Notice the fancy highlight! Great for "getting started" kind of snippets.

### H3 section

Every box is an H3 section. The box will encompass everything inside the body of the H3.

This is a basic section with paragraphs in it.

Code
----


### Basic code

```js
here.is(() => {
  some.code()
})
```

```js
here.is.some.more()
```

Code blocks can be placed one after the other.

See: [Cheatsheets](/)

### Code with headings

#### index.js


```js
here.is(() => {
  some.code()
})
```

#### other.js


```js
here.is.some.more()
```

Code blocks can have headings.

### Highlighted lines

```js
app.start(() => {
  const port = app.server.port
  console.log(`Started at ${port}`)
})
```


Add `` to add line highlights.

### Multiple highlights

```js
app.start(() => {
  const port = app.server.port
  console.log(`Started at ${port}`)
})
```


Add `` to add multiple line highlights.

### Setup blocks

```js
import React from 'react'
```


```js
class Hello extends React.Component {
  render () {
    return <span>Hello</span>
  }
}
```

Add `` to a `pre` or `table` or `ul`.

### Long lines

```js
function createNode(nodeName: string, options: { key: string }) {
  return true
}
```

Long lines will have scrollbars.

### Line wrapping

```js
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```


Add `-wrap` to wrap long lines.

## Lists


### Lists

- This is
- a list
- with a few items

Here's an extra paragraph after the list.

### Lists with headings

#### Part 1

- `createElement()`
- `componentDidMount()`
- `componentWillUnmount()`

#### Part 2

- `shouldComponentUpdate()`
- `componentWillReceiveProps()`


Here's an extra paragraph after the list.

## List columns


### Six columns

- One
- Two
- Three
- Four
- Five
- Six
- Seven
- Eight
- Nine
- Ten
- Eleven


Add `` to make large lists.

### Four columns

- One
- Two
- Three
- Four
- Five
- Six
- Seven
- Eight
- Nine
- Ten
- Eleven


Add `` to make large lists.

### Also see

- One
- Two
- Three
- Four
- Five
- Six
- Seven
- Eight
- Nine
- Ten


Add ``.

## Paragraphs


### Basic paragraphs

This is a basic section with paragraphs in it. When paragraphs are the first elements in an H3 section's body, they appear as white.

### Basic paragraphs

```
···
```

When paragraphs appear after `pre`/`table`/`ul`, they appear with a gray background.

### Preludes

Here's a prelude paragraph. Add `` to make paragraphs appear with a gray background.


```
···
```

### Crosslink

Add `` to make big loud external links:

```
···
```

[Home](/)


## Tables


### Basic table

#### Date

| Example         | Output                 |
| ---             | ---                    |
| `%m/%d/%Y`      | `06/05/2013`           |
| `%A, %B %e, %Y` | `Sunday, June 5, 2013` |
| `%b %e %a`      | `Jun 5 Sun`            |

#### Time

| Example         | Output                 |
| ---             | ---                    |
| `%H:%M`         | `23:05`                |
| `%I:%M %p`      | `11:05 PM`             |

This is a basic table with h4's.

### Shortcuts

| `V` | Vector |
| `P` | Pencil |
| `T` | Text |
| `L` | Line |
| `R` | Rectangle |
| `O` | Oval |
| `U` | Rounded |


Add `` to tables.

### With headers

| Prefix | Example               | What     |
| ---    | ---                   | ---      |
| `//`   | `//hr[@class='edge']` | Anywhere |
| `./`   | `./a`                 | Relative |
| `/`    | `/html/body/div`      | Root     |


Add `` to add headers.

## Two columns

### One

```
···
```

### Two

```
···
```

## Left reference


### One

```
···
···
···
···
···
···
···
···
```

### Two

```
···
```

### Three

```
···
```

## One column


### One

```
···
```
