import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a nav link for each hook demo', () => {
  render(<App />);

  for (const name of ['useState', 'useCallback', 'useMemo', 'useRef']) {
    expect(screen.getByRole('link', { name })).toBeInTheDocument();
  }
});
