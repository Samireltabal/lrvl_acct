@extends('projects.main')

@section('page_title')
 Projects 
@endsection

@section('page_description')
 Create project
@endsection

@section('page_content')
	<div class="row">
	<div class="col-lg-12">
		<h3>Create Project</h3>
            {{ Form::open(array('url' => 'projects/store', 'method' => 'post')) }}
			<div class="form-group">
				<label for="project_name">Project Name :</label>
				<input id='project_name' class="form-control" type="text" name='project_name' required/>
			</div>	
			<div class="form-group">
				<label for="developer_name">Customer Name :</label>
				
				<input type="text" name="developer_name" id='developer_name' placeholder="enter name" data-action='{{ route('search/autocomplete') }}' class='form-control' required>

				<input type="hidden" name='developer_id' id='developer_id' required/>
			</div>
			<div class="form-group">
				<label for="task_weight">Due Date</label>
				<input type="date" name="Due_Date" class="form-control" required> 
			</div>			
			<div class="form-group">
				<label for="description">Project Description</label>
				<textarea class='form-control' name="description" id='description' required></textarea>
			</div>
			<input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
			<input type="submit" name="submit" value='Add Project' class='btn btn-success'>
			<input type="reset" name="reset" value='Cancel' class='btn btn-danger'>
		</form>
	</div>
</div>
@endsection