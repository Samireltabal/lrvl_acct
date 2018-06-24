
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel tile">
          <div class="x_title">
            <h2>Tasks</h2>
            <ul class="nav navbar-right panel_toolbox">
              
              <li class='pull-right'><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <h4>Your Tasks</h4>
            @if( count(Auth::user()->tasks->where('status',1)) )
            <table class='table table-responsive table-striped'>
                <thead>
                  <tr>
                    <td class="col-xs-3">Task name</td>
                    <td class="col-xs-1">Description</td>
                    <td class="col-xs-3">Project Name</td>
                    <td class="col-xs-2">Assigned By</td>
                    <td class="col-xs-1"><small>Created At</small></td>
                    <td class="col-xs-1"><small>Completed at</small></td>
                    <td class="col-xs-1">Close</td>
                  </tr>
                </thead>
                <tbody>
            @foreach(Auth::user()->tasks->where('status',1) as $task)
                <tr>  
                    <td>{{ $task->name }}</td>
                    
                      <td>
                          <button type="button" class="btn btn-warning btn-xs" data-toggle="modal"data-target="#infoModal{{ $task->id }}"><i class='fa fa-info'></i> More Info</button>
                      </td>
                      <td>
                        {{ $task->project->name }}
                      </td>
                      <td>
                        <i class="fa fa-user"></i> <a href="/customer/id/{{ $task->creater->id }}">{{ $task->creater->name }}</a>
                      </td>
                      <td>{{ $task->created_at->year }}-{{ $task->created_at->month }}-{{ $task->created_at->day }}</td>
                      <td>
                        @if($task->status == 0)
                          {{ $task->updated_at->year }}-{{ $task->updated_at->month }}-{{ $task->updated_at->day }}
                        @else
                          active
                        @endif
                      </td>
                      <td>
                        @if($task->status == 1)
                        {{ Form::open(array('url' => 'closeTask', 'method' => 'post')) }}
                        <input type="hidden" name="project_id" value=''>
                        <input type="hidden" name="task_id" value='{{ $task->id }}'>
                        <button class='btn btn-warning btn-xs'><i class='fa fa-check'></i></button>
                        {{ Form::close() }}
                        @else
                          <span class="btn btn-success btn-xs"><i class="fa fa-check"></i></span>
                        @endif
                      </td>
                    </tr>
                    <!-- Modal -->
                    <div class="modal fade" id="infoModal{{ $task->id }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Task Description</h4>
                          </div>
                          <div class="modal-body">
                                                  {{ $task->description }}
                          </div>
                        </div>
                      </div>
                    </div>
                    
            @endforeach

            </tbody>
              </table>
            @else
              You have No Active associated Tasks .
            @endif
          </div>
        </div>
      </div>
