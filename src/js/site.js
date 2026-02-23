(function () {
  function createHeader() {
    return `
      <nav class="site-nav">
        <a href="../home/HOME.html" data-route="home">Home</a>
        <a href="../about/ABOUT.html" data-route="about">About</a>
        <a href="../marketplace/MARKETPLACE.html" data-route="marketplace">Marketplace</a>
        <a href="../knowledge-library/KNOW-LIB.html" data-route="knowledge-library">Knowledge</a>
        <a href="../query/QUERY.html" data-route="query">Query</a>
        <a href="../contact/CONTACT.html" data-route="contact">Contact</a>
        <a href="../profile/PROFILE.html" data-route="profile">Profile</a>
      </nav>
    `;
  }

  function createFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div>© ${year} KrishiAI — All Rights Reserved</div>
        <div class="site-footer-links">
          <a href="../about/ABOUT.html">About</a>
          <a href="../contact/CONTACT.html">Contact</a>
        </div>
      </footer>
    `;
  }

  function highlightActiveLink() {
    try {
      const path = window.location.pathname.toLowerCase();
      document.querySelectorAll('.site-nav a').forEach((a) => {
        const href = a.getAttribute('href') || '';
        if (path.endsWith(href.toLowerCase()) || path.includes(href.toLowerCase())) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });
    } catch (e) {}
  }

  function insertSiteShell() {
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    if (headerEl) headerEl.innerHTML = createHeader();
    if (footerEl) footerEl.innerHTML = createFooter();
    highlightActiveLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertSiteShell);
  } else {
    insertSiteShell();
  }

  window.KrishiSite = {
    insertSiteShell,
  };
})();
