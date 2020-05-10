import React from "react";

const Popular = ({ posts }) => (
    <div className="mb-2">
        <h5 className="font-family-condensed">Популярное</h5>
        <ul className="list-group">
            {posts.map(post =>
                <li className="list-group-item border-left-0 border-right-0">
                    <small className="font-family-condensed letter-spacing-lg">{post.category}</small>
                    <h5 className="my-1">{post.title}</h5>
                    <small className="text-muted font-family-condensed">{post.date}</small>
                </li>
            )}
        </ul>
    </div>
);

export default Popular;