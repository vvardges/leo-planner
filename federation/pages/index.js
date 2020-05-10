import React from "react";
import Layout from '../components/layout';
import fetch from 'node-fetch';

import PostCard from "../components/post/postCard";
import PostCardSmall from "../components/post/postCardSmall";
import CategoryCard from "../components/category/categoryCard";
import Popular from "../components/posts/popular";

export async function getStaticProps() {
    const resPosts = await fetch('http://localhost:4000/posts');
    const posts = await resPosts.json();

    const resCats = await fetch('http://localhost:4000/categories');
    const categories = await resCats.json();

    return {
        props: {
            posts, categories
        },
    }
}

export default function Home({ categories, posts }) {
    return (
        <Layout home>
            <PostCard post={posts[0]} />
            <PostCardSmall post={posts[1]}/>

            <div className="row mt-4">
                <div className="col-lg-9">
                    {categories.map(category =>
                        <CategoryCard key={1} category={category} posts={posts}/>
                    )}
                </div>
                <div className="col-lg-3">
                    <Popular posts={posts}/>
                </div>
            </div>

            <div className="mt-4 pt-2">
                <hr className="d-none d-lg-block"/>
                <h3 className="font-family-condensed mb-3 mt-1 text-center text-md-left">Что еще почитать</h3>
                <div className="card-deck">
                    <div className="card">
                        <div className="row">
                            <div className="col-4 col-sm-12">
                                <img src="/img/card.png" className="img-fluid mb-2" alt="..."/>
                            </div>
                            <div className="col">
                                <p className="card-subtitle font-family-condensed letter-spacing-lg lead">Ты и
                                    закон</p>
                                <h5 className="card-title">Операция "Жуков"</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <div className="col-4 col-sm-12">
                                <img src="/img/blog2.png" className="img-fluid mb-2" alt="..."/>
                            </div>
                            <div className="col">
                                <p className="card-subtitle font-family-condensed letter-spacing-lg lead">Уровень
                                    жизни</p>
                                <h5 className="card-title">Хотите купить новую вещь? Подождите, мы вас
                                    переубедить</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <div className="col-4 col-sm-12">
                                <img src="/img/blog3.png" className="img-fluid mb-2" alt="..."/>
                            </div>
                            <div className="col">
                                <p className="card-subtitle font-family-condensed letter-spacing-lg lead">Ты и
                                    закон</p>
                                <h5 className="card-title">Что, карантин? Какой еще карантин!</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <div className="col-4 col-sm-12">
                                <img src="/img/blog4.png" className="img-fluid mb-2" alt="..."/>
                            </div>
                            <div className="col">
                                <p className="card-subtitle font-family-condensed letter-spacing-lg lead">Ты и
                                    закон</p>
                                <h5 className="card-title">Бизнес оценил деньги "удаленки"</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}