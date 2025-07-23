"use client"
import { useState } from 'react'
import Eye from '../Icons/Eye'
import EyeSlash from '../Icons/EyeSlash'
import forms from '../styles/forms.module.css'

type InputFieldPasswordProps = {
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

export default function InputFieldPassword({ label, name, type, onChange, maxLength }: InputFieldPasswordProps) {
    const [isVisible, setIsVisible] = useState(false)
    if (isVisible) {
        type = 'text'
    }
    return (
        <>
            <div className={forms.inputField}>
                <label htmlFor={name}>{label}</label>
                <input name={name} type={type} onChange={onChange} maxLength={maxLength} required autoComplete='true' />
                <button type='button' className={forms.inlineIcon}
                    onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <EyeSlash /> : <Eye />}</button>
            </div>
        </>
    )
}

;