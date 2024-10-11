let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);



const th_lastname = document.createElement('th');
tr.appendChild(th_lastname);
th_lastname.innerHTML = 'Vezetéknév';

const th_firstname1 = document.createElement('th');
tr.appendChild(th_firstname1);
th_firstname1.innerHTML = 'Keresztnév 1';

const th_firstname2 = document.createElement('th');
tr.appendChild(th_firstname2);
th_firstname2.innerHTML = 'Keresztnév 2';

const th_pet = document.createElement('th');
tr.appendChild(th_pet);
th_pet.innerHTML = 'Háziállat';

const th_married = document.createElement('th');
tr.appendChild(th_married);
th_married.innerHTML = 'Házastárs';

const tbody = document.createElement('tbody');
table.appendChild(tbody);


const form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    const firstname1Value = firstname1.value;
    let firstname2Value = firstname2.value;
    const lastnameValue = lastname.value;
    const marriedValue = married.checked;
    const petValue = pet.value;

    if(firstname2Value === ''){
        firstname2Value = undefined;
    }

    const newperson = {
        firstname1: firstname1Value,
        firstname2: firstname2Value,
        lastname: lastnameValue,
        married: marriedValue,
        pet: petValue
    }

    

    array.push(newperson);
    renderTable();
   
})

renderTable();

function renderTable(){
    tbody.innerHTML = '';
    for(const pers of array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);
        
        
    
        const tbody_td_lastname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_lastname);
       
        tbody_td_lastname.innerHTML = pers.lastname;
     
        const tbody_td_firstname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_firstname);
       
        tbody_td_firstname.innerHTML = pers.firstname1;
       
    
    
        
        if(pers.firstname2 === undefined){
            tbody_td_firstname.colSpan = 2
        }
        else{
            const tbody_td_firstname = document.createElement('td');
            tbody_tr.appendChild(tbody_td_firstname);
           
            tbody_td_firstname.innerHTML = pers.firstname2;
        }
    
        const td_pet = document.createElement('td');
        tbody_tr.appendChild(td_pet);
        td_pet.innerHTML = pers.pet;
      
    
        const td_married = document.createElement('td');
        tbody_tr.appendChild(td_married);
        td_married.innerHTML = pers.married;
        tbody_tr.addEventListener('click', function(e){
    
           const isSelected = tbody.querySelector('.selected');
            if( isSelected != undefined){
                isSelected.classList.remove('selected');
           }
    
           e.currentTarget.classList.add('selected');
           
        })
    
        if(pers.married === true){
            td_married.innerHTML = 'Igen';
        }
        else{
            td_married.innerHTML = 'Nem';
        }
     

        
    }
}