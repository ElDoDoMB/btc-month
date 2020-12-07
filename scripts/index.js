$(function() {
	
	let visitorCurrencySymbolByIsoCode;

    var randomUsers = [
        {
            "name": "Ebony A.",
            "gender": "female",
            "photo": "icon-f-1"
        }, 
        {
            "name": "William B.",
            "gender": "male",
            "photo": "icon-m-1"
        }, 
        {
            "name": "Jasmine A.",
            "gender": "female",
            "photo": "icon-f-19"
        }, 
        {
            "name": "Jack K.",
            "gender": "male",
            "photo": "icon-m-1"
        },
        {
            "name": "Maddy M.",
            "gender": "female",
            "photo": "icon-f-5"
        }, 
        {
            "name": "Chloe B.",
            "gender": "female",
            "photo": "icon-f-24"
        }, 
        {
            "name": "Georgia H.",
            "gender": "female",
            "photo": "icon-f-26"
        }, 
        {
            "name": "Noah A.",
            "gender": "male",
            "photo": "icon-m-14"
        }, 
        {
            "name": "Sophie B.",
            "gender": "female",
            "photo": "icon-f-11"
        }, 
        {
            "name": "James S.",
            "gender": "male",
            "photo": "icon-m-9"
        }, 
        {
            "name": "Thomas M.",
            "gender": "male",
            "photo": "icon-m-14"
        }, 
        {
            "name": "Lucas K.",
            "gender": "male",
            "photo": "icon-m-13"
        }, 
        {
            "name": "Isaac C.",
            "gender": "male",
            "photo": "icon-m-4"
        }, 
        {
            "name": "Ethan D.",
            "gender": "male",
            "photo": "icon-m-3"
        }, 
        {
            "name": "Alexander V.",
            "gender": "male",
            "photo": "icon-m-20"
        }, 
        {
            "name": "Jacob A.",
            "gender": "male",
            "photo": "icon-m-10"
        }, 
        {
            "name": "Lachlan K.",
            "gender": "male",
            "photo": "icon-m-14"
        },
        {
            "name": "Samuel A.",
            "gender": "male",
            "photo": "icon-m-2"
        }, 
        {
            "name": "Harrison C.",
            "gender": "male",
            "photo": "icon-m-4"
        }, 
        {
            "name": "Joshua F.",
            "gender": "male",
            "photo": "icon-m-16"
        }, 
        {
            "name": "Henry I.",
            "gender": "male",
            "photo": "icon-m-18"
        }, 
        {
            "name": "Hannah G.",
            "gender": "female",
            "photo": "icon-f-12"
        }, 
        {
            "name": "Stephanie C.",
            "gender": "female",
            "photo": "icon-f-7"
        }, 
        {
            "name": "Olivia S.",
            "gender": "female",
            "photo": "icon-f-18"
        }, 
        {
            "name": "Liam K.",
            "gender": "male",
            "photo": "icon-m-3"
        }, 
        {
            "name": "Cooper N.",
            "gender": "male",
            "photo": "icon-m-10"
        }, 
        {
            "name": "Lucy F.",
            "gender": "female",
            "photo": "icon-f-23"
        }, 
        {
            "name": "Grace J.",
            "gender": "female",
            "photo": "icon-f-20"
        }, 
        {
            "name": "Lily S.",
            "gender": "female",
            "photo": "icon-f-1"
        }, 
        {
            "name": "Benjamin K.",
            "gender": "male",
            "photo": "icon-m-9"
        }, 
        {
            "name": "Charlie C.",
            "gender": "male",
            "photo": "icon-m-2"
        }, 
        {
            "name": "Mason.",
            "gender": "male",
            "photo": "icon-m-1"
        }, 
        {
            "name": "Ryan A.",
            "gender": "male",
            "photo": "icon-m-14"
        }, 
        {
            "name": "Jess B.",
            "gender": "female",
            "photo": "icon-f-10"
        }, 
        {
            "name": "Max A.",
            "gender": "male",
            "photo": "icon-m-12"
        }, 
        {
            "name": "Leo M.",
            "gender": "male",
            "photo": "icon-m-20"
        }, 
        {
            "name": "Oscar T.",
            "gender": "male",
            "photo": "icon-m-10"
        }, 
        {
            "name": "Kate V.",
            "gender": "female",
            "photo": "icon-f-3"
        }, 
        {
            "name": "Harry A.",
            "gender": "male",
            "photo": "icon-m-18"
        }, 
        {
            "name": "Levi B.",
            "gender": "male",
            "photo": "icon-m-11"
        }, 
        {
            "name": "Caitlin C.",
            "gender": "female",
            "photo": "icon-f-21"
        }, 
        {
            "name": "Daniel B.",
            "gender": "male",
            "photo": "icon-m-3"
        }, 
        {
            "name": "Zoe S.",
            "gender": "female",
            "photo": "icon-f-19"
        }, 
        {
            "name": "Jessica H.",
            "gender": "female",
            "photo": "icon-f-5"
        }, 
        {
            "name": "Xavier B.",
            "gender": "male",
            "photo": "icon-m-2"
        }, 
        {
            "name": "Logan S.",
            "gender": "male",
            "photo": "icon-m-19"
        }, 
        {
            "name": "Hunter K.",
            "gender": "male",
            "photo": "icon-m-2"
        }, 
        {
            "name": "Jackson D.",
            "gender": "male",
            "photo": "icon-m-15"
        }, 
        {
            "name": "Archie G.",
            "gender": "male",
            "photo": "icon-m-2"
        }, 
        {
            "name": "Sebastian L.",
            "gender": "male",
            "photo": "icon-m-4"
        }
    ];    

    function shuffle (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    shuffle(randomUsers);  

    window.generateUser=function(visitorCurrencySymbolByIsoCode) {      
        let randomSum = Math.floor(Math.random() * 1000) + 100;  

        $('.dynamic-person-name-span').text(randomUsers[0].name);
        $('.dynamic-person-img-wrapper div').removeClass(); 
        $('.dynamic-person-img-wrapper div').addClass(randomUsers[0].photo); 
        $('.dynamic-person-sum-span').text(visitorCurrencySymbolByIsoCode + randomSum); 
        shuffle(randomUsers);
            setTimeout(function () {
            $('.dynamic-person-img-wrapper').removeClass('shake'); 
        }, 1000);
    }

    $('.visitor-currency-symbol').text("$");

    window.generateUser("$"); 

    setInterval(function () {
        generateUser("$");
    }, 9000);

    $('.scroll-top-btn').on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".formHeader").offset().top
        }, 1000);
    });

    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) {
            m = m - 1;
        }
        if (m < 0) {
            return;
        }

        document.getElementById('timer').innerHTML = m + ":" + s;
        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec;
        }
        ; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = "59";
        }
        ;
        return sec;
    }

    function ajax_get(url, callback) {

                var xmlhttp = new XMLHttpRequest();

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        try {
                            var data = JSON.parse(xmlhttp.responseText);
                        } catch(err) {
                            console.log(err.message + " in " + xmlhttp.responseText);
                            return;
                        }
                        callback(data);
                    }
                };

                xmlhttp.open("GET", url, true);
                xmlhttp.send();

            }

            ajax_get("//api.sypexgeo.net/", function(data) {

                let countryName = data["country"]["name_en"];
                let countryCode = data["country"]["iso"];

                let countryNameElement = document.querySelector(".country_name");
                let countryFlagElement = document.querySelector(".country_flag");

                countryNameElement.innerText = countryName;
                countryFlagElement.setAttribute("src", "https://www.countryflags.io/"+ countryCode +"/flat/64.png");

            });

    $('.intgrtn-cookie-popup-btn-accept').click(function() {
            $('.intgrtn-cookie-popup').removeClass('intgrtn-cookie-popup').addClass('close_popup');
        });

});