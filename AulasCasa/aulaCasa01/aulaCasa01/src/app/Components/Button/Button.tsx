type ButtonProps = {
    text : String;
    onClick : () => void;
    variant?: 'primary' | 'secondary';

};

const Button = ({ text, onClick, variant = "primary" } : ButtonProps) => {
    const baseStyle = "px-3 py-2 rounded-lg font-bold";
    const variantStyle = variant === "primary"
        ? "bg-red-500 text-white hover:bg-red-400"
        : "bg-gray-300 text-black hover:bg-gray-400";

    return(
        <button className={`${ baseStyle } ${ variantStyle }`} onClick={onClick}>{ text }</button>
    )
}

export default Button;