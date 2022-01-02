import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const posts = [
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



interface ReaderProps {
    match?: any,
}

const ReaderScreen: FC<ReaderProps> = ({match}) => {
    const [posted, setposted] = useState({})
    const params = useParams();


    useEffect(() => {
        let toFilterArticle = posts.filter(post => post._id === Number(params.id))

        setposted(toFilterArticle)

    }, [posts])

    console.log(posted)

    return (

        <div className="container">
            <div className="header-content">
                
            </div>

            <div className="body-content">

            </div>

            <div className="footer-content">

            </div>
        </div>
    )
}

export default ReaderScreen
