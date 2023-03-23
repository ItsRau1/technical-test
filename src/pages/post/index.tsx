import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { PostType } from "../../@types/types"
import { DataContext } from "../../contexts/Context"
import { api } from "../../libs/axios"

export function Post(){

    const { } = useContext(DataContext)
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState() as Array<PostType[]>

    useEffect(() => {
        const FilterPost = async () => {
            let pos:PostType[] = []
            await api.get('posts')
                .then(res => {
                    pos.push(res.data.filter((post:PostType) => post.id == id))
            })
                setPost(pos[0])
                setLoading(false)
            }
            FilterPost()
    },[])

    console.log(post)

    return(
        <div>
            {  loading ? 
                    <h1>Loading</h1>
                :
                    post.map(item => {
                        return(
                            <div>{item.id}</div>
                        )
                    })
            }
        </div>
    )
}