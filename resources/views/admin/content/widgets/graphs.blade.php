<div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="dashboard_graph">

          <div class="row x_title">
            <div class="col-md-6">
              <h3>Projects Statistics<small> Projects / Month</small></h3>
            </div>
            <div class="col-md-6">
              <div  class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px">
                <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                <span>{{ $main_graph[0] }} - {{ $main_graph[7] }}</span> 
              </div>
            </div>
          </div>

          <div class="col-md-12 col-sm-12 col-xs-12">
          <canvas id="myChart" height="70"></canvas>
            
          </div>
          

          <div class="clearfix"></div>
        </div>
      </div>

    </div>