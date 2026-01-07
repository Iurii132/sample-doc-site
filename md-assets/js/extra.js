
/* js/extra.js — sample enhancements for MkDocs Material */
(function () {
  // Helper: show a lightweight toast using Material's palette CSS vars
  function showToast(message, timeout = 2500) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.left = '50%';
    toast.style.bottom = '1.25rem';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'var(--md-accent-fg-color)';
    toast.style.color = 'var(--md-primary-bg-color)';
    toast.style.padding = '0.6rem 0.9rem';
    toast.style.borderRadius = '0.4rem';
    toast.style.boxShadow = '0 4px 12px rgba(0,0,0,.2)';
    toast.style.font = 'var(--md-text-font, inherit)';
    toast.style.zIndex = 9999;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), timeout);
  }

  // 1) Notify when theme is toggled (light/dark)
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      const scheme = root.getAttribute('data-md-color-scheme') || 'default';
      const msg = scheme === 'slate' ? 'Dark mode enabled' : 'Light mode enabled';
      showToast(msg, 1500);
    });
    observer.observe(root, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
  });

  // 2) Add copy buttons to code blocks (fallback if plugin not enabled)
  function enhanceCodeBlocks() {
    document.querySelectorAll('pre > code').forEach(code => {
      const pre = code.parentElement;
      if (pre.querySelector('.extra-copy-btn')) return; // avoid duplicates
      const btn = document.createElement('button');
      btn.className = 'extra-copy-btn';
      btn.type = 'button';
      btn.title = 'Copy';
      btn.innerHTML = 'Copy';
      btn.addEventListener('click', () => {
        const text = code.innerText;
        navigator.clipboard.writeText(text).then(() => showToast('Code copied')); 
      });
      const wrapper = document.createElement('div');
      wrapper.className = 'extra-code-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(btn);
    });
  }

  // 3) Smooth-scroll for internal anchor links
  function enhanceAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // optional highlight
          target.classList.add('extra-anchor-highlight');
          setTimeout(() => target.classList.remove('extra-anchor-highlight'), 1200);
        }
      });
    });
  }

  // Run after navigation changes (Material swaps content on client-side)
  document.addEventListener('DOMContentLoaded', () => {
    const init = () => { enhanceCodeBlocks(); enhanceAnchors(); };
    init();
    // Re-init when navigating between pages (instant navigation)
    document.addEventListener('navigation', init);
  });
})();
