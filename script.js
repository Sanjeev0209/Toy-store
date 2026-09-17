const carddetails =[
    {
        id:1,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11.png", 
        offer:"$29.00",
        rate:"",
        oldrate:"$39.00",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
    {
        id:2,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(1\).png", 
        offer:"$29.00",
        rate:"",
        oldrate:"$39.00",
        star:"svg/Vector.png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
     {
        id:3,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(2\).png", 
        offer:"",
        rate:"$39.00",
        oldrate:"",
        star:"svg/Vector (1).png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
     {
        id:4,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(3\).png", 
        offer:"",
        rate:"$39.00",
        oldrate:"",
        star:"svg/Vector.png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
     {
        id:5,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(4\).png", 
        
        offer:"$29.00",
        rate:"",
        oldrate:"$39.00",
        star:"svg/Vector (1).png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
     {
        id:6,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(5\).png", 
        offer:"",
        rate:"$39.00",
        oldrate:"",
        star:"svg/Vector.png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
     {
        id:7,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(6\).png", 
        offer:"$29.00",
        rate:"",
        oldrate:"$39.00",
        star:"svg/Vector (1).png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    },
     {
        id:8,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image\ 11\ \(7\).png", 
        offer:'',
        rate:"$39.00",
        oldrate:"",
        rateColor:"red",
        star:"svg/Vector.png",
        heart: "svg/heart.svg",
        cart:"svg/shopping-cart.svg"
    }
     

]

const carddetail = document.getElementById('card');

carddetails.forEach((item) => {
    const cardHTML =`
    <div class="disjs">    
    <div class="cardjs">
    <div class="imgjs">
        <img src="${item.imgback}" alt="">
        <div class="heartjs">
            <img src="${item.heart}" alt="">
            <img src="${item.cart}" alt="">
        </div>
    </div>
    <div class="botjs">
        <h3>${item.name}</h3>
        <div class="cardrate">
        <p class="cardoff">${item.offer}</p>
        <p class="rate">${item.rate}</p>
        <p class="oldrate">${item.oldrate}</p></div>
        <div class="starjs">
            <img src="${item.star}" alt="">
            <img src="${item.star}" alt="">
            <img src="${item.star}" alt="">
            <img src="${item.star}" alt="">
            <img src="${item.star}" alt="">
        </div>
    </div>
</div>
</div>
    `
     carddetail.innerHTML += cardHTML;

}

)

const menuBtn = document.getElementById("menuBtn");
        const navMenu = document.getElementById("navMenu");

        menuBtn.addEventListener("click", function () {

            // Show / Hide menu
            navMenu.classList.toggle("active");

            // Change ☰ to ✕
            if (navMenu.classList.contains("active")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }

        });