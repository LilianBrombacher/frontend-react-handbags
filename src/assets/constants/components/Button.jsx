const Button = ({ type, onClick, disabled, children }) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
export default Button