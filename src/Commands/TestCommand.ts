import {SlashCommand} from "../structs/Commands/SlashCommand";
import {SlashCommandBuilder} from "@discordjs/builders";

export default new SlashCommand({
    builder: new SlashCommandBuilder().setName("test").setDescription("Test command."),
    permissions: "EVERYONE",
    run: async ({client, interaction}) => {
       await interaction.reply( {...client.utilities.getEmbedOption( client.utilities.embedGenerators.info( "Test message." ) ) } );
    }
});
