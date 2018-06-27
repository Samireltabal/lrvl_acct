				@extends('projects.main')
			@section('page_title')
			 {{ $project->name }}  
 			@endsection

 			@section('buttons')
 			@if($project->status == 1)
 			<div class="pull-right">
 				<a class="btn btn-success" href="#create_task"><i class='fa fa-plus-square'></i> Add Task </a>
 				
 				 				<a class="btn btn-success" href="#attachments"><i class='fa fa-paperclip'></i>  Upload Attachment </a>

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
                        <h3 id="text">{{ $project->name }} 
                        	<a href="javascript:void(0)" style='position: absolute; right:0;' id="Edit" title='edit' class='btn btn-warning btn-xs' data-toggle="tooltip" data-placement="top"><i class="fa fa-pencil-square"></i></a>
                        </h3>
                        <!-- Form shows On Edit button Click -->
                        <div id='form' style="display: none;">
		                    	{{ Form::open(array('url' => 'projects/updateName', 'method' => 'post')) }}
		                            <div class="input-group">
			                            <span class="input-group-btn">
			                                    <button type="submit" class="btn btn-primary"><i class="fa fa-check-square"></i></button>
			                             </span>
			                            <input type="text" name="project_name" id="project" class="form-control" value="{{ $project->name }}" placeholder="" aria-describedby="helpId">
			                            <input type="hidden" name="project_id" value="{{ $project->id }}">
			                            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
			                        </div>
		                    </form>                                     
                    	</div>
                    	<!-- /End Form -->
  
                        <ul class="list-unstyled user_data">
                          <li><i class="fa fa-calendar user-profile-icon"></i>
                          	{{ $project->created_at }}
                          </li>
  

                          	
                          <li class="m-top-xs">
                            <i class="fa fa-hashtag user-profile-icon"></i> Project Id : 
							{{ $project->id }}
                          </li>

                        </ul>

                        <div id="github"><i class="fa fa-github user-profile-icon"></i>                            
                            		{{ $project->github_repository }} 
                        	<a href="javascript:void(0)" style='position: absolute; right:0;' id="Editgithub" title='edit' class='btn btn-warning btn-xs' data-toggle="tooltip" data-placement="top"><i class="fa fa-pencil-square"></i></a>


                        </div>
                        <!-- Form shows On Edit button Click -->
                        <div id='formgithub' style="display: none;">
                        	<a href="javascript:void(0)" id="closeEditgithub" title='Cancel Edit' class='btn btn-link btn-xs pull-right'  data-toggle="tooltip" data-placement="top"><i class="fa fa-times"></i></a>
                        	<div class="clearfix"></div>
		                    	{{ Form::open(array('url' => 'projects/updateGithub', 'method' => 'post')) }}
		                            <div class="input-group">
			                            <span class="input-group-btn">
			                                    <button type="submit" class="btn btn-primary"><i class="fa fa-check-square"></i></button>
			                             </span>
			                            <input type="text" name="github_repository" id="project" class="form-control" value="{{ $project->github_repository }}" placeholder="" aria-describedby="helpId">
			                            <input type="hidden" name="project_id" value="{{ $project->id }}">
			                            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
			                        </div>
		                    </form>                                     
                    	</div>
                      </div>
               <!-- Left Projet Data -->
              
  <div class="col-md-9 col-sm-9 col-xs-12" >
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

						@if($project->github_repository !== NULL)
							@include('projects.sections.github')                    
                        @endif
                          
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
							if($tasks_total_weight !== 0)
							{
							$completion_rate = round($tasks_completed_weight / $tasks_total_weight * 100,0);
							}else{
							$completion_rate = "No Tasks Assigned";
							}	
						?>
						<div class="progress">
						  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="{{$completion_rate}}" aria-valuemin="0" aria-valuemax="100" style="width: {{$completion_rate}}%;">
						    <span class="sr-only">{{$completion_rate}}% Complete</span>
						    {{$completion_rate}} %
						  </div>
						</div>
						<div class='clearfix'></div>
						<hr id="attachments">
						<h3><i class="fa fa-paperclip"></i> Attachments </h3>
						@if(count($project->attachments))
							<ul class='attachment-ul'>
							@foreach($project->attachments as $attachment)
							<li class='row'>
								<a href="{{Storage::url('projectsUploads/' . $attachment->file_name)}}">
								@if($attachment->extention == "pdf" || $attachment->extention == "PDF")
								<i class='fa fa-file-pdf-o'></i>
								@elseif($attachment->extention == "jpg" || $attachment->extention == "png" || $attachment->extention == "gif" || $attachment->extention == "JPG" || $attachment->extention == "PNG" || $attachment->extention == "GIF")
								<i class='fa fa-file-image-o'></i>
								@else
								<i class='fa fa-file-code-o'></i>
								@endif
								{{ $attachment->file_name }}  
								</a>
								Uploaded By : <a href="/customer/id/{{ $attachment->user->id }}">{{ $attachment->user->name }}</a>

								<div class="pull-right">
									{{ Form::open(array('url' => url('projects/removeAttachment') , 'method' => 'post ')) }}
									<input type="hidden" name="user_id" value='{{ Auth::user()->id }}' >
						            <input type='hidden' name='project_id' value='{{ $project->id }}' >
						            <input type="hidden" name="attachment_id" value='{{ $attachment->id }}' >
									<input type='hidden' name='file_name' value='{{ $attachment->file_name }}' >
									<button class='btn btn-warning btn-xs'><i class='fa fa-times'></i> DELETE</button>
									</form>
								</div>
							</li>
							@endforeach
							</ul>
						@else
							no attachments found
						@endif
											{{ Form::open(array('url' => url('projects/uploadAttachment'), 'class'=>'dropzone' ,'method' => 'post' , 'enctype' => 'multipart/form-data' )) }}

						                    	<input type="hidden" name="user_id" value='{{ Auth::user()->id }}' >
						                    	<input type='hidden' name='project_id' value='{{ $project->id }}' >
						                    </form>

						<div class='clearfix'></div>
						</div>
						<hr>
						<div class="col-md-12">
						@if( count($project->tasks) )
						<h3>Associated Tasks</h3>
							<table class='table table-responsive table-striped'>
								<thead>
									<tr>
										<td style="width:1%;">id</td>
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
												<ul class="list-inline">
													<li>
												@foreach($task->users as $user_task)
													<a href="/customer/id/{{ $user_task->id }}"><img src="
													@if($user_task->image !== null)
                                        {{Storage::url($user_task->image)}}
                                        @else
                                        {{ asset('bower_components/gentelella/production/images/user.png') }}
                                        @endif
                                        " alt="{{ $user_task->name }}" title="{{ $user_task->name }}" class="avatar" alt="Avatar"></a>
												@endforeach	
													</li>
													<a href="javascript:void(0);" id='addDeveloper-{{ $task->id }}' class='btn btn-warning btn-xs pull-right'><i class='fa fa-plus-square'></i></a>
												</ul>	
												<div class="clearfix"></div>
														<div id='addDevForm-{{ $task->id }}' class='col-md-10' style="display: none;">
									                    	{{ Form::open(array('url' => 'task/addMember', 'method' => 'post')) }}
									                            <div class="input-group">
										                            <span class="input-group-btn">
										                                    <button type="submit" class="btn btn-warning"><i class="fa fa-plus-square"></i></button>
										                             </span>
										                            <input name="developer_name" id='developer_name-{{ $task->id }}' placeholder="enter name" data-action='{{ route('search/autocomplete') }}' class='form-control'>
										                            				<input type="hidden" name='developer_id' id='developer_id-{{ $task->id }}' required/>
										                            <input type="hidden" name="task_id" value="{{ $task->id }}">
										                        </div>
									                   	 </form>                                     
							                    	</div>
                              						<script type="text/javascript">
                              							$('#addDeveloper-{{ $task->id }}').on('click',function(){
											                $('#addDevForm-{{ $task->id }}').toggle('slide');
											            });
                              						</script>
                              						<script type="text/javascript">
														$('#developer_name-{{ $task->id }}').each(function() {
														        var $this = $(this);
														        var src = $this.data('action');

														        $this.autocomplete({
														            source: src,
														            minLength: 2,
														            select: function(event, ui) {
														                $this.val(ui.item.name);
														                $('#developer_id-{{ $task->id }}').val(ui.item.id);
														            }
														        });
														    });  

														</script>
                              			
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
							No Associated Tasks To This Project
						@endif
						<div id="create_task">
						@include('projects.sub.taskForm')
						</div>
						</div>
						</div>
						  @else 
						   This User Does Not have associated Profile
						  @endif
			@endsection