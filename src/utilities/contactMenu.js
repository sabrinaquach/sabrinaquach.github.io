// Lets any "Message Me" button open the nav menu at its contact form, without
// the navbar's open/close state having to live above every page.
export const OPEN_CONTACT_MENU = 'site:open-contact-menu';

export const openContactMenu = () => {
  window.dispatchEvent(new Event(OPEN_CONTACT_MENU));
};
