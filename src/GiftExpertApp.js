import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One punch man']);

return(
<>
    <h1>Gif ExpertApp</h1>
    <AddCategory setCategories={setCategories}/>
 <hr />
    <ol>
    {
    categories.map( category =>(
      
      <GiftGrid 
      key={category}
      category={category}
      />
    
      ) )
    }
    </ol>
</>
 )
}

export default GifExpertApp;



