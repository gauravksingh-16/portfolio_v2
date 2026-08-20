import { cookies } from "next/headers";

/**
 * Server-side helper — call inside Server Components or generateMetadata.
 * Returns true if the visitor has full portfolio access.
 */
export async function hasFullAccess(): Promise<boolean> {
    const cookieStore = await cookies();
    return cookieStore.get("portfolio_access")?.value === "full";
}
