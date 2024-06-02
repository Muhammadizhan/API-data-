axios("https://fakestoreapi.com/products/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((res) => {
    console.log(res);
  });

// axios("https://fakestoreapi.com/products")
//   .then((res) => {
//     console.log(res.data);
//     res.data.map((item) => {
//       div.innerHTML += `<h3>${item.title}</h3>
//     <img width = "150" src= "${item.image}"/>
//     <hr>
//     `;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
