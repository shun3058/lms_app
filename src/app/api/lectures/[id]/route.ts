import connect, { prisma } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request, {params}: {params: {id: string}}) => {
    try {
        await connect();
        const {id} = await params;
        const lecture = await prisma.lectures.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        console.log(lecture);

        return NextResponse.json({lecture}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Failed to fetch lecture"}, {status: 500});
    } finally {
        await prisma.$disconnect();
    }
}