const axios = require("axios");
const cheerio = require("cheerio");
const dl = require("image-downloader");

// const url = "https://www.sssscomic.com/comic.php?page=1";

// axios
//   .get(url)
//   .then(response => {
//     let getData = html => {
//       data = [];
//       const $ = cheerio.load(html);
//       $("table.itemlist tr td:nth-child(3)").each((i, elem) => {
//         data.push({
//           title: $(elem).text(),
//           link: $(elem)
//             .find("a.storylink")
//             .attr("href")
//         });
//         console.log(data);
//       });
//     };

//     getData(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const url = "https://www.sssscomic.com/comic.php?page=1";
// axios.get(url).then(response => {
//   let getData = html => {
//     const $ = cheerio.load(html);
//     const imageURL = "https://sssscomic.com/" + $(".comicnormal").attr("src");
//     const options = {
//       url: imageURL,
//       dest: "."
//     };
//     dl.image(options).then(({ filename, image }) => {
//       console.log("Saved to: " + filename);
//     });
//   };
//   getData(response.data);
// });

// const url = "https://en.wikipedia.org/wiki/World_Tourism_rankings";

// axios
//   .get(url)
//   .then(response => {
//     data = [];
//     const $ = cheerio.load(response.data);

//     $(`table tr td`).each((i, elem) => {
//       data.push($(elem).text());
//     });
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

function downloadImageAtPage(url) {
  axios
    .get(url)
    .then(response => {
      const $ = cheerio.load(response.data, { normalizeWhitespace: true });
      const imageURL = "https://sssscomic.com/" + $(".comicnormal").attr("src");

      const options = {
        url: imageURL,
        dest: "."
      };

      dl.image(options).then(({ filename, image }) => {
        console.log("Saved to: " + filename);
      });
    })

    .catch(error => {
      console.log(error);
    });
}
for (let i = 1; i < 974; i++) {
  downloadImageAtPage("https://www.sssscomic.com/comic.php?page=" + i);
}
