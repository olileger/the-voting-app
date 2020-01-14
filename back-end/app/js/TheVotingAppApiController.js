"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imports.
 */
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
/**
 * TheVotingAppApiController.
 */
var TheVotingAppApiController = /** @class */ (function () {
    /**
     * Constructor.
     * @param httpPort
     */
    function TheVotingAppApiController(httpPort) {
        if (httpPort === void 0) { httpPort = "8080"; }
        // Init the web server.
        this.httpPort = httpPort;
        this.app = express_1.default();
        this.app.use(body_parser_1.default.json());
        // Map the paths.
        this.app.post("/vote", this.httpPostVote);
        this.app.post("/reset", this.httpPostReset);
        // Start the server.
        this.start();
    }
    /**
     * Start the Web Server.
     */
    TheVotingAppApiController.prototype.start = function () {
        var _this = this;
        this.app.listen(this.httpPort, function () { return console.log("Listenning on " + _this.httpPort); });
    };
    /**
     * Handle the HTTP POST /vote
     * @param req
     * @param res
     */
    TheVotingAppApiController.prototype.httpPostVote = function (req, res) {
        console.log("HTTP POST /vote");
        console.log("body: " + JSON.stringify(req.body));
        // TODO : update valeur dans Redis
        res.status(202).send();
    };
    /**
     * Handle the HTTP POST /reset
     * @param req
     * @param res
     */
    TheVotingAppApiController.prototype.httpPostReset = function (req, res) {
        console.log("HTTP POST /reset");
        console.log("body: " + JSON.stringify(req.body));
        // TODO : update valeur dans Redis
        res.status(202).send();
    };
    return TheVotingAppApiController;
}());
exports.TheVotingAppApiController = TheVotingAppApiController;
//# sourceMappingURL=TheVotingAppApiController.js.map