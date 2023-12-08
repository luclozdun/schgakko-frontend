import { Button } from '../../shared/components/Button'
import { Cookie } from '../../shared/components/Cookie'
import '../style/Item.css'

export function Item({ descount, price, name, brand, company }){

    return <div className="w-full border-2 border-cyan-500 card">
        <div className="img">
            <img className='w-full bg-black h-full'/>
            <div className=''>
                
            </div>
        </div>
        <div className="desc flex flex-col p-2">
            <div>
                <p className='text-xs mb-3'>Por <span className='underline cursor-pointer'>{company}</span></p>
                <p className='uppercase font-bold h-9 leading-4'>{name}</p>
                <p className='leading-4 mb-3'>Marca: {brand}</p>
                <div className='mb-3 h-12'>
                {
                    descount == 0 ?
                    <p className='text-red-500 font-bold'>S/{price} unid.</p>:
                    <div>
                        <p className='text-red-500 text-base font-bold'>S/{price - (price * descount)} unid.</p>
                        <div className='underline-middle relative inline-flex items-center justify-center'>
                            <p className='text-gray-500 font-bold text-sm underline-middle relative inline-block'>S/{price} </p>
                            <div className='absolute bg-gray-500 w-full line'></div>
                        </div>
                    </div>
                }
                </div>
                <Button color="success" name="Añadir"></Button>                
            </div>
        </div>
    </div>
}