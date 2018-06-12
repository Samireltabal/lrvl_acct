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
        <body class="login">
                <div>
                  <a class="hiddenanchor" id="signup"></a>
                  <a class="hiddenanchor" id="signin"></a>
            
                  <div class="login_wrapper">
                    <div class="animate form login_form">
                      <section class="login_content">
                           
                        {{-- login form --}}
                        <form method="POST" action="{{ route('login') }}">
                            @csrf    
                                <h1>Login Form</h1>
                                <div>
                                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="Email Address" required autofocus>

                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div>
                                    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" placeholder="Password" required>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <a class="reset_pass btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-default">
                                        {{ __('Login') }}
                                    </button>
                                </div>
                  
                                <div class="clearfix"></div>
                  
                                <div class="separator">
                                  <p class="change_link">New to site?
                                    <a href="{{ Route("register")}}" class="to_register"> Create Account </a>
                                  </p>
                  
                                  <div class="clearfix"></div>
                                  <br />
                  
                                  <div>
                                    <h1><i class="fa fa-paw"></i> Gentelella Alela!</h1>
                                    <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                  </div>
                                </div>
                              </form>
                            </section>
                          </div>
                  
                          
        
              
              </div>
            </div>
  

  <!-- Bootstrap -->
 

  </body>
</html>
