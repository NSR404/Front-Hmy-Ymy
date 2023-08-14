// Convert Language
   document.addEventListener('DOMContentLoaded', function () {
    const languageOptions = document.querySelectorAll('.options li');

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLanguage = option.getAttribute('data-value');

            // Update language direction based on the selected language
            const htmlTag = document.querySelector('html');
            if (selectedLanguage === 'arabic') {
                htmlTag.setAttribute('lang', 'ar');
                htmlTag.setAttribute('dir', 'rtl');
            } else {
                htmlTag.setAttribute('lang', 'en');
                htmlTag.setAttribute('dir', 'ltr');
            }

            // Rest of your code to update content and language icon
        });
    });
});


// Code Hidden Password
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "ri-eye-off-line" );
            $('#show_hide_password i').removeClass( "ri-eye-line" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "ri-eye-off-line" );
            $('#show_hide_password i').addClass( "ri-eye-line" );
        }
    });
});