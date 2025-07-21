import Product from "./Product"
function ProductTab() {
    let options1 = ['Hi-tech', 'durable', 'fast']
    let options2 = {
        a : "hi-tech",
        b : "durable",
        c : "fast"
    }
    return (
        <>
            <Product title="Laptop" prise = "60k" featureArr = {options1} featureObj = {options2}/>
            <Product title = "Phone" prise = "20k" featureArr={options1}  featureObj = {options2}/>
            <Product title = "Tablet" prise = "40k" featureArr = {options1} featureObj = {options2}/>
        </>
    )
}

export default ProductTab