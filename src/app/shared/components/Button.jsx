export function Button({ color, type, name, onClick, disable }){

    let addStyle = ''

    if(color == 'success')
        addStyle = 'bg-green-400 text-black hover:bg-green-500 active:bg-green-300'
    else if(color == 'warning')
        addStyle = 'bg-yellow-400 text-black hover:bg-yellow-500 active:bg-yellow-300'
    else if(color == 'alert')
        addStyle = 'bg-red-400 text-black hover:bg-red-500 active:bg-red-300'
    else if(color == 'primary')
        addStyle = 'bg-purple-400 text-black hover:bg-purple-500 active:bg-purple-300'
    else
        addStyle = 'bg-gray-400 text-black hover:bg-gray-500 active:bg-gray-300'

    if(disable == true)
        addStyle = 'bg-gray-200 text-black'

    let style = "w-full  py-2 rounded-lg hover:cursor-pointer " + addStyle

    return <button onClick={onClick} disabled={disable == false ? null : 'disabled'} className={style} type={type}>
        {name}
    </button>

}
