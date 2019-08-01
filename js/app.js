$(document).ready(function () {
    if ($(window).width() > 992) {
        $("#gridView").on("click", function () {
            if ($(".item-gallery").hasClass("gallery-view")) {
                $(".item-gallery").removeClass("gallery-view");
                $(".item-gallery").addClass("grid-view");
            }
        });
        $("#galleryView").on("click", function () {
            if ($(".item-gallery").hasClass("grid-view")) {
                $(".item-gallery").removeClass("grid-view");
                $(".item-gallery").addClass("gallery-view");
            }
        });
    }
    $("#fullView").on("click", function () {
        if ($(".item-gallery").hasClass("gallery-view")) {
            $(".item-gallery").removeClass("gallery-view");
            $(".item-gallery").addClass("full-view");
            $(".hide-mobile").css("display", "block");
        }
    });
    $("#galleryView").on("click", function () {
        if ($(".item-gallery").hasClass("full-view")) {
            $(".item-gallery").removeClass("full-view");
            $(".item-gallery").addClass("gallery-view");
            $(".hide-mobile").css("display", "none");
        }
    });

    $(".item-button .item-menu").on("click", function () {
        $(".item-button .item-menu.active").removeClass("active");
        $(this).addClass("active");
        if ($(".item-gallery").hasClass("grid-view")) {
            $(".item-gallery .card-artikel").css("display", "flex");
            $(".item-gallery .container-data").css("alignSelf", "center");
        } else {
            $(".item-gallery .card-artikel").css("display", "unset");
            $(".item-gallery .container-data").css("alignSelf", "normal");
        }
        if ($(window).width() < 992) {
            if ($(".item-gallery").hasClass("full-view")) {
                $(".item-gallery .card-artikel").removeClass("mobile-show");
            } else {
                $(".item-gallery .card-artikel").addClass("mobile-show");
            }
        }
    })

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        success: function (gallery) {
            $.each(gallery, function (i, data) {
                if ($(window).width() < 992) {
                    $(".item-gallery").append('<div class="card-artikel mobile-show"><img src=" ' + gallery[i]["thumbnailUrl"] + ' " alt="' + gallery[i]["title"] + '"><div class="container-data"><h2>' + gallery[i]["title"] + '</h2><p class="hide-mobile">' + gallery[i]["title"] + '<a href="' + gallery[i]["url"] + '" target="_blank" class="hide-mobile"> read more</a></p><h6 class="hide-mobile">1 july 2019</h6></div></div>');
                } else {
                    $(".item-gallery").append('<div class="card-artikel"><img src=" ' + gallery[i]["thumbnailUrl"] + ' " alt="' + gallery[i]["title"] + '"><div class="container-data"><h2>' + gallery[i]["title"] + '</h2><p>' + gallery[i]["title"] + '<a href="' + gallery[i]["url"] + '" target="_blank"> read more</a></p><h6>1 july 2019</h6></div></div>');
                }
                return i < 11;
            });
        }
    })
})