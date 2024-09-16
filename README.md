# React App - Single-SPA Microfrontend

This repository contains a **React** microfrontend that is part of a **Single-SPA** architecture. The app communicates with another React microfrontend using **RxJS**.

## Project Overview

This React application is registered as a microfrontend in the **single-spa** root config. It handles its own lifecycle and communicates with other microfrontends using **RxJS** for event-based communication.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (>=18.x.x)
- npm (comes with Node.js)

## Getting Started

### 1. Install Dependencies

In the root directory of the React app, install the dependencies:

```bash
npm install
```

### 2. Running the React App

To start the React app locally:

```bash
npm start
```
The app will run on http://localhost:8080.

```bash
npm start2
```
The app will run on http://localhost:8081.

### 3. RxJS Communication

This app uses RxJS to communicate with another microfrontend. Here's a simple example of sending a message using an RxJS subject:
```typescript
import { eventBus, MessageEvent } from "./event-bus";

export default function App({ name, target }: Props) {
  ...
  const handleClick = () => {
    eventBus.next({
      sender: name,
      receiver: target,
      message: `Hello from ${name} ${new Date().toString()}`,
    });
  };

  useEffect(() => {
    const subscription = eventBus.subscribe(
      ({ sender, receiver, message }: MessageEvent) => {
        if (receiver == name) {
          setMessages((messages) => [...messages, message]);
        }
      }
    );

    // Clean up subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  ...
}
```

## Folder Structure

```bash
react-app/
  ├── src/
  │   ├── App.tsx                  # Main React component
  │   └── event-bus.ts             # RxJS communication logic
  │   └── patrick-react-app.tsx    # Entry file configuring lifecycle functions integrating with Single-SPA
  └── package.json                 # Project metadata and scripts
```

## Available Scripts
In the project directory, you can run the following npm scripts:

`npm start`: Runs the app in development mode.
`npm run build`: Builds the app for production.
`npm run lint`: Lints the project using ESLint.
`npm run format`: Formats the code using Prettier

## License
This project is licensed under the MIT License - see the LICENSE file for details.

