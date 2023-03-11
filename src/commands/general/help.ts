import { SlashCommandBuilder } from "discord.js";
import { getCategoryRoot } from "../../pages/help";
import { command } from "../../utils";

const meta = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get a list of all commands for the bot.");

export default command(meta, ({ interaction }) => {
    return interaction.reply(getCategoryRoot(true));
})