"use client"

import { getOneThread } from "@/api/api"
import ChatBubble from "@/src/app/components/ChatBubble/ChatBubble"
import chatBody from "@/src/app/components/ChatBody/chatBody.module.css"
import ChatInput from "@/src/app/components/ChatInput/ChatInput"
import { use, useEffect, useState } from "react"

export default function ThreadApp({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    let [thread, setThread] = useState<any[]>([]);


    useEffect(() => {
        async function fetchThread() {
            const data = await getOneThread(id);
            const messages = data.messages;
            setThread(messages);

            console.log("Messages Array:", messages);
        }
        fetchThread();
    }, [id])

    return (
        <>
            {thread.map((message: any) => (
                <div className={`${chatBody.bg}`} key={message._id}>
                    <article className={`${chatBody.messageSection}`}>
                        <section>
                            <ChatBubble name={message.sender} time={message.timestamp} message={message.content} />
                        </section>
                    </article>
                    <div>
                        <ChatInput />
                    </div>
                </div>
            ))
            }
        </>
    )
}