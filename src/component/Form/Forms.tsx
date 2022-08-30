
import React, { useState } from "react";

import '../Form/Form.css'

interface dataProps {
    //id: string,
    title: string,
    desciption: string,
    price: number,

}

export function Form() {

    const [enterTitle, setTitle] = useState('')
    const [enterDescription, setDescription] = useState('')
    const [enterPrize, setprize] = useState(0)
    const [formData, setFormData] = useState<dataProps[]>([])
    const titlehandlerClick = (event: React.ChangeEvent<HTMLInputElement>) => {

        setTitle(event.target.value)
    }
    const fileSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target)

    }
    const descriptionhandlerclick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)

    }

    const pricehandlerclick = (event: React.ChangeEvent<HTMLInputElement>) => {
       // setprize(event.target.value)

    }

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const filledData: dataProps = {
            title: enterTitle,
            desciption: enterDescription,
            price: enterPrize

        }
        console.log(enterTitle, enterDescription, enterPrize)
        localStorage.setItem("Form", JSON.stringify({ title: enterTitle, desc: enterDescription, price: enterPrize }))
        setFormData((prevValue) => [...prevValue, filledData])
    }

    return (
        <>
            <form onClick={onSubmit} className="form">
                <div>
                    <div>
                        <label>Title </label>
                        <input value={enterTitle}
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
                    <div>
                        <label>Image </label>
                        <input type="file" onChange={fileSelectHandler} />
                    </div>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>

        </>
    )
}