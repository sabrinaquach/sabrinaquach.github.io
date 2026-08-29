/**
 * Scroll the page.
 *
 * styles.css sets `html, body { height: 100%; overflow-x: hidden }`, which makes
 * BODY the scroll container — documentElement stays pinned at viewport height and
 * never scrolls. `window.scrollTo` and `window.scrollY` therefore do nothing and
 * always read 0 on this site. Writing scrollTop on both elements works whichever
 * one the browser has chosen.
 */
export const scrollPageTo = (top = 0, behavior = 'auto') => {
  const targets = [document.documentElement, document.body].filter(Boolean);
  targets.forEach((el) => {
    if (typeof el.scrollTo === 'function') {
      el.scrollTo({ top, behavior });
    } else {
      el.scrollTop = top;
    }
  });
};

export default scrollPageTo;
