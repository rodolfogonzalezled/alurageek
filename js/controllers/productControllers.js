import { servicesProducts } from "../services/productServices.js";
import { toastError } from "../utils/toast.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

const renderProducts = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach(product => {
            const productCard = createCard(product);
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error al renderizar productos:", error);
        toastError("❌ Error al renderizar productos");
    }
};

function createCard({ name, price, image, id }) {
    const card = document.createElement("div");
    card.classList.add("cardProduct");

    card.innerHTML = `
        <div class="img-container">
            <img class="img-container__card" src="${image}" alt="${name}">
        </div>
        <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
                <p>$ ${price}</p>
                <button class="delete-button" data-id="${id}">
                    <img class="img-borrar" src="./assets/trashIcon.svg" alt="Eliminar">
                </button>
            </div>
        </div>
    `;
    addDeleteEvent(card, id);
    return card;
}

function addDeleteEvent(card, id) {
    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async () => {
        try {
            await servicesProducts.deleteProduct(id);
            card.remove();
            console.log(`Producto con id ${id} eliminado`);
        } catch (error) {
            console.error(`Error al eliminar el producto con id ${id}:`, error);
            toastError("❌ Error al eliminar el producto con id ${id}");
        }
    });
};

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    if (name === "" || price === "" || image === "") {
        toastError("❌ Por favor, complete todos los campos ❌")
    } else {
        try {
            const newProduct = await servicesProducts.createProduct(
                name,
                price,
                image
            );
            console.log("Producto creado:", newProduct);
            const newCard = createCard(newProduct);
            productContainer.appendChild(newCard);
        } catch (error) {
            console.error("Error al crear el producto:", error);
        toastError("❌ Error al crear el producto");
        }
        form.reset();
    }
});

renderProducts();