<div class="navbar nav_title" style="border: 0;">
    <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>{{ get_option('app_name') }}</span></a>
  </div>

  <div class="clearfix"></div>

  <!-- menu profile quick info -->
  <div class="profile clearfix">
    <div class="profile_pic">
      <img src="
            @if(Auth::user()->image !== null)
            {{Storage::url(Auth::user()->image)}}
            @else
            {{ asset('bower_components/gentelella/production/images/user.png') }}
            @endif
            " alt="{{ Auth::user()->name }}" class="img-circle profile_img">
    </div>
    <div class="profile_info">
      <span>Welcome,</span>
      <h2>{{ Auth::user()->name }}</h2>
    </div>
  </div>
  <!-- /menu profile quick info -->

  <br />

  <!-- sidebar menu -->
  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">
      <h3>{{ request()->route()->getAction('as') }}</h3>
      
      <ul class="nav side-menu">
        <li><a><i class="fa fa-home"></i> {{ __('Home')}} <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a href="/Dashboard"> {{ __('Dashboard')}} </a></li>
            <li><a href="/"> {{ __('Website')}} </a></li>
          </ul>
        </li>
        <li><a><i class="fa fa-user"></i> {{ __('Users') }} <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a href="/Dashboard/members">Users</a></li>
            <li><a href="/Dashboard/Create">Create User</a></li>
            <li><a href="/Dashboard/roles">Roles</a></li>
          </ul>
        </li>
        <li><a><i class="fa fa-cog "></i> Settings <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a href="/backup">Backups</a></li>
            <li><a href="/settings">Site Options</a></li>            
          </ul>
        </li>
       
        <li><a><i class="fa fa-folder"></i>Projects <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu">
            <li><a href="/projects">List Projects <span class="label label-warning pull-right">WIP</span></a></li>
            <li><a href="/projects/create">Create Porject</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="menu_section">
      <h3>Reports</h3>
      <ul class="nav side-menu">
                        
        <li><a href="javascript:void(0)"><i class="fa fa-bar-chart-o"></i> Live Statistics <span class="label label-success pull-right">Coming Soon</span></a></li>
        <li><a href="javascript:void(0)"><i class="fa fa-bar-chart-o"></i> Statistics <span class="label label-success pull-right">Coming Soon</span></a></li>
        <li><a href="javascript:void(0)"><i class="fa fa-bar-chart-o"></i> Live Statistics <span class="label label-success pull-right">Coming Soon</span></a></li>
        <li><a href="javascript:void(0)"><i class="fa fa-bar-chart-o"></i> Live Statistics <span class="label label-success pull-right">Coming Soon</span></a></li>
      </ul>
      <!-- /menu footer buttons -->
      <div class="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings" href='{{ route('settings') }}'>
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout" href="{{ route('logout') }}"
        onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();">
          <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form></li>
      </div>
      <!-- /menu footer buttons -->