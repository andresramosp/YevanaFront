import axios from 'axios'

const BlogService = {
    getPosts() {
        return axios({
            url: `https://www.googleapis.com/blogger/v3/blogs/${process.env.blogId}/posts/?key=${process.env.blogKey}`,
            method: 'GET',
        })
        .then((data) => {
            return data.data.items;
        })
        .catch(function (error) {
        })
    },

    getPost(postId) {
        return axios({
            url: `https://www.googleapis.com/blogger/v3/blogs/${process.env.blogId}/posts/${postId}?key=${process.env.blogKey}`,
            method: 'GET',
        })
        .then((data) => {
            return data.data;
        })
        .catch(function (error) {
        })
    }
}


export default BlogService