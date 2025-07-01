# Own SVG Icons

<p align="left">
<strong>
A professional, flexible, and type-safe icon component system for React and Next.js projects, built with Tailwind CSS for easy styling.
</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/own-svg-icons" target="_blank">
    <img src="https://img.shields.io/npm/v/own-svg-icons?style=for-the-badge&logo=npm&logoColor=white&color=indigo" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/own-svg-icons" target="_blank">
    <img src="https://img.shields.io/npm/dm/own-svg-icons?style=for-the-badge&logo=npm&logoColor=white&color=teal" alt="NPM Downloads">
  </a>
  <a href="https://github.com/DevRGD/own-svg-icons/actions" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/DevRGD/own-svg-icons/main.yml?branch=main&style=for-the-badge&logo=github&logoColor=white&color=indigo" alt="Build Status">
  </a>
  <a href="LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/own-svg-icons?style=for-the-badge&logo=files&logoColor=white&color=teal" alt="License">
  </a>
</p>

---

## 🤔 Why `own-svg-icons`?

This isn't just another icon library. It's a **headless component system** designed for developers who value control, consistency, and performance. The core principle is that styling should be fully managed by utility classes, providing a seamless experience with Tailwind CSS.

- ✅ **Truly Headless Styling**: A single `className` prop intelligently styles both the container and the SVG icon itself.
- 🚀 **Optimized Package Size**: The library is structured for tree-shaking. You only import the icons you use, which keeps your final application bundle small and fast.
- ✨ **Flexible & Composable**: Includes standard SVG icons and special components like `Alphabet` for dynamic text-based icons.
- 🔧 **Fully Customizable**: Easily add your own SVG icons or remove unused ones to keep the library perfectly tailored to your project's needs.
- 🔒 **Zero Dependencies**: Lightweight with no external runtime dependencies.

---

## 🚀 Installation

```bash
npm install own-svg-icons
```

---

## 💡 Usage

### 1. Import and Use Icons

Import any icon component and use it directly in your React/Next.js application.

```tsx
import { GitHub, Terminal, Alphabet } from 'own-svg-icons';

function MyComponent() {
  return (
    <div className="flex items-center space-x-4">
      <GitHub className="h-10 w-10 text-gray-800" />
      <Terminal className="h-10 w-10 text-blue-500" />
      <Alphabet
        letter="A"
        className="h-10 w-10 rounded-full bg-red-500 text-white"
      />
    </div>
  );
}
```

### 2. The Styling System

The power of this library comes from its intelligent class parser. You pass all your Tailwind CSS classes to a single `className` prop, and the component does the rest.

**🏷️ How it Works**

The `className` prop is split internally:

- **Size, layout, and background classes** (`h-10`, `w-10`, `bg-red-500`) are applied to the outer `<span>` wrapper.
- **Text and font color classes** (`text-blue-500`, `text-white`) are applied directly to the inner `<svg>` or text element.

This allows for intuitive and powerful styling with minimal code.

**🏷️ Example: Sizing and Coloring**

```tsx
<Home className="h-12 w-12 text-green-500" />
```

---

## 🔧 Customizing the Library

This library is designed to be your own. You can easily add or remove icons to fit your project's specific needs.

### How to Add a New Icon

1. **Add the SVG Component**: Create a new `.tsx` file in `src/icons/` (e.g., `src/icons/MyIcon.tsx`).
2. **Use the Wrapper**:

   ```tsx
   import React from 'react';
   import { IconWrapper } from '../lib/IconWrapper';

   export function MyIcon({ className }: { className?: string }) {
     return (
       <IconWrapper className={className}>
         <path d="..." /> {/* Paste your SVG <path> elements here */}
       </IconWrapper>
     );
   }
   ```

3. **Export the Icon**: In `src/index.ts`, add:

   ```ts
   export * from './icons/MyIcon';
   ```

4. **Rebuild the Library**:

   ```bash
   npm run build
   ```

### How to Remove Unused Icons

Delete the icon files from `src/icons/` and remove their exports from `src/index.ts`. Then run:

```bash
npm run build
```

---

## 📚 API Reference & Available Icons

### Components

- `<GitHub />`
- `<Home />`
- `<Icon />` (a generic icon)
- `<Layer />`
- `<Settings />`
- `<Terminal />`
- `<User />`

### Special Components

#### `<Alphabet letter={string} />`

Renders the provided `letter` inside a container using the same styling logic as the SVG icons.

### Props

| Prop        | Type     | Required | Description                                   |
| ----------- | -------- | -------- | --------------------------------------------- |
| `className` | `string` | No       | Tailwind utility classes to style the icon.   |
| `letter`    | `string` | Yes      | **(Alphabet only)** The character to display. |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Clone

```bash
git clone https://github.com/DevRGD/own-svg-icons.git
cd own-svg-icons
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npm test
```

### 4. Lint and format before pushing

```bash
npm run lint
npm run format
```

### 5. Build for publishing

```bash
npm run build
```

Then push your feature branch and open a PR.

---

## 📜 License

MIT © [DevRGD](https://github.com/DevRGD). See the [LICENSE](LICENSE) file.
