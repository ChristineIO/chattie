import forms from '../styles/forms.module.css'

type InputFieldIconProps = {
    htmlFor?: string;
    name?: string;
    label?: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    maxLength?: number;
    icon: React.JSX.Element
}

export default function InputFieldIcon({ label, name, type, onChange, maxLength, id, value, className, icon, placeholder }: InputFieldIconProps) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} onChange={onChange} maxLength={maxLength} required autoComplete='true' id={id} value={value} className={className} placeholder={placeholder} />
            <button type='button' className={forms.inlineIcon}>
                {icon}
            </button>
        </>
    )
}