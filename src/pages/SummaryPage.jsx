import '../App.css';

const summaryIntro =
    "I'm Shintaro Miyata, a web developer and software engineer focused on building reliable, scalable experiences. I split my time between studying web development at Tamwood Career College and collaborating on production projects.";

const quickFacts = [
    { label: 'Location', value: 'Miyazaki, Japan' },
    { label: 'Age', value: '29' },
    { label: 'Languages', value: 'Japanese / English' },
    { label: 'Current Focus', value: 'Web Developer course at Tamwood Career College' },
    // {
    //     label: 'Fun Fact',
    //     value: "My friend Nelson from Mexico keeps me supplied with free handmade tortillas."
    // }
];

const skillSections = [
    {
        title: 'Backend',
        items: [
            { name: 'PHP, Laravel', level: 'Advanced' },
            { name: 'Go, Echo, Python', level: 'Intermediate' },
            { name: 'Rust', level: 'Beginner' },
        ],
    },
    {
        title: 'Frontend',
        items: [
            { name: 'TypeScript, JavaScript, HTML & CSS, Node.js', level: 'Advanced' },
            { name: 'React, Vue.js, Next.js', level: 'Intermediate' },
            { name: 'Angular, Nuxt.js', level: 'Beginner' },
        ],
    },
    {
        title: 'Database & DevOps',
        items: [
            { name: 'MySQL', level: 'Advanced' },
            { name: 'PostgreSQL', level: 'Beginner' },
            { name: 'Git', level: 'Advanced' },
            { name: 'Docker', level: 'Intermediate' },
        ],
    },
    {
        title: 'Specialization',
        items: [
            { name: 'Clean Architecture', level: 'Core' },
            { name: 'Database & API Design', level: 'Core' },
            { name: 'Performance & Reliability', level: 'Core' },
        ],
    },
];

const experienceTimeline = [
    {
        period: 'Present',
        role: 'Student',
        place: 'Tamwood Career College',
        details: ['Studying advanced web development topics and responsive design.'],
    },
    {
        period: 'May – Aug 2025',
        role: 'Web Developer',
        place: 'Web App Development Company',
        details: [
            'Shipped a new management app page including UI, API endpoints, database migrations, and automated tests.',
        ],
    },
    {
        period: 'Oct 2023 – 2024',
        role: 'Software Engineer',
        place: 'Web App Development Company',
        details: [
            'Maintained smartphone POS applications and added payment-terminal integrations supporting new workflows.',
        ],
    },
    {
        period: 'Apr 2022 – Sept 2023',
        role: 'Software Engineer',
        place: 'Cryptocurrency Company',
        details: [
            'Built customer management screens and a desktop trading app.',
            'Created SDK foundations for cryptocurrency trading integrations.',
        ],
    },
    {
        period: 'Aug 2019 – Mar 2022',
        role: 'Junior Developer',
        place: 'Second-hand Goods Company',
        details: [
            'Owned maintenance and new development for internal management systems.',
            'Delivered backend updates for operational sites.',
        ],
    },
];

const portfolioLinks = [
    {
        name: 'basic-navigation-example',
        description: 'HTML/CSS navigation prototype highlighting responsive layouts.',
        href: 'https://github.com/shint1015/basic-navigation-example',
    },
    {
        name: 'css-positioning-examples',
        description: 'Hands-on CSS positioning patterns distilled into reusable snippets.',
        href: 'https://github.com/shint1015/css-positioning-examples',
    },
    {
        name: 'basic-html-css-example',
        description: 'Starter structure showing clean HTML + CSS organization.',
        href: 'https://github.com/shint1015/basic-html-css-example',
    },
];

const contactLinks = [
    { label: 'GitHub', href: 'https://github.com/shint1015' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shintaro-miyata-97b452304/' },
];

function SummaryPage() {
    return (
        <div className='summary-page'>
            <section className='summary-hero'>
                <h1>Shintaro Miyata</h1>
                <p>{summaryIntro}</p>
            </section>

            <section className='summary-section'>
                <h2>Quick Facts</h2>
                <ul className='summary-facts'>
                    {quickFacts.map(fact => (
                        <li key={fact.label}>
                            <span className='fact-label'>{fact.label}</span>
                            <span className='fact-value'>{fact.value}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className='summary-section'>
                <h2>Skills Snapshot</h2>
                <div className='skills-grid'>
                    {skillSections.map(section => (
                        <article key={section.title} className='skill-card'>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.items.map(item => (
                                    <li key={item.name}>
                                        <span className='skill-name'>{item.name}</span>
                                        <span className='skill-level'>{item.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className='summary-section'>
                <h2>Experience Timeline</h2>
                <ul className='experience-timeline'>
                    {experienceTimeline.map(item => (
                        <li key={`${item.period}-${item.role}`} className='timeline-item'>
                            <div className='timeline-header'>
                                <span className='timeline-period'>{item.period}</span>
                                <div>
                                    <h3>{item.role}</h3>
                                    <p className='timeline-place'>{item.place}</p>
                                </div>
                            </div>
                            <ul className='timeline-details'>
                                {item.details.map(detail => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>

            <section className='summary-section'>
                <h2>Portfolio Highlights</h2>
                <div className='portfolio-grid'>
                    {portfolioLinks.map(item => (
                        <a
                            key={item.name}
                            href={item.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='portfolio-card'
                        >
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className='summary-section'>
                <h2>Connect</h2>
                <div className='contact-links'>
                    {contactLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SummaryPage;
