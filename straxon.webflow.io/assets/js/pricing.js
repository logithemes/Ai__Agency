// ============================================
// PRICING PLAN TOGGLES
// ============================================

$(document).ready(function() {

    $("#monthly-tab").on("click", function() {
        $(".price-item").each(function() {
            let month = $(this).data("month");
            $(this).contents().first()[0].textContent = "$" + month + " ";
            $(this).find("span").text("/Per Month");
        });
        $("#monthly-tab").addClass("tp-active");
        $("#yearly-tab").removeClass("tp-active");
    });

    $("#yearly-tab").on("click", function() {
        $(".price-item").each(function() {
            let year = $(this).data("year");
            $(this).contents().first()[0].textContent = "$" + year + " ";
            $(this).find("span").text("/Per Year");
        });
        $("#yearly-tab").addClass("tp-active");
        $("#monthly-tab").removeClass("tp-active");
    });

});