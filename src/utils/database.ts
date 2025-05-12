import { PrismaClient } from "@/generated/prisma";

export const prisma = new PrismaClient();

//データベース接続
export const connect = async () => {
    try {
        await prisma.$connect();
    } catch (error) {
        return Error("Failed to connect to the database");
    }
}

export default connect;
