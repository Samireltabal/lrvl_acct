<div class="nav_menu">
  <nav>
    <div class="nav toggle">
      <a id="menu_toggle"><i class="fa fa-bars"></i></a>
    </div>

    <ul class="nav navbar-nav navbar-right">
      <li class="">
        <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <img src="@if(Auth::user()->image !== null)
          {{Storage::url(Auth::user()->image)}}
          @else
          {{ asset('bower_components/gentelella/production/images/user.png') }}
          @endif" alt=""> {{ Auth::user()->name }}
          <span class=" fa fa-angle-down"></span>
        </a>
        <ul class="dropdown-menu dropdown-usermenu pull-right">
          <li><a href="{{ route('profile') }}"> {{ __('Profile') }}</a></li>
          @if (Session::get('admin', 1))
          <li><a href="{{ route('settings') }}"> {{ __('Settings') }}</a></li>
          @endif
          <li><a class="dropdown-item" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
            <i class="fa fa-sign-out"></i> {{ __('Logout') }}
         </a>

         <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
             @csrf
         </form></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>