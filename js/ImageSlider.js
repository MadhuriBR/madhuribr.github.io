<script src="js/jQuery.js"></script>
<script>
    jQuery(document).ready(function($) {
        $('.menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.nav-links').toggleClass('show');
        });

        $('.slider-img').on('mouseenter', function() {
            $('.slider-img').removeClass('active');
            $(this).addClass('active');
        });

        $('.slider-img').on('click', function() {
            var index = $('.slider-img').index(this);
            switch (index) {
                case 0:
                    window.location.href = 'canaraunion.html';
                    break;
                case 1:
                    window.location.href = 'ebb.html';
                    break;
                case 2:
                    window.location.href = 'elt.html';
                    break;
                case 3:
                    window.location.href = 'raheja.html';
                    break;
                case 4:
                    window.location.href = 'Flavortech.html';
                    break;
                case 5:
                    window.location.href = 'infinium.html';
                    break;
                case 6:
                    window.location.href = 'metafluid.html';
                    break;
                case 7:
                    window.location.href = 'flowertower.html';
                    break;
                case 8:
                    window.location.href = 'roboticartistry.html';
                    break;
                default:
                    window.location.href = 'default.html';
                    break;
            }
        });
    });
</script>
