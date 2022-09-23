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
      
    user(myobj);
    
     
}


    function user(data)
    {

        var obj_serialised=JSON.stringify(data);
        
        localStorage.setItem(data.Description, obj_serialised);

        var main=document.querySelector('.data');
    
        var new_element=document.createElement('li');
        
        new_element.id=data.Description;
       
        var data1=document.createTextNode("=>Expense:"+data.Expense+"-");
        new_element.appendChild(data1);
    
        var data2=document.createTextNode("Description:"+data.Description+"-");
        new_element.appendChild(data2);
    
        var data3=document.createTextNode("Category:"+data.Category+" ");
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

    window.addEventListener('DOMContentLoaded', (event) => {
   
        for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const obj_de=JSON.parse(localStorage.getItem(key));
        
        user(obj_de);
    }
    }); 
    
var delete_expense=document.querySelector('.data');
delete_expense.addEventListener('click',run2);



function run2(e)
{
    if(e.target.classList.contains('delete'))
    {
        var li=e.target.parentElement;
        delete_expense.removeChild(li);
        var id=li.id;
        
        for(var i=0;i<localStorage.length;i++)
      {
        var s=localStorage.key(i);
        if(s===id)
        {
            localStorage.removeItem(s);
            
        }
        
      }
        
    }
}

var edit=document.querySelector('.data');
edit.addEventListener('click',run3);
 
function run3(e)
{

    if(e.target.classList.contains('edit'))
    {
        var li1=e.target.parentElement;
        edit.removeChild(li1);
        var object=JSON.parse(localStorage.getItem(li1.id));
        retrive(object);
        
        for(var i=0;i<localStorage.length;i++)
        {
          var s=localStorage.key(i);
          if(s===li1.id)
          {
              localStorage.removeItem(s);
              
          }
          
        }
        
    }
}

function retrive(user)
{
    var e=document.getElementById('expenseamount');
    e.value=user.Expense;
    var d=document.getElementById('choosedescription');
    d.value=user.Description;
    var c=document.getElementById('category');
    c.value=user.Category;
}
