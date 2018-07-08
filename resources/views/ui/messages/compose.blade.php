<a href='#' class='btn btn-primary' id="compose"><i class="fa fa-envelope"></i> Compose </a>
<div id="compose_form">
	<form method="POST" action="/messages/create">
		<input type="text" name="developer_name" id="reciever_name" placeholder="enter name" class="form-control" required>
		<input type="hidden" name="reciever_id" id="developer_id">
		<textarea class="form-control" name="message" placeholder="Your Message"></textarea>
		<button type="submit" class="btn btn-primary">Send new Message</button>
	</form>
</div>
							<script type="text/javascript">
						      $("#compose").click(function (e) {
						        // Don't follow the links.
						        e.preventDefault();

						        $("#message").html('');
						        // var $this = $(this);
						        // $.ajax({
						        //   type: 'GET',
						        //   url: 'messages/' + $this.attr("thread"),
						        //   dataType: 'html',
						        //   cache: false,
						        //   success: function(result){
						        //     $("#message").html(result);
						        //   },
						        // });
						        });
						    </script>

<script type="text/javascript">
              $('#reciever_name').each(function() {
                    var $this = $(this);
                    var src = '{{ route("search/autocomplete") }}';

                    $this.autocomplete({
                        source: src,
                        minLength: 2,
                        select: function(event, ui) {
                            $this.val(ui.item.name);
                            $('#developer_id').val(ui.item.id);
                        }
                    });
                });  

              </script>
						   