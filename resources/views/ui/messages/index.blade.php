@extends('ui.layout.uiNoHeader')
@if($threads->count())
@section('content')
<div class="card grey lighten-3 chat-room">
    <div class="card-body">

        <!-- Grid row -->
        <div class="row px-lg-2 px-2">

            <!-- Grid column -->
            <div class="col-md-6 col-xl-4 px-0">

                <h6 class="font-weight-bold mb-3 text-center text-lg-left">Member</h6>
                <div class="white z-depth-1 px-3 pt-3 pb-0">
                    <ul class="list-unstyled friend-list">
                        
                    	                 @foreach($threads as $thread)

                        <li class="p-2 messages_item_list" id='thread-{{ $thread->id }}' thread='{{ $thread->id }}'>
                            <a class="d-flex justify-content-between" >
                                @if( Auth::user()->id === $thread->sender->id )
                                <img src="@if($thread->reciever->image !== null)
                                        {{Storage::url($thread->reciever->image)}}
                                        @else
                                        {{ asset('bower_components/gentelella/production/images/user.png') }}
                                        @endif" alt="avatar" class="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1">
                                @else
                                	<img src="@if($thread->sender->image !== null)
                                        {{Storage::url($thread->sender->image)}}
                                        @else
                                        {{ asset('bower_components/gentelella/production/images/user.png') }}
                                        @endif" alt="avatar" class="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1">
                                @endif

                                <div class="text-small">
                                    <strong>@if( Auth::user()->id === $thread->sender->id )
										{{ $thread->reciever->name }}
									@else 
										{{ $thread->sender->name }}										
									@endif</strong>
                                    <p class="last-message text-muted">
										@if($thread->lastMessage())
			        						{{ str_limit($thread->lastMessage()->body, 20) }}
			        						@if($thread->lastMessage()->status == 1 && $thread->lastMessage()->reciever_id == Auth::user()->id)
			        							<span class='label badge badge-info'>new</span>
			        						@endif
			        					@endif				        				
                                    </p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">
									@if($thread->lastMessage())
		        						{{ date('M j, Y, H:i', strtotime($thread->lastMessage()->created_at)) }}	
		        					@else
		        						{{ date('M j, Y , H:i', strtotime($thread->created_at)) }}
		        					@endif                                    </p>
                                    
                                </div>
                            </a>
                        </li>
                        	<script type="text/javascript">
						      $("#thread-{{ $thread->id }}").click(function (e) {
						        // Don't follow the links.
						        e.preventDefault();
						        var $this = $(this);
						        $.ajax({
						          type: 'GET',
						          url: 'messages/' + $this.attr("thread"),
						          dataType: 'html',
						          cache: false,
						          success: function(result){
						            $("#message").html(result);
						          },
						        });
						        });
						    </script>
                        	@endforeach
                    </ul>
                </div>

            </div>
            <!-- Grid column -->
            @if(session('Sent'))
           					 <script type="text/javascript">
						      
								$( document ).ready(function() {
								    $.ajax({
							          type: 'GET',
							          url: 'messages/' + {{ session('Sent') }},
							          dataType: 'html',
							          cache: false,
							          success: function(result){
							            $("#message").html(result);
							          },
							        });								
								});

						    </script>            
            @endif
            <!-- Grid column -->
            <div class="col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0">

                <div class="chat-message" id='message'></div>

            </div>
            <!-- Grid column -->

        </div>
        <!-- Grid row -->

    </div>
</div>	
<div class="space-50"></div>
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
