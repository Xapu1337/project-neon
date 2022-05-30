import {Event} from "../Structs/Miscellaneous/Events";
import {MessageEmbed, PermissionResolvable} from "discord.js";
import {SlashCommandType} from "../Types/Commands/SlashCommandTypes";

export default new Event("interactionCreate", async (client, interaction) => {
    if (interaction.isCommand()) {
        const command: SlashCommandType = client.commands.get(interaction.commandName);


        if (command) {
            switch (command.permissions) {
                case "EVERYONE":
                    await command.run({client, interaction});
                    break;
                case "AUTHOR":
                    if (client.configuration.isAuthorized(interaction.user.id)) {
                        await command.run({client, interaction});
                    }
                    break;

                default:
                    if(interaction.memberPermissions!.has(command.permissions as PermissionResolvable)) {
                        await command.run({client, interaction});
                    } else {
                        await interaction.reply({embeds: [new MessageEmbed().setTitle("Invalid Permissions").setColor("RED").setDescription(`Missing permissions: \`${command.permissions}\``)]})
                    }
            }
        }
    }
});
