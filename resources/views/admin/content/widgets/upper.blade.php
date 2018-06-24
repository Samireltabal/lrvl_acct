<div class="row tile_count">
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Total Users</span>
        <div class="count">{{ $users->count() }}</div>
      <span class="count_bottom"><i class="green">Latest :</i> {{ $users->last()->name }}</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-clock-o"></i> Products</span>
        <div class="count"> 500 </div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-folder"></i> Active projects</span>
        <div class="count">{{ $projectsData['active'] }}</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>{{ $projectsData['percentage'] }}% </i> Completed</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-tasks"></i> Active tasks</span>
        <div class="count green">{{ $tasksCount }}</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>{{ $tasksPercentage }} %</i>  completed</span>
      </div>
      
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Total Collections</span>
        <div class="count">2,315</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> {{ $users->last()->name }}</span>
        <?php $last_user_id = $the_users::find($users->last()->id); ?>
      <div class="count">
           <span class="count_text">
          @foreach($last_user_id->roles as $role)
            {{ $role->name }}
          @endforeach
        </span>
      </div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
      </div>
    </div>