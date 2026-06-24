# Default vs Named Export / Import

## Default Export / Import

**Export (logger.js):**
```js
export default function log(message) { ... }
```

- A module can have **only one** `export default`.
- The exported name inside the file (`log`) does **not** have to match the import name.

**Import (170_Logger.js):**
```js
import logger from '../logger.js'
```
- No curly braces `{}`.
- You can assign **any name** when importing. Here `logger` is used instead of `log`.
- Default imports are typically used when a module exports a single primary thing.

---

## Named Export / Import

**Export (utils.js):**
```js
export let BASE_URL = "https://api.staging.com";
export function formatTestName(name) { ... }
```

- A module can have **multiple** named exports.
- The name used in the export **must** be used in the import (or aliased with `as`).

**Import (168_Export_Import.js):**
```js
import { BASE_URL, formatTestName } from "../utils.js";
```
- Uses curly braces `{}`.
- Names must match exactly.

**Aliased Import (169_Utils.js):**
```js
import { BASE_URL as var_utils, formatTestName } from "../utils.js";
import { BASE_URL as var_testutils, formatUpperCaseString } from "../testutils.js";
```
- Use `as` to rename when the same name exists in multiple modules.

---

## Combining Both in One Import

**170_Logger.js:**
```js
import logger, { log2 } from '../logger.js';
```
- `logger` → the default export (no `{}`)
- `{ log2 }` → a named export (inside `{}`)

---

## Key Differences

| Aspect | Default | Named |
|--------|---------|-------|
| Curly braces on import | No `{}` | Yes `{}` |
| Count per module | Only **one** | **Many** |
| Import name must match export | ❌ No (any name allowed) | ✅ Yes (or use `as`) |
| Typical use | Single main export | Utility helpers, constants |

---

## Reference

| File | Pattern |
|------|---------|
| `logger.js` | `export default function` + `export function` |
| `utils.js` | Named exports only |
| `testutils.js` | Named exports only |
| `168_Export_Import.js` | Named import |
| `169_Utils.js` | Named import with aliasing (`as`) |
| `170_Logger.js` | Combined default + named import |
