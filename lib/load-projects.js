export async function loadProjects() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/projects`);
    const data = await res.json();

    return data;
}