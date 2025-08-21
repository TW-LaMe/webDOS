import { launchDOS } from './dosplus-emulator.js';

window.onload = async () => {
  const dos = await launchDOS('#emulator-container', {
    diskImage: 'starter.img',
    onboarding: true
  });

  listFiles(dos);
};

async function listFiles(dos) {
  const files = await dos.fs.list();
  const list = document.getElementById('file-list');
  list.innerHTML = '';

  files.forEach(file => {
    const li = document.createElement('li');
    li.textContent = file;
    li.onclick = () => previewFile(dos, file);
    list.appendChild(li);
  });
}

async function previewFile(dos, filename) {
  try {
    const blob = await dos.getFile(filename);
    const text = await blob.text();
    const preview = document.getElementById('file-preview');
    preview.innerHTML = '';

    const content = document.createElement('pre');
    content.textContent = text;
    preview.appendChild(content);

    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'Export';
    exportBtn.onclick = () => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    };
    preview.appendChild(exportBtn);
  } catch (err) {
    document.getElementById('file-preview').textContent = 'Cannot preview this file.';
  }
}
