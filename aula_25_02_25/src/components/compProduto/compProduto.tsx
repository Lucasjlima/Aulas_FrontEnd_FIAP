import Image from "next/image";

const compProduto = () =>{
    return(
        <>
            <h1>Produto</h1>

            <Image src="/images/shrek.jpg" alt="Shrek" width={ 100 } height={ 100 } />
        </>
    )
}
export default compProduto;