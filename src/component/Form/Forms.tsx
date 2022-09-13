
import React, { useRef, useState  } from "react";
import useInput from "@rooks/use-input";
import '../Form/Form.css'

interface dataProps {
    title: string,
    desciption: string,
    price: number,

}

export function Form() {
    const titleRef = useRef<HTMLInputElement>(null);
    
    const descriptionRef=useRef();
    const [enterTitle, setTitle] = useState('')
    const [enterDescription, setDescription] = useState('')
    const [enterPrize, setprize] = useState(Number)
    const [formData, setFormData] = useState<dataProps[]>([])
    
    const titlehandlerClick = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>) => {

        setTitle(event.target.value)
    }
    const fileSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target)

    }
    const descriptionhandlerclick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)

    }

    const pricehandlerclick = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setprize(event.target.valueAsNumber)

    }

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (titleRef.current != null) {
            // TypeScript knows that ref is not null here
            console.log("UseRef" + titleRef.current.value);
          }
       // console.log(titleRef.current.value);

        const filledData: dataProps = {
            title: enterTitle,
            desciption: enterDescription,
            price: enterPrize

        }
        console.log(enterTitle, enterDescription, enterPrize)
        localStorage.setItem("Form", JSON.stringify({ title: enterTitle, desc: enterDescription, price: enterPrize }))
        setFormData((prevValue) => [...prevValue, filledData]);
        //setTitle('');
        //setDescription('');
        //setprize(0);
    }

    return (
        <>
            <form onClick={onSubmit} className="form">
                <div>
                    <div>
                        <label>Title </label>
                        <input value={enterTitle}
                            onChange={titlehandlerClick} type='text' ref={titleRef}/>
                    </div>
                    <div>
                        <label>Description </label>
                        <input  value={enterDescription}onChange={descriptionhandlerclick} type='text' />
                    </div>
                    <div>
                        <label>prize </label>
                        <input value={enterPrize} onChange={pricehandlerclick} type='number' min="0.01" step="0.01" />
                    </div>
                    <div>
                        <label>Image </label>
                        <input type="file" onChange={fileSelectHandler} />
                    </div>
                </div>
                <div>
                    <button type="submit" value="Submit">Submit</button>
                </div>
            </form>

        </>
    )
}