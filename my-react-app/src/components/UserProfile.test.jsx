import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import UserProfile from './UserProfile';

global.fetch = vi.fn();

describe('UserProfile', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('shows loading state', () => {
    global.fetch.mockImplementation(() => new Promise(() => {}));

    render(<UserProfile />);

    expect(screen.getByText(/loading user/i)).toBeInTheDocument();
  });

  test('renders user data after success', async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        name: 'John Doe',
        email: 'john@test.com',
      }),
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@test.com')).toBeInTheDocument();
    });
  });

  test('shows error message on failed request', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});