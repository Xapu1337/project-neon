import {NeonClient} from "../Client/NeonClient";


export class Configuration {
    public client: NeonClient;

    public constructor(client: NeonClient) {
        this.client = client;
    }

    public botConfig = {
        token: process.env.BOT_TOKEN ?? "",
        version: process.env.BOT_VERSION ?? process.env.npm_package_version,
        authors: JSON.parse(process.env.BOT_AUTHORS ?? "[]"),
    }
    public isAuthorized = (user: string) => this.botConfig.authors.includes(user);
}
