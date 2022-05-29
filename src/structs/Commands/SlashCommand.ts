import {SlashCommandType} from "../../types/Commands/SlashCommandTypes";

export class SlashCommand {
    constructor( options: SlashCommandType ) {
        Object.assign(this, options );
    }
}
