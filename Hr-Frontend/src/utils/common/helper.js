export const handleFormChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

export const filterDataBySearchTerm = (data, searchTerm, fieldsToSearch) => {
    if (!searchTerm) return data;
    const lowerSearch = searchTerm.toLowerCase();
    return data.filter((item) =>
        fieldsToSearch.some((field) =>
            item[field]?.toString().toLowerCase().includes(lowerSearch)
        )
    );
};

export const getStatusColor = (status) => {
    if (!status) return "bg-gray-500";
    switch (status.toLowerCase()) {
        case "open":
        case "shortlisted":
            return "bg-green-500";
        case "closed":
        case "rejected":
            return "bg-red-500";
        case "pending":
            return "bg-yellow-500";
        default:
            return "bg-gray-500";
    }
};
