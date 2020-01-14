/**
 * Imports.
 */
import { TheVotingAppApiController } from "./TheVotingAppApiController";

console.log("Starting The Voting App API Controller");
new TheVotingAppApiController(process.env.PORT);