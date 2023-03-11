# **Discord.js Bot Template with TypeScript**

This is a minimal Discord bot template  built with the popular Discord.js library and TypeScript. The purpose of this template is to provide a starting point for creating your own Discord bot with TypeScript. It offers improved developer productivity and code maintainability. With this template, you can easily:
- Create custom commands to respond to user requests.
- Automate tasks such as posting reminders or announcements.
- Respond to various user events such as messages, reactions, and channel updates. 

>## Features

- Built with TypeScript for better type checking and code completion.
- Minimal codebase with basic setup and configuration.
- Easy-to-use and suitable for both beginner and experienced developers.

>## Getting Started

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Set up your environment variables by creating a `.env` file (see `.env.example` for an example).
4. Build the bot with `npm run build`.
5. Start the bot with `npm run start`.

>## Examples

There are no examples included in this template, as it is designed to be a starting point for your own bot. You can create custom commands, automate tasks, and respond to various user events such as messages, reactions, and channel updates by creating your command and event handlers.


>## Adding Commands

You can duplicate the `/ping` command and make changes to it:

```typescript
import { SlashCommandBuilder } from "discord.js";
import { command } from "../../utils";

const meta = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot for a response.")
    .addStringOption((option) => option
        .setName("message")
        .setDescription("Provide the bot a message to respond with.")
        .setMinLength(1).setMaxLength(2000)
        .setRequired(false)
);

export default command(meta, ({ interaction }) => {
    const message = interaction.options.getString("message");
    
    return interaction.reply({
        ephemeral: true,
        content: message ?? "Who dares disturb my slumber?",
    })
})
```

## License

This project is licensed under the [MIT License](https://mit-license.org/).
