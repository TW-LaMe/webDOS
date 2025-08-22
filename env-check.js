export function detectEnvironment() {
  const ua = navigator.userAgent.toLowerCase();

  const isChromebook = ua.includes('cros');
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isMobile = /android|iphone|ipad/.test(ua);
  const isMac = ua.includes('macintosh');
  const isWindows = ua.includes('windows');
  const isLinux = ua.includes('linux') && !isChromebook;

  return {
    isChromebook,
    isTouch,
    isMobile,
    isMac,
    isWindows,
    isLinux
  };
}