// Simple localStorage-backed auth stubs for demo purposes
(function () {
  const USERS_KEY = 'krishi_users_v1';
  const SESSION_KEY = 'krishi_session_v1';

  function loadUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {}
  }

  function registerUser(user) {
    const users = loadUsers();
    if (!user || !user.mobile) return { success: false, message: 'Invalid user data' };
    if (users[user.mobile]) return { success: false, message: 'Mobile already registered' };
    users[user.mobile] = Object.assign({}, user, { createdAt: Date.now() });
    saveUsers(users);
    return { success: true };
  }

  function loginWithOTP(mobile, otp) {
    // For demo: accept OTP '123456' or always succeed if user exists
    const users = loadUsers();
    if (!mobile) return { success: false, message: 'Missing mobile' };
    if (!users[mobile]) return { success: false, message: 'Mobile not registered' };
    if (otp === '123456') {
      const token = Math.random().toString(36).slice(2);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ mobile, token, ts: Date.now() }));
      return { success: true, token };
    }
    return { success: false, message: 'Invalid OTP' };
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function getSession() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY));
    } catch (e) {
      return null;
    }
  }

  function isLoggedIn() {
    return getSession() !== null;
  }

  function requireLogin() {
    if (!isLoggedIn()) {
      window.location.href = '../../pages/login/LOGIN.html';
    }
  }

  window.KrishiAuth = { registerUser, loginWithOTP, logout, getSession, isLoggedIn, requireLogin };
})();
