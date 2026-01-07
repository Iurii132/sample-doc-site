
# Heading 1 — `#`

Intro paragraph showing **bold**, *italic*, and `inline code`. Also a [link](https://example.com) and an image:

![Alt text for image](https://via.placeholder.com/400x150 "Placeholder Image")

---

## Heading 2 — `##`

### Heading 3 — `###`

#### Heading 4 — `####`

##### Heading 5 — `#####`

###### Heading 6 — `######`

---

## Lists — `-`, `*`, `+` (bulleted) and `1.` (ordered)

List:

- Bullet item using `-`
    - Nested bullet
        - Third level
	
List:

* Bullet item using `*`

List:

+ Bullet item using `+`


List:

1. First ordered item using `1.`
2. Second ordered item
   1. Nested ordered item
   2. Another nested item


List:

- [ ] Task list item (unchecked) — `- [ ]`
- [x] Task list item (checked) — `- [x]`

---

## Blockquotes — `>`

> This is a blockquote introduced by `>`. It can span multiple lines.
> 
> Second line in the same quote.

---

## Admonitions / Callouts — GitHub-style `> !!!NOTE`, `> [!TIP]`, etc.

 !!!NOTE
     This is a **Note** callout using `!!!NOTE`.
	 
>
> Use it to highlight important information.

!!! TIP
 
    This is a **Tip** callout using `!!! TIP`.
 
>
> Tips provide helpful hints or best practices.

> [!WARNING]
> This is a **Warning** callout using `> [!WARNING]`.

> [!IMPORTANT]
> This is an **Important** callout using `> [!IMPORTANT]`.

> [!CAUTION]
> This is a **Caution** callout using `> [!CAUTION]`.

---

## Code — fenced blocks ``` and language hints

```bash
# Bash sample
mkdir -p sample && cd sample
ls -la
```

```python
# Python sample
from math import sqrt
nums = [1, 4, 9, 16]
roots = [sqrt(n) for n in nums]
print(roots)
```

```json
{
  "name": "Sample",
  "version": "1.0.0"
}
```

---

## Tables — pipes `|` and dashes `-`

| Column A — header | Column B — header | Column C — header |
|-------------------|-------------------|-------------------|
| Cell A1           | Cell B1           | Cell C1           |
| Cell A2           | Cell B2           | Cell C2           |
| **Bold**          | *Italic*          | `Inline code`     |

> Tip: align columns using colons in the separator row:

| Left align | Center align | Right align |
|:-----------|:------------:|------------:|
| left       |   center     |       right |

---

## Horizontal rule — `---` or `***` or `___`

Above and below this section are horizontal rules.

---

## Definition list (common extension)

Term
: Definition for the term (syntax: `Term` then newline then `: definition`).

Another term
: Another definition line.

---

## Footnotes — `[^1]`

Here is a sentence with a footnote reference.[^1]

[^1]: This is the footnote content written later in the document.

---

## Task-specific metadata (YAML front matter) — `---` at top (optional)

You can add YAML front matter at the top of a file for site generators:

```yaml
---
title: "Markdown Style Sampler"
description: "Demonstrates common Markdown features and tags"
author: "Your Name"
---
```

---

## Diagrams — Mermaid fenced block ```mermaid```

```mermaid
flowchart TD
    A[Start] --> B{Is it Markdown?}
    B -- Yes --> C[Render nicely]
    B -- No --> D[Convert or revise]
    C --> E[Ship]
    D --> B
```

Another Mermaid example (sequence diagram):

```mermaid
sequenceDiagram
    participant U as User
    participant S as System
    U->>S: Request sample MD
    S-->>U: Return Markdown file
```

---

## HTML passthrough (when allowed)

<div style=\"border:1px solid #ccc;padding:8px\">
  <strong>Inline HTML</strong> can be used when your renderer supports it.
</div>

---

## Escaping Characters — `\` (backslash)

Use a backslash to escape special characters: \* \_ \# \[ \] \( \) \`.

---

## Anchors and IDs (renderer-dependent)

Most platforms auto-generate heading anchors. You can also create manual anchors:

### Custom Anchor {#custom-anchor}

Link to the custom anchor: [Jump to custom anchor](#custom-anchor)

---

## Checklist of tags used

- Heading 1 — `#`
- Heading 2 — `##`
- Heading 3 — `###`
- Heading 4 — `####`
- Heading 5 — `#####`
- Heading 6 — `######`
- Bulleted lists — `-`, `*`, `+`
- Ordered lists — `1.`
- Task lists — `- [ ]`, `- [x]`
- Blockquotes — `>`
- Callouts — `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!IMPORTANT]`, `> [!CAUTION]`
- Code blocks — triple backticks ``` with language hints
- Inline code — backticks `
- Bold — `**text**`
- Italic — `*text*`
- Links — `[text](url)`
- Images — `![alt](url "title")`
- Tables — `|` with header separator row made of `-`
- Horizontal rules — `---`, `***`, `___`
- Footnotes — `[^id]`
- Definition lists — `Term` followed by `: definition`
- Mermaid diagrams — fenced ```mermaid```
- HTML passthrough — `<div>...</div>`
- Escapes — `\`
- Custom anchor attribute — `{#id}`

