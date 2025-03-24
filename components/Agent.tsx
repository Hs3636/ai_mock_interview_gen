import Image from "next/image";
import {cn} from "@/lib/utils";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = [
        'Whats your name?',
        'My name is John Doe, nice to meet you!'
    ];
    const lastMessage = messages[messages.length - 1];

    return (
        <>
        <div className="call-view">
            <div className="card-interviewer p-4">
                <div className="avatar">
                    <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
                    {isSpeaking && <span className="animate-speak" />}
                </div>
                <h3 className="mt-2">AI Interviewer</h3>
            </div>

            <div className="card-border p-4">
                <div className="card-content space-y-2">
                    <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className="rounded-full object-cover size-[120px]" />
                    <h3 className="text-center">{userName}</h3>
                </div>
            </div>
        </div>
            {messages.length > 0 && (
                <div className="transcript-border mt-4 p-2">
                    <div className="transcript">
                        <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className="w-full flex justify-center mt-4">
                {callStatus !== 'ACTIVE' ? (
                    <button className="relative btn-call">
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !=='CONNECTING' & 'hidden')}
                             />

                            <span>
                                {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '. . . '}
                            </span>
                    </button>
                ) : (
                    <button className="btn-disconnect">
                        End
                    </button>
                )}
            </div>
        </>
    )
}
export default Agent