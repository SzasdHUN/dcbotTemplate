import { getCategoryPage, getCategoryRoot, Namespaces } from "../../pages/help";
import { createId, EditReply, event, readId, Reply } from "../../utils";
import { SelectMenuInteraction } from "discord.js";

export default event("interactionCreate",async ({ log }, interaction) => {
    if(!interaction.isButton() && !interaction.isSelectMenu()) return;
    const [namespace] = readId(interaction.customId);
    if(!Object.values(Namespaces).includes(namespace)) return;
    
    
    
    
    try {
        await interaction.deferUpdate()
        switch(namespace) {
            case Namespaces.root:
                return await interaction.editReply(getCategoryRoot());
            case Namespaces.select:
                const newId = createId(Namespaces.select, (interaction as SelectMenuInteraction).values[0]);
                return await interaction.editReply(getCategoryPage(newId));
            case Namespaces.action:
                return await interaction.editReply(getCategoryPage(interaction.customId));
            default:
                throw new Error("Invalid namespace reached ...");
        }
    } catch (err) {
        log(`[Help Error]`, err);
        
        if(interaction.deferred) return interaction.editReply(EditReply.error("Something went wrong :("));
        return interaction.reply(Reply.error("Something went wrong :("));
    }
})