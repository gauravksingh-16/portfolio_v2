import { hasFullAccess } from "@/lib/access";
import { projects } from "@/data/projects";
import HomeClient from "./HomeClient";

export const dynamic = 'force-dynamic';

export default async function Home() {
    const showProtected = await hasFullAccess();
    const visibleProjects = showProtected
        ? projects
        : projects.filter((p) => !p.protected);

    return <HomeClient projects={visibleProjects} />;
}
