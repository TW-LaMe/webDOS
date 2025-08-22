import { launchDOS } from './dosplus-emulator.js';
import { showOnboarding } from './onboarding.js';
import { enableHauntedMode } from './haunted.js';
import { detectEnvironment } from './env-check.js';

window.onload = async () => {
  const container = '#emulator-container';
  const diskImage = getDiskImageFromURL() || 'https://js-dos.com/cdn/6.22/games/doom.jsdos';

  const env = detectEnvironment(); // e.g., { isChromebook: true, isTouch: false }

  try {
    const dos = await launchDOS(container, { diskImage, env });

    showOnboarding(dos, env); // overlays, help panels, per-game README

    if (shouldEnableHauntedMode()) {
      enableHauntedMode(dos); // secret triggers, overlays, spooky assets
    }

    setupExportTools(dos); // save/export for student programs

  } catch (err) {
    console.error('DOS+ failed to launch:', err);
    document.querySelector(container).innerText = 'Failed to load DOS+ environment.';
  }
};

function getDiskImageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('disk'); // e.g., ?disk=mathgame.jsdos
}

function shouldEnableHauntedMode() {
  return window.location.hash.includes('#haunt'); // or other clue-based triggers
}

function setupExportTools(dos) {
  // Placeholder for USB/CD/floppy export logic
  // Could include download buttons, file dialogs, etc.
}
