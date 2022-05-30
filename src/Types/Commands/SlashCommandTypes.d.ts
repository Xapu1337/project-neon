import {NeonClient} from "../../Structs/Client/NeonClient";
import {CommandInteraction, PermissionResolvable} from "discord.js";
import {SlashCommandBuilder} from "@discordjs/builders";

export interface RunOptions {
    client: NeonClient;
    interaction: CommandInteraction;
}

type RunFunction = (options: RunOptions) => Promise<any>;

export type SlashCommandPermissions = PermissionResolvable & "EVERYONE" | "AUTHOR" | "NONE";

export type SlashCommandType = {
    builder: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
    permissions: PermissionResolvable | string;
    run: RunFunction;
};
