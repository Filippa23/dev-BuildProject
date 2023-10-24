const buildItem = document.querySelectorAll('.build-item');
const optionFlats = document.querySelector('#option-flats');
const optionFloors = document.querySelector('#option-floors');
const optionAdress = document.querySelector('#option-adress');
const informationDescription = document.querySelector('#information-description');

//console.log(buildItem);

buildItem.forEach(item => {
    if(item.classList.contains('sold')) {
       item.closest('a').classList.add('disallow-following')
    } else {
        item.addEventListener("mouseover", buildInfo)
    }

    function buildInfo () {
        const itemAdress = item.getAttribute('data-adress');
        const itemFloorst = item.getAttribute('data-floors');
        const itemFlats = item.getAttribute('data-flats')
        const itemDescription = item.getAttribute('data-descriptions')





    
        optionAdress.innerHTML = itemAdress;
        optionFloors.innerHTML = itemFloorst;
        optionFlats.innerHTML = itemFlats;
        informationDescription.innerHTML = itemDescription;
    }
})

const wrapperBuildItem = document.querySelectorAll('.disallow-following');

wrapperBuildItem.forEach( link =>{
    link.addEventListener('click', function(event){
        event.preventDefault();
    })
}) 





const buildOption = document.querySelectorAll('.build_option');
const optionAdres = document.querySelector('#item-adress');
const floorItem = document.querySelector('#item-floors');
const flatsAll = document.querySelector('#item-flats');
const flatsFree = document.querySelector('#item-flats-free');
const flatsSold = document.querySelector('#item-flats-sold');
console.log(buildItem);



buildOption.forEach(item => {
    item.addEventListener('mouseover', () => {
        const dataOptionAdres = item.getAttribute('data-adress');
        const dataFloorItem = item.getAttribute('data-floors');
        const dataFlatsAll = item.getAttribute('data-flats');
        const dataFlatsFree = item.getAttribute('data-flats-free');
        const dataFlatsSold = item.getAttribute('data-flats-sold');
        const dataDescription = item.getAttribute('data-descriptions');
       
        optionAdres.innerHTML = dataOptionAdres;
        floorItem.innerHTML = dataFloorItem;
        flatsAll.innerHTML = dataFlatsAll;
        flatsFree.innerHTML = dataFlatsFree;
        flatsSold.innerHTML = dataFlatsSold;
        informationDescription.innerHTML = dataDescription;
    });
});

//const defaultItems = document.querySelectorAll('.default')
//defaultItems.forEach(item=>{

   // item.addEventListener("click", function(event){
    //    event.preventDefault()
    //  });
//});

