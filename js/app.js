$(document).ready(function () {

    var $wrapperGallery = $(".item-gallery")

    if ($(window).width() > 992) {

        $("#gridView").on("click", function () {
            if ($wrapperGallery.hasClass("gallery-view")) {
                $wrapperGallery.removeClass("gallery-view");
                $wrapperGallery.addClass("grid-view");
            }
        });
        $("#galleryView").on("click", function () {
            if ($wrapperGallery.hasClass("grid-view")) {
                $wrapperGallery.removeClass("grid-view");
                $wrapperGallery.addClass("gallery-view");
            }
        });
    }
    $("#fullView").on("click", function () {
        if ($wrapperGallery.hasClass("gallery-view")) {
            $wrapperGallery.removeClass("gallery-view");
            $wrapperGallery.addClass("full-view");
            $(".hide-mobile").css("display", "block");
        }
    });
    $("#galleryView").on("click", function () {
        if ($wrapperGallery.hasClass("full-view")) {
            $wrapperGallery.removeClass("full-view");
            $wrapperGallery.addClass("gallery-view");
            $(".hide-mobile").css("display", "none");
        }
    });

    $(".item-button .item-menu").on("click", function () {
        $(".item-button .item-menu.active").removeClass("active");
        $(this).addClass("active");
        if ($wrapperGallery.hasClass("grid-view")) {
            $(".item-gallery .card-artikel").css("display", "flex");
            $(".item-gallery .container-data").css("alignSelf", "center");
        } else {
            $(".item-gallery .card-artikel").css("display", "unset");
            $(".item-gallery .container-data").css("alignSelf", "normal");
        }
        if ($(window).width() < 992) {
            if ($wrapperGallery.hasClass("full-view")) {
                $(".item-gallery .card-artikel").removeClass("mobile-show");
            } else {
                $(".item-gallery .card-artikel").addClass("mobile-show");
            }
        }
    })

    let namaBulan = () => {
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth()+1;
        let year = currentDate.getFullYear();
        let monthName;
        
        //  Month

        switch(month){
            case 1:
                monthName = "January";
                break;
            case 2:
                monthName = "February";
                break;
            case 3:
                monthName = "March";
                break;
            case 4:
                monthName = "April";
                break;
            case 5:
                monthName = "May";
                break;
            case 6:
                monthName = "June";
                break;
            case 7:
                monthName = "July";
                break;
            case 8:
                monthName = "August";
                break;
            case 9:
                monthName = "September";
                break;
            case 10:
                monthName = "October";
                break;
            case 11:
                monthName = "November";
                break;
            case 12:
                monthName = "December";
                break;
        }

        return day + ' ' + monthName + ' ' + year;
    }

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        success: function (gallery) {
            $.each(gallery, function (i, data) {

                // Jumlah Total yang ingin di tampilkan
                let galleryTotal = 11;
                
                $(".gallery-total").html(galleryTotal);
                $(".current-date").html(namaBulan);

                if ($(window).width() < 992) {
                    $wrapperGallery.append('<div class="card-artikel mobile-show"><img src=" ' + gallery[i]["thumbnailUrl"] + ' " alt="' + gallery[i]["title"] + '"><div class="container-data"><h2>' + gallery[i]["title"] + '</h2><p class="hide-mobile">' + gallery[i]["title"] + '<a href="' + gallery[i]["url"] + '" target="_blank" class="hide-mobile"> read more</a></p><h6 class="hide-mobile">1 july 2019</h6></div></div>');
                } else {
                    $wrapperGallery.append('<div class="card-artikel"><img src=" ' + gallery[i]["thumbnailUrl"] + ' " alt="' + gallery[i]["title"] + '"><div class="container-data"><h2>' + gallery[i]["title"] + '</h2><p>' + gallery[i]["title"] + '<a href="' + gallery[i]["url"] + '" target="_blank"> read more</a></p><h6>1 july 2019</h6></div></div>');
                }
                return i < galleryTotal;
            });
        }
    })
})