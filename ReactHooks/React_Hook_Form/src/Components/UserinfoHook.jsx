import React from "react";
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

let count=0
const UserinfoHook = () => {

    const form = useForm();
    const { register, control, handleSubmit, formState: { errors } } = form;
    // console.log(form)
    const formSubmit = (e) => {
        console.log("data", e)
    }
    count++
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-center">User Info Form {count}</h1>
            <form action="" onSubmit={handleSubmit(formSubmit)} noValidate>
                <div className="flex flex-col space-y-4 text-center">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("name", {
                            required: {
                                value: true,
                                message: "Please fill your name."
                            }
                        })}
                    />
                    <p className="text-center text-red-500">{errors.name?.message}</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid Email id"
                            },
                            required: {
                                value: true,
                                message: "Please fill your email"
                            }
                        })}
                    /><p className="text-center text-red-500">{errors.email?.message}</p>
                    <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("phone", {
                            required: {
                                value: true,
                                message: "Please your mobile number"
                            }
                        })}
                    /><p className="text-center text-red-500">{errors.phone?.message}</p>
                    <button
                        type="submit"
                        className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default UserinfoHook;
