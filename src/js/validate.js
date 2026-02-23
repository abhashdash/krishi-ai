// Shared client-side validation helpers for KrishiAI
const KrishiValidate = (function() {
  function isMobile(mobile) {
    return /^[6-9]\d{9}$/.test(String(mobile).trim());
  }

  function isOTP(otp) {
    return /^\d{6}$/.test(String(otp).trim());
  }

  function isName(name) {
    return String(name || '').trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
  }

  function isPIN(pin) {
    if (!pin) return true;
    return /^\d{4}$/.test(String(pin).trim());
  }

  return { isMobile, isOTP, isName, isPIN };
})();

window.KrishiValidate = KrishiValidate;
