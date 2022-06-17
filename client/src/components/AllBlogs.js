// JS Libraries
import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

// Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';


const AllBlogs = (props) => {
    const {blogPosts, setBlogPosts} = props;

    useEffect(() => {
        // Gathering the list of blogs
        axios.get("/blog-api/blogs/")
        .then((res) => {
            //console.log(res);
            console.log(res.data);
            setBlogPosts(res.data);
        })
        .catch((err) => {console.log(err)});
    }, []);

    return (
        <>
            <NavBar/>
            <div>
                {blogPosts.map((blog, index) => (
                    <article>
                        <Link to={`/blog/${blog.id}`}>
                            <h1>{blog.title}</h1>
                        </Link>
                        <p>{blog.start_date} - {blog.end_date}</p>
                    </article>
                ))}
            </div>
            <FooterBar/>
        </>
    );
};


export default AllBlogs;