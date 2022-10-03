import styles from '../../../../styles/container/inbox-page-css/components/chats.module.css'
import Image from 'next/image'

export default function Message() {
    
        return (
            <div key={chat_message.message}>
                <figure>
                    <Image src={image} style={{ borderRadius: '1.5rem' }} width={'100%'} height={'100%'} objectFit='cover' layout='responsive'></Image>
                </figure>
                <span>
                    <h5>{chat_message.name}<p>{chat_message.date}</p></h5>
                    <aside>{chat_message.message}</aside>
                </span>
            </div>
        )
}