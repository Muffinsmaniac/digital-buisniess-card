export default function Header(){
    return(
        <header>        
            <img src="/src/Jesper.jpg" alt="Picture of Jesper." className="pic"/>
            <h1 className="my-name">Jesper Elovsson</h1>
            <h2 className="titel">Fullstack Developer</h2>
            <div className="buttons">
                <button id="email-button" className="button"><i class="fa-solid fa-envelope"></i>Email</button>
                <button id="linked-button" className="button"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>        
        </header>
    )
}