import { React, useState, useEffect } from 'react';
import NewsWindow from './NewsWindow';

export default function News(props) {
    // console.log(data);
    const [posts, setPosts] = useState([]);


    const update = async () => {

        const response = await fetch(props.url);
        const data = await response.json();
        setPosts(data.posts);

    }
    useEffect(() => {
        update();
        console.log(props.url)
    }, [props.url])

    return (
        <>
            <div className="fw-bold fs-4 mt-3 mx-4 text-light"><h1>News Aggregator - Top Headlines</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-3 my-2">
                {posts.map((event, index) => {
                        // console.log(event);
                        return <NewsWindow key={index} posts={event}/>;
                    })}
            </div>
        </>
    );

}

