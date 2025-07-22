import { HTMLAttributes } from "react";
import forms from "../styles/forms.module.css"

type TextAreaProps = {
    htmlFor?: string;
    name: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    classname?: string;
    id?: string;
    value?: string;
    maxLength?: number;
}

export default function TextArea({ label, name, onChange, maxLength, id, value, classname } : TextAreaProps) {
    return (
        <>
            <div className={forms.inputField}>
                <label htmlFor={name}>{label}</label>
                <textarea name={name} onChange={onChange} maxLength={maxLength} id={id} value={value} autoComplete="true" className={classname} />
            </div>
        </>
    )
}