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
                              <h2>Roles<small>List of all available roles</small></h2>
                              
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Role Name</td>
                                <td>Role Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($roles as $role)
                                <tr>
                                    <td>{{$role->id}}</td>
                                    <td>{{$role->name}}</td>
                                    <td><p>{{ $role->description }}</p></td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
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
                    
                    {{ Form::open(array('url' => 'add_role', 'method' => 'post' )) }}  
                        @csrf
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Role Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name"  required>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="description" class="col-md-4 col-form-label text-md-right">{{ __('Role Description') }}</label>

                            <div class="col-md-6">
                                <textarea id="description" type="text" class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description"  required></textarea>

                                @if ($errors->has('description'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('description') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-success">
                                    {{ __('Submit') }}
                                </button>
                                <button class="btn btn-warning" type="reset">Reset</button>
                            </div>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    </div>
</div>
@endsection



    
                    
                        
               