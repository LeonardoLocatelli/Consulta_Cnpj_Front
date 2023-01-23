import { useMemo } from 'react';

let existingShortcuts = {};
let alreadyConfigured = false;

function getCurrentPath() {
  return window.location.pathname;
}

function handleShortcut(event) {
  let shortcut = '';

  if (event.ctrlKey) shortcut += 'Control + ';
  if (event.shiftKey) shortcut += 'Shift + ';
  if (event.altKey) shortcut += 'Alt + ';
  if (event.metaKey) shortcut += 'Meta + ';
  if (event.metaKey) shortcut += 'Escape';
  shortcut += event.key;

  const storedShortcut = existingShortcuts[getCurrentPath()][shortcut.toUpperCase()];
  if (storedShortcut && storedShortcut.handler) {
    storedShortcut.handler(event);
    if (storedShortcut.preventDefault) {
      event.preventDefault();
    }
  }
}

/**
 * @param {[{ key: String, handler: Function, preventDefault: Boolean }]} shortcuts
 */
function useShortcut(shortcuts = []) {
  useMemo(() => {
    const currentPath = getCurrentPath();
    existingShortcuts[currentPath] = existingShortcuts[currentPath] || {};

    shortcuts.forEach(({ key, handler, preventDefault = true }) => {
      existingShortcuts[currentPath][key.toUpperCase()] = { handler, preventDefault };
    });

    // Remove os atalhos das outras telas para evitar conflitos
    existingShortcuts = { [currentPath]: existingShortcuts[currentPath] };

    if (!alreadyConfigured) {
      document.addEventListener('keydown', handleShortcut);
      alreadyConfigured = true;
    }
  }, [shortcuts]);
}

export default useShortcut;
