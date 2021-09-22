// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Patient from "./patient"

const Root = ({state}) => {
    const data = state.source.get(state.router.link)
    if (data.isPatientDetailsArchive)
    {
        return (
            <>
                <h1>Patient List</h1>
                <nav>
                    {/*<Link link="/">Home</Link>*/}
                    {/*<br />*/}
                    {/*<Link link="/page/2">More posts</Link>*/}
                    {/*<br />*/}
                    {/*<Link link="/about-us">About Us</Link>*/}
                    {/*<Link link="/patient-details">Patient List</Link>*/}
                </nav>
                <main>
                        <List when={data.isPatientDetailsArchive}  />
                </main>
            </>
        )
    }
    else if (data.isPatientDetails)
    {
        return (
            <>
                <h1>Patient Details</h1>
                <main>
                    <Patient when={data.isPatientDetails} />
                </main>
            </>
        )
    }
    else
    {
        return (
            <>
                <h1>Home</h1>
                <main>
                    <Link link="/patient-details">Patient List</Link>
                </main>
            </>
        )
    }

}

export default connect(Root)
