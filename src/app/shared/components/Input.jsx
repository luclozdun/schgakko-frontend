export function Input({label, onChange, type, value, placeholder, name, disabled}){

    let existLabel = label == undefined ? true : false;

    return(
        <div>
            { 
            !existLabel ?  (<label className="text-sm font-bold">{label}</label>) : (<div className="none"></div>)
            }            
            <br/>
            <input  
                disabled = {disabled}
                onChange={ onChange } 
                type={ type } 
                value={ value } 
                placeholder={ placeholder } 
                className="w-full block outline-none border-gray-300 border px-3 py-3 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                name={ name }
            />
        </div>
    )
}