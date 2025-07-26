import chatBody from "./chatBody.module.css"

export default function ChatBody({children}:any) {
    return (
        <>
            <div className={`flex-1 bg-gradient-to-br from-[#0e0d1a] to-[#1a132b] p-6 text-white overflow-y-auto ${chatBody.body}`}>
                {children}
            </div>
        </>
    )
}