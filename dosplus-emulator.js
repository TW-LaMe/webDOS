export async function launchDOS(containerSelector, options = {}) {
  const { diskImage, onboarding } = options;
  const container = document.querySelector(containerSelector);

  const dos = await Dos(container);
  await dos.run(diskImage);

  if (onboarding) {
    const panel = document.createElement('div');
    panel.className = 'onboarding-panel';
    panel.innerText = 'Welcome to DOS+. Press F1 for help.';
    container.appendChild(panel);
  }

  return dos;
}
