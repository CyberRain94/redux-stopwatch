---

# Redux Stopwatch 🏃‍♂️🕒

A **stopwatch application** built with **React**, **Redux Toolkit (RTK)**, and **TypeScript**. Demonstrates **global state management**, **time-based updates**, and **drag-and-drop UI** using modern React patterns.

<img src="https://github.com/user-attachments/assets/2b2fe028-974043a5-be69-4c80a1a49c80" alt="Stopwatch Preview" width="3840" height="2160" />

---

## 🚀 Features

- **Start/Pause/Reset** functionality.
- **Elapsed Time** formatted as `HH:MM:SS`.
- **Drag-and-Drop UI** for interactive elements.
- **TypeScript** for type-safe Redux state and actions.
- **Immutable State Updates** with Redux Toolkit’s Immer.
- **Redux DevTools** support for debugging.
- **Clean Architecture** with feature-based slices.

---

## 🛠 Technologies & Tools

| Tool/Library          | Purpose                                  | Documentation |
|------------------------|------------------------------------------|---------------|
| **React**             | UI Framework                            | [react.dev](https://react.dev/) |
| **Redux Toolkit**     | State Management                        | [redux-toolkit.js.org](https://redux-toolkit.js.org/) |
| **TypeScript**        | Type Safety                              | [typescriptlang.org](https://www.typescriptlang.org/) |
| **react-draggable**   | Drag-and-Drop UI                        | [github.com/react-grid-layout](https://github.com/react-grid-layout/react-draggable) |
| **Vite**              | Build Tool (if migrated)                | [vitejs.dev](https://vitejs.dev/) |

---

## 📦 Project Structure

```
redux-stopwatch/
├── public/                  # Static assets
├── src/
│   ├── Components/          # Reusable UI Components
│   │   ├── Draggableicon.jsx
│   │   └── Draggableicon.css
│   │
│   ├── app/                 # Redux Setup
│   │   ├── hooks.ts         # Typed `useAppDispatch` and `useAppSelector`
│   │   └── store.ts         # Redux store configuration
│   │
│   ├── features/            # Feature-based Redux Slices
│   │   └── counter/         # Stopwatch logic
│   │       ├── stopwatchSlice.ts  # Redux slice (actions + reducers)
│   │       ├── Stopwatch.tsx        # React component
│   │       └── Stopwatch.module.css # CSS for Stopwatch
│   │
│   ├── App.css              # Global styles
│   ├── App.test.tsx         # Tests
│   ├── App.tsx              # Root component (Redux Provider)
│   ├── index.css            # Global CSS reset
│   ├── index.tsx            # Entry point
│   └── react-app-env.d.ts   # TypeScript declarations
│
├── .gitignore
├── Dockerfile               # Docker configuration
├── docker-compose.yml      # Docker setup (optional)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript config
├── README.md               # This file!
└── LICENSE
```

---

## 🏗 Getting Started

### Prerequisites

- **Node.js** (v18+) and **npm/yarn/pnpm**.
- **Redux DevTools** (recommended for debugging).
  Install the browser extension: [https://redux-devtools.github.io/](https://redux-devtools.github.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CyberRain94/redux-stopwatch.git
   cd redux-stopwatch
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the app**:
   ```bash
   npm start
   # or
   yarn start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 How It Works

### Redux Toolkit Architecture

This project follows **Redux Toolkit best practices**:

1. **Store Setup** (`app/store.ts`):
   - Uses `configureStore` to simplify store configuration.
   - Auto-includes Redux DevTools and thunk middleware.
   ```ts
   import { configureStore } from '@reduxjs/toolkit';
   import stopwatchReducer from '../features/counter/stopwatchSlice';

   export const store = configureStore({
     reducer: {
       stopwatch: stopwatchReducer,
     },
   });
   ```

2. **Feature Slices** (`features/counter/stopwatchSlice.ts`):
   - Defines **actions**, **reducers**, and **state** in one file using `createSlice`.
   - Uses **Immer** for immutable updates:
     ```ts
     tick: (state) => { state.elapsedTime += 1; }, // Safe mutation!
     ```
   - Auto-generates action creators:
     ```ts
     export const { start, stop, reset, tick } = stopwatchSlice.actions;
     ```

3. **React Component** (`features/counter/Stopwatch.tsx`):
   - Uses `useAppSelector` to access Redux state.
   - Uses `useAppDispatch` to dispatch actions.
   - **Side Effect** (`useEffect`) manages the `setInterval` for the stopwatch tick.

### Key Features in Code

- **Time Formatting**:
  Converts seconds to `HH:MM:SS`:
  ```ts
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes}:${secs}`;
  };
  ```

- **Drag-and-Drop UI**:
  Uses `react-draggable` to make the stopwatch movable:
  ```tsx
  import { Draggable } from 'react-draggable';

  <Draggable>
    <div className="draggable-stopwatch">
      <Stopwatch />
    </div>
  </Draggable>
  ```

---

## 🔧 Running Tests

Unit tests are included for critical components:
```bash
npm test
# or
yarn test
```

Key test files:
- `App.test.tsx`: Tests the root component.
- **Consider adding**: `stopwatchSlice.test.ts` (mock reducers).

---

## 🌊 Docker Support (Optional)

This project includes **Docker configuration** for containerized deployment.

1. Build the Docker image:
   ```bash
   docker-compose build
   ```

2. Run the container:
   ```bash
   docker-compose up
   ```

3. Access the app at: [http://localhost:3000](http://localhost:3000)

---

## 🔄 Roadmap

- [ ] **Add RTK Query**: For data fetching (e.g., syncing with a backend).
- [ ] **Local Storage**: Persist stopwatch state between sessions.
- [ ] **Lap Tracking**: Add functionality to record intermediate times.
- [ ] **Dark Mode**: Enhance theming with CSS variables.

---

## 📚 Useful Links

- **Redux Toolkit Documentation**: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- **React Documentation**: [https://react.dev/](https://react.dev/)
- **Redux DevTools**: [https://redux-devtools.github.io/](https://redux-devtools.github.io/)
- **RTK Query (Optional)**: [https://redux-toolkit.js.org/rtk-query/overview](https://redux-toolkit.js.org/rtk-query/overview)

---

## 💡 Why Redux Toolkit?

From the [official Redux Toolkit docs](https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today):

> **"We want all Redux users to write their Redux code with Redux Toolkit, because it simplifies your code and eliminates many common Redux mistakes and bugs!"**

### Benefits in This Project:
✅ **Reduced Boilerplate**: No manual `switch` statements or action type strings.
✅ **Immutable Updates**: Immer simplifies state management.
✅ **Type Safety**: TypeScript integration for actions, state, and hooks.
✅ **Debugging**: Redux DevTools auto-included.

---

## 🎯 Motivation

This project serves as:
- A **learning resource** for Redux Toolkit + TypeScript.
- A **demo** of drag-and-drop UIs with React.
- A **template** for feature-based Redux applications.

---

## 👨‍💻 Contributing

Contributions are welcome! Please open an issue or submit a pull request for:
- Bug fixes.
- Feature requests.
- Improved documentation.

---

## 📜 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## ❓ FAQ

### How do I add a new feature?
1. Create a new **slice** in `features/{featureName}` (e.g., `features/laps`).
2. Update the store to include the new reducer:
   ```ts
   reducer: {
     stopwatch: stopwatchReducer,
     laps: lapsReducer,
   },
   ```

### How does the stopwatch tick work?
- The `useEffect` in `Stopwatch.tsx` sets up a `setInterval` to dispatch `tick()` every second when `isRunning` is `true`.
- The interval is cleaned up on component unmount to prevent memory leaks.

### Can I integrate with a backend?
Yes! Use **RTK Query** (not included here) to fetch/sync data. Example:
```ts
const api = createApi({ baseQuery: fetchBaseQuery({ baseUrl: '/' }) });
```
