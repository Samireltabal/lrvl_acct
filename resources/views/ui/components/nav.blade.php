<nav class="navbar fixed-top navbar-expand-lg" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
      <a class="navbar-brand" href="{{ url('/') }}">
          <img src="{{ get_option('logo') }}" class='img-fluid'> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        {{ show_menu('home') }}
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="{{ get_option('twitter_url') }}" target="_blank" data-original-title="Follow us on Twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="{{ get_option('facebook_url') }}" target="_blank" data-original-title="Like us on Facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="{{ get_option('instagram_url') }}" target="_blank" data-original-title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          @if(Auth::check())
          <li class="dropdown nav-item">
                    <a href="#pablo" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
                      <div class="profile-photo-small">
                        <img src="@if(Auth::user()->image !== null)
                                        {{Storage::url(Auth::user()->image)}}
                                        @else
                                        {{ asset('bower_components/gentelella/production/images/user.png') }}
                                        @endif" alt="Circle Image" class="rounded-circle img-fluid">
                      </div>
                      @if(get_unread_messages_count() > 0)
                      <span class="notifications badge badge-primary">{{ get_unread_messages_count() }}</span>
                      @endif
                    </a>
                   
                    <div class="dropdown-menu dropdown-menu-right">
                      <h6 class="dropdown-header">Customer Data</h6>
                      <a href="/profile" class="dropdown-item">Profile</a>
                      @if(isEmployee())
                      <a href="/dashboard" class="dropdown-item">Dashboard</a>
                      @endif
                      <a href="/messages" class="dropdown-item">Messages @if(get_unread_messages_count() > 0)<span class='dropdown-not badge badge-primary pull-right'>{{ get_unread_messages_count() }} NEW</span> @endif </a>
                      <a href="/user/projects" class='dropdown-item'>Projects</a>
                      <a class="dropdown-item" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
            <i class="fa fa-sign-out"></i>  {{ __('Logout') }}
         </a>

         <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
             @csrf
         </form>
                    </div>
          </li>
          @else
          <li class="nav-item pointer">
            <a class="nav-link" data-toggle="modal" data-target="#loginModal"> <i class="fa fa-user"></i> Login </a>
          </li>
          @endif
        </ul>
      </div>
    </div>
  </nav>
  @include('ui.components.loginModal')

   