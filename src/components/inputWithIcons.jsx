function InputWithIcon({icon,placeholder}) {
    return ( <div className="input-with-icon w-full">
        <div className="px-1 md:px-2 lg:px-3">
            {icon}
        </div>
        <input placeholder={placeholder} />

    </div> );
}

export default InputWithIcon;