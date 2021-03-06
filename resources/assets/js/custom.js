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
