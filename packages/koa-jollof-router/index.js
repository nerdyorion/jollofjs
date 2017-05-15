/**
 * Created by iyobo on 2017-05-13.
 */
/**
 * Convenience wrapper around koa-router
 */

/**
 * @type {Array}
 */

const Router = require('koa-router');
var makeRoute = require('./lib/util.js').makeRoute;
const digestRouteMap = require('./lib/util.js').digestRouteMap;

class KoaJollofRouter {

    constructor(routes) {
        this.router = Router();

        this.addRoutes(routes);
    }

    /**
     * Takes in a map of routes.
     * Should support nesting
     *
     * @param routes - a map with keys like '/', 'get /' or 'post /foo/:bar'
     */
    addRoutes(routes) {

        this.router = digestRouteMap(this.router, routes);

    }

    nestRoutes(path, flow, routes){
        this.router = makeRoute(this.router, '', path, flow, routes);
    }

    /**
     * use with koa.use as you would koa-router
     * i.e  app.use(jRouter.apply());
     */
    get routes() {
        return this.router.routes;
    }

    /**
     * use with koa.use as you would koa-router
     * i.e  app.use(jRouter.apply());
     */
    get allowedMethods() {
        return this.router.allowedMethods;
    }
}


module.exports = KoaJollofRouter;