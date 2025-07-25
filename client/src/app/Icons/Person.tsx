type PersonProps = {
  background?: string;
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Person = ({ background, className, fill, width, height }: PersonProps) => {
  fill = "#6e3a3a"
  width = height = 100
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="_x32_"
      width={width}
      height={height}
      fill={fill}
      stroke="#6e3a3a"
      viewBox="0 0 512 512"
      className={className}
    >
      <g id="SVGRepo_iconCarrier">
        <style>{".st0{fill:#2b1212}"}</style>
        <path
          d="M256 265.308c73.252 0 132.644-59.391 132.644-132.654C388.644 59.412 329.252 0 256 0c-73.262 0-132.643 59.412-132.643 132.654 0 73.263 59.381 132.654 132.643 132.654zM425.874 393.104c-5.922-35.474-36-84.509-57.552-107.465-5.829-6.212-15.948-3.628-19.504-1.427-27.04 16.672-58.782 26.399-92.819 26.399-34.036 0-65.778-9.727-92.818-26.399-3.555-2.201-13.675-4.785-19.505 1.427-21.55 22.956-51.628 71.991-57.551 107.465C71.573 480.444 164.877 512 256 512s184.427-31.556 169.874-118.896z"
          className="st0"
        />
      </g>
    </svg>
  )
}

export default Person