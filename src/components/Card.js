#### **2️⃣ `/src/components/Card.js` – UI Card Component**
```jsx
export default function Card({ title, description }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
```
