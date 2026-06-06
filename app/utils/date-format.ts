export const formatDate = (post_date: string | number | Date): string => {
  const date = new Date(post_date);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
