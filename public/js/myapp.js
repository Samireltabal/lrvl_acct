function fireNotify($type,$message) {
    switch($type) {
case 'success':
iziToast.success({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
case 'info':
iziToast.info({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
case 'error':
iziToast.error({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
case 'warning':
iziToast.warning({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
}};

$('#q').each(function() {
        var $this = $(this);
        var src = $this.data('action');

        $this.autocomplete({
            source: src,
            minLength: 2,
            select: function(event, ui) {
                $this.val(ui.item.name);
                $('#id').val(ui.item.id);
            }
        });
    });