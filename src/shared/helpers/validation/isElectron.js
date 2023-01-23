export default function isElectron() {
  const renderer = window && window.process && window.process.type;
  return typeof renderer !== 'undefined';
}
