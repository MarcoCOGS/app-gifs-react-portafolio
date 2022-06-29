import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto', 'One Punch'])
    //console.log(categories)

    const OnAddCategory = (newCategory)=>{
        if (categories.includes(newCategory)) return
        setCategories([newCategory,...categories])
        
    }

  return (
    <>
        <h1 className='titleApp'>BUSCA TUS GIFS FAVORITOS</h1>

        <AddCategory onNewCategory={OnAddCategory}/>
        
            {categories.map((category)=> (
            
              <GifGrid key={category} category={category}/>
              ))
              }
    </>
  )
}
