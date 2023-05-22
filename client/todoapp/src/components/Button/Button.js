function Button({title,className,color,width,onClick}) {
    return ( 
    
        <button className={className} style={{backgroundColor: color,
        width : width,
        }}
        onClick={onClick}
        >{title}</button>

     );
}

export default Button;