@extends('ui.layout.uiNoHeader')
@if($project->count())
@section('content')
<div class="title">
	<h2 class="col-lg-12"><i class="fa fa-folder" area-hidden='true'></i> Project "{{ $project->name }}"</h2>
</div>

	<div class="row">
		<div class="col-md-3 col-sm-3 col-xs-12 profile_left">
                        <!-- Left Panel -->                 

		</div>
		<div class="col-lg-12">		
	        			<!--  Right Panel -->
	        			{{ $project }}
	    </div>
	</div>

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