export function showOnboarding(dosInstance, env) {
  const container = document.querySelector('#emulator-container');

  // Create overlay div
  const overlay = document.createElement('div');
  overlay.id = 'onboarding-overlay';
  overlay.innerHTML = `
    <div class="onboarding-panel">
      <h2>Welcome to DOS+</h2>
      <p>This environment lets you run classic programs and create your own.</p>
      ${env.isChromebook ? '<p><strong>Tip:</strong> Use the Search key instead of Ctrl.</p>' : ''}
      <button id="close-onboarding">Got it!</button>
    </div>
  `;
  container.appendChild(overlay);

  // Close button logic
  document.getElementById('close-onboarding').onclick = () => {
    overlay.remove();
  };

  // Optional: load per-game README
  const readme = getReadmeForDisk();
  if (readme) {
    console.log('README:', readme); // Could display in a side panel
  }
}

function getReadmeForDisk() {
  const params = new URLSearchParams(window.location.search);
  const disk = params.get('disk');
  const readmes = {
    'mathgame.jsdos': 'Use arrow keys to solve equations. Press ESC to exit.',
    'painttool.jsdos': 'Draw with mouse. Press S to save your art.',
  };
  return readmes[disk] || null;
}