import './css/ListTile.css'
/// user tile
function ListTile({Uri, Name, Score, Inning, Avg}) {
  
    return ( 
    <div className="Main">
       <div className="section1">
           <img className='img' src={Uri} alt={Name} />
       </div>
       <div className="section2">
        <h4>{Name}</h4>
        <h2>{Score}</h2>
        <div className='bottomText'>
        <p className='inning'>innings <span>:{Inning}</span></p>
        <p className='avg'>Avarage <span>:{Avg}</span></p>
        </div>

       </div>
    </div> );
}

export default ListTile;