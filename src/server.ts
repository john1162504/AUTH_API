import "dotenv/config";

import { app } from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 3000;

async function main() {
    try {
        await prisma.$connect();
        console.log("✅ Prisma connected!");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Prisma connection failed:", err);
    }
}

main();
