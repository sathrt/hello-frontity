import React,{ useEffect , useState} from "react"
import { connect } from "frontity"


const Patient = ({state,libraries,actions}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const uhid = post.uhid;
    const {api} = libraries.source;
    var visit_link = '';

    const [flag, setFlag] = useState({
        isReady: false,
        items: []
    });
    useEffect( async () => {
        // actions.source.fetch("visit-details/?meta_key=uhid&meta_value="+uhid,{ endpoint:"visit-details"});
        // actions.source.fetch("/visit-details/?meta_key=uhid&meta_value="+uhid);
        // const response = await libraries.source.api.get({ endpoint: "/myrest/visit-details/"+uhid });
        const response = await libraries.source.api.get({ endpoint: "visit-details/?meta_key=uhid&meta_value="+uhid });
        const entitiesAdded = await libraries.source.populate({ response, state });
        // entitiesAdded.forEach(({ date_of_visit, id, link }) => {
        //     if (visit_link != '') {
        //         visit_link = link;
        //     }
        // });

        await setFlag({
            isReady: true,
            items: entitiesAdded
        });
    },[]);
    // const visits = state.source.get("/visit-details/?meta_key=uhid&meta_value="+uhid);
    // const visits = state.source.get("/visit-details/?meta_key=uhid&meta_value="+uhid);
    console.log('Return Ready');
    if (flag.isReady)  {
        const visit_data = state.source['visit-details'];
        const visit_ids = Object.keys(visit_data);
        var dates = [];
        var i=0;
        visit_ids.forEach(
            function (visit_id)
            {
                console.log(state.source['visit-details'][visit_id]['date_of_visit']);
                if (state.source['visit-details'][visit_id]['uhid']== post.uhid) {
                    dates.push(<div key={i}>{state.source['visit-details'][visit_id]['date_of_visit']}</div>);
                    i++;
                }
            }
        ); //added for git commit
        return (
            <div>
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
