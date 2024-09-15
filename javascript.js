//menu
$(document).ready(function () {
    var tombolMenu = $(".tombol-menu");
    var menu = $("nav .menu ul");

    function toggleMenu() {
        menu.toggleClass('show'); // Toggle menu visibility using CSS class
    }

    function closeMenu() {
        menu.removeClass('show'); // Close the menu
    }

    tombolMenu.on('click', function(event) {
        event.preventDefault();
        toggleMenu(); // Toggle menu visibility when the button is clicked
    });

    // Close the menu when an item inside the menu is clicked
    menu.find('a').on('click', function() {
        closeMenu(); // Close the menu when a menu item is clicked
    });

    // Close the menu when clicking outside of the menu and button
    $(document).on('click', function(event) {
        if (!$(event.target).closest('nav .menu, .tombol-menu').length) {
            closeMenu(); // Close menu if click is outside the menu and button
        }
    });

    function checkWidth() {
        var width = $(window).width();
        if (width >= 990) {
            menu.addClass('show'); // Ensure menu is visible for larger screens
            $(document).off('click'); // Remove click handler for large screens
        } else {
            menu.removeClass('show'); // Ensure menu is hidden for smaller screens
            tombolMenu.off('click').on('click', function(event) {
                event.preventDefault();
                toggleMenu(); // Toggle menu visibility when the button is clicked
            });
            $(document).on('click', function(event) {
                if (!$(event.target).closest('nav .menu, .tombol-menu').length) {
                    closeMenu(); // Close menu if click is outside the menu and button
                }
            });
        }
    }

    checkWidth(); // Initial check
    $(window).on('resize', checkWidth); // Re-check on window resize
});

//efek scroll

$(document).ready(function () {
    var scroll_post = 0;
    $(document).scroll(function () {
        scroll_post = $(this).scrollTop(); // Perbaiki penulisan scrollTop
        if (scroll_post > 0) {
            $("nav").addClass("putih"); // Menambahkan kelas putih jika digulir
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih"); // Menghapus kelas putih jika di atas
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    });
});
