const categories = document.getElementById('categories_div');
const custom = document.getElementById('custom');
const any = document.getElementById('any');
const Misc = document.getElementById('Misc');
const Programming = document.getElementById('Programming')
const Dark = document.getElementById('Dark');
const Pun = document.getElementById('Pun');
const Spooky = document.getElementById('Spooky');
const Christmas = document.getElementById('Christmas');
const flags = document.getElementById('flags_div');
const nsfw = document.getElementById('nsfw');
const religious = document.getElementById('religious');
const political = document.getElementById('political');
const racist = document.getElementById('racist');
const sexist = document.getElementById('sexist');
const explicit = document.getElementById('explicit');
const type = document.getElementById('type_div');
const single = document.getElementById('single');
const twoPart = document.getElementById('twopart');
const subBtn = document.getElementById('btn');
const jokemacker_form = document.getElementById('jokemacker_form');
const body = document.getElementById('body');
const joke_div = document.createElement('div');
const par =  document.createElement('p')
par.id='joke_par'

let categoriesArr = [];
let flagsArr = [];
let typeArr= [];
let apiUrl = '';
let finalUrl = '';

custom.addEventListener('click',()=>{
    categories.style.display='flex';
    flags.style.display='flex';
    type.style.display='flex';

})

any.addEventListener('click',()=>{
    categories.style.display='none';
    flags.style.display='none';
    type.style.display='none';
})

Programming.addEventListener('click',()=>{
    let ProgrammingValue;
    if(Programming.checked){
        ProgrammingValue = Programming.value;
        categoriesArr.push(ProgrammingValue)
    }else{
     let index = categoriesArr.indexOf(ProgrammingValue)
     categoriesArr.splice(index);
    }
})

Misc.addEventListener('click',()=>{
     let MiscValue;
    if(Misc.checked){
        MiscValue = Misc.value;
        categoriesArr.push(MiscValue)
    }else{
     let index = categoriesArr.indexOf(MiscValue)
     categoriesArr.splice(index);
    }
})

Dark.addEventListener('click',()=>{
     let DarkValue;
    if(Dark.checked){
        DarkValue = Dark.value;
        categoriesArr.push(DarkValue)
    }else{
     let index = categoriesArr.indexOf(DarkValue)
     categoriesArr.splice(index);
    }
})

Pun.addEventListener('click',()=>{
    let PunValue;
    if(Pun.checked){
        PunValue = Pun.value;
        categoriesArr.push(PunValue)
    }else{
     let index = categoriesArr.indexOf(PunValue)
     categoriesArr.splice(index);
    }
})

Spooky.addEventListener('click',()=>{
     let spookyValue;
    if(Spooky.checked){
        spookyValue = Spooky.value;
        categoriesArr.push(spookyValue)
    }else{
     let index = categoriesArr.indexOf(spookyValue)
     categoriesArr.splice(index);
    }
})

Christmas.addEventListener('click',()=>{ 
    let ChristmasValue;
    if(Christmas.checked){
        ChristmasValue = Christmas.value;
        categoriesArr.push(ChristmasValue)
    }else{
     let index = categoriesArr.indexOf(ChristmasValue)
     categoriesArr.splice(index);
    }
})

nsfw.addEventListener('click',()=>{
     let nsfwValue;
    if(Programming.checked){
        nsfwValue = nsfw.value;
        flagsArr.push(nsfwValue)
    }else{
     let index = flagsArr.indexOf(nsfwValue)
     flagsArr.splice(index);
    }
})

religious.addEventListener('click',()=>{ 
    let religiousValue;
    if(religious.checked){
      religiousValue = religious.value;
        flagsArr.push(religiousValue)
    }else{
     let index = flagsArr.indexOf(religiousValue)
     flagsArr.splice(index);
    }
})

political.addEventListener('click',()=>{ 
    let politicalValue;
    if(political.checked){
        politicalValue = political.value;
        flagsArr.push(politicalValue)
    }else{
     let index = flagsArr.indexOf(politicalValue)
     flagsArr.splice(index);
    }
})

