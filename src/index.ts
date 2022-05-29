import dotenv from 'dotenv';
import {NeonClient} from "./structs/Client/NeonClient";

(async () => {
    dotenv.config();
    await new NeonClient({
        intents: [
            'GUILDS',
            'GUILD_MEMBERS',
            'GUILD_MESSAGES',
            "GUILD_INVITES",
            'GUILD_MESSAGE_REACTIONS',
            'DIRECT_MESSAGES',
        ],
        partials: ['MESSAGE', 'REACTION', "GUILD_MEMBER", "CHANNEL", "USER"],
        ws: { properties: { $browser: "Discord iOS" }}
    }).run( ).catch(console.error);
})();
