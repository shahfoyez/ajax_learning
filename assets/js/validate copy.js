<script>
    function myFunction2() {
        jQuery(document).ready(function($){
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    'products': '[522, 568]',
                    'courses': '[course name, course description]',
                    'users': 'Shah Fayez',
                    'email': 'example@gmail.com',
                    'action': 'foy_add_certificate' 
                },
                success: function(data) {
                    console.log(data);
                    alert(data);
                }
            });
        });
    }
</script>