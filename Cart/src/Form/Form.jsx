import React, { useState } from 'react';

export default function() {
    const [name, controlName] = useState('');
    const [email, controlEmail] = useState('');
    const [password, controlPass] = useState('');

    const nameHandler = (e) => {
        controlName(e.target.value);
    };

    const emailHandler = (e) => {
        controlEmail(e.target.value);
    };

    const passHandler = (e) => {
        controlPass(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the page from refreshing
        console.log("Register Done");
        let user ={
            Name: name,
            Email: email,
            Password: password
        }

        console.log(user);
    };

    return (
        <div>
            <div>
                <h1>Registration Form</h1>
                <form action="" onSubmit={submitHandler}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name='name' required onChange={nameHandler} value={name} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" name='email' required onChange={emailHandler} value={email} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name='password' required onChange={passHandler} value={password} />
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
