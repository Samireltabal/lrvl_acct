				@extends('projects.main')
			@section('page_title')
			 {{ $project->name }}  
 			@endsection

 			@section('buttons')
 			@if($project->status == 1)
 			<div class="pull-right">
 				<a class="btn btn-success" href="#create_task"><i class='fa fa-plus-square'></i> Add Task </a>

 				<button type="button" class="btn btn-success" data-toggle="modal"data-target="#taskModal"><i class='fa fa-paperclip'></i> Upload Attachment </button>

 				<button type="button" class="btn btn-success" data-toggle="modal"data-target="#taskModal"><i class='fa fa-check-square'></i> Mark As Completed </button>
			</div>
				
				<div class="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
										  <div class="modal-dialog" role="document">
										    <div class="modal-content">
										      <div class="modal-header">
										        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										        <h4 class="modal-title" id="myModalLabel">Create Task</h4>
										      </div>
										      <div class="modal-body">
										        	<!-- @include('projects.sub.taskForm') -->
										      </div>
										    </div>
										  </div>
										</div>
										@else
										<div class="pull-right">
										<span class="badge badge-success">Project have been completed</span>	
										</div> 				
										@endif
 			@endsection

			@section('page_description')

			@endsection

			@section('page_content')
						@if (count($project))

				<div class="col-md-3 col-sm-3 col-xs-12 profile_left">
				   	
	            
	            <!-- /menu profile quick info -->
                        <h3>{{ $project->name }} </h3>
  
                        <ul class="list-unstyled user_data">
                          <li><i class="fa fa-calendar user-profile-icon"></i>
                          	{{ $project->created_at }}
                          </li>
  
                          <li>
                          	@if ( $project->url !== "NULL")
                            	<i class="fa fa-github user-profile-icon"></i>                            
                            		{{ $project->url }}
                          		</li>
                          	@endif	
                          <li class="m-top-xs">
                            <i class="fa fa-hashtag user-profile-icon"></i> Project Id : 
							{{ $project->id }}
                          </li>
                        </ul>
                      </div>
               <!-- Left Projet Data -->
  <div class="col-md-9 col-sm-9 col-xs-12">
  	  					<h3><i class="fa fa-address-card"></i> Customer data</h3>
  	  					@if(count($project->customer->info))
  					
						<h4><i class='fa fa-user'></i> Customer Name : {{ $project->customer->info[0]->name }}</h4>
						<h4><i class='fa fa-envelope'></i> Email : {{ $project->customer->email }}</h4>
						<h4><i class='fa fa-map-marker'></i> Country : {{ $project->customer->info[0]->country }}</h4>
						<h4><i class='fa fa-phone'></i> Phone Number : {{ $project->customer->info[0]->phone }}</h4>
						<h4><i class='fa fa-link'></i> website: <a href="{{ $project->customer->info[0]->website }}"> {{ $project->customer->info[0]->website }} </a></h4>
						
						@else
							<h4><i class='fa fa-user'></i> Customer Name : {{ $project->customer->name }}</h4>
							<h4><i class='fa fa-envelope'></i> Email : {{ $project->customer->email }}</h4>
							<p>Customers Does not have sufficent information , Please update customer info</p>
						@endif
						<div class="clearfix"></div>	
						<hr>
						<h3><i class="fa fa-github"></i> Github Data</h3>
							 <p> <b>GitHub Url :</b>	{{ get_repo_url($project->github_repository) }}</p>
							 <p> <b>Project Description :</b> {{ get_repo_description($project->github_repository) }}</p>
						<hr>
						<div class="clearfix"></div>
						<h3><i class="fa fa-paperclip"></i> Project Description</h3>
						{{ $project->description }}
						<div class="clearfix"></div>	
						<hr>
						<h3><i class="fa fa-calendar"></i> Due date</h3>
						{{ $project->due_date }}
						<div class='clearfix'></div>
						<hr>
						<h3><i class="fa fa-calendar"></i> Completion rate</h3>
						
						<?php 
							$tasks_total_weight = DB::table('tasks')
												->where('projects_id',$project->id)
												->sum('weight');
							$tasks_completed_weight = DB::table('tasks')
														->where([['projects_id' , '='  , $project->id ], [ 'status' , '=' , 0]])
														->sum('weight');
							$completion_rate = round($tasks_completed_weight / $tasks_total_weight * 100,2);
						?>
						<div class="progress">
						  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="{{$completion_rate}}" aria-valuemin="0" aria-valuemax="100" style="width: {{$completion_rate}}%;">
						    <span class="sr-only">{{$completion_rate}}% Complete</span>
						    {{$completion_rate}} %
						  </div>
						</div>
						<div class='clearfix'></div>
						<hr>
						<h3><i class="fa fa-paperclip"></i> Attachments </h3>
						@if(count($project->attachments))
							@foreach($project->attachments as $attachment)
								<a href="{{Storage::url($attachment->file_name)}}">
								@if($attachment->extention == "pdf")
								<i class='fa fa-file-pdf-o'></i>
								@elseif($attachment->extention == "jpg" || $attachment->extention == "png" || $attachment->extention == "gif")
								<i class='fa fa-file-image-o'></i>
								@else
								<i class='fa fa-file-code-o'></i>
								@endif
								{{ $attachment->file_name }}
								</a>
							@endforeach
						@else
							no attachments found
						@endif
						<div class='clearfix'></div>
						<hr>
						@if( count($project->tasks) )
						<h3>Associated Tasks</h3>
							<table class='table table-responsive table-striped'>
								<thead>
									<tr>
										<td class="col-xs-0">id</td>
										<td class="col-xs-3">Task name</td>
										<td class="col-xs-1">Status</td>
										<td class="col-xs-1">Description</td>
										<td class="col-xs-3">Assigned To</td>
										<td class="col-xs-2">creator</td>
										<td class="col-xs-1"><small>Created At</small></td>
										<td class="col-xs-1"><small>Completed at</small></td>
										<td class="col-xs-1">Close</td>
									</tr>
								</thead>
								<tbody>
							@foreach($project->tasks as $task)
								@if(count($task))
									<tr>	
										<td>{{ $task->id }}</td>
										<td>{{ $task->name }}</td>
										<td>
												@if( $task->status == 1) 
													<span class="badge badge-success">Active</span>
												@else
													<span class="badge badge-error">Ended</span>
												@endif
											</td>
											<td>
													<button type="button" class="btn btn-warning btn-xs" data-toggle="modal"data-target="#infoModal{{ $task->id }}"><i class='fa fa-info'></i> More Info</button>
											</td>
											<td>
												@foreach($task->users as $user_task)
													<i class="fa fa-user"></i>  <a href="/customer/id/{{ $user_task->id }}">{{ $user_task->name }}</a><br>
												@endforeach											
											</td>
											<td>
												<i class="fa fa-user"></i> <a href="/customer/id/{{ $task->creater->id }}">{{ $task->creater->name }}</a>
											</td>
											<td>{{ $task->created_at->year }}-{{ $task->created_at->month }}-{{ $task->created_at->day }}</td>
											<td>
												@if($task->status == 0)
													{{ $task->updated_at->year }}-{{ $task->updated_at->month }}-{{ $task->updated_at->day }}
												@else
													active
												@endif
											</td>
											<td>
												@if($task->status == 1)
												{{ Form::open(array('url' => 'closeTask', 'method' => 'post')) }}
												<input type="hidden" name="project_id" value='{{$project->id}}'>
												<input type="hidden" name="task_id" value='{{ $task->id }}'>
												<button class='btn btn-warning btn-xs'><i class='fa fa-check'></i></button>
												{{ Form::close() }}
												@else
													<span class="btn btn-success btn-xs"><i class="fa fa-check"></i></span>
												@endif
											</td>
										</tr>

										<!-- Modal -->
										<div class="modal fade" id="infoModal{{ $task->id }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
										  <div class="modal-dialog" role="document">
										    <div class="modal-content">
										      <div class="modal-header">
										        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										        <h4 class="modal-title" id="myModalLabel">Task Description</h4>
										      </div>
										      <div class="modal-body">
										        											{{ $task->description }}
										      </div>
										    </div>
										  </div>
										</div>

								

								@endif
							@endforeach
								</tbody>
							</table>
						@else
							no associated Tasks to this user
						@endif
						<div id="create_task">
						@include('projects.sub.taskForm')
						</div>
						</div>
						  @else 
						   This User Does Not have associated Profile
						  @endif
			@endsection