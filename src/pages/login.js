#### **4️⃣ `/src/pages/login.js` – Login Page**
```jsx
import { useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login clicked");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-md w-96">
        <h2 className="text-xl font-bold text-center text-blue-600">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="mt-4 w-full p-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full p-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-4 w-full" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
```
