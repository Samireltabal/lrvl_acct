@extends('projects.main')

@section('page_title')
 Projects 
@endsection

@section('page_description')
 All projects
@endsection

@section('page_content')
	<a href='/projects/create' class="btn btn-success pull-right"><i class='fa fa-plus-square'></i></a>
	<table class='table table-striped projects'>
		<thead>
			<tr>
				<th style="width: 1%">#</th>
                          <th style="width: 20%">Project Name</th>
                          <th>Customer Name</th>
                          <th>Completion %</th>
                          <th>Status</th>
                          <th style="width: 20%">#Edit</th>
				
				
			
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
							}else{
							$completion_rate = "No Tasks Assigned";
							}	
						
					 ?>
					<td>{{ $project->id }}</td>
					<td>
                            {{ $project->name }}
                            <br />
                            <small>{{ $project->created_at }}</small>
                          </td>
					
					<td><a href="customer/id/{{ $project->customer->id }}">{{ $project->customer->name }}</a></td>
					<td class="project_progress">
                            <div class="progress progress_sm">
                              <div class="progress-bar 
                              @if($completion_rate < 25) bg-red @else bg-green @endif" role="progressbar" aria-valuenow="{{$completion_rate}}" aria-valuemin="0" aria-valuemax="100" style="width: {{$completion_rate}}%;"></div>
                            </div>
                            <small>{{$completion_rate}}% Complete</small>
                          </td>
					<td>
						@if( $project->status == 1) 
							<span class="badge badge-success">Active</span>
						@else
							<span class="badge badge-error">Ended</span>
						@endif
					</td>
					<td>
					
                            <a href="/projects/id/{{ $project->id }}" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                            <a href="/projects/id/{{ $project->id }}/delete" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a>
                          </td>
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection