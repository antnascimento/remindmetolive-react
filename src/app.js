
import express from 'express';
import exphbs from 'express-handlebars';

import path from 'path';

import open from 'open';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../src/routes';
import Meta from './server/meta';
import SitemapBuilder from './server/sitemapBuilder';

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
    match(
      {routes, location: req.url },
      (err, redirectLocation, renderProps) => {

        console.log("request url: ");
        console.log(req.url);

        // // in case of error display the error message
        if (err) {
          return res.status(500).send(err.message);
        }

        // in case of redirect propagate the redirect to the browser
        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        // generate the React markup for the current route
        let markup;
        if (renderProps) {
          // if the current route matched we have renderProps
          markup = renderToString(<RouterContext {...renderProps}/>);
        } else {
          // otherwise we can render a 404 page
          //markup = renderToString(<NotFoundPage/>);
          res.status(404);
        }

        // render the index template with the embedded React markup
        return res.render('path', {
            reactOutput: markup,
            meta: meta.getMetaForPath(req.url)
        });
      }
    );
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
