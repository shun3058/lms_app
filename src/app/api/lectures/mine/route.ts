import connect, { prisma } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        await connect();
        
        const my_lectures = await prisma.lectures.findMany({
            where: {
                my_lecture: true
            }
        });
        console.log(my_lectures);

        return NextResponse.json({my_lectures}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Failed to fetch lecture"}, {status: 500});
    } finally {
        await prisma.$disconnect();
    }
}