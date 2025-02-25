# E-Commerce UI with Search, Modal & Cart

## Overview
This is a simple responsive e-commerce front-end built with React, TypeScript, and Vite. The application uses the FakeStore API to fetch and display products, allowing users to search by category, view product details in a modal, and add items to a cart (local state only). The design is fully responsive across desktop, laptop, and mobile devices.

## Features
- **Header Navigation**
  - Store title
  - Search box for product categories
  - Cart icon with item count
- **Search & Category Filtering**
  - Fetches categories from the API
  - Displays products based on searched category
- **Product Listing**
  - Displays all products by default
  - Shows image, title, and price
  - Clicking a product opens a modal
- **Product Modal**
  - Displays detailed product information
  - "Add to Cart" button increments cart count
  - Modal can be closed
- **Cart Functionality**
  - Uses local state to track cart count
  - No backend API calls for cart management
- **Responsive Design**
  - Optimized for mobile, tablet, and desktop views

## Tech Stack
- **Frontend:** React, TypeScript, Vite
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Styling:** Tailwind CSS (or CSS Modules, if preferred)
- **API:** FakeStore API (`https://fakestoreapi.com`)

## API Endpoints Used
- Get all categories: `GET https://fakestoreapi.com/products/categories`
- Get products by category: `GET https://fakestoreapi.com/products/category/{categoryName}`
- Get all products: `GET https://fakestoreapi.com/products`
- Get a single product: `GET https://fakestoreapi.com/products/{Id}`

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/aman0603/E-commerce.git
   cd E-commerce
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173` (or as specified in the terminal output).

## Folder Structure
```
E-comm/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
|   |   ├── Category.tsx
│   ├── api/
│   │   ├── index.ts ( API calls)
│   ├── types/
│   │   ├── cart.ts
│   │   ├── search.ts
│   ├── store/
│   │   ├── index.ts 
│   ├── App.tsx
│   ├── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Design Decisions
- Used **TypeScript** for better type safety.
- Used **React Hooks** (`useState`, `useEffect`) for managing state and API calls.
- Used **Tailwind CSS** for styling to ensure a clean and responsive UI.
- Created reusable components (`ProductCard`, `ProductModal`, etc.) to improve code structure and maintainability.
- Used `localStorage` (if implemented) for cart persistence across page reloads.

## Challenges & Future Improvements
### Challenges
- Managing API responses efficiently and handling loading states.
- Ensuring smooth responsiveness across all devices.
- Improving accessibility (ARIA attributes for screen readers).

### Future Improvements
- Implement a global state management solution (e.g., Redux Toolkit, Zustand).
- Add proper error handling for API calls.
- Implement a full-fledged shopping cart with item removal and quantity adjustment.
- Improve UI with animations and better user experience.

## Author
Developed by **Aman Paswan**. If you have any questions, feel free to reach out!

