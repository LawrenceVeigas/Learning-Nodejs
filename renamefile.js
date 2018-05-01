var fs = require('fs');

fs.rename('demofile1.html', 'myfile.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});