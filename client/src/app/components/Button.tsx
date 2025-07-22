import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
    className: string;
    type?: "submit" | "reset" | "button" | undefined;
    children?: React.ReactNode;
};

export default function Button({ className, type, children }: ButtonProps) {
    return (
        <>
            <button type={type} className={className}>{children}</button>
        </>
    )
}