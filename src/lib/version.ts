const REPO = "soyeb-jim285/hyprfm";

let cached: string | null = null;

export async function getLatestVersion(): Promise<string> {
  if (cached) return cached;
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();
    // tag_name is like "v0.4.15"
    cached = data.tag_name as string;
    return cached;
  } catch (e) {
    console.warn("Failed to fetch latest version, falling back:", e);
    return "v0.4.19";
  }
}
