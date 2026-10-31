// Preserve existing app links while keeping each document in a single language.
(() => {
  function openEnglishPage() {
    const pages = {
      'index.html': 'support-en.html',
      'support.html': 'support-en.html',
      'privacy-policy.html': 'privacy-policy-en.html',
    };
    const file = location.pathname.split('/').pop() || 'index.html';
    const destination = pages[file];
    if (!destination || !(location.hash === '#english' || location.hash.startsWith('#en-'))) return;
    const url = new URL(destination, location.href);
    url.search = location.search;
    url.hash = location.hash === '#english' ? '' : location.hash;
    location.replace(url.href);
  }
  openEnglishPage();
  window.addEventListener('hashchange', openEnglishPage);
})();
