function Product({title, prise, featureArr, featureObj}) {
    console.log(title, prise)
    let list = featureArr.map((feature) => {<li>{feature}</li>})
    return (
        <>
            <h3>This is {title}.</h3>
            <p>The prise of the product is {prise}.</p>
            <p>{featureArr}</p>
            <p>{featureObj.a}</p>
            <p>{list}</p>
        </>
    )
}

export default Product