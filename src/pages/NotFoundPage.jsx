import '../App.css';

function NotFoundPage() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Looks like you wandered off the portfolio trail. Want to head back to the chat?</p>
            <a className='not-found-link' href='/'>Return to Chat</a>
        </div>
    );
}

export default NotFoundPage;
