"use client"

import ChatBubble from "../ChatBubble/ChatBubble"
import ChatInput from "../ChatInput/ChatInput"
import chatBody from "../ChatBody/chatBody.module.css"

export default function Thread() {
    return (
        <div className={`${chatBody.bg}`}>
            <article className={`${chatBody.messageSection}`}>
                <section>
                    <ChatBubble name="Ruby Jane" time="14:45" message="Are you coming?" />
                </section>
                <section>
                    <ChatBubble name="Gloria" time="15:45" message="I'm coming with you Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium molestias exercitationem eos iure debitis quo, assumenda quam cumque soluta quaerat explicabo quis reiciendis, sed blanditiis neque enim laudantium officiis." />
                </section>
            </article>
            <div>
                <ChatInput />
            </div>
        </div>
    )
}