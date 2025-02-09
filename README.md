# Next.js 15 App Router: Missing Default Export

This repository demonstrates a subtle bug in Next.js 15's App Router related to missing default exports in page components.

## The Bug
In Next.js 15's App Router, each page component must have a default export.  Forgetting this export can lead to unexpected behavior, such as the page rendering incorrectly or throwing errors without clear indication of the problem.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the unexpected behavior.

## Solution
Ensure that each page component has a default export. This simple oversight can cause significant debugging challenges.

## Additional Notes
This bug highlights the importance of careful attention to detail when using the App Router in Next.js 15. The error messages related to this issue might be less descriptive than those for other common errors, making debugging more difficult.