let arr = [
  {
    name: "Gaming console",
    image:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Evening Moon",
    image:
      "https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lord Shiva",
    image:
      "https://images.unsplash.com/photo-1549083449-aa6e43965934?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Meeting Discussion",
    image:
      "https://plus.unsplash.com/premium_photo-1663047091392-425566f3ea56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bugatti",
    image:
      "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tesla",
    image:
      "https://images.unsplash.com/photo-1600661288038-cb63953bfc9f?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 1",
    image:
      "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 2",
    image:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 3",
    image:
      "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 4",
    image:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 5",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 6",
    image:
      "https://images.unsplash.com/photo-1674151503786-04ee49777538?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 7",
    image:
      "https://images.unsplash.com/photo-1696114865587-1857587fdcad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model 7",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

let clutter = "";

(function showTheCards() {
  arr.forEach(function (obj) {
    clutter += `<div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="">
    <div class="caption">${obj.name}</div>
</div>`;
  });

  document.querySelector(".container").innerHTML = clutter;
})();

(function handleSearchFunctionality() {
    const input = document.getElementById("searchinput")

  input.addEventListener("focus", function () {
    document.querySelector(".overlay").classList.remove("hidden");
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".searchdata").classList.add("hidden");

  });
  input.addEventListener("input", function(){
    const filteredArray = arr.filter((obj)=>obj.name.toLocaleLowerCase().startsWith(input.value.toLocaleLowerCase()))
    
    clutter = "";
    filteredArray.forEach(obj => {
        clutter +=
        `
          <div class="res flex px-8 py-3">
    <i class="ri-search-line font-semibold mr-5"></i>
    <h3 class="font-semibold">${obj.name}</h3>
</div>  
        `
    })

    document.querySelector(".searchdata").classList.remove("hidden");
    document.querySelector(".searchdata").innerHTML = clutter;

  })
}
)();