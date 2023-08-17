import matter from "gray-matter";

const getFrontmatterData = async (path: string) => {
  try {
    const source = await import(path);

    return matter(source);
  } catch (error: unknown) {
    console.error("Failed to get frontmatter data:", error);

    return null;
  }
};

export default getFrontmatterData;
