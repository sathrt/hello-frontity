import React,{useState} from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const Login =() => {
    const [values, setValues] = useState({
        username: '', password: ''
    });
    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    };

    const saveFormData = async () => {
        const response = await fetch('http://farmfoods.in/wp-json/jwt-auth/v1/token', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
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
            const response = saveFormData();
            response.then(response => response.json()).then(responseJson => {
                console.log(responseJson);})
            // response.then(console.log(response.text()))
            alert('Your login is successful!');
            setValues({
                username: '', password: ''
            });
        } catch (e) {
            alert(`Login failed! ${e.message}`);
        }
    }
    return(
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <label>Username:</label><br/>
            <input value={values.uhid} required onChange={set('username')}/><br/>
            <label>Password:</label><br/>
            <input value={values.name} onChange={set('password')}/><br/>
            <button type="submit">Submit</button>
        </form>
    )

}

export default connect(Login)
