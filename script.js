/* ==================================================
   MAIN PRODUCT CARDS
================================================== */

const carddetails = [
    {
        id: 1,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11.png",
        sale:true,
        offer: "$29.00",
        rate: "",
        oldrate: "$39.00",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 2,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (1).png",
        offer: "$29.00",
        rate: "",
        oldrate: "$39.00",
        star: "svg/Vector.png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 3,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (2).png",
        sale:true,
        offer: "",
        rate: "$39.00",
        oldrate: "",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 4,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (3).png",
        offer: "",
        rate: "$39.00",
        oldrate: "",
        star: "svg/Vector.png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 5,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (4).png",
        offer: "$29.00",
        sale:true,
        rate: "",
        oldrate: "$39.00",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 6,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (5).png",
        sale:true,
        offer: "",
        rate: "$39.00",
        oldrate: "",
        star: "svg/Vector.png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 7,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (6).png",
        offer: "$29.00",
        rate: "",
        oldrate: "$39.00",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 8,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (7).png",
        offer: "",
        rate: "$39.00",
        oldrate: "",
        rateColor: "black",
        star: "svg/Vector.png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    }
];


/* ==================================================
   MAIN CARD DISPLAY
================================================== */

const carddetail = document.getElementById("card");


function displayMainCards() {

    carddetail.innerHTML = "";

    carddetails.forEach((item) => {

        const cardHTML = `

            <div class="disjs">

                <div class="cardjs">

                    <div class="imgjs">
                      ${item.sale ? `<div class="salejs">SALE</div>` : ""}
                        <img
                            src="${item.imgback}"
                            alt="${item.name}"
                        >

                        <div class="heartjs">

                            <!-- HEART -->
                            <button
                                class="iconbtn"
                                onclick="likeMainProduct(${item.id})"
                            >

                                <img
                                    src="${item.liked
                                        ? "svg/heartfill.svg"
                                        : item.heart}"
                                    id="main-heart-${item.id}"
                                    alt="Like"
                                >

                            </button>


                            <!-- CART -->
                            <button
                                class="iconbtn"
                                onclick="cartMainProduct(${item.id})"
                            >

                                <img
                                    src="${item.cart}"
                                    alt="Cart"
                                >

                            </button>

                        </div>

                    </div>


                    <div class="botjs">

                        <h3>
                            ${item.name}
                        </h3>


                        <div class="cardrate">

                            <p class="cardoff">
                                ${item.offer}
                            </p>

                            <p
                                class="rate"
                                style="color:${item.rateColor || ""}"
                            >
                                ${item.rate}
                            </p>

                            <p class="oldrate">
                                ${item.oldrate}
                            </p>

                        </div>


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

        `;

        carddetail.innerHTML += cardHTML;

    });
}


/* ==================================================
   MAIN LIKE / UNLIKE
================================================== */

function likeMainProduct(id) {

    const product = carddetails.find(
        item => item.id === id
    );

    if (!product) {
        return;
    }


    /* Change true / false */

    product.liked = !product.liked;


    /* Get heart image */

    const heartImage = document.getElementById(
        `main-heart-${id}`
    );


    /* Change SVG */

    if (product.liked) {

        heartImage.src = "svg/heartfill.svg";

    } else {

        heartImage.src = product.heart;

    }

}


/* ==================================================
   MAIN CART
================================================== */

function cartMainProduct(id) {

    const product = carddetails.find(
        item => item.id === id
    );

    if (!product) {
        return;
    }

    console.log("Cart:", product.name);

}


/* ==================================================
   DISPLAY MAIN CARDS
================================================== */

displayMainCards();



/* ==================================================
   PERFECT TOYS
================================================== */

const perfecttoy = [

    {
        id: 1,
        img: "perfecttoy/Isolation_Mode.png",
        name: "Playsets"
    },

    {
        id: 2,
        img: "perfecttoy/Isolation_Mode (1).png",
        name: "Control toys"
    },

    {
        id: 3,
        img: "perfecttoy/Isolation_Mode (2).png",
        name: "Educational toys"
    },

    {
        id: 4,
        img: "perfecttoy/Isolation_Mode (3).png",
        name: "Eco Friendly toys"
    },

    {
        id: 5,
        img: "perfecttoy/Group 53.png",
        name: "Stuffed toys"
    }

];


const perfect = document.getElementById("toy");


perfecttoy.forEach((item) => {

    const cardHTML = `

        <div class="perfrcttoys">

            <div class="toy-img">

                <img
                    src="${item.img}"
                    alt="${item.name}"
                >

                <p>
                    ${item.name}
                </p>

            </div>

        </div>

    `;

    perfect.innerHTML += cardHTML;

});



/* ==================================================
   SECOND CARD ARRAY
================================================== */

const card4 = [

    {
        id: 1,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11.png",
        offer: "$29.00",
        sale:true,
        rate: "",
        oldrate: "$39.00",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 2,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (1).png",
        offer: "$29.00",
        sale:true,
        rate: "",
        oldrate: "$39.00",
        star: "svg/Vector.png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 3,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (2).png",
        offer: "",
        rate: "$39.00",
        sale:true,
        oldrate: "",
        star: "svg/Vector (1).png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    },

    {
        id: 4,
        name: "Blocks shape-sorting Toy",
        imgback: "toppicks/image 11 (3).png",
        offer: "",
        rate: "$39.00",
        sale:true,
        oldrate: "",
        star: "svg/Vector.png",
        heart: "svg/heart.svg",
        liked: false,
        cart: "svg/shopping-cart.svg"
    }

];



/* ==================================================
   SECOND CARD DISPLAY
================================================== */

const crd4 = document.getElementById("card4");


function displayCard4() {

    crd4.innerHTML = "";

    card4.forEach((item) => {

        const cardHTML = `

            <div class="disjs">

                <div class="cardjs">

                    <div class="imgjs">
                      ${item.sale ? `<div class="salejs">SALE</div>` : ""}
                        <img
                            src="${item.imgback}"
                            alt="${item.name}"
                        >


                        <div class="heartjs">

                            <!-- HEART -->

                            <button
                                class="iconbtn"
                                onclick="likeCard4Product(${item.id})"
                            >

                                <img
                                    src="${item.liked
                                        ? "svg/heartfill.svg"
                                        : item.heart}"
                                    id="card4-heart-${item.id}"
                                    alt="Like"
                                >

                            </button>


                            <!-- CART -->

                            <button
                                class="iconbtn"
                                onclick="cartCard4Product(${item.id})"
                            >

                                <img
                                    src="${item.cart}"
                                    alt="Cart"
                                >

                            </button>

                        </div>

                    </div>


                    <div class="botjs">

                        <h3>
                            ${item.name}
                        </h3>


                        <div class="cardrate">

                            <p class="cardoff">
                                ${item.offer}
                            </p>

                            <p class="rate">
                                ${item.rate}
                            </p>

                            <p class="oldrate">
                                ${item.oldrate}
                            </p>

                        </div>


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

        `;

        crd4.innerHTML += cardHTML;

    });

}



/* ==================================================
   SECOND CARD LIKE / UNLIKE
================================================== */

function likeCard4Product(id) {

    const product = card4.find(
        item => item.id === id
    );

    if (!product) {
        return;
    }


    /* Toggle */

    product.liked = !product.liked;


    /* Find image */

    const heartImage = document.getElementById(
        `card4-heart-${id}`
    );


    /* Change image */

    if (product.liked) {

        heartImage.src = "svg/heartfill.svg";

    } else {

        heartImage.src = product.heart;

    }

}



/* ==================================================
   SECOND CARD CART
================================================== */

function cartCard4Product(id) {

    const product = card4.find(
        item => item.id === id
    );

    if (!product) {
        return;
    }

    console.log("Cart:", product.name);

}


/* ==================================================
   DISPLAY SECOND CARDS
================================================== */

displayCard4();