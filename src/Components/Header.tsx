export default function Header(){
    return(
        <header>        
            <img src="/src/Jesper.jpg" alt="Picture of Jesper." className="pic"/>
            <h1 className="my-name">Jesper Elovsson</h1>
            <h2 className="titel">Fullstack Developer</h2>
            <div className="buttons">
                <a href="mailto:jesper.elovsson92@gmail.com">
                    <button id="email-button" className="button" ><i class="fa-solid fa-envelope"></i>Email</button>
                </a>
                <a href="https://www.linkedin.com/in/jesper-elovsson-11150013a" target="_blank">
                    <button id="linked-button" className="button"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
                </a>
            </div>        
        </header>
    )
}