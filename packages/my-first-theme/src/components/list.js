import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state,data }) => {
    // const data = state.source.get(state.router.link)
    // above is replaced by passing data from the parent component

    return (
        <div>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <Link key={item.id} link={post.link}>
                        {post.title.rendered}
                        <br />
                    </Link>
                )
            })}
        </div>
    )
}
export default connect(List)
