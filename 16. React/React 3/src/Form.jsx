function submitHandler(event) {
    event.preventDefault()
    console.log('Form was submitted.')
}
function Form() {
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter some text" />
                <button>Submit</button>
            </form>
        </>
    )
}

export {Form}