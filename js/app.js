//checkboxes
const total = document.querySelector("#total-price");
const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
const productsLine = document.querySelector("li[data-id='products']");
const ordersLine = document.querySelector("li[data-id='orders']");

const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");

console.log(parseInt(products.value));
console.log(terminal);
console.log(productsLine);

products.addEventListener("change", function (){
    if(parseInt(products.value) <= 0 && Number.isInteger(products.value * 1) === false){
        productsLine.style.display = "none";
    } else {
        productsLine.style.display = "block";
        total.style.display = "block";
        productsLine.querySelector(".item__calc").innerText = products.value + " * 1$";
        productsLine.querySelector(".item__price").innerText = "$ " + (products.value * 1);
    }
})

orders.addEventListener("change", function (){
    if((orders.value * 1) <= 0 && orders.value.includes(".")) {
        ordersLine.style.display = "none";
    } else {
        ordersLine.style.display = "block";
        total.style.display = "block";
        ordersLine.querySelector(".item__calc").innerText = orders.value + " * 2$";
        ordersLine.querySelector(".item__price").innerText = "$ " + (orders.value * 2);
    }
})

accounting.addEventListener("click", function (){
    document.querySelector("li[data-id='accounting']").style.display = "block";
    total.style.display = "block";
})

accounting.addEventListener("click", function (){
    if(accounting.checked === false) {
        document.querySelector("li[data-id='accounting']").style.display = "none";
    }
})

terminal.addEventListener("click", function(){
        document.querySelector("li[data-id='terminal']").style.display = "block";
        total.style.display = "block";
})

terminal.addEventListener("click", function(){
    if(terminal.checked === false) {
        document.querySelector("li[data-id='terminal']").style.display = "none";
    }
})


//dropdown
const select = document.querySelector(".select__input");
const dropdown = document.querySelector(".select__dropdown")
const basic = document.querySelector("li[data-value='basic']");
const professional = document.querySelector("li[data-value='professional']");
const premium = document.querySelector("li[data-value='premium']");
const package = document.querySelector("li[data-id='package']");

console.log(select);
console.log(basic);
console.log(professional);
console.log(premium);
console.log(package);

select.addEventListener("click", function (){
        dropdown.style.display = "block";
});

basic.addEventListener("click", function(){
    package.style.display = "block";
    package.querySelector(".item__calc").innerText = "Basic";
    package.querySelector(".item__price").innerText = "10$";
    total.style.display = "block";
});

basic.addEventListener("dblclick", function (){
    dropdown.style.display = "none";
});

professional.addEventListener("click", function (){
    package.style.display = "block";
    package.querySelector(".item__calc").innerText = "Professional";
    package.querySelector(".item__price").innerText = "30$";
    total.style.display = "block";
});

professional.addEventListener("dblclick", function (){
    dropdown.style.display = "none";
});

premium.addEventListener("click", function (){
    package.style.display = "block";
    package.querySelector(".item__calc").innerText = "Premium";
    package.querySelector(".item__price").innerText = "20$";
    total.style.display = "block";
});

premium.addEventListener("dblclick", function (){
    dropdown.style.display = "none";
});

select.addEventListener("dblclick", function (){
    dropdown.style.display = "none";
    package.style.display = "none";
});


function sumCounting(){
    let sum = 0;
    products.addEventListener("change", function(){
        sum = sum + (products.value * 1);
    })
    orders.addEventListener("change", function(){
        sum += (orders.value * 2);
    });
    console.log(sum);
    terminal.addEventListener("click", function(){
        if(terminal.checked === false) {
            sum += 5;
        }
    })
// if(terminal.checked === true){
//     sum += 5;
// }
// if(document.querySelector("li[data-id='accounting']").style.display === "block"){
//     sum += 35;
// }
// if(package.querySelector(".item__calc").innerText === "Premium"){
//     sum += 20;
// }
// if(package.querySelector(".item__calc").innerText === "Professional"){
//     sum += 30;
// }
// if(package.querySelector(".item__calc").innerText === "Basic"){
//     sum +=10;
// }
return sum
}

console.log(sumCounting());


total.querySelector(".total__price").innerText = "$ " + sumCounting();