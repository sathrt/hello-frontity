// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Patient from "./patient"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <h1>Frontity Workshop</h1>
            <p>Current URL: {state.router.link}</p>
            <nav>
                <Link link="/">Home</Link>
                <br />
                <Link link="/page/2">More posts</Link>
                <br />
                <Link link="/about-us">About Us</Link>
            </nav>
            <main>
                <Switch>
                    <List when={data.isArchive} />
                    <Patient when={data.isPatientDetails} />
                    <div when={data.isPost}>This is a post</div>
                    <div when={data.isPage}>This is a page</div>
                </Switch>
            </main>
        </>
    )
}

export default connect(Root)
