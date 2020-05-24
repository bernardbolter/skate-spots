const puppeteer = require("puppeteer");
const Handlebars = require("handlebars");
const fs =require("fs");

let name = "";
let coordinates = [];

// const name = process.argv[2].replace(/, /g,"_");

const data = require("./countryJSON/test.json");

const source = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Display a satellite map</title>
        <meta
        name="viewport"
        content="initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js"></script>
        <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css"
        rel="stylesheet"
        />
        <style>
        body {
            margin: 0;
            padding: 0;
        }
        #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
        }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>
        mapboxgl.accessToken =
            "pk.eyJ1IjoiYmVtYWpvciIsImEiOiJjamFpamZpZnMxdmxpMnFsZGR3NGp0eTkwIn0.1UOGppfTHCtl0yA5lgrqKw";
        var map = new mapboxgl.Map({
            container: "map",
            zoom: 22,
            center: ${coordinates},
            style: "mapbox://styles/mapbox/satellite-v9"
        });
        </script>
    </body>
    </html>
`;

const template = Handlebars.compile(source);

data.Spots.map((i,spot) => {
    console.log(spot);
    console.log(i);
})


const result = template(data);

console.log("got here");


// fs.writeFile("test.html", result, function(err) {
// if(err) {
//     return console.log(err);
// }
// }),

// puppeteer
//     .launch({
//         headless: true,
//         defaultViewport: { width: Number(size), height: Number(size) }
//     })
//     .then(async browser => {
//         const page = await browser.newPage();
//         await page.goto("file:///Users/bemajor/Desktop/megacities/mapCapture/test.html", {
//             waitUntil: "networkidle0",
//             timeout: 1000000
//         });
//         await page.screenshot({ path: `${name}.jpg`, type: "jpeg" });
//         await browser.close();
//     });
