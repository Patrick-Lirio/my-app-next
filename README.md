# My-App-Next.js

This is a Next.js application demonstrating various routing patterns, layout management, and error handling features.

## Features

This application showcases the following Next.js features:

- **Dynamic Routes**: Handles routes like `/products/[productId]` and `/products/[productId]/reviews/[reviewId]`.
- **Nested Dynamic Routes**: Demonstrates how to create routes with multiple dynamic segments.
- **Layouts**: Uses `layout.tsx` files to define shared UI for specific route segments (e.g., `products` layout).
- **Custom Not Found Pages**: Implements both a global `not-found.tsx` and a specific `not-found.tsx` for review pages (`products/[productId]/reviews/[reviewId]/not-found.tsx`) to provide tailored error messages.
- **Route Groups**: Organizes authentication-related routes (`login`, `register`, `forgot-password`) under an `(auth)` route group, which doesn't affect the URL path.
- **Private Routes**: Demonstrates how to create "private" folders (e.g., `_lib`, `%5flib`) that are not directly accessible via URL.
- **Basic Component Structure**: Includes simple components like `LineChart` within a dashboard.

## Getting Started

Follow these steps to get your project up and running locally.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

- Node.js (v18.x or later recommended)
- npm (v8.x or later recommended)

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd my-app-next
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

Open http://localhost:3000 in your browser to see the application.

## Available Routes

Here's a list of some key routes in the application:

- `/`: Welcome Home page.
- `/products`: Lists products.
- `/products/1`: Details about product 1. (Try `/products/6` to see a not-found page)
- `/products/1/reviews/1`: Review 1 for product 1. (Try `/products/1/reviews/6` to see a custom review not-found page)
- `/dashboard`: A dashboard page with a line chart.
- `/login`: Login page (part of the `(auth)` route group).
- `/register`: Register page (part of the `(auth)` route group).
- `/forgot-password`: Forgot Password page (part of the `(auth)` route group).

## Project Structure

The core application logic resides in the `src/app` directory, following Next.js's App Router conventions:

```
src/app/
├── (auth)/                 # Route group for authentication pages
│   ├── forgot-password/page.tsx
│   ├── login/page.tsx
│   └── register/page.tsx
├── _lib/page.tsx           # Example of a private route (not accessible via URL)
├── %5flib/page.tsx         # Another example of a private route
├── dashboard/
│   ├── line-chart.tsx      # A simple component
│   └── page.tsx            # Dashboard page
├── products/
│   ├── [productId]/
│   │   ├── reviews/
│   │   │   ├── [reviewId]/
│   │   │   │   ├── not-found.tsx # Custom not-found for reviews
│   │   │   │   └── page.tsx      # Nested dynamic review page
│   │   │   └── page.tsx          # Reviews list (not explicitly defined, but implied)
│   │   ├── layout.tsx            # Layout for product details
│   │   └── page.tsx              # Dynamic product details page
│   └── page.tsx                  # Products list page
├── layout.tsx              # Root layout for the entire application
├── not-found.tsx           # Global not-found page
└── page.tsx                # Home page
```

```

```
