import { category } from "../../utils";
import ping from "./ping";

export default category("Debug", [
    ping,
], { description: "Debug commands", emoji: "🧪" })