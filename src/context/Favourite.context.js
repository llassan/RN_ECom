import React, { createContext, useState } from 'react'

export const FavouriteContext = createContext()

export const FavouriteContextProvider = ({children}) => {

  const [isFavourite, setIsFavourite] = useState([])

  const addFavourite = (product) => {
    console.log("Add Fav");
    setIsFavourite([...isFavourite, product])
  }
  const removeFavourite = (product) => {
    console.log("Remove Fav");
    const newFavs = isFavourite.filter((item) => item.id != product.id)
    setIsFavourite(newFavs)
  }
  return (
    <FavouriteContext.Provider
      value={{
        isFavourite,
        add: addFavourite,
        remove: removeFavourite
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}
