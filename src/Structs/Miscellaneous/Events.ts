import {ClientEvents} from "discord.js";
import {NeonClient} from "../Client/NeonClient";

export class Event<Key extends keyof ClientEvents> {
    constructor(
        public event: Key,
        // Note: Every event first argument is ALWAYS the client.
        public run: (client: NeonClient, ...args: ClientEvents[Key]) => any
    ) {}
}
