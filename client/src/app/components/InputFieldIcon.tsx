import forms from '../styles/forms.module.css'

type InputFieldIconProps = {
    htmlFor?: string;
    name?: string;
    label?: string;
    type: string;
    btnType?: "submit" | "reset" | "button" | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    maxLength?: number;
    icon: React.JSX.Element;
    isDisabled?: boolean;
}

export default function InputFieldIcon({ label, name, type, btnType, onChange, onFocus, maxLength, id, value, className, icon, placeholder, isDisabled }: InputFieldIconProps) {
    if (btnType === undefined || btnType === null) {
        btnType = "button"
    }
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} onChange={onChange} onFocus={onFocus} maxLength={maxLength} required autoComplete='true' id={id} value={value} className={className} placeholder={placeholder} />
            <button type={btnType} className={forms.inlineIcon} disabled={isDisabled}>
                {icon}
            </button>
        </>
    )
}