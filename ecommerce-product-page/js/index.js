const NUMBER_OF_THUMBANILS = 4;
const PRODUCT = [
    {
        img: "./images/image-product-1.jpg",
        thumbnail: "./images/image-product-1-thumbnail.jpg"
    },
    {
        img: "./images/image-product-2.jpg",
        thumbnail: "./images/image-product-2-thumbnail.jpg"
    },
    {
        img: "./images/image-product-3.jpg",
        thumbnail: "./images/image-product-3-thumbnail.jpg"
    },
    {
        img: "./images/image-product-4.jpg",
        thumbnail: "./images/image-product-4-thumbnail.jpg"
    }
];

const menu = document.querySelector(".nav__menu");
const cartItems = document.querySelector(".cart__items");
const cartBtn = document.querySelector(".btn-cart");
const checkoutBtn = document.querySelector(".btn-checkout");
const addToCartBtn = document.querySelector(".btn-add-to-cart");
const closeMenuBtn = document.querySelector(".btn-close-menu");
const closeModalBtn = document.querySelector(".btn-close-modal");
const menuBtn = document.querySelector(".btn-menu");
const minusBtn = document.querySelector(".btn-minus");
const plusBtn = document.querySelector(".btn-plus");
const [sliderPrevBtn, modalPrevBtn] = document.querySelectorAll(".btn-prev");
const [sliderNextBtn, modalNextBtn] = document.querySelectorAll(".btn-next");
const productOverlay = document.querySelector(".product__overlay");
const thumbanilBtns = document.querySelectorAll(".thumbanil");
const [sliderImg, modalSlideImg] = document.querySelectorAll(".slider__img");

let removeProductBtn;
let selectedThumbanil = thumbanilBtns[0];
let selectedThumbanilIndex = 0;
let quantity = 0;

productInit();
attachNavbarMenuEvents();

function productInit() {
    const product = JSON.parse(localStorage.getItem("product"));
    loadProduct(product);

    for (let i = 0; i < NUMBER_OF_THUMBANILS * 2; i++) {
        let n = i;
        if (n > 3) n -= NUMBER_OF_THUMBANILS;
        thumbanilBtns[i].style.backgroundImage = `url(${PRODUCT[n].thumbnail})`;
    }
    attachProductEvents();
}

function addProductToCart() {
    updateQuantity();

    const productName = document.querySelector(".product__name").textContent;
    const productPrice = document.querySelector(".product__price").textContent.slice(1);

    const product = {
        name: productName,
        price: productPrice,
        quantity: quantity,
        totalPrice: quantity * Number.parseInt(productPrice),
        thumbnail: PRODUCT[selectedThumbanilIndex].thumbnail
    };

    loadProduct(product);
    localStorage.setItem("product", JSON.stringify(product));
}

function loadProduct(product) {
    if (!product) {
        cartItems.innerHTML = `<p class="cart__message">Your cart is empty.</p>`;
        return;
    }

    cartItems.innerHTML = `
    <div class="cart__item">
        <img class="item__img" src="${product.thumbnail}" alt="" />
        <div class="item__info">
            <p class="item__name">${product.name}</p>
            <p class="item__details">${product.price} x ${product.quantity} <span class="total__price">$${product.totalPrice}</span></p>
        </div>
        <button class="btn btn-remove-item" tabindex="-1">
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
                </svg>
        </button>
    </div>`;

    quantity = product.quantity;
    updateQuantity();
    removeProductBtn = document.querySelector(".btn-remove-item");
    removeProductBtn.addEventListener("click", removeProduct);
}

function removeProduct() {
    removeProductBtn = null;
    cartItems.innerHTML = `<p class="cart__message">Your cart is empty.</p>`;
    localStorage.removeItem("product");
    quantity = 0;
    updateQuantity();
}

