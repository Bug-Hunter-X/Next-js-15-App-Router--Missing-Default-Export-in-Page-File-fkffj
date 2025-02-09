```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
```
This code looks simple and should work without issues, but in Next.js 15 with App Router, you might encounter unexpected behavior if you forget to export a default function or component in your page file.