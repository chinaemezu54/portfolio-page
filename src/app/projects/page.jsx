import axios from "axios"
import Link from "next/link"

async function getProjects() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
        headers: {"Cache-Control": "no-store"}
    })
    return res.data
}

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <Link href={`/projects/${project._id}`}>
                            {project.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}