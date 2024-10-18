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



createTableCell("th","Vezetéknév",tr)
createTableCell("th","Keresztnév 1", tr)
createTableCell("th","háziállat",tr)
createTableCell("th","házastárs",tr)

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

        if(validateFields(lastname, firstname1, pet)){
            const newperson = {
                firstname1: firstname1Value,
                firstname2: firstname2Value,
                lastname: lastnameValue,
                married: marriedValue,
                pet: petValue
            }

            array.push(newperson);
            renderTable();
        }
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

function validateFields(lastname, firstname1, pet){
    let result = true;
    if(lastname.value === ""){
        const apa = lastname.parentElement;
        const error = apa.querySelector('.error')
        error.innerHTML = 'Kötelező'
        result = false;
    }

    if(firstname1.value === ""){
        const apa = firstname1.parentElement;
        const error = apa.querySelector('.error')
        error.innerHTML = 'Kötelező'
        result = false;
    }

    if(pet.value === ""){
        const apa = pet.parentElement;
        const error = apa.querySelector('.error')
        error.innerHTML = 'Kötelező'
        result = false;
    }

  return result;
}
/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {'HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML, parentElement){
   const td = document.createElement(tagName)
   td.innerHTML = innerHTML;
   parentElement.appendChild(td);
}