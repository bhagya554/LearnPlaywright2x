# Playwright `getByRole()` Options

`getByRole()` locates elements by their ARIA role and supports several filtering options.

## Syntax

```ts
page.getByRole(role, options);
```

Example:

```ts
page.getByRole('button', {
  name: 'Submit',
  exact: true
});
```

---

## Available Options

### `name`

**Type:** `string | RegExp`

Accessible name of the element. Matches visible text, labels, or ARIA labels.

```ts
page.getByRole('button', {
  name: 'Submit'
});
```

```ts
page.getByRole('button', {
  name: /submit/i
});
```

---

### `exact`

**Type:** `boolean`

Performs an exact, case-sensitive match on the `name` option.

- Default: `false`
- Ignored when `name` is a `RegExp`

```ts
page.getByRole('button', {
  name: 'Submit',
  exact: true
});
```

---

### `checked`

**Type:** `boolean`

Filters elements by ARIA checked state (`aria-checked`).

Applicable to:

- Checkbox
- Radio button
- Switch

```ts
page.getByRole('checkbox', {
  checked: true
});
```

---

### `pressed`

**Type:** `boolean`

Filters elements by ARIA pressed state (`aria-pressed`).

Applicable to toggle buttons.

```ts
page.getByRole('button', {
  pressed: true
});
```

---

### `selected`

**Type:** `boolean`

Filters elements by ARIA selected state (`aria-selected`).

Applicable to:

- Tabs
- Options
- Grid cells

```ts
page.getByRole('tab', {
  selected: true
});
```

---

### `expanded`

**Type:** `boolean`

Filters elements by ARIA expanded state (`aria-expanded`).

Applicable to expandable controls such as accordions and tree items.

```ts
page.getByRole('button', {
  expanded: true
});
```

---

### `disabled`

**Type:** `boolean`

Filters elements based on disabled state.

> Note: Disabled state is not always inherited or propagated.

```ts
page.getByRole('button', {
  disabled: true
});
```

---

### `level`

**Type:** `number`

Filters elements by hierarchy level.

Commonly used with:

- Headings (`<h1>`–`<h6>`)
- List items
- Rows

```ts
page.getByRole('heading', {
  level: 2
});
```

---

### `includeHidden`

**Type:** `boolean`

Includes elements hidden from the accessibility tree.

- Default: `false`

```ts
page.getByRole('button', {
  includeHidden: true
});
```

---

## Complete Example

```ts
await page.getByRole('button', {
  name: 'Save',
  exact: true,
  disabled: false
}).click();
```

## Quick Reference

| Option | Type | Description |
|----------|----------|-------------|
| `name` | `string \| RegExp` | Accessible name match |
| `exact` | `boolean` | Exact name matching |
| `checked` | `boolean` | ARIA checked state |
| `pressed` | `boolean` | ARIA pressed state |
| `selected` | `boolean` | ARIA selected state |
| `expanded` | `boolean` | ARIA expanded state |
| `disabled` | `boolean` | Disabled state |
| `level` | `number` | Heading/listitem/row level |
| `includeHidden` | `boolean` | Include hidden elements |

---

For more information, see the Playwright accessibility locator documentation:
https://playwright.dev/docs/locators#locate-by-role
``