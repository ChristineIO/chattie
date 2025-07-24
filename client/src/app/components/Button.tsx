import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
    className: string;
    type?: "submit" | "reset" | "button" | undefined;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export default function Button({ className, type, children, onClick }: ButtonProps) {
    return (
        <>
            <button type={type} className={className} onClick={onClick}>{children}</button>
        </>
    )
}