type HeaderProps = {
    title? : string;
}




const Header = ({ title = "Meu site" } : HeaderProps) => {
    return(
        <header className="bg-blue-500 text-white p-4 text-center">
            <h1 className="text-xl font-bold">{ title }</h1>
        </header>
    )
}
export default Header;