export function CompHeader() {
    return (
        <div className="absolute top-0 left-0 ">
            <header className="bg-white text-red-500 p-6 text-center">
                <h1 className="text-3xl">Sabores do Front</h1>

                <ul>
                    {/*Receitas vai ter o aninhamento desses outros links*/}
                    <li>Receitas</li>
                    <li>Entradas</li>
                    <li>Pratos principais</li>
                    <li>Sobremesas</li>
                </ul>

            </header>
        </div>


    );
}

