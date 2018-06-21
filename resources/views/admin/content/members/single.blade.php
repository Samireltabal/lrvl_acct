		@extends('projects.main')
			@section('page_title')
			 {{ $user->name }} Profile
 			@endsection

			@section('page_description')

			@endsection

			@section('page_content')
						@if (count($user->info))

				<div class="col-md-3 col-sm-3 col-xs-12 profile_left">
				   	 <img src="
	            @if($user->image !== null)
	            {{Storage::url($user->image)}}
	            @else
	            {{ asset('bower_components/gentelella/production/images/user.png') }}
	            @endif
	            " alt="{{ $user->name }}" class="img-responsive avatar-view">
	            
	            <!-- /menu profile quick info -->
                        <h3>{{ $user->info[0]->name }}</h3>
  
                        <ul class="list-unstyled user_data">
                          <li><i class="fa fa-calendar user-profile-icon"></i>
                          	{{ $user->info[0]->birth }}
                          </li>
  
                          <li>
                            <i class="fa fa-briefcase user-profile-icon"></i> 
                            
                            {{ $user->roles[0]->name }}


                          </li>
  
                          <li class="m-top-xs">
                            <i class="fa fa-hashtag user-profile-icon"></i>
                            {{ $user->id }}
                          </li>
                        </ul>
  
                    
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
						<h4><i class='fa fa-user'></i> Name : {{ $user->info[0]->name }}</h4>
						<h4><i class='fa fa-calendar'></i> Birth date : {{ $user->info[0]->birth }}</h4>
						<h4><i class='fa fa-map-marker'></i> Address : {{ $user->info[0]->address }}</h4>
						<h4><i class='fa fa-map-marker'></i> City : {{ $user->info[0]->city }}</h4>
						<h4><i class='fa fa-map-marker'></i> Country : {{ $user->info[0]->country }}</h4>
						<h4><i class='fa fa-phone'></i> Phone Number : {{ $user->info[0]->phone }}</h4>
						<h4><i class='fa fa-link'></i> website: <a href="{{ $user->info[0]->website }}"> {{ $user->info[0]->website }} </a></h4>
						<div class='clearfix'></div>
						<h3>Associated Projects</h3>
						@if(count($user->projects))
							<?php $projects = $user->projects; ?>
							<table class='table table-responsive table-striped'>
								<thead>
									<tr>
										<td>project Id</td>
										<td>project name</td>
										<td>Customer Name</td>
										<td>Completion %</td>
										<td>Status</td>
										<td>Edit</td>
									</tr>
								</thead>
								<tbody>
									@foreach($projects as $project)
										<tr>
											
											
											<td>{{ $project->id }}</td>
											<td>{{ $project->name }}</td>
											<td>{{ $project->customer->name }}</td>
											<td>Completion rate</td>
											<td>
												@if( $project->status == 1) 
													<span class="badge badge-success">Active</span>
												@else
													<span class="badge badge-error">Ended</span>
												@endif
											</td>
											<td><a href="/projects/id/{{ $project->id }}">View</a></td>
										</tr>
									@endforeach
								</tbody>
							</table>

						@else
							No Associated Projects Found
						@endif
						<div class='clearfix'></div>
							@if( count($user->tasks) )
								<h3>Associated Tasks</h3>
								<table class='table table-responsive table-striped'>
									<thead>
										<tr>
											<td>Task Id</td>
											<td>Task name</td>
											<td>Project Name</td>
											<td>Status</td>
											<td>Description</td>
											<td>Finished</td>
										</tr>
									</thead>
									<tbody>
									@foreach($user->tasks as $task)
										<tr>
											<td>{{ $task->id }}</td>
											<td>{{ $task->name }}</td>
											<td><a href="/projects/id/{{ $task->project->id }}"><i class='fa fa-external-link'></i> {{ $task->project->name }}</a></td>
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

											<td> <i class='fa fa-check'></i> WIP - Form to change status</td>
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
									@endforeach
									</tbody>
								</table>
						@else
							no associated Tasks to this user
						@endif
						
						</div>
						  @else 
						   This User Does Not have associated Profile
						  @endif
			@endsection
			