interface IListingProps {
    items: any[]
}

export default function Listing({items}: IListingProps){
    return <div className="item-list">
        {items.map((item,index)=>{
            return  <div className="item">
              <div className="item-image">
                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                  <img  src={item?.MainImage?.url_570xN}/>
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.currency_code}{item.price}</p>
                <p className="item-quantity level-medium">{item.quantity}</p>
              </div>
            </div>
        })}
    </div>
}