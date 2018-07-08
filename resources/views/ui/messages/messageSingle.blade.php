                    <ul class="list-unstyled chat" id="chat">
                        @if($the_response->count())
                        <script type="text/javascript">
                            $( document ).ready(function() {
                                    $.ajax({
                                      type: 'GET',
                                      url: 'messages/markAsRead/' + {{ $thread->id }},
                                      dataType: 'json',
                                      cache: false,
                                      success: function(result){
                                        console.log('Messages marked as read');
                                      },
                                    });
                                    var objDiv = document.getElementById("chat");
                                    objDiv.scrollTop = objDiv.scrollHeight;
                                    $('html, body').animate({
                                   scrollTop: $('#ChatTextArea').offset().top
                                   //scrollTop: $('#ChatTextArea').offset().top
                                }, 'slow');                            
                                });
                        </script>
                            @foreach($the_response as $message)
                                @if(Auth::user()->id == $message->sender->id)
                                    <li class="row message_instance">
                                        <div class="col-lg-1">
                                            <img src="@if($message->sender->image !== null)
                                            {{Storage::url($message->sender->image)}}
                                            @else
                                            {{ asset('bower_components/gentelella/production/images/user.png') }}
                                            @endif" alt="avatar" class="avatar rounded-circle">
                                        </div>
                                        <div class="chat-body white col-lg-11">
                                            <div class="header">
                                                <strong class="primary-font">{{ $message->sender->name }}</strong>
                                                <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> {{ date('M j, Y, H:i', strtotime($message->created_at)) }}</small>
                                            </div>
                                            <hr class="w-100">
                                            <p class="message_body mb-0">
                                                {{ $message->body }}
                                            </p>
                                        </div>
                                    </li>
                                @else
                                    <li class="row message_instance">                                        
                                        <div class="chat-body white col-lg-11">
                                            <div class="header">
                                                <strong class="primary-font">{{ $message->sender->name }}</strong>
                                                <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> {{ date('M j, Y, H:i', strtotime($message->created_at)) }}</small>
                                            </div>
                                            <hr class="w-100">
                                            <p class="message_body mb-0">
                                                {!! $message->body !!}
                                            </p>
                                        </div>
                                        <div class="col-lg-1">
                                            <img src="@if($message->sender->image !== null)
                                            {{Storage::url($message->sender->image)}}
                                            @else
                                            {{ asset('bower_components/gentelella/production/images/user.png') }}
                                            @endif" alt="avatar" class="avatar rounded-circle">
                                        </div>
                                    </li>
                                @endif
                            @endforeach
                        @else
                            <h3>No Messages Found</h3>
                        @endif
                                
                    </ul>
                    <form method="POST" action="/messages/reply">
                                    @csrf
                                    <div class="form-group basic-textarea">
                                        <textarea name='response' class="form-control pl-2 my-0" id="ChatTextArea" rows="3" placeholder="Type your message here..."></textarea>
                                    </div>
                                    <input type="hidden" name="thread_id" value='{{ $thread->id }}'>
                                    @if($thread->reciever_id == Auth::user()->id )
                                    <input type="hidden" name="reciever_id" value='{{ $thread->sender_id }}'>
                                    @else
                                    <input type="hidden" name="reciever_id" value='{{ $thread->reciever_id }}'>
                                    @endif
                                <button type="submit" class="btn btn-primary btn-rounded btn-sm waves-effect waves-light float-right">Send</button>
                                </form>