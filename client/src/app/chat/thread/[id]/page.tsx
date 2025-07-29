"use client"

import { getOneThread } from "@/api/api"
import ChatBubble from "@/src/app/components/ChatBubble/ChatBubble"
import chatBody from "@/src/app/components/ChatBody/chatBody.module.css"
import ChatInput from "@/src/app/components/ChatInput/ChatInput"
import moment from "moment"
import { use, useEffect, useState } from "react"

export default function ThreadApp({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)

    let [thread, setThread] = useState<any[]>([])


    useEffect(() => {
        async function fetchThread() {
            const data = await getOneThread(id)
            const messages = data.messages
            setThread(messages)

            console.log("Messages Array:", messages)
        }
        fetchThread()
    }, [id])

    return (
        <div className={`${chatBody.bg}`}>
            <h1 className="text-center text-5xl py-5">Your Chat Thread</h1>
            {thread.map((message: any) => (
                <div key={message._id}>
                    <article className={`${chatBody.messageSection}`}>
                        <section>
                            <ChatBubble name={message.sender} time={moment(message.timestamp).format('h:mm:ss A')} message={message.content} />
                        </section>
                    </article>
                </div>
            ))
            }
            <div>
                <ChatInput />
            </div>
        </div>
    )
}