racist.addEventListener('click',()=>{ 
    let racistValue;
    if(racist.checked){
        racistValue = racist.value;
        flagsArr.push(racistValue)
    }else{
     let index = flagsArr.indexOf(racistValue)
     flagsArr.splice(index);
    }
})

sexist.addEventListener('click',()=>{
     let sexistValue;
    if(sexist.checked){
        sexistValue = sexist.value;
        flagsArr.push(sexistValue)
    }else{
     let index = flagsArr.indexOf(sexistValue)
     flagsArr.splice(index);
    }
})

explicit.addEventListener('click',()=>{ 
    let explicitValue;
    if(explicit.checked){
        explicitValue = explicit.value;
        flagsArr.push(explicitValue)
    }else{
     let index = flagsArr.indexOf(explicitValue)
     flagsArr.splice(index);
    }
})

single.addEventListener('click',()=>{ 
    let singleValue;
    if(single.checked){
        singleValue = single.value;
        typeArr.push(singleValue)
    }else{
     let index = typeArr.indexOf(singleValue)
     typeArr.splice(index);
    }
})

twoPart.addEventListener('click',()=>{ 
    let twopartValue;
    if(twoPart.checked){
        twopartValue = twoPart.value;
        typeArr.push(twopartValue)
    }else{
    let index = categoriesArr.indexOf(twopartValue)
    typeArr.splice(index);
    }
})

subBtn.addEventListener('click',()=>{
    if(any.checked){
        apiUrl = 'https://v2.jokeapi.dev/joke/';
        finalUrl = apiUrl + 'Any';
        fetch(finalUrl)
        .then(response =>{
             return response.json();
        })
        .then(data =>{
            const {category, type, joke, flags,setup, delivery} = data;
            if(type =='single'){
            joke_div.id = 'joke_div';
           joke_div.appendChild(par);
            body.appendChild(joke_div);
           par.innerHTML=`<h2>Category</h2><p>${category}</p><br><h2>Type</h2><p>${type}</p><br><h2>Joke</h2><p>${joke}</p>`;
            }
            // <h2>Flags</h2><p>${trueFlags.join(`<br>`)}</p><br></br>
           if(type=='twopart'){
            joke_div.id = 'joke_div';
           joke_div.appendChild(par);
            body.appendChild(joke_div);
           par.innerHTML=`<h2>Category</h2><p>${category}</p><br><h2>Type</h2><p>${type}</p><br><h2>Setup</h2><p>${setup}</p><br><h2>Delivery</h2><p>${delivery}</p>`
           }
        })
    }else if(custom.checked){
        apiUrl = 'https://v2.jokeapi.dev/joke/';
        finalUrl = `${apiUrl}${categoriesArr.join(',')}?type=${typeArr.join(',')}&flags=${flagsArr.join(',')}`;
        fetch(finalUrl)
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const {category, type, joke, flags ,setup, delivery} = data;
            if(type =='single'){
            joke_div.id = 'joke_div';
           joke_div.appendChild(par);
            body.appendChild(joke_div);
           par.innerHTML=`<h2>Category</h2><p>${category}</p><br><h2>Type</h2><p>${type}</p><br><h2>Flags</h2><p>${flagsArr.join(`<br>`)}</p><br><h2>Joke</h2><p>${joke}</p>`;
            }
           if(type=='twopart'){
            joke_div.id = 'joke_div';
           joke_div.appendChild(par);
            body.appendChild(joke_div);
           par.innerHTML=`<h2>Category</h2><p>${category}</p><br><h2>Type</h2><p>${type}</p><br><h2>Flags</h2><p>${flagsArr.join(`<br>`)}</p><br><h2>Setup</h2><p>${setup}</p><br><h2>Delivery</h2><p>${delivery}</p>`
           }
        })
    }
})