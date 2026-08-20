import { hasFullAccess } from "@/lib/access";
import { projects } from "@/data/projects";
import ProjectsClient from "./ProjectsClient";

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
    const showProtected = await hasFullAccess();
    const visibleProjects = showProtected
        ? projects
        : projects.filter((p) => !p.protected);

    return <ProjectsClient projects={visibleProjects} />;
}
