@if(count($errors) > 0 )
	@foreach($errors->all() as $error)
		<script type='text/javascript'>
			$(document).ready(function(){
				fireNotify("error","{{$error}}");
			});
			</script>
	@endforeach
@endif

@if(session('success'))
<script type='text/javascript'>
	$(document).ready(function(){
	  fireNotify("success","{{session('success')}}");
	});
  </script>
@endif
@if(session('error'))
<script type='text/javascript'>
	$(document).ready(function(){
	  fireNotify("error","{{session('error')}}");
	});
  </script>
@endif