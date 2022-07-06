let movies = [
    {
        id: 001,
        title: "Call me by your name",
        director: "Luca Guadagnino",
        runtime: "2h10m",
        release_year: 2017,
        description: "Elio, a teenager, develops feelings for Oliver, his father's temporary assistant. Although their relationship is temporary, Elio realises his sexual orientation and tries to come to terms with it.",
        poster_url: "images/CallMeByMyName.jpg",
        Cinema_Number: 1,
        ticket_price: 200,
        tickets_in_cart: localStorage.getItem('clickcounter1')

    },
    {
        id: 002,
        title: "Moonlight",
        director: "Barry Jenkins",
        runtime: "1h51m",
        release_year: 2016,
        description: "Chiron, a young African-American boy, finds guidance in Juan, a drug dealer, who teaches him to carve his own path. As he grows up in Miami, Juan's advice leaves a lasting impression on him.",
        poster_url: "images/Moonlight.jpg",
        Cinema_Number: 2,
        ticket_price: 200,
        tickets_in_cart: localStorage.getItem('clickcounter2')

    },
    {
        id: 003,
        title: "Love Simon",
        director: "Greg Berlanti",
        runtime: "1h50m",
        release_year: 2018,
        description: "Simon Spier keeps his sexual orientation a secret from his family. However, when a blackmailer threatens to reveal it, he goes on a roller-coaster journey to come to terms with his identity.",
        poster_url: "images/LoveSimon.jpg",
        Cinema_Number: 3,
        ticket_price: 200,
        tickets_in_cart: localStorage.getItem('clickcounter3')

    },
    {
        id: 004,
        title: "Holding the Man",
        director: "Neil Armfield",
        runtime: "2h7m",
        release_year: 2015,
        description: "Tim and John fell in love while teenagers at their all-boys high school. Their romance endured for 15 years to laugh in the face of everything life threw at it - the separations, the discrimination, the temptations, the jealousies and the losses.",
        poster_url: "images/HoldingAman.jpg",
        Cinema_Number: 4,
        ticket_price: 200,
        tickets_in_cart: localStorage.getItem('clickcounter4')
    }
];

