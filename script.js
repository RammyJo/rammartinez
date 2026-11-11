// Keep links to the previous site's pages useful after the move to one page.
(() => {
  const previousPages = {
    home: 'top',
    'get-to-know-me': 'about',
    work: 'work',
    ministry: 'ministry',
    skills: 'skills',
    contact: 'find-me'
  };
  function followPreviousLink() {
    if (!location.hash.startsWith('#/')) return;
    const page = location.hash.slice(2).split('?')[0];
    const target = document.getElementById(previousPages[page] || 'top');
    history.replaceState(null, '', `#${target.id}`);
    target.scrollIntoView();
  }
  window.addEventListener('hashchange', followPreviousLink);
  followPreviousLink();
})();
