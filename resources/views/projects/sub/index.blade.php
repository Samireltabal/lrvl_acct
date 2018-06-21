@extends('projects.main')

@section('page_title')
 Projects 
@endsection

@section('page_description')
 All projects
@endsection

@section('page_content')
	<table class='table table-responsive table-striped'>
		<thead>
			<tr>
				<td>project Id</td>
				<td>project name</td>
				<td>Customer Name</td>
				<td>Completion %</td>
				<td>Status</td>
				<td>Edit</td>
			</tr>
		</thead>
		<tbody>
			@foreach($projects as $project)
				<tr>
					
					
					<td>{{ $project->id }}</td>
					<td>{{ $project->name }}</td>
					<td><a href="customer/id/{{ $project->customer->id }}">{{ $project->customer->name }}</a></td>
					<td>Completion rate</td>
					<td>
						@if( $project->status == 1) 
							<span class="badge badge-success">Active</span>
						@else
							<span class="badge badge-error">Ended</span>
						@endif
					</td>
					<td><a href="/projects/id/{{ $project->id }}">View</a></td>
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection