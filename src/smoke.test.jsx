import { render, screen } from '@testing-library/react';
import App from './App';
import UseState from './hooks/UseState';
import UseCallback from './hooks/UseCallback';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';

/**
 * Smoke tests: every hook demo mounts without throwing, and every route
 * resolves to its demo through the router.
 *
 * Cheap insurance against React/router upgrades breaking a demo silently —
 * a build succeeds even when a component blows up at render time.
 */

test.each([
  ['UseState', UseState, 'UseState Hook'],
  ['UseCallback', UseCallback, 'UseCallback Hook'],
  ['UseRef', UseRef, 'useRef'],
  // UseMemo has no heading of its own; its parent value line is the marker.
  ['UseMemo', UseMemo, /^parent value:/],
])('%s mounts', (_name, Comp, marker) => {
  render(<Comp />);
  expect(screen.getByText(marker)).toBeInTheDocument();
});

// App owns its own BrowserRouter, so drive routing through window.history
// rather than wrapping it in a MemoryRouter (which would nest two routers).
test.each([
  ['/use-state', 'UseState Hook'],
  ['/use-callback', 'UseCallback Hook'],
  // 'useRef' also matches the nav link, so match the heading specifically.
  ['/use-ref', 'useRef'],
])('route %s renders its demo', (path, heading) => {
  window.history.pushState({}, '', path);
  render(<App />);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
});

test('route /use-memo renders its demo', () => {
  window.history.pushState({}, '', '/use-memo');
  render(<App />);
  expect(screen.getByText(/^parent value:/)).toBeInTheDocument();
});

test('route / renders the landing copy', () => {
  window.history.pushState({}, '', '/');
  render(<App />);
  expect(screen.getByText('Pick a hook from the menu.')).toBeInTheDocument();
});
