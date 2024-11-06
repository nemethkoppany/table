/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {'HTMLTableRowElement} parentElement 
 */
//függvény cellakészítéshez
function createTableCell(tagName, innerHTML, parentElement){//az elemek amiket használni fogunk
    const tablecell  = document.createElement(tagName)//Egy cellataget csinálunk(lehet td vagy th) és azt eltároljuk egy tablecell változóban
    tablecell.innerHTML = innerHTML; // a tablecellbe belerakja az innerHTML tartalmát, ami egy string
    parentElement.appendChild(tablecell);//hozzáadja a tablecell-t a parentElementhez
    return tablecell;//visszatérés tablecellel
 }

 //Gyakorlatilag ugyan az mint az előző azzal a külömbséggel, hogy itt adunk az HTML_elementnek egy id-t
 function createHTMLelement(tag, id, parent){
    const HTML_element = document.createElement(tag);
    HTML_element.id = id;
    parent.appendChild(HTML_element);
 }

 function create_HTML_element_with_parent_id(tag,id,parentid){
    const parent_element = document.getElementById(parentid)//bekérjuk a HTML elementet id alapján és azt eltároljuk egy változóban
    
    if(parent_element != undefined){ //Ha a parent_element nem üres, akkor készítsen egy HTML elementet
        createHTMLelement(tag,id,parent_element);
    }
 }
//A táblázat headerjének elkészítése függvénymeghívásokkal
 function createTableHeaderCells(){
    const tr_element = document.getElementById('person_tr'); 
    createTableCell("th","Vezetéknév",tr_element);
    const keresztnev = createTableCell("th","Keresztnév",tr_element);//a cellát eltároljuk egy változóban
    createTableCell("th","háziállat",tr_element);
    createTableCell("th","házastárs",tr_element);
    keresztnev.colSpan = 2;
 }
 
 function renderTable(person_array){
    const tbody = document.getElementById('person_tbody');
    tbody.innerHTML = '';//a tbody tartalmának törlése
    for(const pers of person_array){//loop ami végigmegy a person_array-en egy pers változóval
        const tbody_tr = document.createElement('tr');//tr element készítése és annak eltárolása a tbody_tr változóban
        tbody.appendChild(tbody_tr);//És annak berakása a törzsbe

        createTableCell("td",  pers.lastname, tbody_tr);
      const  firstname1_cell = createTableCell("td", pers.firstname1, tbody_tr);
      
        
        if(!pers.firstname2){//Ha a második keresztnév nem üres
            
           firstname1_cell.colSpan = 2;//vonja össze a az első keresztnév cellájával
            
            
        }
        else{
            
             createTableCell("td", pers.firstname2, tbody_tr); //Ha pedig üres akkor függvénymeghívással csináljon egyet
        }

        
        createTableCell("td", pers.pet, tbody_tr);
        createTableCell("td", pers.married ? "Igen" : "Nem", tbody_tr );//Ha a pers.married == true akkor azt írja, hogy igen, ha pedig false akkor azt írja, hogy nem (a per.married egy bool)
       
        

          // Megkeresi az éppen kijelölt sort, ha van ilyen, és eltávolítja róla a 'selected' osztályt
        tbody_tr.addEventListener('click', function(e){
    
           const isSelected = tbody.querySelector('.selected');
            if( isSelected != undefined){
                isSelected.classList.remove('selected');
           }
           //Hozzáadja a selected osztályt az éppen rákattintott elemhez
           e.currentTarget.classList.add('selected');
           
        })
    
       
     

        
    }
}


function validateFields(){

let valtozo = true; //A változót beállítjuk true értékre //Ha ezek közül bármelyik üres akkor a változó értéke false lesz és kiírja, hogy "kötelező"
 if(!validateElement(lastname)){
   valtozo = false;
 }
 if(!validateElement(firstname1)){
   valtozo = false;
 }
 if(!validateElement(pet)){
   valtozo = false;
 }
 return valtozo;
}



function validateElement(field){
   const parentElement = field.parentElement//a kitöltendő rublika parentelementjét eltároljuk egy változóban
   const error = parentElement.querySelector('.error')
   if(field.value === ""){//Ha nincs semmi beleírva a rublikába kiírja, hogy kötelező beleírni valamit és egy false értékkel tér vissza
      error.innerHTML = 'Kötelező'
      return false;
   }
      error.innerHTML = ''//az error.innerHTML lenullázsa
   return true;
}