import React, {useState} from "react";

const Userinfo = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const onChangeValue =(e)=>{
        let itemName = e.target.name;
        let itemValue = e.target.value;

        if(itemName === "name"){
            setName(itemValue)
        }
        else if(itemName === "email"){
            setEmail(itemValue)
        }
        else if(itemName === "phone"){
            setPhone(itemValue)
        }
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        // console.log("Form Submit")

        let personInfo = {
            name: name,
            email: email,
            phone: phone
        }
        if(name === ""){
            alert("Please fill you name")
        }
        else if(email === ""){
            alert("Please fill you email")
        }
        else if(phone === ""){
            alert("Please fill you phone")
        }
        else{
            console.log("userInfo",personInfo)
        }
    }


    return (
        <div className="mt-[150px]">
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-6 text-center">User Info Form</h1>
                <form action="" onSubmit={submitHandler}>
                    <div className="flex flex-col space-y-4 text-center">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" value={name} onChange={onChangeValue} id="name"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" value={email} onChange={onChangeValue} id="email"
                        />
                        <input
                            type="tel"
                            placeholder="Enter your phone"
                            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" name="phone" value={phone} onChange={onChangeValue} id="phone"
                        />
                        <button
                            type="submit"
                            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Userinfo;
