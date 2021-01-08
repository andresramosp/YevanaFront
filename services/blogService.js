import axios from 'axios'

const BlogService = {
    getPosts() {
        return axios({
            url: `https://www.googleapis.com/blogger/v3/blogs/${process.env.blogId}/posts/?key=${process.env.blogKey}&maxResults=500`,
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
            return null;
        })
    },

    getLandingPostByPartialPath(partialPath) {
        return axios({
            url: `https://www.googleapis.com/blogger/v3/blogs/${process.env.landingBlogId}/posts/?key=${process.env.blogKey}&maxResults=500`,
            method: 'GET',
        })
        .then((data) => {
            debugger
            return data.data.items.find(post => post.url.indexOf(partialPath) != -1);
        })
        .catch(function (error) {
            return null;
        })
    },

    getPathFromPost(post) {
        return post.url.replace('http://yevanacamper.blogspot.com/', '')
        .replaceAll('/', '-')
        .replace('.html', '');
      }, 

    getPathFromLandingPost(post) {
        let parts = post.url.split('/');
        return parts[parts.length -1].replace('.html', '');
      }, 
}


export default BlogService
