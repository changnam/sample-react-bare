import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import React from 'react';

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(<App />);
  console.log(renderString);
  res.send(html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`));
});
app.use("/", express.static("dist"));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
