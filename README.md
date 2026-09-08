STARTING ONE MORE PROJECT I'M NOT GOING TO FINISH!! WOOHOOO!!

A sandbox for playing with React hooks. React 19 on Vite.

# Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Dev server with hot reload, on http://localhost:5173 |
| `yarn build` | Production bundle into `dist/` |
| `yarn preview` | Serve the built `dist/` locally |
| `yarn test` | Vitest in watch mode (`yarn vitest run` for a single pass) |
| `yarn lint` | ESLint, including the `react-hooks` rules |

Note: the app is deliberately **not** wrapped in `<StrictMode>` — it double-invokes
effects, which would double the render counter in the `useRef` demo and the API-call
log in the `useMemo` demo. Those exact numbers are the point of the examples.

# References
- [React Hooks Reference](https://react.dev/reference/react/hooks)
- [Tyler McGinnis - Why React Hooks](https://tylermcginnis.com/why-react-hooks/)
- [React Today and Tomorrow and 90% Cleaner React With Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM)
- [Ben Awad - React Hooks](https://www.youtube.com/watch?v=f687hBjwFcM&t=4945s)
- [Ohans Emmanuel - solutions to common problems](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
- [Awesome React - Performance](https://github.com/enaqx/awesome-react#react-performance)
- https://usehooks.com/
