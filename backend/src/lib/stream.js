import { StreamChat } from "stream-chat";
import dot from "dotenv";


dot.config();
const apiKey = process.env.STREM_API_KEY;
const apiSecret = process.env.STREM_API_SECRET;

if(!apiKey || !apiSecret) {
 console.error("Stream API key or secret is missing.");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData); // FIXED: removed array brackets
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

// baad me krege
export const generateStreamToken = () => {};
