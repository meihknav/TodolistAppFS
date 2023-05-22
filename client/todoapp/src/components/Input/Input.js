function Input({value,placeholder,className,onChange}) {
    return ( 
        <input 
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        ></input>
     );
}

export default Input;