let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine([
	'public/bower_components/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js',
	'public/bower_components/gentelella/build/js/custom.js',
	'public/bower_components/gentelella/vendors/fastclick/lib/fastclick.js',
	'public/bower_components/gentelella/vendors/nprogress/nprogress.js',
	'public/bower_components/gentelella/vendors/Chart.js/dist/Chart.min.js',
	'public/bower_components/gentelella/vendors/gauge.js/dist/gauge.min.js',
	'public/bower_components/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
	'public/bower_components/gentelella/vendors/iCheck/icheck.min.js',
	'public/bower_components/gentelella/vendors/skycons/skycons.js',
	'public/bower_components/gentelella/vendors/jqvmap/dist/jquery.vmap.js',
	'public/bower_components/gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js',
	'public/bower_components/gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js',
	'public/bower_components/dropzone/dist/dropzone.js',
	'public/bower_components/gentelella/vendors/switchery/dist/switchery.min.js',
	'node_modules/chart.js/dist/dist/Chart.bundle.min.js',
	'public/bower_components/izitoast/dist/js/iziToast.min.js',
	'resources/assets/bower_components/sweetalert2/dist/sweetalert2.min.js',
	'resources/assets/bower_components/tinymce/tinymce.min.js',
	'public/bower_components/gentelella/vendors/jquery.tagsinput/src/jquery.tagsinput.js',
	'public/js/myapp.js'
	], 'public/js/all.js')
mix.combine([
	'public/js/jquery.min.js',
	'public/bower_components/jquery-ui/jquery-ui.js'
	]
	,'public/js/jquerybundle.js')

   
   mix.styles([
    'public/bower_components/gentelella/vendors/bootstrap/dist/css/bootstrap.css',
    'public/bower_components/gentelella/vendors/font-awesome/css/font-awesome.min.css',
    'public/bower_components/gentelella/vendors/nprogress/nprogress.css',
    'public/bower_components/gentelella/vendors/dropzone/dist/min/dropzone.min.css',
    'public/bower_components/gentelella/vendors/iCheck/skins/flat/green.css',
    'public/bower_components/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
    'public/bower_components/gentelella/vendors/jqvmap/dist/jqvmap.min.css',
    'public/bower_components/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css',
    'public/bower_components/izitoast/dist/css/iziToast.min.css',
	'node_modules/dygraphs/dist/dygraph.min.css',
	'public/bower_components/gentelella/vendors/switchery/dist/switchery.min.css',
	'resources/assets/bower_components/sweetalert2/dist/sweetalert2.min.css',
    'public/bower_components/gentelella/build/css/custom.min.css',
    'bower_components/jquery-ui/themes/base/all.css',
    'public/css/myapp.css',
	], 'public/css/all.css');


   mix.combine([
	'resources/assets/ui/js/core/jquery.min.js',
	'resources/assets/ui/js/core/popper.min.js',
	'resources/assets/ui/js/core/bootstrap-material-design.min.js',
	'resources/assets/ui/js/plugins/moment.min.js',
	'resources/assets/ui/js/plugins/bootstrap-datetimepicker.js',
	'resources/assets/ui/js/plugins/nouislider.min.js',
	'public/bower_components/izitoast/dist/js/iziToast.min.js',
	'resources/assets/ui/js/material-kit.min.js',
	'public/bower_components/jquery-ui/jquery-ui.js',
	'public/bower_components/lightbox2/dist/js/lightbox.min.js',
	'resources/assets/js/custom.js',
	], 'public/ui/app.js');

   mix.styles([
	'node_modules/bootstrap/dist/css/bootstrap.min.css',   
	'resources/assets/ui/css/material-kit.css',
   	'resources/assets/ui/css/custom.css',
   	'node_modules/font-awesome/css/font-awesome.min.css',
	'public/bower_components/jquery-ui/themes/base/all.css',
	'public/bower_components/lightbox2/dist/css/lightbox.min.css',
   	'public/bower_components/izitoast/dist/css/iziToast.min.css',
   	],'public/ui/app.css');
