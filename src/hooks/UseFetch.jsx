// import React, { useEffect, useReducer } from 'react'
// import reducer from '../reducer/reducer'
// import { initialState } from '../reducer/initialState'

// export default function useFetch(path) {
//     const [data,dispatch] = useReducer(reducer, initialState)

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const res = await axios.get(path)
            // dispatch({type: "FETCH_SUCCESS", payload: res.data})
//         }
//         fetchProducts()
//     }, [])

//   return data
// }
