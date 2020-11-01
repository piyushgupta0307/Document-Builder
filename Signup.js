function validate() {
    var cpassword = document.myform.cpass.value;
    var name = document.myform.name.value;
    var mail = document.myform.email.value;
    var password = document.myform.pass.value;

    // If password not entered 
    if (name == "") {
        alert("Name Should not be blank.");
        console.log("JJJJJJJJJJJJjjj");
        return false;
    } else if (mail == "") {
        alert("Mail Should not be blank.");
        return false;
    } else if (password == "") {
        alert("Password Should not be blank.");
        return false;
    } else if (cpassword == "") {
        alert("Confirm Password Should not be blank.");
        return false;
    } else if (password.length < 6) {
        alert("Password Should be atleast 6 characters.");
        return false;
    } else if (cpassword.length < 6) {
        alert("Confirm Password Should be atleast 6 characters.");
        return false;
    } else if (password != cpassword) {
        alert("Password didnot match.")
        return false;
    }

    // If same return True. 
    // else {
    //     window.location("https://www.w3schools.com")
    return true;
    // }
}

(function($) {
    "use strict";
    $(document).ready(function() {
        $('.input100').each(function() {
            $(this).on('blur', function() {
                if ($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                } else {
                    $(this).removeClass('has-val');
                }
            })
        })
    });
    var showPass = 0;
    $(document).ready(function() {
        $('.btn-show-pass').on('click', function() {
            if (showPass == 0) {
                $(this).next('input').attr('type', 'text');
                $(this).find('i').removeClass('zmdi-eye');
                $(this).find('i').addClass('zmdi-eye-off');
                showPass = 1;
            } else {
                $(this).next('input').attr('type', 'password');
                $(this).find('i').addClass('zmdi-eye');
                $(this).find('i').removeClass('zmdi-eye-off');
                showPass = 0;
            }
        });
    });
})(jQuery);