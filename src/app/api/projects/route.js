import { connectToDB } from "../../../../lib/mongodb";
import Project from "../../../../models/Project";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDB()
    const projects = await Project.find()
    return NextResponse.json(projects)
}

export async function POST(req) {
    await connectToDB()
    const data = await req.json()

    try {
        const newProject = new Project(data)
        await newProject.save()
        return NextResponse.json({mesage: "Project added"}, {status: 201})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}