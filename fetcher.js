const request = require('request');
const fs = require('fs');

const pageFetcher = () => {
  const args = process.argv.slice(2);
  const URL = args[0];
  const destination = args[1];

  request(URL, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    fs.writeFile(destination, body, (error) => {
      fs.access(destination, (error) => {
        if (error) {
          console.log(error);
          process.exit();
        }
      });
      if (error) {
        console.log(error);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${destination}`);
    });
  });
};

pageFetcher();