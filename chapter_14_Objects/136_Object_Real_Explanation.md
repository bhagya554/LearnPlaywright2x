# 📘 Configuration: `retryCount`

```js
retryCount: parseInt(process.env.RETRY_COUNT || '3', 10)
```

## 🧠 Overview

This line sets the value of `retryCount` by reading an environment variable and converting it into a number. If the environment variable is not provided, it defaults to `3`.

---

## 🔍 Breakdown

### 1. `process.env.RETRY_COUNT`

- Retrieves the environment variable named `RETRY_COUNT`.
- Environment variables are always strings (or `undefined` if not set).

### 2. Fallback: `|| '3'`

- Provides a default value if `RETRY_COUNT` is not set or is falsy.

### 3. `parseInt(..., 10)`

- Converts the string value into an integer using base 10.

---

## ✅ Summary

Use `RETRY_COUNT` if available, otherwise default to `3`, and convert it to a number.
