import React,{useState} from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Add_New_patient =(state) => {
    const [values, setValues] = useState({
        uhid: '', patient_name: '',status:'publish',title:''
    });
    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    };

    const saveFormData = async () => {
        values.title = values.uhid;
        const response = await fetch('http://farmfoods.in/wp-json/wp/v2/patient-details', {
            crossDomain:true,
            headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + state.state['bearer-token'].token},
            method: 'POST',
            body: JSON.stringify(values)
        });
        if (response.status !== 201  ) {
            throw new Error(`Request failed: ${response.status}`);
        }
        return response
    }
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
            const response_2 = await saveFormData();
            alert('Your registration was successfully submitted!');
            setValues( {
                uhid: '', name: ''
            });
        } catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
    }
    return(
        <form onSubmit={onSubmit}>
            <h2>Add New Patient</h2>
            <label>UHID:</label><br/>
            <input value={values.uhid} required onChange={set('uhid')}/><br/>
            <label>Name:</label><br/>
            <input value={values.name} onChange={set('patient_name')}/><br/>
            <button type="submit">Submit</button>
        </form>
    )

}

export default connect(Add_New_patient)
