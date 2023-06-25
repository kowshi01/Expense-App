const listItem = document.getElementById('expense');

let addUser = document.querySelector('.addExpense');
addUser.addEventListener('click', storeInfo);


async function storeInfo(e) {
    e.preventDefault();

    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    let obj = {
        price: price,
        description: description,
        category: category
    }
    console.log(obj);
    try{
        const res =await axios.post('http://localhost:3000/add-expense', obj)
        console.log(res);
        newUser(res.data.expenseDetails);
    }
    catch(err){
        console.log(err);
    }

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('http://localhost:3000/all-expense')
        .then((res)=>{
            for(var i=0;i<res.data.allExpense.length;i++){
                newUser(res.data.allExpense[i]);
            }
        })
})

function newUser(obj) {
    let newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.appendChild(document.createTextNode(obj.price+" "+obj.description+" "+obj.category));

    let newBtn1 = document.createElement('button');
    newBtn1.className = 'delete';
    newBtn1.appendChild(document.createTextNode('delete'));

    newItem.appendChild(newBtn1);

    newBtn1.onclick=(e)=>{
        let li = e.target.parentElement;
        var id = obj.id;
        console.log(id);
        axios.delete('http://localhost:3000/delete-expense/'+id)
            .then((res)=>{})
            .catch((err)=>console.log(err));
        listItem.removeChild(li);
    }


    listItem.appendChild(newItem);
}