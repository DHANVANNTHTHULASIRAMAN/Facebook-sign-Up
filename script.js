
$(document).ready(function(){
    $("#facebook").validate({
        rules:{
            fname:{
                required: true,
            },
            lname:{
                required:true,
            },
            mobileemail:{
                required:true,
                minlength:10

            },
            passsword:{
                required:true,
                minlength:8
            },
            day:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gender:{
                required:true,
            }

        }
    });
});
