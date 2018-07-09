<div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Recent Activities <small>Sessions</small></h2>
            <ul class="nav navbar-right panel_toolbox">
              <li class='pull-right'><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="dashboard-widget-content">

              <ul class="list-unstyled timeline widget">
                @foreach($logs as $log)
                <li>
                  <div class="block">
                    <div class="block_content">
                      <h2 class="title">
                                        <a>{!! $log->activity !!}</a>
                                    </h2>
                      <div class="byline">
                        <span>{{ $log->created_at }}</span> by <a>
                        @if($log->user['name'])
                          {{ $log->user['name'] }}
                        @else
                          <span style='color:red;'>deleted user</span>
                        @endif
                        </a>
                      </div>                    
                    </div>
                  </div>
                </li>
                @endforeach
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      </div>
