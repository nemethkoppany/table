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

        createTableCell("td",  pers.lastname, tbody_tr);
        createTableCell("td", pers.firstname1, tbody_tr);
        
        if(pers.firstname2 === undefined){
            pers.firstname1.colSpan = 2;
        }
        else{
            createTableCell("td", pers.firstname2, tbody_tr) 
              pers.firstname1.colSpan == 2;
           
            
        }

        
        createTableCell("td", pers.pet, tbody_tr);
        createTableCell("td", pers.married ? "Igen" : "Nem", tbody_tr );
       
        


        tbody_tr.addEventListener('click', function(e){
    
           const isSelected = tbody.querySelector('.selected');
            if( isSelected != undefined){
                isSelected.classList.remove('selected');
           }
    
           e.currentTarget.classList.add('selected');
           
        })
    
       
     

        
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
   const element  = document.createElement(tagName)
   element.innerHTML = innerHTML;
   parentElement.appendChild(element);
}