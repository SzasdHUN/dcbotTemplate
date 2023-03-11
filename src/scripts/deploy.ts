import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "..", "..", ".env") });

import { REST, Routes, APIUser } from "discord.js";
import commands from "../commands";
import keys from "../keys";

const body = commands.map(({ commands }) => commands.map(({ meta }) => meta)).flat();

const rest = new REST({ version: "10" }).setToken(keys.clientToken);

async function main() {
    const currentUser = await rest.get(Routes.user()) as APIUser;
    const endpoint = process.env.NODE_ENV === "prod" ? Routes.applicationCommands(currentUser.id) : Routes.applicationGuildCommands(currentUser.id, keys.testGuild);
    await rest.put(endpoint, { body });
    
    return currentUser
}

main().then((user) => {
    const tag = `${user.username}#${user.discriminator}`;
    const response = process.env.NODE_ENV ===  "prod" 
    ? `Successfully released commands in production as ${tag}!` 
    : `Successfully registered commands for development as ${tag} in ${keys.testGuild}!`;
    
    console.log(response);
    
    
}).catch(console.error);