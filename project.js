

var add_expense=document.querySelector('.save');

add_expense.addEventListener('click',Run);

function Run(e){
    e.preventDefault();
    var expense=document.getElementById('expenseamount').value;
    var description=document.getElementById('choosedescription').value;
    var category=document.getElementById('category').value;
    
    var myobj={
        Expense:expense,
        Description:description,
        Category:category
       } 
      
    var obj_serialised=JSON.stringify(myobj);
    localStorage.setItem(document.getElementById('choosedescription').value,obj_serialised);

   

    var main=document.querySelector('.data');
    
    var new_element=document.createElement('li');
    
    var data1=document.createTextNode("=>Expense:"+expense+"-");
    new_element.appendChild(data1);

    var data2=document.createTextNode("Description:"+description+"-");
    new_element.appendChild(data2);

    var data3=document.createTextNode("Category:"+category+" ");
    new_element.appendChild(data3);


    var button_e=document.createElement('button');
    button_e.className="edit";
    button_e.textContent="Edit";
    new_element.appendChild(button_e);

    var button_d=document.createElement('button');
    button_d.className="delete";
    button_d.textContent="Delete";
    new_element.appendChild(button_d);
    
    main.appendChild(new_element)
   
  
}

var delete_expense=document.querySelector('.data');
delete_expense.addEventListener('click',run2);

function run2(e)
{
    if(e.target.classList.contains('delete'))
    {
        var li=e.target.parentElement;
        delete_expense.removeChild(li);
        localStorage.removeItem(document.getElementById('choosedescription').value)

    }
       
}

var edit_expense=document.querySelector('.data');
edit_expense.addEventListener('click',run3);

 function run3(e)
{
    if(e.target.classList.contains('edit'))
    {
        var li=e.target.parentElement;
        edit_expense.removeChild(li);
    }
}



document.addEventListener("DOMContentLoaded", run4);
    

