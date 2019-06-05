BEGIN;

TRUNCATE 
  benrinote_notes,
  benrinote_sections,
  user_pub,
  benrinote_publications,
  benrinote_users
  RESTART IDENTITY CASCADE;

INSERT INTO benrinote_users (user_name, full_name, nickname, password, type)
VALUES
  ('dunder', 'Dunder Mifflin', null, '$2a$12$k2UvKln.iv/3BSNZqJAps.eJWhn6TNyMVGCPpxR8.LKNrGOKFZlJm', 'adim'),
  ('b.deboop', 'Bodeep Deboop', 'Bo', '$2a$12$XW7uoGcRCUPabSPJQa1ZJOx82rUpbR1UA32fsykhdhjyy21F0YGMa', 'publisher'),
  ('c.bloggs', 'Charlie Bloggs', 'Charlie', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', 'normal'),
  ('s.smith', 'Sam Smith', 'Sam', '$2a$12$Cn1CjQlVQzW7J4CjQQYnk.BSuYcQ0iEU6EYHELimyNFi8XIdnFhxm', 'normal'),
  ('lexlor', 'Alex Taylor', 'Lex', '$2a$12$9jSfrDvCkn6P1Lbt/OJJRu0q8vAWvwX.TlquqL4Mnow6vZfppZOIS', 'normal'),
  ('wippy', 'Ping Won In', 'Ping', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G', 'normal');

INSERT INTO benrinote_publications (title, cover, summary, author_id, publisher_id)
VALUES
  ('Publication 1', 'https://octodex.github.com/images/minion.png', 'Examples of things you can do with markdown. Source: https://markdown-it.github.io/', 1, 2),
  ('Publication 2', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 3, 2),
  ('Publication 3', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 3, 2),
  ('Publication 4', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 4, 2),
  ('Publication 5', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 5, 2);

INSERT INTO user_pub (user_id, pub_id)
VALUES
  (1, 2),
  (1, 4),
  (1, 5),
  (2, 2),
  (2, 3),
  (2, 4),
  (3, 2),
  (3, 3),
  (3, 5),
  (4, 2),
  (4, 3),
  (4, 5),
  (5, 2),
  (5, 3),
  (5, 4);

INSERT INTO benrinote_sections (pub_id, section, title, text)
VALUES
  (1, 1, 'Basic Formatting', '# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants and double quotes"


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar'),
  (1, 2, 'Advanced Formatting', '## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
'),
  (1, 3, 'Images, Plugins, and Emoji', '## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.'),
  (1, 4, 'Miscellaneous', '### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
'),
  (2, 1, 'First Section', ''),
  (2, 2, 'Second Section', ''),
  (2, 3, 'Third Section', ''),
  (3, 1, 'First Section', ''),
  (3, 2, 'Second Section', ''),
  (3, 3, 'Third Section', ''),
  (4, 1, 'First Section', ''),
  (4, 2, 'Second Section', ''),
  (4, 3, 'Third Section', ''),
  (5, 1, 'First Section', ''),
  (5, 2, 'Second Section', ''),
  (5, 3, 'Third Section', '');

INSERT INTO benrinote_notes (user_id, pub_id, section, text)
VALUES
  (1, 2, 1, 'Test notes for USER 1s PUBLICATION 2s SECTION 1 NOTES'),
  (1, 2, 2, 'Test notes for USER 1s PUBLICATION 2s SECTION 2 NOTES'),
  (1, 2, 3, 'Test notes for USER 1s PUBLICATION 2s SECTION 3 NOTES'),
  (1, 4, 1, 'Test notes for USER 1s PUBLICATION 4s SECTION 1 NOTES'),
  (1, 4, 2, 'Test notes for USER 1s PUBLICATION 4s SECTION 2 NOTES'),
  (1, 4, 3, 'Test notes for USER 1s PUBLICATION 4s SECTION 3 NOTES'),
  (1, 5, 1, 'Test notes for USER 1s PUBLICATION 5s SECTION 1 NOTES'),
  (1, 5, 2, 'Test notes for USER 1s PUBLICATION 5s SECTION 2 NOTES'),
  (1, 5, 3, 'Test notes for USER 1s PUBLICATION 5s SECTION 3 NOTES'),
  (2, 2, 1, 'Test notes for USER 2s PUBLICATION 2s SECTION 1 NOTES'),
  (2, 2, 2, 'Test notes for USER 2s PUBLICATION 2s SECTION 2 NOTES'),
  (2, 2, 3, 'Test notes for USER 2s PUBLICATION 2s SECTION 3 NOTES'),
  (2, 3, 1, 'Test notes for USER 2s PUBLICATION 3s SECTION 1 NOTES'),
  (2, 3, 2, 'Test notes for USER 2s PUBLICATION 3s SECTION 2 NOTES'),
  (2, 3, 3, 'Test notes for USER 2s PUBLICATION 3s SECTION 3 NOTES'),
  (2, 4, 1, 'Test notes for USER 2s PUBLICATION 4s SECTION 1 NOTES'),
  (2, 4, 2, 'Test notes for USER 2s PUBLICATION 4s SECTION 2 NOTES'),
  (2, 4, 3, 'Test notes for USER 2s PUBLICATION 4s SECTION 3 NOTES'),
  (3, 2, 1, 'Test notes for USER 3s PUBLICATION 2s SECTION 1 NOTES'),
  (3, 2, 2, 'Test notes for USER 3s PUBLICATION 2s SECTION 2 NOTES'),
  (3, 2, 3, 'Test notes for USER 3s PUBLICATION 2s SECTION 3 NOTES'),
  (3, 3, 1, 'Test notes for USER 3s PUBLICATION 3s SECTION 1 NOTES'),
  (3, 3, 2, 'Test notes for USER 3s PUBLICATION 3s SECTION 2 NOTES'),
  (3, 3, 3, 'Test notes for USER 3s PUBLICATION 3s SECTION 3 NOTES'),
  (3, 5, 1, 'Test notes for USER 3s PUBLICATION 5s SECTION 1 NOTES'),
  (3, 5, 2, 'Test notes for USER 3s PUBLICATION 5s SECTION 2 NOTES'),
  (3, 5, 3, 'Test notes for USER 3s PUBLICATION 5s SECTION 3 NOTES'),
  (4, 2, 1, 'Test notes for USER 4s PUBLICATION 2s SECTION 1 NOTES'),
  (4, 2, 2, 'Test notes for USER 4s PUBLICATION 2s SECTION 2 NOTES'),
  (4, 2, 3, 'Test notes for USER 4s PUBLICATION 2s SECTION 3 NOTES'),
  (4, 3, 1, 'Test notes for USER 4s PUBLICATION 3s SECTION 1 NOTES'),
  (4, 3, 2, 'Test notes for USER 4s PUBLICATION 3s SECTION 2 NOTES'),
  (4, 3, 3, 'Test notes for USER 4s PUBLICATION 3s SECTION 3 NOTES'),
  (4, 5, 1, 'Test notes for USER 4s PUBLICATION 5s SECTION 1 NOTES'),
  (4, 5, 2, 'Test notes for USER 4s PUBLICATION 5s SECTION 2 NOTES'),
  (4, 5, 3, 'Test notes for USER 4s PUBLICATION 5s SECTION 3 NOTES'),
  (5, 4, 1, 'Test notes for USER 5s PUBLICATION 4s SECTION 1 NOTES'),
  (5, 4, 2, 'Test notes for USER 5s PUBLICATION 4s SECTION 2 NOTES'),
  (5, 4, 3, 'Test notes for USER 5s PUBLICATION 4s SECTION 3 NOTES'),
  (5, 2, 1, 'Test notes for USER 5s PUBLICATION 2s SECTION 1 NOTES'),
  (5, 2, 2, 'Test notes for USER 5s PUBLICATION 2s SECTION 2 NOTES'),
  (5, 2, 3, 'Test notes for USER 5s PUBLICATION 2s SECTION 3 NOTES'),
  (5, 3, 1, 'Test notes for USER 5s PUBLICATION 3s SECTION 1 NOTES'),
  (5, 3, 2, 'Test notes for USER 5s PUBLICATION 3s SECTION 2 NOTES'),
  (5, 3, 3, 'Test notes for USER 5s PUBLICATION 3s SECTION 3 NOTES');

COMMIT;