import connect, { prisma } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();
        const lectures = await prisma.lectures.findMany();

        return NextResponse.json({lectures}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Failed to fetch lectures"}, {status: 500});
    } finally {
        await prisma.$disconnect();
    }
}