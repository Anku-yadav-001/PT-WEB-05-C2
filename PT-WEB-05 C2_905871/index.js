// fill in javascript code here
let form=document.getElementById('form');
let name=document.getElementById('name');
let docId=document.getElementById('docID');
let dept=document.getElementById('dept');
let exp=document.getElementById('exp');
let email=document.getElementById('email');
let mobile=document.getElementById('mbl');
let tbody=document.querySelector("tbody");

let alldata=[];
form.addEventListener('submit',function(e){
    e.preventDefault();
    let obj={};
    obj.name=name.value
    obj.docId=docId.value;
    obj.dept=dept.value;
    obj.exp=exp.value;
    obj.email=email.value;
    obj.mobile=mobile.value;
    alldata.push(obj);
    tbody.innerHTML=null
    console.log(alldata);
    
    alldata.map((ele)=>
    {
        let row=document.createElement('tr')
        let name1=document.createElement("td")
        let docId1=document.createElement("td")
        let dept1=document.createElement("td")
        let exp1=document.createElement("td")
        let email1=document.createElement("td")
        let mobile1=document.createElement("td")
        let role=document.createElement("td")
        name1.innerText=ele.name;
        docId1.innerText=ele.docId;
        dept1.innerText=ele.dept;
        exp1.innerText=ele.exp;
        email1.innerText=ele.email;
        mobile1.innerText=ele.mobile;
        
        if(obj.exp>5)
        {
          
            role.innerText="Senior"
                   
        }
        else if(obj.exp<5 && obj.exp>2)
        {
          
            role.innerText="Junior"
                    
        }
        else
        {
           
            role.innerText="Trainee"
        }
      
        row.append(name1,docId1,dept1,exp1,email1,mobile1,role)
        tbody.append(row)
    })
})


