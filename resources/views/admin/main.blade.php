<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('bower_componenets/gentelella/production/images/favicon.ico') }}" type="image/ico" />

    <title>{{ config('app.name', 'Laravel') }} | {{ request()->route()->getAction('as') }}</title>

    <link href="{{ asset('bower_components/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('bower_components/gentelella/vendors/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
           <!-- NProgress -->
    <link href="{{ asset('bower_components/gentelella/vendors/nprogress/nprogress.css') }}" rel="stylesheet">
            <!-- iCheck -->
    <link href="{{ asset('bower_components/gentelella/vendors/iCheck/skins/flat/green.css') }}" rel="stylesheet">
        <!-- bootstrap-progressbar -->
    <link href="{{ asset('bower_components/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css') }}" rel="stylesheet">
        <!-- JQVMap -->
    <link href="{{ asset('bower_components/gentelella/vendors/jqvmap/dist/jqvmap.min.css')}}" rel="stylesheet"/>
        <!-- bootstrap-daterangepicker -->
    <link href="{{ asset('bower_components/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css')}}" rel="stylesheet">
        
    <link href="{{ asset('bower_components/izitoast/dist/css/iziToast.min.css') }}" rel="stylesheet">
      <!-- Custom Theme Style -->
    <link href="{{ asset('bower_components/gentelella/build/css/custom.min.css') }}" rel="stylesheet">
        <!-- Carrot Custem CSS -->
    <link href="{{ asset('css/myapp.css') }}" rel="stylesheet">

     <!-- JQuery -->
     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>


  </head>
  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <!-- sidebar menu -->
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
                @include('admin.sidebar')
              </div>
            </div>
          <!-- /sidebar Menu -->
          
                  </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
           @include('admin.topbar')
        </div>
        <!-- /top navigation -->
        
        @yield('content')        

        <!-- footer content -->
        <footer>
          @include('admin.footer')
        </footer>
        <!-- /footer content -->
      </div>
    </div>
               <!-- Bootstrap -->
    <script src="{{ asset('bower_components/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js') }}" defer></script>
        <!-- FastClick -->
    <script src="{{ asset('bower_components/gentelella/vendors/fastclick/lib/fastclick.js') }}" defer></script>
        <!-- NProgress -->
    <script src="{{ asset('bower_components/gentelella/vendors/nprogress/nprogress.js') }}" defer></script>
        <!-- Charts  -->
    <script src="{{ asset('bower_components/gentelella/vendors/Chart.js/dist/Chart.min.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/gauge.js/dist/gauge.min.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/iCheck/icheck.min.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/skycons/skycons.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/jqvmap/dist/jquery.vmap.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/flot.curvedlines/curvedLines.js') }}" defer></script>
    {{-- <script src="{{ asset('bower_components/gentelella/vendors/Flot/jquery.flot.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/Flot/jquery.flot.pie.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/Flot/jquery.flot.time.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/Flot/jquery.flot.stack.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/Flot/jquery.flot.resize.js') }}" defer></script>
        {{-- JQVMap --}}
    <script src="{{ asset('bower_components/gentelella/vendors/jqvmap/dist/jquery.vmap.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js') }}" defer></script> --}}
        <!-- DateJS -->
    <script src="{{ asset('bower_components/gentelella/vendors/DateJS/build/date.js') }}" defer></script>
        <!-- bootstrap-daterangepicker -->
    <script src="{{ asset('bower_components/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js') }}" defer></script>
    <script src="{{ asset('bower_components/gentelella/vendors/moment/min/moment.min.js') }}" defer></script>
    <!-- Custom Theme Scripts -->
    <script src="{{ asset('bower_components/gentelella/build/js/custom.js') }}" defer></script>

    <script src="{{ asset('bower_components/izitoast/dist/js/iziToast.min.js') }}" defer></script>    
    <!-- Custom Theme Scripts -->
  <script type="text/javascript" src="{{ asset('js/myapp.js')}}"></script>
  </body>
</html>
