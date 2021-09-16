import React from "react"
import { connect } from "frontity"
// import { libraries } from "frontity"

const Patient = ({state,libraries}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const uhid = post.uhid;
    const {api} = libraries.source;
    async function get_visits ()
    {
        let mypromise = new Promise(function(){
            api.get({
                endpoint: "/myrest/visit-details/"+uhid,
                // params: {'uhid':uhid},
            });
        });
    const val = await mypromise;
    return val;
    }

    const visits = get_visits();
    // get_visits().then(
    //     function (value)
    //     {
    //         console.log(value);
    //     },
    // function (error)
    // {
    //     console.log(error);
    // }
    // );

    // const entitiesAdded = await libraries.source.populate({ visits, state });
    // entitiesAdded.forEach(({ type, id, link }) => {
    //     console.log({ type, id, link });
    // });
    // console.log(visits);
    return (
        <div>
            {/*<h2>{post.title.rendered}</h2>*/}
            <h2>UHID:{post.uhid}</h2>
            <div>Diagnosis:{post.diagnosis}</div>
            {/*<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />*/}
        </div>
    )
}

export default connect(Patient)
