type ButtonProps = {
    classname: string;
    children?: React.ReactNode;
};

export default function Button({ classname, children }: ButtonProps) {
    return (
        <>
            <button className={classname}>{children}</button>
        </>
    )
}