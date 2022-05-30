import {SlashCommandType} from "../../Types/Commands/SlashCommandTypes";

export class SlashCommand {
    constructor( options: SlashCommandType ) {
        Object.assign(this, options );
    }
}
