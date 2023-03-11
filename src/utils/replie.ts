import { InteractionReplyOptions, WebhookEditMessageOptions } from "discord.js";

export const Colors = {
    error: 0xFF3333,
    sucess: 0x4BB543,
    info: 0xffffff,
}

export const Reply = {
    error(msg: string): InteractionReplyOptions {
        return  {
            ephemeral: true,
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    }
}

export const EditReply = {
    error(msg: string): WebhookEditMessageOptions {
        return  {
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    }
}




