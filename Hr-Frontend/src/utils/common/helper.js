export const createSlug = (text) => {
  if (!text) return "";

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const findBySlug = (data, slug) => {
  if (!Array.isArray(data) || !slug) return null;

  return data.find(
    (item) => createSlug(item.title) === slug
  );
};

export const filterDataBySearchTerm = (data, searchTerm, fields = []) => {
  if (!searchTerm || !Array.isArray(data)) return data;

  const lowerSearch = searchTerm.toLowerCase();

  return data.filter((item) =>
    fields.some((field) =>
      item?.[field]
        ?.toString()
        .toLowerCase()
        .includes(lowerSearch)
    )
  );
};

export const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "shortlisted":
      return "bg-green-500 shadow-green-100";

    case "pending":
      return "bg-yellow-500 shadow-yellow-100";

    case "rejected":
      return "bg-red-500 shadow-red-100";

    case "open":
      return "bg-green-500 text-white shadow-green-100";

    case "closed":
      return "bg-red-500 text-white shadow-red-100";

    default:
      return "bg-gray-500 shadow-gray-100";
  }
};