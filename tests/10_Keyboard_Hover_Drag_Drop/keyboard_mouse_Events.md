# Playwright Keyboard & Mouse Methods

Reference for all keyboard and mouse input APIs in Playwright.

- **Locator/Page action methods** — high-level, auto-wait for actionability (visible, stable, enabled). Prefer these.
- **`page.keyboard.*` / `page.mouse.*`** — low-level dispatchers. No auto-wait, no element targeting. Use for fine-grained control (holding a key, precise coordinates).

---

## Keyboard

### High-level (Locator / Page)

| Method | Description | Example |
|---|---|---|
| `locator.fill(value)` | Clear field and set value in one step (fastest for typing). | `await page.getByRole('textbox').fill('hello')` |
| `locator.pressSequentially(text, {delay})` | Type char-by-char, firing `keydown`/`keypress`/`keyup` per key. Use when app listens to keystrokes. | `await locator.pressSequentially('abc', { delay: 100 })` |
| `locator.press(key)` | Press single key or combo on a focused element. | `await locator.press('Enter')` |
| `locator.clear()` | Clear an input field. | `await locator.clear()` |
| `page.press(selector, key)` | Focus selector, then press key. | `await page.press('#name', 'Tab')` |

> `locator.type()` is **deprecated** → use `fill()` or `pressSequentially()`.

### Low-level (`page.keyboard`)

| Method | Description | Example |
|---|---|---|
| `keyboard.press(key, {delay})` | `down` + `up` for a key. Supports combos with `+`. | `await page.keyboard.press('Control+A')` |
| `keyboard.down(key)` | Hold a key down (does not release). | `await page.keyboard.down('Shift')` |
| `keyboard.up(key)` | Release a held key. | `await page.keyboard.up('Shift')` |
| `keyboard.type(text, {delay})` | Type text char-by-char. Does **not** honor modifiers held via `down()` for uppercase. | `await page.keyboard.type('Hello')` |
| `keyboard.insertText(text)` | Insert text directly, no `keydown`/`keyup` events (like paste/IME). | `await page.keyboard.insertText('😀')` |

### Key syntax

- **Single keys:** `A`, `a`, `1`, `Enter`, `Escape`, `Backspace`, `Delete`, `Tab`, `Space`, `ArrowLeft/Right/Up/Down`, `Home`, `End`, `PageUp`, `PageDown`, `F1`–`F12`.
- **Modifiers:** `Shift`, `Control`, `Alt`, `Meta` (Cmd on Mac).
- **Combos with `+`:** `Control+A`, `Shift+Q`, `Control+Shift+T`, `Meta+C`.

```ts
// Hold Shift while typing multiple keys
await page.keyboard.down('Shift');
await page.keyboard.press('A');
await page.keyboard.press('B');
await page.keyboard.up('Shift');   // types "AB"

// Select all + copy + paste
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Control+V');
```

---

## Mouse

### High-level (Locator)

| Method | Description | Example |
|---|---|---|
| `locator.click(opts)` | Click element (auto-waits). Opts: `button`, `clickCount`, `modifiers`, `position`, `force`, `delay`. | `await locator.click()` |
| `locator.dblclick(opts)` | Double-click. | `await locator.dblclick()` |
| `locator.hover(opts)` | Move mouse over element (triggers hover menus). | `await locator.hover()` |
| `locator.dragTo(target, opts)` | Drag this element onto target. | `await source.dragTo(target)` |
| `locator.tap()` | Touchscreen tap (needs `hasTouch: true`). | `await locator.tap()` |
| `locator.setChecked(bool)` / `check()` / `uncheck()` | Click checkbox/radio to desired state. | `await locator.check()` |
| `locator.selectOption(val)` | Select `<option>` in a `<select>`. | `await locator.selectOption('IN')` |

**Click options:**

```ts
await locator.click({ button: 'right' });                 // right-click / context menu
await locator.click({ clickCount: 2 });                   // double click
await locator.click({ modifiers: ['Control', 'Shift'] }); // ctrl+shift+click
await locator.click({ position: { x: 5, y: 10 } });       // click at offset within element
await locator.click({ force: true });                     // skip actionability checks
```

### Low-level (`page.mouse`) — coordinate based

| Method | Description | Example |
|---|---|---|
| `mouse.move(x, y, {steps})` | Move cursor to absolute coords. `steps` for smooth movement. | `await page.mouse.move(100, 200, { steps: 10 })` |
| `mouse.down({button})` | Press a mouse button. | `await page.mouse.down()` |
| `mouse.up({button})` | Release a mouse button. | `await page.mouse.up()` |
| `mouse.click(x, y, opts)` | Move + down + up at coords. | `await page.mouse.click(100, 200)` |
| `mouse.dblclick(x, y, opts)` | Double-click at coords. | `await page.mouse.dblclick(100, 200)` |
| `mouse.wheel(deltaX, deltaY)` | Scroll by pixel delta. | `await page.mouse.wheel(0, 500)` |

### Manual drag and drop (fine control)

```ts
const src = await page.locator('#drag').boundingBox();
const dst = await page.locator('#drop').boundingBox();

await page.mouse.move(src.x + src.width / 2, src.y + src.height / 2);
await page.mouse.down();
await page.mouse.move(dst.x + dst.width / 2, dst.y + dst.height / 2, { steps: 10 });
await page.mouse.up();
```

Simpler alternative:

```ts
await page.dragAndDrop('#drag', '#drop');
// or
await page.locator('#drag').dragTo(page.locator('#drop'));
```

---

## Touchscreen

| Method | Description |
|---|---|
| `page.touchscreen.tap(x, y)` | Tap at coordinates (requires `hasTouch: true` context). |
| `locator.tap()` | Tap element. |

---

## Quick guidance

- **Typing into a field** → `fill()`. Need per-key events → `pressSequentially()`.
- **Keyboard shortcut** → `locator.press('Control+S')` or `page.keyboard.press(...)`.
- **Hold a key across actions** → `keyboard.down()` / `keyboard.up()`.
- **Hover menu** → `locator.hover()`.
- **Right-click** → `locator.click({ button: 'right' })`.
- **Drag & drop** → `locator.dragTo()`; use `page.mouse.*` only when you need precise steps/coords.
- **Scroll** → `page.mouse.wheel(0, y)` or `locator.scrollIntoViewIfNeeded()`.
