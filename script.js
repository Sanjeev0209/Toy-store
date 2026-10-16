/* ==================================================
   PERFECT TOYS
================================================== */
        const perfecttoy = [
    {
        id: 1,
        img: "perfecttoy/Isolation_Mode.png",
        name: "Playsets"
    },{
        id: 2,
        img: "perfecttoy/Isolation_Mode (1).png",
        name: "Control toys"
    },{
        id: 3,
        img: "perfecttoy/Isolation_Mode (2).png",
        name: "Educational toys"
    },{
        id: 4,
        img: "perfecttoy/Isolation_Mode (3).png",
        name: "Eco Friendly toys"
    }, {
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
                        <img   src="${item.img}"    alt="${item.name}">
                        <p>    ${item.name}   </p>
                    </div>
                </div>
            `;
            perfect.innerHTML += cardHTML;
        });
 /* =================================
    PRODUCTS
 ================================= */
        const products = [
            {
                id: 1,
                name: "Blocks shape-sorting Toy",
                img: "toppicks/image 11.png",
                offer: "$29.00",
                price: "",
                oldPrice: "$39.00",
                sale: true,
                star: "./svg/Vector (1).png",
            },
            {
                id: 2,
                name: "Magna etiam tempor orci",
                img: "toppicks/image 11 (1).png",
                offer: "$29.00",
                price: "",
                oldPrice: "$39.00",
                sale: true,
                star: "./svg/Vector.png",
            },
            {
                id: 3,
                name: "Magna etiam tempor orci",
                img: "toppicks/image 11 (2).png",
                 offer: "",
                price: "$39.00",
                oldPrice: "",
                sale: false,
                star: "svg/Vector (1).png",
            },
            {
                id: 4,
                name: "Magna etiam tempor orci",
                img: "toppicks/image 11 (3).png",
                offer: "",
                price: "$39.00",
                oldPrice: "",
                sale: false,
                star: "svg/Vector (1).png",
            },
            {
                id: 5,
                name: "Magna etiam tempor orci",
                img: "toppicks/image 11 (4).png",
                offer: "$29.00",
                price: "",
                oldPrice: "$39.00",
                sale: true,
                star: "svg/Vector (1).png",
            },
            {
                id: 6,
                name: "Magna etiam tempor orci",
                img: "toppicks/image 11 (5).png",
                 offer: "",
                price: "$39.00",
                oldPrice: "",
                sale: false,
                star: "svg/Vector (1).png",
            },
            {
                id: 7,
                name: "Hape scoot-around    ",
                img: "toppicks/image 11 (6).png",
                offer: "$29.00",
                price: "",
                oldPrice: "$39.00",
                sale: true,
                star: "svg/Vector (1).png",
            },
            {
                id: 8,
                name: "Magna etiam tempor orci",
                img: "toppicks/image 11 (7).png",
                 offer: "",
                price: "$39.00",
                oldPrice: "",
                sale: false,
                star: "./svg/Vector.png",
            }
        ];

 /* =================================
    CART FROM LOCAL STORAGE
 ================================= */
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Product cards store sale prices in `offer` and regular prices in `price`.
        // Keep cart prices numeric so quantity and total calculations stay valid.
        function getProductPrice(product) {
            const displayedPrice = product.offer || product.price || product.oldPrice;
            return Number(String(displayedPrice || "0").replace(/[^\d.-]/g, "")) || 0;
        }

        // Repair older cart entries that may have saved a blank/string price.
        cartItems = cartItems.map(item => {
            const product = products.find(product => product.id === item.id);
            const price = Number(item.price);
            return {
                ...item,
                price: Number.isFinite(price) && price > 0 ? price : (product ? getProductPrice(product) : 0),
                quantity: Math.max(1, Number(item.quantity) || 1)
            };
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
 /* =================================
    DISPLAY PRODUCTS
 ================================= */
        function displayProducts() {
            const productsContainer = document.getElementById("products");
            productsContainer.innerHTML = "";
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <div class="product-image">
                        ${ product.sale ? `<div class="sale"> Sale </div>` : "" }
                        <img src="${product.img}" alt="${product.name}">
                        <div class="icons">
                            <!-- LIKE -->
                            <button class="icon-btn" onclick="likeProduct(this)">
                                <img  src="svg/heart.svg"  alt="Like"  >
                            </button>

                            <!-- CART -->
                            <button class="icon-btn cart-btn" onclick="handleAddToCart(${product.id}, this, event)" title="Add to Cart">
                                <img src="svg/shopping-cart.svg" alt="Cart" class="cart-icon-img">
                                <span class="cart-spinner"></span>
                                <span class="cart-check-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="product-details">
                        <h3> ${product.name}</h3>
                         <div class="cardrate">
                            <p class="cardoff">${product.offer}</p>
                            <p class="rate">${product.price}</p>
                            <p class="oldrate">${product.oldPrice}</p>
                        </div>
                        <div class="starjs">
                             <img src="${product.star}" alt="">
                             <img src="${product.star}" alt="">
                             <img src="${product.star}" alt="">
                             <img src="${product.star}" alt="">
                             <img src="${product.star}" alt="">
                         </div>
                         </div>
                `;
                productsContainer.appendChild(card);
            });
        }
