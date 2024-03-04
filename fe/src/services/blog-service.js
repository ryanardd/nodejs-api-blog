import axios from "axios";

// export const getBlog = async (callback) => {
//     await axios
//         .get("http://localhost:3000/products")
//         .then((res) => {
//             callback(res.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

export const getBlogId = async (id, callback) => {
    await axios.get(`http://localhost:3000/blog/${id}`).then((res) => {
        const data = res.data.data;
        callback(data);

        console.log(data);
    });
};

export const addBlog = async (blog, callback) => {
    await axios
        .post("http://localhost:3000/blog", blog, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            callback(res.data);
        });
};
