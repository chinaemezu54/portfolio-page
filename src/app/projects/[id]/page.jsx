import { connectToDB } from "../../../../lib/mongodb";
import Project from "../../../../models/Project";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    await connectToDB()

    try {
        const project = await Project.findById(params.id)
        if (!project) {
            return NextResponse.json({message: "Project not found"}, {status: 404})
        }
        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json({error: "invalid Project ID"}, {status: 400})
    }
}