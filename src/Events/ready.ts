import {Event} from "../Structs/Miscellaneous/Events";
import chalk from "chalk";
import {table} from "table";
import {Routes} from "discord-api-types/v10";
import {REST} from "@discordjs/rest";

export default new Event("ready", async (client) => {
    client.utilities.println(`\n` +
        table(
            [
                [`Guilds (Cached): ${chalk.cyan(client.guilds.cache.size.toString())}`]
            ], {
                header: {
                    alignment: "center",
                    content: chalk.blue(`${client.user!.username}#${client.user!.discriminator} is ready!`)
                }
            }
        )
    );

    const rest = new REST({ version: "9" }).setToken(client.configuration.botConfig.token || "");

    try {
        client.utilities.println(`Refreshing slash commands...`, "SLASH");
        await rest.put(Routes.applicationCommands(client.user?.id || "0"), {
            body: client.commands.map((value) => value.builder.toJSON()),
        });

        client.utilities.println(chalk.green`Done!`, "SLASH");
    } catch(error) {
        client.utilities.println(chalk.red`Failed.`, "SLASH");
        console.error(error);
    }
});
