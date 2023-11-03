export function getTotalPrice(arr) {
    return arr.reduce((prev, el) => (prev += el.count * el.price), 0)
}
