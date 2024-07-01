function fetchTodos() {
  fetch("https://todo-api-beige.vercel.app/api/todos ", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-secret-key":
        "9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
