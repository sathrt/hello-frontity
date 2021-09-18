import React from "react"
import { connect } from "frontity"
// import { libraries } from "frontity"

const Patient = ({state,libraries}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const uhid = post.uhid;
    const {api} = libraries.source;
    console.log('aq');
    async function get_visits ()
    {
    //     let mypromise = new Promise(function(){
    //         api.get({
    //             endpoint: "/myrest/visit-details/"+uhid,
    //             // params: {'uhid':uhid},
    //         });
    //     });
    // const val = await mypromise;
    // return val;
        const response = await libraries.source.api.get({ endpoint: "/myrest/visit-details/"+uhid });
        const entitiesAdded = await libraries.source.populate({ response, state });
        entitiesAdded.forEach(({ date_of_visit, id, link }) => {
            //console.log({ date_of_visit, id, link });
        });
        return "done";
    }

    const visits = get_visits();
    visits.then(
        function (value){console.log('success');},
        function (error){console.log('fail');}
    );

    var visit_list='';
    if (state.source['visit-details'] == null)
    {

    }
    else {
        visit_list = Object.keys(state.source['visit-details']);
        visit_list.forEach(function(list_item){
            //console.log(list_item);
        });
    }

    // const visit_data = state.source.get(state.source['visit-details']);
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
