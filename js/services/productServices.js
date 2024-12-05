import { toastError } from "../utils/toast.js";
import { toastSuccess } from "../utils/toast.js";

const BASE_URL = "https://673d000d4db5a341d833ad04.mockapi.io/products";

const productList = async () => {

    try {
        const response = await fetch(BASE_URL);
        return await response.json();
    } catch (error) {
        console.log("Error obteniendo productos", error);
        toastError("❌ Error obteniendo productos");
    }
};

const deleteProduct = async (id) => {
    try {
        await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(`Producto con id ${id} eliminado exitosamente`);
        toastSuccess("❌ Producto eliminado correctamente");
    } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        toastError("❌ Error eliminando producto");
    }
};

const createProduct = async (name, price, image) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, image }),
        });

        const data = await response.json();
        console.log("Solicitud POST exitosa:", data);
        toastSuccess("🛒 Producto agregado correctamente");
        return data;
    } catch (error) {
        console.error("Error en la solicitud POST:", error);
        toastError("❌ Error en la creacion del producto");
    }
};

export const servicesProducts = {
    productList,
    deleteProduct,
    createProduct
};