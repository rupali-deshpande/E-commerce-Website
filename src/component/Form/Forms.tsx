
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../Form/Form.css'

export function Form(props: any) {

    const [enterTitle, setTitle] = useState('')
    const [enterdescription, setDescription] = useState('')
    const [enterprize, setprize] = useState('')

    const titlehandlerClick = (event:any) => {
        console.log(event.target.value)
    }
    const descriptionhandlerclick = (event:any) => {
       // setDescription(event.target.value)
       console.log('title added')
    }

    const pricehandlerclick = (event:any) => {
        //setprize(event.target.value)
        console.log('title added')
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        const filledData = {
            title: enterTitle,
            desciption: enterdescription,
            price: enterprize

        }
        // setTitle('')
        // setDescription('')
        // setprize('')
       // console.log(filledData)
    }

    return (
        <>
            <form onClick={onSubmit} className="form">
                <div>
                    <div>
                        <label>Title </label>
                        <input  value={enterTitle}
                        onChange={titlehandlerClick} type='text' />
                    </div>
                    <div>
                        <label>Description </label>
                        <input onChange={descriptionhandlerclick} type='text' />
                    </div>
                    <div>
                        <label>prize </label>
                        <input onChange={pricehandlerclick} type='number' min="0.01" step="0.01" />
                    </div>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>

        </>
    )
}