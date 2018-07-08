<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-121636854-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-121636854-1');
</script>
  <script type="text/javascript" src='{{ asset("ui/app.js") }}'></script>

  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('img/apple-icon.png') }}">
  <link rel="icon" type="image/png" href="{{ asset('img/favicon.png') }}">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
  {{ get_option('app_name') }}
   </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <!-- CSS Files -->
  <link href="{{ asset('/ui/app.css') }}" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
</head>

<body class="index-page sidebar-collapse">
  <!-- navigation -->
  @include('ui.components.nav')
  <!-- end navigation -->



  <!-- Content -->
  <div class="main main-raised" style="margin-top:80px;">
    <div class="profile-content">
      @yield('content')
    </div>
  </div>
  <!-- end content -->

  <!-- footer -->
  @include('ui.components.footer')
  
  @include('inc.messages')
  
</body>

</html>
