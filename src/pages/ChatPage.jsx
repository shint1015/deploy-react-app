import { useEffect, useMemo, useState } from 'react';
import '../App.css';

const knowledgeBase = [
    {
        triggers: [
            'hello',
            'hi',
            'who are you',
            'introduce',
            'tell me about yourself',
            'shintaro',
            'miyata',
        ],
        response:
            "Hi there! I'm Shintaro Miyata, a web developer and software engineer who loves building scalable, high-performance experiences. Right now I'm sharpening my craft in the Web Developer program at Tamwood Career College while sharing experiments through my portfolio.",
    },
    {
        triggers: ['location', 'where are you', 'where do you live', 'based'],
        response:
            "I'm currently based in Miyazaki, Japan. That's home, even while I'm collaborating remotely and studying abroad tracks.",
    },
    {
        triggers: ['age', 'how old'],
        response:
            "I'm 29 years old—old enough to have seen a few production incidents and young enough to get excited about the next experiment.",
    },
    {
        triggers: ['study', 'school', 'tamwood', 'college', 'learning'],
        response:
            "I'm enrolled in the Web Developer course at Tamwood Career College. It's a great place to push responsive design, accessibility, and modern tooling while learning with an international crew.",
    },
    {
        triggers: ['language', 'languages', 'speak'],
        response:
            'I speak Japanese and English, so feel free to ask questions in either—though I respond here in English.',
    },
    {
        triggers: ['hobby', 'free time', 'fun', 'spare time'],
        response:
            "When I'm not coding, you'll probably spot me on a badminton court, catching a movie or anime series, or just taking a long walk when the weather actually cooperates.",
    },
    {
        triggers: ['skill', 'skills', 'stack', 'technology', 'tech stack'],
        response:
            'My toolkit leans on PHP and Laravel at an advanced level, with Go, Echo, and Python in the mix. On the frontend I work comfortably with TypeScript, JavaScript, HTML & CSS, and Node.js, plus mid-level muscle with React, Vue, and Next.js. Git and Docker keep everything moving smoothly.',
    },
    {
        triggers: ['specialization', 'focus', 'strength', 'what do you specialize'],
        response:
            "I focus on clean architecture, database design, API design, and keeping systems fast and reliable. It's all about shipping features without sacrificing long-term maintainability.",
    },
    {
        triggers: ['experience', 'work', 'career', 'job'],
        response:
            "Career snapshot: I started in 2019 supporting internal systems for a second-hand goods company, moved into crypto-focused platforms in 2022, tackled smartphone POS apps in 2023, and built management tooling for a web app company in 2025. These days I'm a student at Tamwood, still collaborating on real projects.",
    },
    {
        triggers: ['portfolio', 'project', 'projects', 'github'],
        response:
            'Want to peek at some work? Try projects like my basic navigation example, CSS positioning examples, or the HTML/CSS starter in my portfolio. My GitHub is packed with the details.',
    },
    {
        triggers: ['contact', 'reach', 'linkedin', 'email'],
        response:
            'Reach out through the contact form on my site, or connect via GitHub and LinkedIn. I keep an eye on all of them and love hearing about thoughtful collaborations.',
    },
    {
        triggers: ['nelson', 'tortilla', 'friend'],
        response:
            "You're asking about Nelson? He's my Mexican friend who insists on making tortillas for free. Best networking perk ever, hands down.",
    },
];

const fallbackResponses = [
    "That's a cool question, but let's keep it about my self-intro. Ask me anything about my background or work!",
    "I'm down to chat, yet this chatbot is all about me. Try asking about my experience, skills, or even my friend Nelson.",
    "Nice! I'll save that topic for later. For now, what do you want to know about Shintaro Miyata?",
    "I might dodge that one, but I'm happy to share more about my journey, projects, or day-to-day interests.",
];

const createMessageId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

function getResponse(message) {
    const normalized = message.toLowerCase();

    for (const entry of knowledgeBase) {
        const matched = entry.triggers.some(
            trigger => normalized.includes(trigger) || message.includes(trigger)
        );

        if (matched) {
            return entry.response;
        }
    }

    const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
    return fallbackResponses[randomIndex];
}

function ChatPage() {
    const [messages, setMessages] = useState([
        {
            id: 'bot-intro',
            sender: 'bot',
            text: '',
            fullText:
                "Hey, I'm Shintaro Miyata. Curious about my background? Ask away and I'll introduce myself in detail.",
            typing: true,
        },
    ]);
    const [input, setInput] = useState('');

    const chatTitle = useMemo(
        () => ({
            title: 'Shintaro Miyata Self-Intro Chat',
            tagline: 'Ask me anything (in English) about my story, skills, or projects.',
        }),
        []
    );

    const handleSubmit = event => {
        event.preventDefault();
        const trimmed = input.trim();

        if (!trimmed) {
            return;
        }

        const botReply = getResponse(trimmed);

        const userMessage = {
            id: createMessageId(),
            sender: 'user',
            text: trimmed,
            typing: false,
        };
        const botMessage = {
            id: createMessageId(),
            sender: 'bot',
            text: '',
            fullText: botReply,
            typing: true,
        };

        setMessages(prev => [...prev, userMessage, botMessage]);
        setInput('');
    };

    useEffect(() => {
        const typingMessage = messages.find(message => message.typing && message.sender === 'bot');

        if (!typingMessage) {
            return;
        }

        const fullText = typingMessage.fullText ?? '';

        if (typingMessage.text.length >= fullText.length) {
            if (typingMessage.typing) {
                setMessages(prev =>
                    prev.map(message =>
                        message.id === typingMessage.id ? { ...message, typing: false } : message
                    )
                );
            }
            return;
        }

        const timeout = setTimeout(() => {
            setMessages(prev =>
                prev.map(message => {
                    if (message.id !== typingMessage.id) {
                        return message;
                    }

                    const nextLength = Math.min(fullText.length, message.text.length + 1);
                    const nextText = fullText.slice(0, nextLength);
                    const stillTyping = nextText.length < fullText.length;

                    return {
                        ...message,
                        text: nextText,
                        typing: stillTyping,
                        fullText,
                    };
                })
            );
        }, 25);

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div className='chat-app'>
            <header className='chat-header'>
                <h1>{chatTitle.title} hello!!!</h1>
                <p>{chatTitle.tagline}</p>
            </header>

            <section className='chat-log' aria-live='polite'>
                {messages.map((message, index) => (
                    <div
                        key={`${message.id}-${index}`}
                        className={`chat-message ${message.sender}`}
                    >
                        <div className={`chat-message-content ${message.sender}`}>
                            <span className='avatar' aria-hidden='true'>
                                {message.sender === 'bot' ? 'SM' : 'You'}
                            </span>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </section>

            <form className='chat-input' onSubmit={handleSubmit}>
                <label className='input-label' htmlFor='message-box'>
                    Message
                </label>
                <div className='input-row'>
                    <textarea
                        id='message-box'
                        name='message'
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        placeholder='Type your question here (Shift+Enter for a new line)'
                        onKeyDown={event => {
                            if (event.key === 'Enter' && !event.shiftKey) {
                                event.preventDefault();
                                handleSubmit(event);
                            }
                        }}
                    />
                    <button type='submit'>Send Matheus</button>
                </div>
            </form>
        </div>
    );
}

export default ChatPage;
