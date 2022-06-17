// JS Libraries
import React, {useEffect} from 'react';
import axios from 'axios';

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
                {
                    blogPosts.map((blog, index) => (
                        <article>
                            <p>{blog.id}</p>
                            <h1>{blog.title}</h1>
                            <h4>{blog.start_date} - {blog.end_date}</h4>
                            <img src={blog.img_link} alt={blog.img_description}/>
                            {/* 
                            Not sure if I want to keep the description in or just have individual links for the articles.
                            */}
                            <p>{blog.description}</p>
                            <p>{blog.stream_link}</p>
                        </article>
                    ))
                }
            </div>
            <FooterBar/>
        </>
    );
};


export default AllBlogs;