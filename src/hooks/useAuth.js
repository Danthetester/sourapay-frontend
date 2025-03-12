#### **7️⃣ `/src/hooks/useAuth.js` – Authentication Hook**
```js
import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  function login(email, password) {
    console.log("Logging in user", email);
    setUser({ email });
  }

  return { user, login };
}
```
