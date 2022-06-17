// JS Libraries
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

// Components
import NavBar from './NavBar';
import FooterBar from './FooterBar';


const OneBlog = (props) => {
    const {id} = useParams();
    const [oneBlog, setOneBlog] = useState({});

    useEffect(() => {
        axios.get(`/blog-api/blogs/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setOneBlog(res.data);
        })
        .catch((err) => {console.log(err)});
    }, [id]);

    return (
        <>
            <NavBar/>
            <article>
                <h1>{oneBlog.title}</h1>
                <p>{oneBlog.start_date} - {oneBlog.end_date}</p>
                <p>{oneBlog.description}</p>
                <p>{oneBlog.stream_link}</p>
            </article>
            <FooterBar/>
        </>
    );
};


export default OneBlog;
