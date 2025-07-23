type EyeProps = {
    background?: string;
    fill?: string;
}

export default function Eye({ background, fill }: EyeProps) {
    background = ""
    fill = "#323232"
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path fill={background} d="M0 0h24v24H0z" />
            <path
                fill={fill}
                fillRule="evenodd"
                d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM6.242 6.343a8 8 0 0 1 11.314 0l2.168 2.168c.627.627 1.167 1.167 1.541 1.658.401.525.705 1.11.705 1.831 0 .72-.303 1.306-.705 1.832-.374.49-.914 1.03-1.541 1.657l-2.168 2.168a8 8 0 0 1-11.314 0l-2.168-2.168c-.626-.627-1.167-1.167-1.54-1.658-.402-.525-.706-1.11-.706-1.831 0-.72.304-1.306.705-1.832.374-.49.915-1.03 1.541-1.657l.047-.047 2.121-2.12Z"
                clipRule="evenodd"
            />
            <path
                fill={fill}
                fillRule="evenodd"
                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                clipRule="evenodd"
            />
        </svg>)
}