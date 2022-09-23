const handleSearch = (search) => {
    const arr = search.replace("?", "").split("&");
    let sorted = {};
    arr.forEach((e) => {
        const arr = e.split("=");
        sorted[arr[0]] = arr[1];
    });
    return sorted;
};

const query = () => {
    const search = window.location.search;
    if (search === "") {
        return { query: null };
    } else {
        const result = handleSearch(search);
        return result;
    }
};

export default query;
