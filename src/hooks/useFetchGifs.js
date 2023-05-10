import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images , setImages] = useState([]);
    const [isLoading , setIsLoadiing] = useState(true);

const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoadiing(false);
}

useEffect( () =>{
    getImages();
},[])
    return {
        images,
        isLoading,
    }
}