function attachProductEvents() {
    addToCartBtn.addEventListener("click", () => {
        if (quantity === 0) return;
        addProductToCart();
    });

    thumbanilBtns.forEach((thumbanil, i) => {
        let n = i;

        if (n >= 4) {
            n -= NUMBER_OF_THUMBANILS;
        }

        let focusIn = () => {
            thumbanil.classList.add("thumbanil-selected");
            sliderImg.setAttribute("src", PRODUCT[n].img);
            modalSlideImg.setAttribute("src", PRODUCT[n].img);
        };
        let focusOut = () => {
            selectedThumbanilIndex = n;
            selectedThumbanil = thumbanil;
            thumbanil.classList.remove("thumbanil-selected");
        };

        thumbanil.addEventListener("focusin", focusIn);
        thumbanil.addEventListener("focusout", focusOut);
    });

    closeModalBtn.addEventListener("click", closeModal);

    productOverlay.addEventListener("click", e => {
        if (e.currentTarget !== e.target) return;
        closeModal();
    });

    const productQuantity = document.querySelector(".product__quantity");
    minusBtn.addEventListener("click", () => {
        if (quantity === 0) return;
        quantity--;
        productQuantity.textContent = quantity;
    });

    plusBtn.addEventListener("click", () => {
        quantity++;
        productQuantity.textContent = quantity;
    });

    sliderNextBtn.addEventListener("click", nextImage);
    sliderPrevBtn.addEventListener("click", previousImage);
    modalNextBtn.addEventListener("click", nextImage);
    modalPrevBtn.addEventListener("click", previousImage);
}

function nextImage() {
    if (selectedThumbanilIndex === NUMBER_OF_THUMBANILS - 1) {
        selectedThumbanilIndex = 0;
    } else {
        selectedThumbanilIndex++;
    }
    thumbanilBtns[selectedThumbanilIndex + NUMBER_OF_THUMBANILS].focus();
    sliderImg.setAttribute("src", PRODUCT[selectedThumbanilIndex].img);
}

function previousImage() {
    if (selectedThumbanilIndex === 0) {
        selectedThumbanilIndex = 3;
    } else {
        selectedThumbanilIndex--;
    }
    thumbanilBtns[selectedThumbanilIndex + NUMBER_OF_THUMBANILS].focus();
    sliderImg.setAttribute("src", PRODUCT[selectedThumbanilIndex].img);
}

function closeModal() {
    productOverlay.classList.remove("block");
    thumbanilBtns[selectedThumbanilIndex].focus();
}

function showModal() {
    productOverlay.classList.add("block");
    thumbanilBtns[selectedThumbanilIndex + NUMBER_OF_THUMBANILS].focus();
}

function updateQuantity() {
    cartBtn.setAttribute("data-quantity", quantity);
}

function attachNavbarMenuEvents() {
    menuBtn.addEventListener("click", () => {
        menu.classList.remove("menu-closed");
    });

    closeMenuBtn.addEventListener("click", () => {
        menu.classList.add("menu-closed");
    });

    cartBtn.addEventListener("click", e => {
        const cart = document.querySelector(".cart");
        const value = cart.dataset.active === "true" ? "false" : "true";
        if (value === "false") {
            checkoutBtn.setAttribute("tabindex", "-1");
            cart.addEventListener(
                "transitionend",
                () => {
                    cart.style.transform = "translateY(-200%)";
                },
                {
                    once: true
                }
            );
        } else {
            checkoutBtn.setAttribute("tabindex", "0");
            cart.style.transform = "translateY(0%)";
        }
        cart.setAttribute("data-active", value);
    });
}

/* Allow the modal to open only on large screens*/
if (window.innerWidth >= 900) {
    sliderImg.addEventListener("click", showModal);
} else {
    sliderImg.style.cursor = "auto";
}

let mql = window.matchMedia("(min-width: 900px)");

/* handle the product modal on browser resize on desktop */
mql.addEventListener("change", e => {
    if (!e.matches) {
        productOverlay.classList.remove("block");
        sliderImg.removeEventListener("click", showModal);
        sliderImg.style.cursor = "auto";
        return;
    }
    sliderImg.addEventListener("click", showModal);
    sliderImg.style.cursor = "pointer";
});
