<div class="nav_menu">
  <nav>
    <div class="nav toggle">
      <a id="menu_toggle"><i class="fa fa-bars"></i></a>
    </div>

    <ul class="nav navbar-nav navbar-right">
      <li class="">
        <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <img src="{{ asset('bower_components/gentelella/production/images/user.png') }}" alt=""> {{ Auth::user()->name }}
          <span class=" fa fa-angle-down"></span>
        </a>
        <ul class="dropdown-menu dropdown-usermenu pull-right">
          <li><a href="{{ route('profile') }}"> {{ __('Profile') }}</a></li>
          <li>
            <li><a href="{{ route('settings') }}"> {{ __('Settings') }}</a></li>
          </li>
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

      <li role="presentation" class="dropdown hide">
        <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-envelope-o"></i>
          <span class="badge bg-green">6</span>
        </a>
        <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
          <li>
            <a>
              <span class="image"><img src="{{ asset('bower_components/gentelella/production/images/img.jpg') }}" alt="Profile Image" /></span>
              <span>
                <span>John Smith</span>
                <span class="time">3 mins ago</span>
              </span>
              <span class="message">
                Film festivals used to be do-or-die moments for movie makers. They were where...
              </span>
            </a>
          </li>
          <li>
            <a>
              <span class="image"><img src="{{ asset('bower_components/gentelella/production/images/img.jpg') }}" alt="Profile Image" /></span>
              <span>
                <span>John Smith</span>
                <span class="time">3 mins ago</span>
              </span>
              <span class="message">
                Film festivals used to be do-or-die moments for movie makers. They were where...
              </span>
            </a>
          </li>
          <li>
            <a>
              <span class="image"><img src="{{ asset('bower_components/gentelella/production/images/img.jpg') }}" alt="Profile Image" /></span>
              <span>
                <span>John Smith</span>
                <span class="time">3 mins ago</span>
              </span>
              <span class="message">
                Film festivals used to be do-or-die moments for movie makers. They were where...
              </span>
            </a>
          </li>
          <li>
            <a>
              <span class="image"><img src="{{ asset('bower_components/gentelella/production/images/img.jpg') }}" alt="Profile Image" /></span>
              <span>
                <span>John Smith</span>
                <span class="time">3 mins ago</span>
              </span>
              <span class="message">
                Film festivals used to be do-or-die moments for movie makers. They were where...
              </span>
            </a>
          </li>
          <li>
            <div class="text-center">
              <a>
                <strong>See All Alerts</strong>
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>