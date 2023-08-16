# React Enterprise Boilerplate

React template inspired by [Blazity/next-enterprise](https://github.com/Blazity/next-enterprise)

## 🙋‍♂️ Why build this boilerplate?

When we developing an admin dashboard, Next.js is usually not needed. So I built this boilerplate based on [Blazity/next-enterprise](https://github.com/Blazity/next-enterprise).

## 🚀 Features

- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development
- 🌠 **[Shadcn UI](https://ui.shadcn.com/)** - Beautifully designed components that you can copy and paste into your apps.
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code
- 🛠️ **[Extremely strict TypeScript](https://www.typescriptlang.org/)** - With [`ts-reset`](https://github.com/total-typescript/ts-reset) library for ultimate type safety
- 🧪 **[Vitest](https://vitest.dev/)** and **[React Testing Library](https://testing-library.com/react)** - For rock-solid unit and integration tests
- 🎭 **[Playwright](https://playwright.dev/)** - Write end-to-end tests like a pro
- 📕 **[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components
- 🎯 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - No more spaghetti imports
- 💎 **[CVA](http://cva.style/)** - Create a consistent, reusable, and atomic design system
- 📈 **Components coupling and cohesion graph** - A tool for managing component
- 💯 **Perfect Lighthouse score** - Because performance mattersrelationships
- ☁️  **Docker** - Production-ready Dockerfile included
- 🚢 **[Semantic Release](https://github.com/semantic-release/semantic-release)** - for automatic changelog

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```shell
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/<your_username)/react-enterprise-boilerplate.git
```

2. Install the dependencies:

```shell
pnpm i
```

3. Run the development server:

```shell
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173/) with your browser to see the result.

## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `preview`: Starts the production preview server
- `lint`: Lints the code using ESLint
- `storybook`: Starts the Storybook server
- `build-storybook`: Builds the Storybook for deployment
- `test`: Runs unit and integration tests
- `format`: Formats the code with Prettier
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with Yarn
- `coupling-graph`: **Generates a coupling and cohesion graph for the components**

## 🔗 Coupling Graph

The `coupling-graph` script is a useful tool that helps visualize the coupling and connections between your project's internal modules. It's built using the [Madge](https://github.com/pahen/madge) library. To generate the graph, simply run the following command:

```shell
pnpm coupling-graph
```

This will create a `graph.svg` file, which contains a graphical representation of the connections between your components. You can open the file with any SVG-compatible viewer.

## 🧪 Testing

This boilerplate comes with various testing setups to ensure your application's reliability and robustness.

### Running Tests

- **Unit and integration tests**: Run Jest tests using `pnpm test`

## 🎨 Styling and Design System

This boilerplate uses Tailwind CSS for styling and CVA for creating a powerful, easy-to-use design system. If you want to learn more about the setup, check out this fantastic video by Vercel:

[![Styling and Design System](https://camo.githubusercontent.com/a8d082457ab17a66d7d0cc408c92d012ca380f1fd186728ee90df8e3f7aa449c/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f542d5a763733795a5f51492f302e6a7067)](https://www.youtube.com/watch?v=T-Zv73yZ_QI&ab_channel=Vercel)

### CVA - A New Approach to Variants

While CSS-in-TS libraries such as [Stitches](https://stitches.dev/) and [Vanilla Extract](https://vanilla-extract.style/) are great for building type-safe UI components, they might not be the perfect fit for everyone. You may prefer more control over your stylesheets, need to use a framework like Tailwind CSS, or simply enjoy writing your own CSS.

Creating variants using traditional CSS can be a tedious task, requiring you to manually match classes to props and add types. CVA is here to take that pain away, allowing you to focus on the enjoyable aspects of UI development. By providing an easy and type-safe way to create variants, CVA simplifies the process and helps you create powerful design systems without compromising on the flexibility and control of CSS.

## 💾 State Management

While this boilerplate doesn't include a specific state management library, we believe it's essential for you to choose the one that best suits your project's needs. Here are some libraries we recommend for state management:

### Zustand

[Zustand](https://github.com/pmndrs/zustand) is a small, fast, and scalable state management library. It's designed to be simple and intuitive, making it a great choice for small to medium-sized projects. It's also optimized for bundle size, ensuring minimal impact on your app's performance.

### Jotai

[Jotai](https://github.com/pmndrs/jotai) is an atom-based state management library for React that focuses on providing a minimal and straightforward API. Its atom-based approach allows you to manage your state in a granular way while still being highly optimized for bundle size.

### Recoil

[Recoil](https://recoiljs.org/) is a state management library developed by Facebook, specifically designed for React applications. By utilizing atoms and selectors, Recoil allows you to efficiently manage state and derived state. Its key benefit is the ability to update components only when the state they're subscribed to changes, reducing unnecessary re-renders and keeping your application fast and efficient. Recoil also offers great developer experience with built-in debugging tools.

Choose the library that best fits your requirements and project structure to ensure an efficient state management solution for your application.
