const API_BASE_URL = process.env.REACT_APP_API_URL || '';

/**
 * Makes an authenticated API call with token and username in the URL path.
 * @param {string} route - The route after the username segment, e.g. '/dashboard'
 * @param {object} options - Fetch options like method, headers, body, etc.
 * @returns {Promise<Response>} - The fetch response promise.
 */
export async function authenticatedApiCall(route, options = {}) {
  const token = localStorage.getItem('authToken');
  const username = localStorage.getItem('username');

  if (!token) {
    throw new Error('No auth token found. Please login.');
  }
  if (!username) {
    throw new Error('No username found. Please login.');
  }

  // Construct URL with username preceded by other routes if needed
  // For example, if route is '/dashboard', URL becomes /user/{username}/dashboard
  const url = `${API_BASE_URL}/user/${encodeURIComponent(username)}${route}`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...(options.headers || {}),
  };

  const fetchOptions = {
    ...options,
    headers,
  };

  return fetch(url, fetchOptions);
}
