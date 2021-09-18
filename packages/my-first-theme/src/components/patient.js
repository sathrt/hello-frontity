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

    // useEffect(() => {
    //     actions.source.fetch("/myrest/visit-details/"+uhid);
    // },[]);
    // function get_visits ()
    // {
    //     // const response = libraries.source.api.get({ endpoint: "/myrest/visit-details/"+uhid });
    //     const response = state.source.get("/myrest/visit-details/"+uhid );
    //     // response.then(
    //     //     function (value)
    //     //     {
    //     //         console.log('success');
    //     //         const entitiesAdded = libraries.source.populate({ response, state });
    //     //     },
    //     //     function (error)
    //     //     {
    //     //         console.log('error');
    //     //     }
    //     // );
    //     // const entitiesAdded = libraries.source.populate({ response, state });
    //     // entitiesAdded.forEach(({ date_of_visit, id, link }) => {
    //     //     //console.log({ date_of_visit, id, link });
    //     // });
    //     return "done";
    // }
    function MakeQuerablePromise(promise) {
        // Don't modify any promise that has been already modified.
        if (promise.isFulfilled) return promise;

        // Set initial state
        var isPending = true;
        var isRejected = false;
        var isFulfilled = false;

        // Observe the promise, saving the fulfillment in a closure scope.
        var result = promise.then(
            function(v) {
                isFulfilled = true;
                isPending = false;
                return v;
            },
            function(e) {
                isRejected = true;
                isPending = false;
                throw e;
            }
        );

        result.isFulfilled = function() { return isFulfilled; };
        result.isPending = function() { return isPending; };
        result.isRejected = function() { return isRejected; };
        return result;

    }
    var visits= '';
    useEffect(() => {
        visits = MakeQuerablePromise(get_visits());
    },[]);
    // const visits = MakeQuerablePromise(get_visits());
    // const visits = state.source.get("/myrest/visit-details/"+uhid);
    // visits.then(
    //     function (value){
    //         console.log('success');
    //         return "ff";
    //                     },
    //     function (error){console.log('fail');}
    // );

    // var visit_list='';
    // if (state.source['visit-details'] == null)
    // {
    //
    // }
    // else {
    //     visit_list = Object.keys(state.source['visit-details']);
    //     visit_list.forEach(function(list_item){
    //         //console.log(list_item);
    //     });
    // }

    // const visit_data = state.source.get(state.source['visit-details']);
    console.log('Return Ready');
    if (visits=='') {
        return (
            <div>
                {/*<h2>{post.title.rendered}</h2>*/}
                <h2>UHID:{post.uhid}</h2>
                <div>Diagnosis:{post.diagnosis}</div>
                {/*<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />*/}
            </div>
        );
    }
    else {
        return (
            <div>
                {/*<h2>{post.title.rendered}</h2>*/}
                <h2>UHID:{post.uhid}</h2>
                <div>Diagnosis:{post.diagnosis}</div>
                <div>List</div>
                {/*<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />*/}
            </div>
        );
    }

}

export default connect(Patient)
