import APIRouter from './server/routes/api';
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    //this.express.use(express.static(path.join(__dirname, 'dist')));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
    this.express.use('/', router);
    this.express.use('/api/', APIRouter);
  }

}

export default new App().express;