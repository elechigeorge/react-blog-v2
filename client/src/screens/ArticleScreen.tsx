import { useState } from "react";
import ArticleItemScreen from "./ArticleItemScreen";


const ArticleScreen = () => {

    const posts = [
        {
            _id: 1,
            name: "Article One: How to kill everyone",
            body: "this is the body of this article",
            reactions: {
                likes: "20",
                dislikes: "10"
            },
            comments: {
                counts: "2",
                comments: [
                    {
                        user: "adeola kolabo",
                        comment: "jeola article ever"
                    }
                ]
            }
        },

        {
            _id: 2,
            name: "Article Two: How to Survive 2020",
            body: "this is the body of this article",
            reactions: {
                likes: "200",
                dislikes: "4"
            },
            comments: {
                counts: "3",
                comments: [
                    {
                        user: "adeola kolabo",
                        comment: "jeola article ever"
                    },
                    {
                        user: "godson hunla",
                        comment: "jeola article ever"
                    },
                    {
                        user: "adeola kolabo",
                        comment: "jeola article ever"
                    }
                ]
            }
        }
    ]

    return (
        <div className="container">
            <h3 className="text-success mt-3">Articles</h3>
            <hr />
            {posts && posts.map(post => <ArticleItemScreen key={post.name } post={post} />)}
        </div>
    )
}

export default ArticleScreen
