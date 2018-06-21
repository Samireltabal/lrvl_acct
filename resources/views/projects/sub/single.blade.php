				@extends('projects.main')
			@section('page_title')
			 {{ $project->name }} 
 			@endsection

			@section('page_description')

			@endsection

			@section('page_content')
						@if (count($project))

				<div class="col-md-3 col-sm-3 col-xs-12 profile_left">
				   	
	            
	            <!-- /menu profile quick info -->
                        <h3>{{ $project->name }}</h3>
  
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
						<h3><i class="fa fa-paperclip"></i> Project Description</h3>
						{{ $project->description }}
						<div class="clearfix"></div>	
						<hr>
						<h3><i class="fa fa-calendar"></i> Due date</h3>
						{{ $project->due_date }}
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
										<td>Task Id</td>
										<td>Task name</td>
										<td>Status</td>
										<td>Description</td>
										<td>Assigned To</td>
										<td>creator</td>
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
													<a href="/customer/id/{{ $user_task->id }}">{{ $user_task->name }}</a><br>
												@endforeach											
											</td>
											<td>
												{{ $task->creater->name }}
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
						</div>
						  @else 
						   This User Does Not have associated Profile
						  @endif
			@endsection