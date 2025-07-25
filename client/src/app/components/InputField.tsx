import { HTMLAttributes } from "react";
import forms from "../styles/forms.module.css"

type InputFieldProps = {
    htmlFor?: string;
    name: string;
    label?: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    classname?: string;
    id?: string;
    value?: string;
    maxLength?: number;
}

export default function InputField({ label, name, type, onChange, maxLength, id, value, classname } : InputFieldProps) {
    return (
        <>
            <div className={forms.inputField}>
                <label htmlFor={name}>{label}</label>
                <input name={name} type={type} onChange={onChange} maxLength={maxLength} id={id} value={value} autoComplete="true" className={classname} />
            </div>
        </>
    )
}