# Cast On Factory - Frontend Guide

This project is built with **Next.js 15+** and **Tailwind CSS v4**.

## For Vanilla CSS Developers

If you are used to writing raw CSS files, Tailwind might feel different. Instead of writing separate `.css` files, you write utility classes directly in your HTML/JSX.

### Key Concepts

1.  **Utility First**:
    Instead of:

    ```css
    /* style.css */
    .btn {
      background-color: #ff5e00;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
    }
    ```

    You write:

    ```jsx
    <button className="bg-primary text-white p-4 rounded-lg">Click me</button>
    ```

2.  **Colors**:
    We have defined custom brand colors in `app/globals.css`.
    - `bg-primary` = Vibrant Orange (#ff5e00)
    - `text-foreground` = Black/Dark Gray (#191919)
    - `bg-background` = Off-White (#f9f9f9)

3.  **Layout**:
    - Flexbox: `display: flex` -> `flex`
    - Grid: `display: grid` -> `grid`
    - Spacing: `margin: 1rem` -> `m-4` (1 unit = 0.25rem)

### Why this approach?

- **Speed**: You don't have to switch between files.
- **Consistency**: You are forced to use the spacing and color scales defined in the system.
- **Smaller Bundle**: Tailwind removes unused styles automatically.

### Where to define strict rules?

If you really need raw CSS, you can still write it in `app/globals.css` inside the `@layer utilities` or just standard CSS blocks, but try to use utility classes first!

## Getting Started

1. Run `npm run dev` to start the server on port 3001.
2. Edit `app/page.tsx` to see changes.
3. Access the app at `http://localhost:3001`
