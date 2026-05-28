export function formatPrice(price: string) {
    if (!price) return "";

    if (
        price.startsWith("£") ||
        price.toLowerCase().startsWith("from")
    ) {
        return price;
    }

    return `£${price}`;
}