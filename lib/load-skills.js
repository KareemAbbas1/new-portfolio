export async function loadSkills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/skills`);
    const data = await res.json();

    return data;
}