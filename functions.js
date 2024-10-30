/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {'HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML, parentElement){
    const tablecell  = document.createElement(tagName)
    tablecell.innerHTML = innerHTML;
    parentElement.appendChild(tablecell);
    return tablecell;
 }

 function createHTMLelement(tag, id, parent){
    const HTML_element = document.createElement(tag);
    HTML_element.id = id;
    parent.appendChild(HTML_element);
 }

 function create_HTML_element_with_parent_id(tag,id,parentid){
    const parent_element = document.getElementById(parentid)
    
    if(parent_element != undefined){
        createHTMLelement(tag,id,parent_element);
    }
 }

 function createTableHeaderCells(){
    const tr_element = document.getElementById('person_tr');
    createTableCell("th","Vezetéknév",tr_element);
    const keresztnev = createTableCell("th","Keresztnév",tr_element);
    createTableCell("th","háziállat",tr_element);
    createTableCell("th","házastárs",tr_element);
    keresztnev.colSpan = 2;
 }
 
 function renderTable(person_array){
    const tbody = document.getElementById('person_tbody');
    tbody.innerHTML = '';
    for(const pers of person_array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);

        createTableCell("td",  pers.lastname, tbody_tr);
      const  firstname1_cell = createTableCell("td", pers.firstname1, tbody_tr);
      
        
        if(pers.firstname2 === undefined){
            
           firstname1_cell.colSpan = 2;
            
            
        }
        else{
            
             createTableCell("td", pers.firstname2, tbody_tr); 
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


