import '../style/NavBar.css'
import { Link } from 'react-router-dom'


export function NavBar(){

    return <div className="w-full flex justify-between bg-purple-50 ">
        <div>
            <ul className='flex'>
                <li><Link className='text-gray font-bold' to="/home">SCHGAKKO</Link></li>
            </ul>
        </div>
        <div>
            <ul className='flex link'>
                <li><Link to="/shop">Tienda</Link></li>
                <li><Link to="/login">Ingresar</Link></li>
            </ul>
        </div>
    </div>

}