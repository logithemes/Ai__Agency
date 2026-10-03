// ============================================
// COUNTER ANIMATION
// ============================================

(function () {
    "use strict";

    gsap.registerPlugin(ScrollTrigger);

    var counters = document.querySelectorAll(".counter-wrapper");

    if (!counters.length) {
        return;
    }

    counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute("data-target"), 10);

        if (isNaN(target)) {
            return;
        }

        var counterValue = { value: 0 };

        gsap.to(counterValue, {
            value: target,
            duration: 2,
            ease: "power2.out",

            scrollTrigger: {
                trigger: counter.closest(".counters-wrapper"),
                start: "top 85%",
                once: true
            },

            onUpdate: function () {
                var value = Math.floor(counterValue.value);

                counter.textContent = value < 10 ? "0" + value : value;
            },

            onComplete: function () {
                counter.textContent = target < 10 ? "0" + target : target;
            }
        });
    });

})();