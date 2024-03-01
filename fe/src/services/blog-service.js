import axios from "axios";

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
