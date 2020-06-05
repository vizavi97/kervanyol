$('.password-control').click(function () {
    if ($('.password-input').attr('type') === 'password') {
        $(this).addClass('view');
        $('.password-input').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('.password-input').attr('type', 'password');
    }
    return false;
});
$('[name=quantity]').bind("change keyup input click", function () {
    if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
        this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, '');
    }
});
