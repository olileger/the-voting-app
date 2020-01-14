/**
 * Imports.
 */
import e from "express";
import bp from "body-parser";


/**
 * TheVotingAppApiController.
 */
class TheVotingAppApiController
{
    /**
     * Properties.
     */
    private app: e.Application;
    private httpPort: String;
    
    /**
     * Constructor.
     * @param httpPort 
     */
    public constructor(httpPort: String = "8080")
    {
        // Init the web server.
        this.httpPort = httpPort;
        this.app = e();
        this.app.use(bp.json());

        // Map the paths.
        this.app.post("/vote", this.httpPostVote);
        this.app.post("/reset", this.httpPostReset);

        // Start the server.
        this.start();
    }

    /**
     * Start the Web Server.
     */
    private start(): void
    {
        this.app.listen(this.httpPort,
                        () => console.log(`Listenning on ${this.httpPort}`));
    }

    /**
     * Handle the HTTP POST /vote
     * @param req 
     * @param res 
     */
    public httpPostVote(req: e.Request, res: e.Response): void
    {
        console.log(`HTTP POST /vote`);
        console.log(`body: ${JSON.stringify(req.body)}`);
        
        // TODO : update valeur dans Redis

        res.status(202).send();
    }

    /**
     * Handle the HTTP POST /reset
     * @param req 
     * @param res 
     */
    public httpPostReset(req: e.Request, res: e.Response): void
    {
        console.log(`HTTP POST /reset`);
        console.log(`body: ${JSON.stringify(req.body)}`);
        
        // TODO : update valeur dans Redis

        res.status(202).send();
    }
}


/**
 * Exports.
 */
export { TheVotingAppApiController };