/* =================================
   DISPLAY SALE PRODUCTS
================================= */
function displaySaleProducts() {
    const saleContainer = document.getElementById("sale-true");
    saleContainer.innerHTML = "";
    const saleProducts = products.filter(product => product.sale === true);
    saleProducts.forEach(product => {
        saleContainer.innerHTML += `
            <div class="card">
                <div class="product-image">
                    <div class="sale">SALE</div>
                    <img src="${product.img}" alt="${product.name}">
                    <div class="icons">
                        <!-- LIKE BUTTON -->
                        <button class="icon-btn"
                            onclick="likeProduct(this)">
                            <img src="svg/heart.svg" alt="Like">
                        </button>
                        <!-- ADD TO CART BUTTON -->
                        <button class="icon-btn cart-btn"
                            onclick="handleAddToCart(${product.id}, this, event)" title="Add to Cart">
                            <img src="svg/shopping-cart.svg" alt="Cart" class="cart-icon-img">
                            <span class="cart-spinner"></span>
                            <span class="cart-check-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                      <div class="cardrate">
                            <p class="cardoff">${product.offer}</p>
                            <p class="rate">${product.price}</p>
                            <p class="oldrate">${product.oldPrice}</p>
                        </div>
                    <div class="starjs">
                        <img src="${product.star}" alt="Rating">
                        <img src="${product.star}" alt="Rating">
                        <img src="${product.star}" alt="Rating">
                        <img src="${product.star}" alt="Rating">
                        <img src="${product.star}" alt="Rating">
                    </div>
                </div>
            </div>
        `;
    });
}
 /* =================================
    LIKE PRODUCT
 ================================= */
        function likeProduct(button) {
            const image = button.querySelector("img");
            if (
                image.src.includes("heartfill.svg")
            ) {
                image.src =
                    "svg/heart.svg";
            } else {
                image.src =
                    "svg/heartfill.svg";
            }
        }

 /* =================================
    ADD TO CART WITH CIRCLE SPINNER & TICK
 ================================= */
        function handleAddToCart(id, buttonEl, event) {
            if (event) {
                event.stopPropagation();
            }

            if (!buttonEl) {
                addProduct(id);
                return;
            }

            // Prevent double-clicks while loading or already added 
            if (buttonEl.classList.contains("loading") || buttonEl.classList.contains("success")) {
                return;
            }

            // 1. Loading state with circular outerline spinner
            buttonEl.classList.add("loading");

            // 2. After 600ms, change to tick and add product
            setTimeout(() => {
                buttonEl.classList.remove("loading");
                buttonEl.classList.add("success");

                // Execute product addition
                addProduct(id);

                // 3. After 1.5s showing tick, reset back to cart icon
                setTimeout(() => {
                    buttonEl.classList.remove("success");
                }, 1500);
            }, 600);
        }

/* =================================
   ADD PRODUCT
================================= */
        function addProduct(id) {
            const product = products.find(item => item.id === id );
            if (!product) {
                return;
            }
            const existing = cartItems.find(item => item.id === id );
            if (existing) {
                existing.quantity++;
            } else {
                cartItems.push({
                    id: product.id,
                    name: product.name,
                    img: product.img,
                    price: getProductPrice(product),
                    quantity: 1
                });
            }
            saveCart();
            updateCartCount();
            displayCart();

            /* Show 3-second success message directly under cart logo in navbar */
            showCartToast("Added to cart successfully!");
        }
