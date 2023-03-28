$(document).ready(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        readURL(this);
    });

    $("body").on("click", "input[name='product']", function () {
        if ($("input[name='product']:checked").val() == 'other') {
            $("section[name='product_other']").css('display', 'block');
        } else {
            $("section[name='product_other']").css('display', 'none');
            $("section[name='product_other']").val('');
        }
    });

    // $("body").on("click", "input[name='when']", function () {
    //     if ($("input[name='when']:checked").val() == 'other') {
    //         $("textarea[name='when_other']").css('display', 'block');
    //     } else {
    //         $("textarea[name='when_other']").css('display', 'none');
    //         $("textarea[name='when_other']").val('');
    //     }
    // });

});