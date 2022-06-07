// JS Libraries
import React, {useEffect} from 'react';
import axios from 'axios';

// Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';


const AllBlogs = (props) => {
    const {blogPosts, setBlogPosts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/")
        .then((res) => {
            console.log(res);
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
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </article>
                    ))
                }
            </div>
            <FooterBar/>
        </>
    );
};


export default AllBlogs;