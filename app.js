// const div = document.querySelector("div");

// axios("https://fakestoreapi.com/products/1")
//   .then((res) => {
//     console.log(res.data);
//     res.data.map((item) => {
//       div.innerHTML += "<h2>tital: ${tiem.tital}</h2>";
//       ("<h2>tital: ${tiem.price}</h2>");
//     });
//   })
//   .catch((res) => {
//     console.log(res);
//   });
// const div = document.querySelector("div");
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

// const div = document.querySelector("#product-container");
// axios("https://fakestoreapi.com/products")
//   .then((res) => {
//     res.data.forEach((item) => {
//       div.innerHTML += `
//         <div class="product">
//           <h3>${item.title}</h3>
//           <h3> ${item.price}</h3>
//           <h3> ${item.category}</h3>
//           <h3> ${item.id}</h3>
//           <img src="${item.image}" alt="${item.title}">
//           <hr>
//         </div>
//       `;
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const div = document.querySelector("#product-container");
axios("https://fakestoreapi.com/products")
  .then((res) => {
    res.data.forEach((item) => {
      div.innerHTML += `
        <div class="product">
          <h3 class="title">${item.title}</h3>
          <p class="price">Price: $${item.price}</p>
          <p class="category">Category: ${item.category}</p>
          <p class="id">ID: ${item.id}</p>
          <img src="${item.image}" alt="${item.title}">
        </div>
      `;
    });
  })
  .catch((err) => {
    console.error(err);
  });
