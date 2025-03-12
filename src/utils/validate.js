#### **2️⃣ `/src/utils/validate.js` – Form Validation Logic**
```js
export function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  return password.length >= 6;
}
```
