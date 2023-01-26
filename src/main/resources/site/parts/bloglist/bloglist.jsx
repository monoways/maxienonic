import react from "react";

const Bloglist = ({ posts, apiUrl, parentPath, postCount, sortExpression }) => {
    return (
        <>
            <h1>Bloglist</h1>
            {posts ? 
                posts.map(post => (
                    <div key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.preface}</p>
                        <a href={`${apiUrl}/content/${post._id}`}>Read more</a>
                    </div>
                ))
            : <p>No posts</p>}
        </>
    )
}

export default (props) => <Bloglist {...props} />;