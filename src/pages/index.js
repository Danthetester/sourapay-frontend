#### **3️⃣ `/src/pages/index.js` – Home Page**
```jsx
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to SouraPay</h1>
      <p className="text-center text-gray-600">Fast, secure, and low-cost remittances.</p>
      <div className="mt-6 flex justify-center">
        <Button>Get Started</Button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Fast Transfers" description="Send money instantly using RippleNet." />
        <Card title="Lowest Fees" description="No hidden charges, fully transparent pricing." />
        <Card title="Secure & Compliant" description="Fully regulated by SAMA & SBP." />
      </div>
    </div>
  );
}
```