/* =================================
   CART SUCCESS NOTIFICATION (3 SECONDS)
================================= */
        let cartToastTimer = null;
        function showCartToast(message = "Added to cart successfully!") {
            const toast = document.getElementById("cart-toast");
            if (!toast) return;

            const textEl = toast.querySelector(".cart-toast-text");
            if (textEl) {
                textEl.textContent = message;
            }

            toast.classList.add("show");

            if (cartToastTimer) {
                clearTimeout(cartToastTimer);
            }

            cartToastTimer = setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }
/* =================================
   SAVE CART
================================ */
        function saveCart() {
            localStorage.setItem( "cartItems", JSON.stringify(cartItems)
            );
        }
 /* =================================
    UPDATE CART NUMBER
 ================================= */
        function updateCartCount() {
            let count = 0;
            cartItems.forEach(item => {
                count += item.quantity;
            });
            const badge = document.getElementById("cart-count");
            if (badge) {
                badge.innerText = count;
                badge.classList.remove("badge-pop");
                void badge.offsetWidth;
                badge.classList.add("badge-pop");
            }
        }
 /* =================================
    DISPLAY CART
 ================================= */
/* =================================
   TRIGGER BOUNCE ON CART IMAGE
================================= */
        function animateCartImage(imageEl) {
            if (!imageEl) return;
            imageEl.classList.remove("animate-click");
            void imageEl.offsetWidth; // Force reflow
            imageEl.classList.add("animate-click");
            setTimeout(() => {
                imageEl.classList.remove("animate-click");
            }, 550);
        }
 /* =================================
    DISPLAY CART
 ================================= */
        function displayCart() {
            const cartContainer = document.getElementById("cart-items");
            cartContainer.innerHTML = "";
            if (cartItems.length === 0) {
                cartContainer.innerHTML = `
                    <div class="empty-cart">
                        <div style="font-size: 38px; margin-bottom: 8px;">🧸</div>
                        <h3>Your cart is empty</h3>
                        <p>Add some fun toys!</p>
                    </div>
                `;
                document.getElementById("cart-total").innerText = "$0.00";
                return;
            }
            let total = 0;
            cartItems.forEach(item => {
                total += item.price * item.quantity;
                cartContainer.innerHTML += `
                    <div class="cart-item" data-id="${item.id}">
                        <div class="cart-item-image" onclick="animateCartImage(this)" title="Click to animate!">
                            <img src="${item.img}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <div class="cart-price" id="price-${item.id}">
                                $${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div class="quantity">
                                <button type="button" onclick="decreaseQuantity(${item.id}, event)" title="Decrease">
                                    −
                                </button>
                                <span id="qty-${item.id}">
                                    ${item.quantity}
                                </span>
                                <button type="button" onclick="increaseQuantity(${item.id}, event)" title="Increase">
                                    +
                                </button>
                            </div>
                            <button class="remove" type="button" onclick="removeProduct(${item.id}, event)">
                                ✕ Remove
                            </button>
                        </div>
                    </div>
                `;
            });
            document.getElementById("cart-total").innerText = "$" + total.toFixed(2);
        }
 /* =================================
    INCREASE QUANTITY
 ================================= */
        function increaseQuantity(id, event) {
            if (event) {
                event.stopPropagation();
            }

            const item = cartItems.find(item => item.id === id);
            if (!item) return;

            item.quantity++;
            saveCart();
            updateCartCount();

            // Update row in-place without closing popup
            const row = document.querySelector(`.cart-item[data-id="${id}"]`);
            if (row) {
                const qtySpan = row.querySelector(`#qty-${id}`);
                const priceDiv = row.querySelector(`#price-${id}`);
                const imageEl = row.querySelector(".cart-item-image");

                if (qtySpan) {
                    qtySpan.textContent = item.quantity;
                    qtySpan.classList.remove("qty-bump");
                    void qtySpan.offsetWidth;
                    qtySpan.classList.add("qty-bump");
                }

                if (priceDiv) {
                    priceDiv.textContent = "$" + (item.price * item.quantity).toFixed(2);
                    priceDiv.classList.remove("price-bump");
                    void priceDiv.offsetWidth;
                    priceDiv.classList.add("price-bump");
                }

                if (imageEl) {
                    animateCartImage(imageEl);
                }

                let total = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
                document.getElementById("cart-total").innerText = "$" + total.toFixed(2);
            } else {
                displayCart();
            }
        }
