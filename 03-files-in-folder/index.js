const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

function checkFiles(folder) {
  fs.readdir(folder, { withFileTypes: true }, (err, files) => {
    files.forEach(file => {
      if (!file.isDirectory()) {
        fs.stat(path.join(folder, file.name), (err, stats) => {
          if (err) {
            throw err;
          }
          let ext = path.extname(file.name);
          console.log(path.basename(file.name, ext) + ' - ' + (ext ? ext : 'N/A') + ' - ' + (stats.size / 1024).toFixed(3) + 'kB');
        });
      } else {
        checkFiles(path.join(folder, file.name));
      }
    });
  }
  );
}

checkFiles(folderPath);

