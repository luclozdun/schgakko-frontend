import { useSelector } from 'react-redux'
import { Item } from './Item'

export function ItemList(){
    
    const items = useSelector(state => state.items)

    console.log(items)

    return(
        <div className='grid grid-cols-7 gap-3'>
            {
                items.map((item, i) => {
                    return(
                        <Item key={i } brand={item.brand} name={item.name} price={item.price} descount={item.price} company={item.company}/>
                    )
                })
            }
        </div>
    )

} 