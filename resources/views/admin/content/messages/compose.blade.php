@extends('admin.main')


@section('content')

<div class="right_col" role="main">
	    <div class="">
	    	<div class="page-title">
	            <div class="title_left">
	            	<h1>Compose New Message</h1>
	            </div>
       		 </div>

       		  <div class="clearfix"></div>
       		<div class="row">
            	<div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel">
                  		<div class="x_title">
                              <h2>Messages<small>Compose New Message</small></h2>
                              
                              <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                        	<div id="compose_form">
								<form method="POST" action="{{ url('composeMsg') }}">
									<div class="form-group">
										@csrf
									<input type="text" name="developer_name" id="reciever_name" placeholder="enter name" class="form-control" required>
									<input type="hidden" name="reciever_id" id="reciever_id">
									</div>
									<div class="form-group">
										<textarea name='message' class="form-control pl-2 my-0" id="ChatTextArea" rows="3" placeholder="Type your message here..."></textarea>
									</div>
									<div class="form-group">
									<button type="submit" class="btn btn-primary">Send new Message</button>
									</div>
								</form>
							</div>
							<script type="text/javascript">
							              $('#reciever_name').each(function() {
							                    var $this = $(this);
							                    var src = '{{ route("search/autocomplete") }}';

							                    $this.autocomplete({
							                        source: src,
							                        minLength: 2,
							                        select: function(event, ui) {
							                            $this.val(ui.item.name);
							                            $('#reciever_id').val(ui.item.id);
							                        }
							                    });
							                });  

							              </script>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
</div>

@endsection


