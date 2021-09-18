import React,{ useEffect } from "react"
import { connect } from "frontity"
// import { libraries } from "frontity"

const Patient = ({state,libraries,actions}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const uhid = post.uhid;
    const {api} = libraries.source;
    console.log('aq');
    async function get_visits ()
    {
        const response = await libraries.source.api.get({ endpoint: "/myrest/visit-details/"+uhid });
        const entitiesAdded = await libraries.source.populate({ response, state });
        entitiesAdded.forEach(({ date_of_visit, id, link }) => {
            //console.log({ date_of_visit, id, link });
        });
        return "done";
    }

    useEffect(async () => {
        actions.source.fetch("/myrest/visit-details/"+uhid,{ endpoint:"/myrest/visit-details/"});
        const response = await libraries.source.api.get({ endpoint: "/myrest/visit-details/"+uhid });
        const entitiesAdded = await libraries.source.populate({ response, state });
    },[]);

    const visits = state.source.get("/myrest/visit-details/"+uhid);


    console.log('Return Ready');
    if (visits.isReady) {
        const visit_data = state.source['visit-details'];
        const visit_ids = Object.keys(visit_data);
        var dates = <div>dd</div>;
        visit_ids.forEach(
            function (visit_id)
            {
                console.log(state.source['visit-details'][visit_id]['date_of_visit']);
                dates +=<div>ee</div>;
            }
        );
        return (
            <div>
                {/*<h2>{post.title.rendered}</h2>*/}
                <h2>UHID:{post.uhid}</h2>
                <div>Diagnosis:{post.diagnosis}</div>
                {/*<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />*/}
                {dates}
            </div>
        )
    }
    else
    {
        return "Loading";
    }
}

export default connect(Patient)
