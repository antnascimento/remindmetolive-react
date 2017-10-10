
import express from 'express';
import exphbs from 'express-handlebars';

import path from 'path';

import open from 'open';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Meta from './server/meta';
import SitemapBuilder from './server/sitemapBuilder';
import App from './components/App';

/* eslint-disable no-console */
export default function startExpress() {

  const port = 3000;
  const theapp = express();

  console.log("Starting in production");

  // view engine setup
  theapp.engine('handlebars', exphbs({defaultLayout: 'main'}));
  theapp.set('view engine', 'handlebars');
//  theapp.set('views', path.join(__dirname, 'src/views'));
  const currentDir = path.resolve(path.dirname(''));

  const meta = new Meta();

  const staticDir = path.join(currentDir, 'dist/client');

  console.log('Static dir: ' + staticDir);

  theapp.use(express.static(staticDir));

  const sitemap = new SitemapBuilder(meta.getMetaPaths()).getSitemap();

  theapp.get('/sitemap.xml', function(req, res) {
    res.header('Content-Type', 'application/xml');
    res.send( sitemap.toString() );
  });

  theapp.get('*', (req, res) => {

    const context = {};
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    if(context.status === 404) {
      res.status(404);
    }

    // render the index template with the embedded React markup
    return res.render('path', {
      reactOutput: markup,
      meta: meta.getMetaForPath(req.url)
    });

  });

  theapp.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
}

startExpress();
