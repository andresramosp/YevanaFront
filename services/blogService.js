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

    getPostById(postId) {
        return axios({
            url: `https://www.googleapis.com/blogger/v3/blogs/${process.env.blogId}/posts/${postId}?key=${process.env.blogKey}`,
            method: 'GET',
        })
        .then((data) => {
            return data.data;
        })
        .catch(function (error) {
        })
    },

    getPostByPath(fullPath) {
        let parts = fullPath.split('-');
        let year = parts[0];
        let month = parts[1];
        let path = fullPath.replace(year, '').replace(month, '').replace('--', '');
        path = `/${year}/${month}/${path}.html`;
        return axios({
            url: `https://www.googleapis.com/blogger/v3/blogs/${process.env.blogId}/posts/bypath?path=${path}&key=${process.env.blogKey}`,
            method: 'GET',
        })
        .then((data) => {
            return data.data;
        })
        .catch(function (error) {
            debugger
            return null;
        })
    },

    getPathFromPost(post) {
        return post.url.replace('http://yevanacamper.blogspot.com/', '')
        .replaceAll('/', '-')
        .replace('.html', '');
      }, 
}


export default BlogService
