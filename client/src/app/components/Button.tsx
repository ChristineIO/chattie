import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
    classname: string;
    type?: "submit" | "reset" | "button" | undefined;
    children?: React.ReactNode;
};

export default function Button({ classname, type, children }: ButtonProps) {
    return (
        <>
            <button type={type} className={classname}>{children}</button>
        </>
    )
}