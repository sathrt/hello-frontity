import React,{useState} from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Add_New_patient =() => {
    const [values, setValues] = useState({
        uhid: '', name: ''
    });
    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    };

    const saveFormData = async () => {
        const response = await fetch('/patient-details', {
            method: 'POST',
            body: JSON.stringify(values)
        });
        if (response.status !== 200) {
            throw new Error(`Request failed: ${response.status}`);
        }
        return response
    }
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
            const response = await saveFormData();
            response.then(console.log(response.text()))
            alert('Your registration was successfully submitted!');
            setValues({
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
            <input value={values.name} onChange={set('name')}/><br/>
            <button type="submit">Submit</button>
        </form>
    )

}

export default connect(Add_New_patient)
