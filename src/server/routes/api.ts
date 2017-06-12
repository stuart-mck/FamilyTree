import {Router, Request, Response, NextFunction} from 'express';
// let mockFamily = require('../familyTree');

// let family = mockFamily.buildMockData();

export class APIRouter {
  router: Router
  constructor() {
    this.router = Router();
    this.init();
  }

    public getDefault(req: Request, res: Response, next: NextFunction){
      res.send('api works')
    }

    public getTree(req: Request, res: Response, next: NextFunction){

    }

    init() {
    this.router.get('/', this.getDefault);
    this.router.get('/tree', this.getTree);
    }
// 

// /* GET api listing. */
// router.get('/tree', (req, res) => {
//   res.status(200).json(family);
// });
}

// Create the HeroRouter, and export its configured Express.Router
const apiRoutes = new APIRouter();
apiRoutes.init();

export default apiRoutes.router;