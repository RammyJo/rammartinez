(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  function setTheme(theme) {
    root.dataset.theme = theme;
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#080d20' : '#edf2fc';
  }
  let savedTheme;
  try { savedTheme = localStorage.getItem('ram-theme'); } catch (_) { /* Storage may be disabled. */ }
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('ram-theme', theme); } catch (_) { /* Theme still works without storage. */ }
  });

  const controls = document.querySelector('.stage-controls');
  controls.hidden = false;
  const previewButtons = [...controls.querySelectorAll('button')];
  function showPreview(button) {
    const target = button.getAttribute('aria-controls');
    previewButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.preview').forEach(preview => {
      preview.hidden = preview.id !== target;
      preview.classList.toggle('is-selected', preview.id === target);
    });
  }
  previewButtons.forEach((button, index) => {
    button.addEventListener('click', () => showPreview(button));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = event.key === 'Home' ? 0 : event.key === 'End' ? previewButtons.length - 1 :
        (index + (event.key === 'ArrowRight' ? 1 : -1) + previewButtons.length) % previewButtons.length;
      previewButtons[next].focus();
      showPreview(previewButtons[next]);
    });
  });

  const previousPages = { home: 'top', 'get-to-know-me': 'about', work: 'work', ministry: 'ministry', skills: 'skills', contact: 'find-me' };
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
