@extends('admin.main')

@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
            <h1>Settings</h1>
            </div>
        </div>
        {{-- List Options --}}
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel">
                            <div class="x_title">
                              <h2>Messages<small>Messaging System</small></h2>
                              
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                @if($threads->count())
                                    <div class="col-md-4">
                                        <h4><a class="btn btn-primary" href="{{ url('compose') }}">Compose</a></h4>
                                        <h4 class="font-weight-bold text-center">Messages</h4>
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
                                    <strong style="padding-left:1em;">@if( Auth::user()->id === $thread->sender->id )
                                        {{ $thread->reciever->name }}
                                    @else 
                                        {{ $thread->sender->name }}                                     
                                    @endif</strong>
                                    <p class="last-message text-muted" style="padding-left:4em; display: block;">
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
                                    @if($thread->updated_at)
                                        {{ date('M j, Y, H:i', strtotime($thread->updated_at)) }}    
                                    @else
                                        {{ date('M j, Y , H:i', strtotime($thread->updated_at)) }}
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
                                  url: '{{ url("messages") }}/' + $this.attr("thread"),
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
                                    @if(session('Sent'))
                             <script type="text/javascript">
                              
                                $( document ).ready(function() {
                                    $.ajax({
                                      type: 'GET',
                                      url: '/messages/' + {{ session('Sent') }},
                                      dataType: 'html',
                                      cache: false,
                                      success: function(result){
                                        $("#message").html(result);
                                      },
                                    });                             
                                });

                            </script>            
            @endif
                                    <div class="col-md-8">
                                                        <div class="chat-message" id='message'></div>

                                    </div>
                                @endif
                            </div>
                    </div>
            </div>
        </div>
        
        
        {{-- Add New Option --}}

        

    </div>
</div>
@endsection