/* =================================
   DECREASE QUANTITY
================================= */
        function decreaseQuantity(id, event) {
            if (event) {
                event.stopPropagation();
            }
            const item = cartItems.find(item => item.id === id);
            if (!item) return;

            if (item.quantity > 1) {
                item.quantity--;
                saveCart();
                updateCartCount();

                const row = document.querySelector(`.cart-item[data-id="${id}"]`);
                if (row) {
                    const qtySpan = row.querySelector(`#qty-${id}`);
                    const priceDiv = row.querySelector(`#price-${id}`);
                    const imageEl = row.querySelector(".cart-item-image");

                    if (qtySpan) {
                        qtySpan.textContent = item.quantity;
                        qtySpan.classList.remove("qty-bump");
                        void qtySpan.offsetWidth;
                        qtySpan.classList.add("qty-bump");
                    }

                    if (priceDiv) {
                        priceDiv.textContent = "$" + (item.price * item.quantity).toFixed(2);
                        priceDiv.classList.remove("price-bump");
                        void priceDiv.offsetWidth;
                        priceDiv.classList.add("price-bump");
                    }

                    if (imageEl) {
                        animateCartImage(imageEl);
                    }

                    let total = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
                    document.getElementById("cart-total").innerText = "$" + total.toFixed(2);
                } else {
                    displayCart();
                }
            } else {
                removeProduct(id, event);
            }
        }
/* =================================
   REMOVE PRODUCT
================================= */
        function removeProduct(id, event) {
            if (event) {
                event.stopPropagation();
            }

            const row = document.querySelector(`.cart-item[data-id="${id}"]`);
            if (row) {
                row.classList.add("item-removing");
                setTimeout(() => {
                    cartItems = cartItems.filter(item => item.id !== id);
                    saveCart();
                    updateCartCount();
                    displayCart();
                }, 300);
            } else {
                cartItems = cartItems.filter(item => item.id !== id);
                saveCart();
                updateCartCount();
                displayCart();
            }
        }