function Moviespage() {
    //show the arrays of movies on cards on load
    //create variables
    //1st movie
    var cinemas1 = document.getElementById("cinema1");
    var pics1 = document.getElementById("pic1");
    var Titl1 = document.getElementById("Title1");
    var Description1 = document.getElementById("description1");
    var Price1 = document.getElementById("price1");

    //diplay movies
    cinemas1.innerHTML = "Cinema " + movies[0].Cinema_Number;
    pics1.src = movies[0].poster_url;
    Titl1.innerHTML = movies[0].title;
    Description1.innerHTML = movies[0].description;
    Price1.innerHTML = "R " + movies[0].ticket_price;

    //2nd movie
    var cinemas2 = document.getElementById("cinema2");
    var pics2 = document.getElementById("pic2");
    var titl2 = document.getElementById("title2");
    var description2 = document.getElementById("description2");
    var Price2 = document.getElementById("price2")

    cinemas2.innerHTML = "Cinema " + movies[1].Cinema_Number;
    pics2.src = movies[1].poster_url;
    titl2.innerHTML = movies[1].title;
    description2.innerHTML = movies[1].description;
    Price2.innerHTML = "R " + movies[1].ticket_price;

    //3rd Movie
    var cinemas3 = document.getElementById("cinema3");
    var pics3 = document.getElementById("pic3");
    var titl3 = document.getElementById("title3");
    var description3 = document.getElementById("description3");
    var Price3 = document.getElementById("price3")

    cinemas3.innerHTML = "Cinema " + movies[2].Cinema_Number;
    pics3.src = movies[2].poster_url;
    titl3.innerHTML = movies[2].title;
    description3.innerHTML = movies[2].description;
    Price3.innerHTML = "R " + movies[2].ticket_price;

    //4th Movie
    var cinemas4 = document.getElementById("cinema4");
    var pics4 = document.getElementById("pic4");
    var titl4 = document.getElementById("title4");
    var description4 = document.getElementById("description4");
    var Price4 = document.getElementById("price4")

    cinemas4.innerHTML = "Cinema " + movies[3].Cinema_Number;
    pics4.src = movies[3].poster_url;
    titl4.innerHTML = movies[3].title;
    description4.innerHTML = movies[3].description;
    Price4.innerHTML = "R " + movies[3].ticket_price;


    //show details button
    document.getElementById("show1").addEventListener("click", ShowDetails1());

    function ShowDetails1() {
        var Chosen1 = document.getElementById("movieChosen1");
        var titles1 = document.getElementById("ttlModal1");
        var direct1 = document.getElementById("directModal1");
        var yr1 = document.getElementById("yrModal1");
        var run1 = document.getElementById("runModal1");

        Chosen1.innerHTML = movies[0].title;
        titles1.innerHTML = movies[0].title;
        direct1.innerHTML = movies[0].director;
        yr1.innerHTML = movies[0].release_year;
        run1.innerHTML = movies[0].runtime;


    }
    document.getElementById("show2").addEventListener("click", ShowDetails2());

    function ShowDetails2() {
        var Chosen2 = document.getElementById("movieChosen2");
        var titles2 = document.getElementById("ttlModal2");
        var direct2 = document.getElementById("directModal2");
        var yr2 = document.getElementById("yrModal2");
        var run2 = document.getElementById("runModal2");

        Chosen2.innerHTML = movies[1].title;
        titles2.innerHTML = movies[1].title;
        direct2.innerHTML = movies[1].director;
        yr2.innerHTML = movies[1].release_year;
        run2.innerHTML = movies[1].runtime;


    }
    document.getElementById("show3").addEventListener("click", ShowDetails3());

    function ShowDetails3() {
        var Chosen3 = document.getElementById("movieChosen3");
        var titles3 = document.getElementById("ttlModal3");
        var direct3 = document.getElementById("directModal3");
        var yr3 = document.getElementById("yrModal3");
        var run3 = document.getElementById("runModal3");

        Chosen3.innerHTML = movies[2].title;
        titles3.innerHTML = movies[2].title;
        direct3.innerHTML = movies[2].director;
        yr3.innerHTML = movies[2].release_year;
        run3.innerHTML = movies[2].runtime;


    }
    document.getElementById("show4").addEventListener("click", ShowDetails4());

    function ShowDetails4() {
        var Chosen4 = document.getElementById("movieChosen4");
        var titles4 = document.getElementById("ttlModal4");
        var direct4 = document.getElementById("directModal4");
        var yr4 = document.getElementById("yrModal4");
        var run4 = document.getElementById("runModal4");

        Chosen4.innerHTML = movies[3].title;
        titles4.innerHTML = movies[3].title;
        direct4.innerHTML = movies[3].director;
        yr4.innerHTML = movies[3].release_year;
        run4.innerHTML = movies[3].runtime;
    }

    //adding movies to local storage with get items
    var allItems = localStorage.getItem('cartAll');
    if (allItems > 0) {
        document.getElementById("cartItems").innerHTML = allItems;
    }
    else {
        document.getElementById("cartItems").innerHTML = 0;
    }

    //Add to cart button
    //Adding item to cart by clicking book button
    var cost = Number(localStorage.getItem('totalCost'));;
    //Cart Items number and cart table,  Parse any JSON previously stored
    var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
    //CartMovie1 save all movies back to local storage
    var btn01 = document.getElementById('Booking1');
    btn01.addEventListener('click', function () {
        localStorage.setItem('mov1', JSON.stringify(movies[0]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += movies[0].ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items, increment number when movie is added
        if (localStorage.clickcounter1) {
            localStorage.clickcounter1 = Number(localStorage.clickcounter1) + 1;
        }
        else {
            localStorage.clickcounter1 = 1;
        }
    });

    //CartMovie2
    var btn02 = document.getElementById('Booking2');
    btn02.addEventListener('click', function () {
        localStorage.setItem('mov2', JSON.stringify(movies[1]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += movies[1].ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter2) {
            localStorage.clickcounter2 = Number(localStorage.clickcounter2) + 1;
        }
        else {
            localStorage.clickcounter2 = 1;
        }

    });

    //CartMovie3
    var btn03 = document.getElementById('Booking3');
    btn03.addEventListener('click', function () {
        localStorage.setItem('mov3', JSON.stringify(movies[2]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += movies[2].ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter3) {
            localStorage.clickcounter3 = Number(localStorage.clickcounter3) + 1;
        }
        else {
            localStorage.clickcounter3 = 1;
        }
    });

    //CartMovie4
    var btn04 = document.getElementById('Booking4');
    btn04.addEventListener('click', function () {
        localStorage.setItem('mov4', JSON.stringify(movies[3]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += movies[3].ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter4) {
            localStorage.clickcounter4 = Number(localStorage.clickcounter4) + 1;
        }
        else {
            localStorage.clickcounter4 = 1;
        }
    });
}

function ShoppingCartPage() {
    //Local storage get items
    var cost = Number(localStorage.getItem('totalCost'));
    var cartTable = document.getElementById('CartTable');
    var allItems = localStorage.getItem('cartAll');
    if (allItems > 0) {
        document.getElementById("cartItems").innerHTML = allItems;
        var totalNum = document.getElementById("allCounted");
        var sumVal = localStorage.getItem('totalCost');
        totalNum.innerHTML = 'R' + sumVal + ',00';
        remove();
    }
    else {
        document.getElementById("cartItems").innerHTML = 0;
        var total = document.getElementById("totalLabel");
        //localStorage.removeItem('totalCost');
        total.remove();
    }

    //Individual Movies In Cart
    var allItems1 = movies[0].tickets_in_cart;
    var allItems2 = movies[1].tickets_in_cart;
    var allItems3 = movies[2].tickets_in_cart;
    var allItems4 = movies[3].tickets_in_cart;


    if (allItems1 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow1" onclick="deleteRow(this)"><i class="fa fa-close "></i></button>' + ' ' + movies[0].title;
        cell2.innerHTML = 'R' + movies[0].ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem1"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems1 + ' ' + '<button class="items" id="addItem1"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (movies[0].ticket_price) * allItems1 + ',00';

        document.getElementById("removeItem1").addEventListener('click', function () {
            localStorage.clickcounter1 = Number(localStorage.clickcounter1) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= movies[1].ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter1 == 0) {
                localStorage.removeItem('clickcounter1');
                localStorage.removeItem('mov1');
            }

        });

        document.getElementById('addItem1').addEventListener('click', function () {
            localStorage.clickcounter1 = Number(localStorage.clickcounter1) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += movies[1].ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow1').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter1'));
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter1')) * movies[0].ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter1');
            localStorage.removeItem('mov1');
            refreshPage();

        });
    }

    if (allItems2 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow2" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + movies[1].title;
        cell2.innerHTML = 'R' + movies[1].ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem2"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems2 + ' ' + '<button class="items" id="addItem2"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (movies[1].ticket_price) * allItems2 + ',00';

        document.getElementById("removeItem2").addEventListener('click', function () {
            localStorage.clickcounter2 = Number(localStorage.clickcounter2) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= movies[1].ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter2 == 0) {
                localStorage.removeItem('clickcounter2');
                localStorage.removeItem('mov2');
            }
        });


        document.getElementById("addItem2").addEventListener('click', function () {
            localStorage.clickcounter2 = Number(localStorage.clickcounter2) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += movies[1].ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow2').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter2'));
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter2')) * movies[1].ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter2');
            localStorage.removeItem('mov2');
            refreshPage();
        });

    }

    if (allItems3 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow3" onclick="deleteRow(this)"><i class="fa fa-close "></i></button>' + ' ' + movies[2].title;
        cell2.innerHTML = 'R' + movies[2].ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem3"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems3 + ' ' + '<button class="items" id="addItem3"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (movies[2].ticket_price) * allItems3 + ',00';

        document.getElementById("removeItem3").addEventListener('click', function () {
            localStorage.clickcounter3 = Number(localStorage.clickcounter3) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= movies[2].ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter1 == 0) {
                localStorage.removeItem('clickcounter3');
                localStorage.removeItem('mov3');
            }

        });

        document.getElementById('addItem3').addEventListener('click', function () {
            localStorage.clickcounter3 = Number(localStorage.clickcounter3) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += movies[2].ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById("removeRow3").addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter3'));
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter3')) * movies[2].ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter3');
            localStorage.removeItem('mov3');
            refreshPage();

        });
    }

    if (allItems4 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow4" onclick="deleteRow(this)"><i class="fa fa-close "></i></button>' + ' ' + movies[3].title;
        cell2.innerHTML = 'R' + movies[3].ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem4"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems4 + ' ' + '<button class="items" id="addItem4"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (movies[3].ticket_price) * allItems4 + ',00';

        document.getElementById("removeItem4").addEventListener('click', function () {
            localStorage.clickcounter4 = Number(localStorage.clickcounter4) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= movies[3].ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter1 == 0) {
                localStorage.removeItem('clickcounter4');
                localStorage.removeItem('mov4');
            }

        });

        document.getElementById('addItem4').addEventListener('click', function () {
            localStorage.clickcounter4 = Number(localStorage.clickcounter4) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById("cartItems").innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += movies[3].ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow4').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter4'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter4')) * movies[3].ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter4');
            localStorage.removeItem('mov4');
            refreshPage();

        });
    }

    else {
        allItems2 = 0;
        allItems3 = 0;
        allItems4 = 0;
    };

    //Remove No items in cart text
    function remove() {
        var dis = document.getElementById("disappear");
        dis.remove();
    };

    //delete row in table
    function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("CartTable").deleteRow(i);
    };

    //Refresh page to show new quantity total price and cart price
    function refreshPage() {
        window.location.reload();
    }
}



