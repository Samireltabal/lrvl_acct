@extends('ui.layout.uiNoHeader')
@if($projects->count())
@section('content')
<div class="title">
	<h2 class="col-lg-12"><i class="fa fa-folder" area-hidden='true'></i> Projects       <a href="#" class='btn btn-primary btn-sm pull-right'><i class='fa fa-plus'></i>  Request New Project</a></h2>
</div>

	<div class="row">
		<!-- <div class="col-md-3 col-sm-3 col-xs-12 profile_left"> -->
                        <!-- Left Panel -->                 

		<!-- </div> -->
		<div class="col-lg-12">		
	        			<!--  Right Panel -->
	       <table class='table projects'>
		<thead>
			<tr>
                          <th>Project Name</th>
                          <th>Completion %</th>
                          <th>Status</th>
                          <th>Due Date</th>
				
				
			
			</tr>
		</thead>
		<tbody>
			@foreach($projects as $project)
				<tr>
					
					<?php 
							$tasks_total_weight = DB::table('tasks')
												->where('projects_id',$project->id)
												->sum('weight');
							$tasks_completed_weight = DB::table('tasks')
														->where([['projects_id' , '='  , $project->id ], [ 'status' , '=' , 0]])
														->sum('weight');
							if($tasks_total_weight !== 0)
							{
							$completion_rate = round($tasks_completed_weight / $tasks_total_weight * 100,0);
							$att = '% Completed';
							}else{
							$completion_rate = "Not started yet";
							$att = '';
							}	
						
					 ?>
					<td>
                            <a href="/user/project/{{ $project->id }}">{{ $project->name }}</a>
                            <br />
                            <small>{{ $project->created_at }}</small>
                          </td>
					
					<td class="project_progress">
                            <div class="progress progress_sm">
                              <div class="progress-bar 
                              @if($completion_rate < 25) bg-red @else bg-green @endif" role="progressbar" aria-valuenow="{{$completion_rate}}" aria-valuemin="0" aria-valuemax="100" style="width: {{$completion_rate}}%;"></div>
                            </div>
                            <small>{{$completion_rate}} {{ $att }}</small>
                          </td>
					<td>					
						@if( $project->status == 1 && $tasks_total_weight !== 0 && $completion_rate !== "Not started yet" && $completion_rate != 0) 
							<span class="badge badge-success">Active</span>
						@elseif( $project->status == 1 && $tasks_total_weight == 0 ) 
							<span class="badge badge-warning">Assigning Tasks</span>
						@elseif( $project->status == 1 && $completion_rate == 0 ) 
							<span class="badge badge-info">Tasks Assigned</span>
						@elseif ( $project->status == 0 )
							<span class="badge badge-error">Ended</span>					
						@endif
					</td>
					<td>
						{{ $project->due_date}}
					</td>
						
				</tr>
			@endforeach
		</tbody>
	</table>
	    </div>
	</div>

@endsection
@else
@section('content')
<div class="title">
	<h2 class="col-lg-12"><i class="fa fa-folder" area-hidden='true'></i> Projects</h2>
</div>

	<div class="row">
		<div class="col-lg-12">
		<h3>No Associated Projects , <small><a href="#">Request A Project</a></small></h3>
		</div>
		<div class="space-100"></div>
	</div>
	@endsection
@endif