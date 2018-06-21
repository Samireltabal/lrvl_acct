@extends('admin.main')

@section('content')
<div class="right_col" role="main">
    <div class="row">
        <div class="page-title">
            <div class="title_left">
            <h1>Roles</h1>
            </div>
        </div>
       
        <div class="clearfix"></div>

        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
                <div class="x_title">
                    <h2>Create New Role<small>Create New Role</small></h2>                              
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                     {{ Form::open(array('url' => 'login', 'method' => 'get' )) }}  
					    
					    <input type="text" name="q" id='q' placeholder="enter name" data-action='{{ route('search/autocomplete') }}'>
					    {{ Form::submit('Search', array('class' => 'button expand')) }}
					{{ Form::close() }}

					 <form class="form-horizontal">
                          <fieldset>
                            <div class="control-group">
                              <div class="controls">
                                <div class="input-prepend input-group">
                                  <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                                  <input type="text" name="reservation-time" id="reservation-time" class="form-control" value="01/01/2016 - 01/25/2016" />
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </form>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection


