//all global variables
let tForm = document.querySelector(".t-form");
let allInput = tForm.querySelectorAll("input");
let selectEl = tForm.querySelector("#transctype");
let selectE2 = tForm.querySelector("#category");
let allBtn = tForm.querySelectorAll("button");
let btnClose = document.querySelector(".btn-close");
let balanceEl = document.querySelector(".balance");
let incomeEl = document.querySelector(".income");
let expenseEl = document.querySelector(".expense");
let tListEl = document.querySelector(".t-list");
let modalBtn =  document.querySelector(".modal-btn");
let transaction = [];

//store previous data
if(localStorage.getItem('transaction') != null) {   //condition to check if the key exits, coz it doesn't exists at the very beginning. Without this condition, you can't add new array data to a null array.
    transaction = JSON.parse(localStorage.getItem('transaction'));
}

//add transaction

tForm.onsubmit = (e) => {
    e.preventDefault();
    let obj = {

        transaction : selectEl.value,
        date : allInput[0].value,
        title : allInput[1].value,
        category : selectE2.value,
        amount : allInput[2].value

    };
    transaction.push(obj);
    localStorage.setItem('transaction', JSON.stringify(transaction));
    swal("Success", 'Transaction Added', 'success');
    btnClose.click();
    tForm.reset('');
    showTransaction();
    calculation();
}

//format Date
const formatDate = (d) => {
    let date = new Date(d);
    let yy = date.getFullYear();
    let mm = date.getMonth()+1;
    let dd = date.getDate();

    mm = mm < 10 ? '0'+mm : mm;
    dd = dd < 10 ? '0'+dd : dd;

    return`${dd}-${mm}-${yy}`
}

//delete transaction
const deleteFunc = () => {
    let allDelBtn = tListEl.querySelectorAll(".del-btn");
    allDelBtn.forEach((btn, index) => {
        btn.onclick = () => {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this transaction!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    transaction.splice(index, 1);
                    localStorage.setItem('transaction', JSON.stringify(transaction));
                    showTransaction();
                    calculation();

                    swal("Poof! Your transaction has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your transaction is safe!");
                }
            });
        }
    });
}

//update transaction
const updateFunc = () => {
    let allEditBtn = tListEl.querySelectorAll(".edit-btn");

    const modalElement = document.getElementById("myModal"); // Replace with your modal's ID

    allEditBtn.forEach((btn, index) => {
        btn.onclick = () => {
            modalBtn.click();

            let transc = btn.getAttribute("transc");
            let date = btn.getAttribute("date");
            let title = btn.getAttribute("title");
            let category = btn.getAttribute("category");
            let amount = btn.getAttribute("amount");

            selectEl.value = transc;
            allInput[0].value = date;
            allInput[1].value = title;
            selectE2.value = category;
            allInput[2].value = amount;

            allBtn[0].classList.add("d-none");
            allBtn[1].classList.remove("d-none");
            allBtn[1].onclick = () => {

                if (
                    !selectEl.value.trim() ||
                    !allInput[0].value.trim() ||
                    !allInput[1].value.trim() ||
                    !selectE2.value.trim() ||
                    !allInput[2].value.trim()
                ) {
                    swal("Error", "Please fill all the fields before updating.", "error");
                    return;
                }

                let obj = {

                    transaction : selectEl.value,
                    date : allInput[0].value,
                    title : allInput[1].value,
                    category : selectE2.value,
                    amount : allInput[2].value
                    
                };
                transaction[index] = (obj);
                localStorage.setItem('transaction', JSON.stringify(transaction));
                swal("Success", 'Transaction Updated', 'success');
                btnClose.click();
                tForm.reset('');
                
                allBtn[0].classList.remove("d-none");
                allBtn[1].classList.add("d-none");

                showTransaction();
                calculation();
            }
        }
    });

    modalElement.addEventListener("hidden.bs.modal", () => {
        tForm.reset(); // Reset the form
        allBtn[0].classList.remove("d-none"); // Show Add button
        allBtn[1].classList.add("d-none"); // Hide Update button
    });
}

//show all transactions
const showTransaction = () => {
    tListEl.innerHTML = "";
    transaction.forEach((item, index)=>{
        tListEl.innerHTML += `
        <tr>
            <td class="text-nowrap">${formatDate(item.date)}</td>
            <td class="text-nowrap">${item.title}</td>
            <td class="text-nowrap">${item.category}</td>
            <td class="text-nowrap">₹${item.amount}</td>
            <td class="text-nowrap">${item.transaction}</td>
            
            <td class="text-nowrap">
                <button date="${item.date}" title="${item.title}" category="${item.category}" amount="${item.amount}" transc="${item.transaction}" class="btn edit-btn text-success">
                    <i class="fa fa-pen"></i>
                </button>
                <button class="btn del-btn text-danger">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    });
    deleteFunc();
    updateFunc();
}
showTransaction();

//calculate transaction
const calculation = () => {

    let totalCr = 0;
    let filterCr = transaction.filter((item)=>item.transaction == 'income');
    for(let obj of filterCr) {
        totalCr += Number(obj.amount);
    }

    let totalDr = 0;
    let filterDr = transaction.filter((item)=>item.transaction == 'expense');
    filterDr.forEach((obj) =>{
        totalDr += Number(obj.amount);
    });
    incomeEl.innerText = `₹${totalCr}`;
    expenseEl.innerText = `₹${totalDr}`;

    Number(totalCr - totalDr) < 0 ? balanceEl.style.color = 'red' : balanceEl.style.color = 'green';
    balanceEl.innerText = `₹${Number(totalCr - totalDr)}`;
}
calculation();