#### **1️⃣ `/src/components/Button.js` – Reusable Button Component**
```jsx
export default function Button({ children, onClick, className }) {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded-md ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
```
