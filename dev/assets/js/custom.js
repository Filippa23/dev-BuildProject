const flatArray = [{
    id: 0,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82.3 м.кв.",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 1,
    status: "booking",
},
{
    id: 1,
    house: "2",
    floor: "1",
    rooms: "2",
    square: "60,7 м.кв.",
    price: "700$",
    priceTotal: "42000$",
    flatNumber: 2,
    status: "sold",
},
{
    id: 2,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "60,7 м.кв.",
    price: "700$",
    priceTotal: "42000$",
    flatNumber: 3,
    status: "action",
},
{
    id: 3,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82 м.кв.",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 4,
    status: "free",
},
{
    id: 4,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "79.7 м.кв.",
    price: "700$",
    priceTotal: "55790$",
    flatNumber: 5,
    status: "free",
},
{
    id: 5,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "39.2 м.кв.",
    price: "700$",
    priceTotal: "27440$",
    flatNumber: 6,
    status: "free",
},
{
    id: 6,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "40.0 м.кв.",
    price: "700$",
    priceTotal: "29400$",
    flatNumber: 7,
    status: "booking",
},
{
    id: 7,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "39.2 м.кв.",
    price: "700$",
    priceTotal: "27440$",
    flatNumber: 8,
    status: "booking",
},
{
    id: 8,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "79.3 м.кв.",
    price: "700$",
    priceTotal: "55510$",
    flatNumber: 9,
    status: "action",
},
]

window.addEventListener('load', function() {

document.querySelector('.page-floor-plan') ? installFloorPlan() : null;

function installFloorPlan() {
 
    const flats = document.querySelectorAll('.flat');
    const flatInfo = document.querySelector('.flat-info');
    console.log(flatInfo);
    
    const flatObj = [{
        id: 0,
        house: "11234567",
        floor: "1",
        rooms: "3",
        square: "82.3 м.кв.",
        price: "700$",
        priceTotal: "52500$",
        flatNumber: 1,
        status: "booking",
    }]


    const renderInfo =(array)=> {
       const flatInformation = array.map(item => {
            return (`
                <div class="flat-item flat-info__house">
                    Номер дома : <b id="house-number">${item.house}</b>
                </div>
                <div class="flat-item flat-item--floor">
                    Этаж: <b id="floor-number">${item.floor}</b>
                </div>
                <div class="flat-item flat-item--rooms">
                    Кол-во комнат: <b id="rooms-quantity">${item.rooms}</b>
                </div>
                <div class="flat-item flat-item--square">
                    Площадб квартиры: <b id="flat-square">${item.square}</b>
                </div>
                <div class="flat-item flat-item--price">
                    Цена за м²: <b id="price-meter">${item.price}</b>
                </div>
                <div class="flat-item flat-item--price-total">
                    Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
                </div>
                <div class="flat-item flat-item--number">
                    Номер квартиры: <b id="flat-number">${item.flatNumber}</b>
                </div>
                <div class="flat-item flat-item--status">
                    Статус квартиры: <b id="flat-status">${item.status}</b>
                </div>
            `)
       })
       flatInfo.innerHTML = flatInformation;
    }
    renderInfo(flatObj);


    const removeActiveClass =()=> flats.forEach(item => {
        item.classList.remove('active');
    })
    


    flats.forEach(flat => {
        flat.addEventListener('click', function() {
            removeActiveClass();
            flat.classList.add('active')

            let thisFlat = flat.getAttribute('data-number')
             
            let flatNumber = flatArray.filter(item => item.flatNumber === Number(thisFlat))
            console.log(flatNumber);
            renderInfo(flatNumber);
        })


        if (flat.classList.contains('booking')) {
            flat.querySelector('.status-text').innerHTML = "Бронь";
            flat.querySelector('.bg-status').style.fill = '#6B68FF';
        } else if (flat.classList.contains('action')) {
            flat.querySelector('.status-text').innerHTML = "Акция";
            flat.querySelector('.bg-status').style.fill = '#80D34E';
        } else if (flat.classList.contains('sold')) {
            flat.querySelector('.status-text').innerHTML = "Продано";
            flat.querySelector('.bg-status').style.fill = '#D34E4E';
        } else {
            flat.querySelector('.status-text').innerHTML = "Свободна";
            flat.querySelector('.bg-status').style.fill = '#00DEFC';
        }
    })
}
})


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

const defaultItems = document.querySelectorAll('.default')
defaultItems.forEach(item=>{

    item.addEventListener("click", function(event){
       event.preventDefault()
     });
});












// const statusText = document.querySelectorAll('.ststus-text');
// const bgStatus = document.querySelectorAll('.bg-ststus');

















