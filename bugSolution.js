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
By adding the `export default` keyword before the `Home` function, the App Router correctly identifies and renders the page.  This fixes the unexpected behavior and ensures the page displays as intended.