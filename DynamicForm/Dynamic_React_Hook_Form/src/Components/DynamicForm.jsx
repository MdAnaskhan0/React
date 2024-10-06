import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { TiDelete } from "react-icons/ti";


const DynamicForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "skills"
    });

    const formSubmit = (data) => {
        console.log("Form Submitted")
        console.log("Data", data)
    }

    const addInputSkill = () => {
        append({ skill: "" });
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-200 min-h-[600px] min-w-[60%] text-center rounded-2xl">
                <h3 className='text-2xl font-bold py-8 tracking-wide'>React Hook Form</h3>
                <div>
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className='flex flex-col items-center justify-center space-y-2'>
                            <input className='w-[40%] px-5 py-3 border-2 border-gray-400 rounded-md' type="text" placeholder='Enter your name' {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please fill your name"
                                }
                            })} />
                            <p className='text-red-700'>{errors.name?.message}</p>

                            <input className='w-[40%] px-5 py-3 border-2 border-gray-400 rounded-md' type="email" placeholder='Enter your email' {...register("email", {
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Provide authentic email"
                                },
                                required: {
                                    value: true,
                                    message: "Please fill your email"
                                }
                            })} />
                            <p className='text-red-700'>{errors.email?.message}</p>

                            {fields.map((field, index) => (
                                <div key={field.id} className='flex items-center w-[40%] space-x-2'>
                                    <input className='w-full px-5 py-3 border-2 border-gray-400 rounded-md' type="text" placeholder='Enter your skill' {...register(`skills.${index}.skill`, {
                                        required: {
                                            value: true,
                                            message: "Please fill your skills"
                                        }
                                    })} />
                                    <p type='button' onClick={() => remove(index)} className='cursor-pointer px-1 py-1  bg-slate-400 text-[#fff] text-1xl rounded-md hover:bg-slate-500'>
                                        <TiDelete className='text-[42px]' />
                                    </p>
                                    <p className='text-red-700'>{errors.skills?.[index]?.skill?.message}</p>
                                </div>
                            ))}

                            <div className='flex flex-row space-x-7'>
                                <p onClick={addInputSkill} className='cursor-pointer px-10 py-2 mt-5 bg-slate-400 text-[#fff] text-1xl rounded-sm hover:bg-slate-500'>Add Skill</p>
                            </div>
                        </div>
                        <button className='px-10 py-2 mt-10 bg-slate-400 text-[#fff] text-1xl rounded-sm hover:bg-slate-500' type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DynamicForm