/* =================================
   CLEAR CART
================================= */
        function clearCart(event) {
            if (event) {
                event.stopPropagation();
            }
            cartItems = [];
            saveCart();
            updateCartCount();
            displayCart();
        }



 // ====================================
        const ORDER_STAGES = ["Confirmed", "On the way", "Delivered"];
        const ORDER_STORAGE_KEY = "toyStoreOrders";

        function readOrders() {
            try { return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || []; }
            catch { return []; }
        }

        function formatOrderDate(value) {
            if (!value) return "Date pending";
            return new Date(value + "T00:00:00").toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        }

        function placeOrder(event) {
            if (event) event.stopPropagation();
            if (!cartItems.length) {
                alert("Your cart is empty. Add a toy before placing an order.");
                return;
            }
            const now = new Date();
            const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
            const order = {
                id: `TOY-${now.getTime().toString().slice(-8)}`,
                createdAt: now.toISOString(),
                status: 0,
                items: cartItems.map(item => ({ ...item })),
                total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
                stages: [
                    { name: ORDER_STAGES[0], date: today, completed: true },
                    { name: ORDER_STAGES[1], date: "", completed: false },
                    { name: ORDER_STAGES[2], date: "", completed: false }
                ]
            };
            const orders = readOrders();
            orders.unshift(order);
            localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
            localStorage.setItem("lastToyStoreOrder", order.id);
            cartItems = [];
            saveCart();
            updateCartCount();
            displayCart();
            closeCart();
            alert(`Your order was placed successfully! Order ${order.id}`);
            renderOrderTracker(order.id);
        }

        function openOrderTracker(event) {
            if (event) event.stopPropagation();
            const orders = readOrders();
            if (!orders.length) {
                alert("You do not have any orders to track yet.");
                return;
            }
            document.getElementById("order-history-list").innerHTML = orders.map(order => `
                <button type="button" class="order-history-item" onclick="renderOrderTracker('${order.id}')">
                    <strong>${order.id}</strong><span>$${Number(order.total).toFixed(2)}</span>
                    <small>${ORDER_STAGES[Number(order.status)] || ORDER_STAGES[0]}</small>
                </button>`).join("");
            document.getElementById("order-modal").classList.add("open");
            const preferredOrder = localStorage.getItem("lastToyStoreOrder");
            renderOrderTracker(orders.some(order => order.id === preferredOrder) ? preferredOrder : orders[0].id);
        }

        function renderOrderTracker(orderId) {
            const order = readOrders().find(item => item.id === orderId);
            if (!order) {
                alert("Order not found. Please place an order first.");
                return;
            }
            const list = document.getElementById("order-history-list");
            if (!list.children.length) {
                list.innerHTML = readOrders().map(item => `
                    <button type="button" class="order-history-item" onclick="renderOrderTracker('${item.id}')">
                        <strong>${item.id}</strong><span>$${Number(item.total).toFixed(2)}</span>
                        <small>${ORDER_STAGES[Number(item.status)] || ORDER_STAGES[0]}</small>
                    </button>`).join("");
            }
            list.querySelectorAll(".order-history-item").forEach(button => button.classList.toggle("selected", button.textContent.includes(order.id)));
            const stages = Array.isArray(order.stages) ? order.stages : [];
            const stepNames = ORDER_STAGES;
            document.getElementById("order-details").innerHTML = `
                <h3>Order ${order.id}</h3>
                <p class="order-reference">Placed ${new Date(order.createdAt).toLocaleString()} · Total $${Number(order.total).toFixed(2)}</p>
                <h4>Products</h4>
                <ul class="order-product-list">${(order.items || []).map(item => `<li><span>${item.name} × ${item.quantity}</span><strong>$${(item.price * item.quantity).toFixed(2)}</strong></li>`).join("")}</ul>
                <h4>Delivery progress</h4>
                <div class="order-steps">${stepNames.map((name, index) => {
                    const stage = stages[index] || { date: "", completed: index <= Number(order.status) };
                    const complete = stage.completed || index <= Number(order.status);
                    return `<div class="order-step ${complete ? "complete" : ""} ${index === Number(order.status) ? "current" : ""}">
                        <span class="order-step-mark">${complete ? "✓" : index + 1}</span>
                        <div><strong>${name}</strong><span>${complete ? formatOrderDate(stage.date) : "Waiting for an update"}</span></div>
                    </div>`;
                }).join("")}</div>`;
        }

        function closeOrderTracker() {
            document.getElementById("order-modal").classList.remove("open");
        }
/* =================================
   OPEN / CLOSE CART
================================= */
        function toggleCart(event) {
            if (event) {
                event.stopPropagation();
            }
            const cart = document.getElementById("cart-popup");
            if (!cart) return;

            cart.classList.toggle("active");
            if (cart.classList.contains("active")) {
                displayCart();
                // Hide success toast if cart is opened
                const toast = document.getElementById("cart-toast");
                if (toast) toast.classList.remove("show");
            }
        }
        function closeCart() {
            const cart = document.getElementById("cart-popup");
            if (cart) {
                cart.classList.remove("active");
            }
        }
        /* Close cart when clicking anywhere outside */
        document.addEventListener("click", function(event) {
            const cart = document.getElementById("cart-popup");
            const navCart = document.querySelector(".nav-cart");

            if (!cart || !navCart) return;

            if (cart.classList.contains("active")) {
                // If clicked outside cart-popup and outside nav-cart button
                if (!cart.contains(event.target) && !navCart.contains(event.target)) {
                    closeCart();
                }
            }
        });
        /* Close on ESC key */
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeCart();
                closeOrderTracker();
            }
        });
/* =================================
   STICKY NAVBAR SCROLL HANDLER
   (Scroll in Login & Register buttons)
================================= */
        function handleNavbarScroll() {
            const navbar = document.getElementById("navbar") || document.querySelector(".navbar");
            if (!navbar) return;

            if (window.scrollY > 45) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
        window.addEventListener("scroll", handleNavbarScroll);
        handleNavbarScroll();
 /* =================================
    PAGE LOAD
 ================================= */
        displayProducts();
        displaySaleProducts(); 
        updateCartCount();
        displayCart();
// ========================================
//              swiper
// ========================================
         const swiper = new Swiper(".mySwiper", {
            /* Show 2 images */
            slidesPerView: 2,
            spaceBetween: 10,
            /* Infinite loop */
            loop: true,
            /* Auto slide */
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            /* Slow movement */
            speed: 1500,
            /* Previous / Next */
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            /* Dots */
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });