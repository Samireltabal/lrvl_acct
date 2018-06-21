		@extends('projects.main')
			@section('page_title')
			  
			@endsection

			@section('page_description')

			@endsection

			@section('page_content')
				{{ get_option('trello_url') }}1/actions/{{ get_option('trello_api') }}/board
			 	
			 	<script src="https://api.trello.com/1/client.js?key=8db3571f5188d154d8bd44d3f0924ca8"></script>
			@endsection