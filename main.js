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

//függvények meghívása és feltételek megadása
createHTMLelement('table','person_table',document.body);
create_HTML_element_with_parent_id('thead','person_thead','person_table');
create_HTML_element_with_parent_id('tr','person_tr','person_thead');
createTableHeaderCells();
create_HTML_element_with_parent_id('tbody','person_tbody','person_table');

//egy függvény ami új cellákat ad a táblázathoz amikor a feltöltés gomb megnyomásra kerül

form.addEventListener('submit',function(e){//itt adjuk az utasítást, hogy figyeljen a gomlenyomásra és tegye azt ami a zárójeleken belül van
    e.preventDefault()
    const form = e.currentTarget;

    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const lastname = document.getElementById('lastname');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');



    if (validateFields(lastname,firstname1,pet)){//Ha a függvény meg van hívva, vegye fel az adatokat
            const newperson = {
                firstname1: firstname1.value,
                firstname2: firstname2.value,
                lastname: lastname.value,
                married:married.checked,
                pet: pet.value
            }

            array.push(newperson);
            renderTable(array);
            form.reset();//ha le van nyomva a gomb és minden helyes, kitörli a rublikákból a szöveget
    }
    
})

renderTable(array);
