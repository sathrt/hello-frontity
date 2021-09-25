// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Patient from "./patient"
import Add_New_patient from "./new_patient";
import Login from "./login";

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
                    {/*<List when={data.isPatientDetailsArchive}  />*/}
                    <Link link="/add-patient">Add Patient</Link>
                        <List data={data}/>
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
                    {/*<Patient when={data.isPatientDetails} />*/}
                    <Link link="/add-patient">Add Patient</Link>
                    <Patient />

                </main>
            </>
        )
    }
    else
    {
        if (state.router.link == "/add-patient/"){
            // return (<div dangerouslySetInnerHTML= {{__html:state.source[data.type][data.id].content.rendered}} />)
            return (<Add_New_patient />)
        }
        else if (state.router.link == "/login/"){
            return (<Login />)
        }
        else {
            return (
                <>
                    <h1>Home</h1>
                    <main>
                        <Link link="/login">Login</Link><br/>
                        <Link link="/add-patient">Add Patient</Link><br/>
                        <Link link="/patient-details">Patient List</Link>
                    </main>
                </>
            )
        }
    }

}

export default connect(Root)
