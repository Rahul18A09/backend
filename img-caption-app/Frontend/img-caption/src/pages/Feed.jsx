import React from 'react'
import { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:'1',
            image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            caption:'A beautiful view of Paris'
        }
    ]);


  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div className='post-card' key={post._id}>   
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>      

                ))
            ) : (
                <h1>No posts available</h1>
            )
        }
    </section>
  )
}

export default Feed
