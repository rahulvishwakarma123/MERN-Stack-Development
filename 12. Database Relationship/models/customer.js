const mongoose = require('mongoose')
const { Schema } = mongoose; // <-- Uncommented this line

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation')
}

main().then(() => {
    console.log('connection successful.')
}).catch((err) => {
    console.log('some err in database.')
});

// APPROACH - 2 / ONE TO MANY / ( 1 - <1000)
// -> Store a reference of the child document inside parent.
const orderSchema = mongoose.Schema({
    item: String,
    price: Number,
})

const customerSchema = mongoose.Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId, // Now Schema is defined
            ref: "Order",
        }
    ]
})

customerSchema.pre('findOneAndDelete',async (post) =>{
    console.log("PRE MIDDLEWARE.")
})
customerSchema.post('findOneAndDelete',async (customer) =>{
    console.log("POST MIDDLEWARE.")
    if(customer.orders.length){
        let res = await Order.deleteMany({_id: {$in: customer.orders}})
        console.log(res)
    }
})

const Order = mongoose.model("Order", orderSchema)
const Customer = mongoose.model("Customer", customerSchema)

const addOrders = async() =>{
    let res = await Order.insertMany([
        {item: "samosa", price: 12},
        {item: "jalebi", price: 10},
        {item : "chips", price: 20}
    ])
    console.log(res)
}

const addCustomer = async () => {
    let cust1 = new Customer({
        name: "Shiwangi Tripathi",
    })

    let order1 = await Order.findOne({ item: "samosa" });
    let order2 = await Order.findOne({ item: "chips" });

    if (order1) cust1.orders.push(order1._id);
    if (order2) cust1.orders.push(order2._id);

    let res = await cust1.save();
    console.log(res);
}

const findCustomers = async () =>{
    let results = await Customer.find().populate('orders')
    console.log(results)
}

const addNewCust = async () => {
    let newCust = new Customer({
        name : 'Vishal yadav'
    })

    let newOrder = new Order({
        item : 'pizza',
        price : 70,
    })

    newCust.orders.push(newOrder)

    await newCust.save()
    await newOrder.save()
    console.log('added the new customer and order.')
} 

const deleteCust = async () =>{
    let res = await Customer.findByIdAndDelete('68527dcc5c09e6dc4e7e33eb')
    console.log('customr deleted.')
    console.log(res)
}



// addOrders()
// addCustomer();
// findCustomers();
// addNewCust();
deleteCust();