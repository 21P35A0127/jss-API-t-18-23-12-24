const URL = "https://dummyjson.com/quotes"
fetch (URL)
      .then (response => {
        if (response.ok) {
            return response.json()
        }
      })
      .then (data => console.log (data)) 

// const URL = "https://dummyjson.com/todos"
// fetch (URL)
//       .then (response => {
//         if (response.ok) {
//             return response.json()
//         }
//       })
//       .then (data => console.log (data))

// const URL = "https://jsonplaceholder.typicode.com/photos"
// fetch (URL)
//       .then (response => {
//         if (response.ok) {
//             return response.json()
//         }
//       })
//       .then (data => console.log (data))

// const URL = "https://randomuser.me/api/"
// fetch (URL)
//       .then (response => {
//         if (response.ok) {
//             return response.json()
//         }
//       })
//       .then (data => console.log (data))

// const URL = "https://pokeapi.co/api/v2/pokemon/ditto"
// fetch (URL)
//       .then (response => {
//         if (response.ok) {
//             return response.json()
//         }
//       })
//       .then (data => console.log (data))
