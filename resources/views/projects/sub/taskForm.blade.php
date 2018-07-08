<div class="row">
	<div class="col-lg-12">
		<h3>Create Task</h3>
            {{ Form::open(array('url' => 'storeTask', 'method' => 'post')) }}
			<div class="form-group">
				<label for="task_name">Task Name</label>
				<input id='task_name' class="form-control" type="text" name='task_name' required/>
			</div>	
			<div class="form-group">
				<label for="developer_name">Developer Assigned</label>
				
				<input type="text" name="developer_name" id='developer_name' placeholder="enter name" data-action='{{ route('search/autocomplete') }}' class='form-control' required>

				<input type="hidden" name='developer_id' id='developer_id' required/>
			</div>
			<div class="form-group">
				<label for="task_weight">Task Weight</label>
				<input type="number" name="task_weight" class="form-control" required> 
			</div>
			<input type="hidden" name="project_id" value="{{ $project->id }}" required>
			<div class="form-group">
				<label for="description">Description</label>
				<textarea class='form-control' id='mytextarea' name="description" id='description' required></textarea>
			</div>
			<input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
			<input type="submit" name="submit" value='Add Task' class='btn btn-success'>
			<input type="reset" name="reset" value='Clear All Fields' class='btn btn-warning'>
		</form>
	</div>
</div>
