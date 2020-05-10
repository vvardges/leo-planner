import React from "react";
import Link from "next/link";

const PostCardSmall = ({ post }) => (
    <div className="card mb-3">
        <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-2">
                <div className="bg-danger text-center">
                    <img src="/img/banner.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="card-body p-0">
                    <p className="card-subtitle font-family-condensed letter-spacing-lg lead my-2"><span
                        className="border-bottom">{post.category}</span></p>
                    <Link href="/post">
                        <a><h3 className="card-title">{post.title}</h3></a>
                    </Link>
                    <p className="card-text small font-family-condensed">
                        <span className="letter-spacing-lg">{post.author}</span>
                        <span className="text-muted ml-2">{post.date}</span>
                    </p>
                </div>
            </div>
            <div className="col-lg-5">
                <img src={post.thumbnail} className="card-img" alt="..."/>
            </div>
        </div>
    </div>
);

export default PostCardSmall;