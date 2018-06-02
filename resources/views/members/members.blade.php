@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Members <span class='float-right'><a href="/Dashboard/Create" class="btn btn-primary"><i class="fa fa-user"></i> Add Member</a></span></div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Created At </td>
                                <td>Roles </td> 
                                <td>Change Role</td>   
                                <td>Remove User</td>                            
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)
                                <tr>
                                    <td>{{$user->id}}</td>
                                    <td>{{$user->name}}</td>
                                    <td>{{$user->email}}</td>
                                    <td>{{$user->created_at}}</td>                                    
                                    
                                        <?php $role = $user->roles; ?>
                                        @if(count($role) > 0) 

                                        @foreach($role as $role)
                                        <td>    {{ $role->name }} </td>
                                        <td class='justify-content-center'>
                                            <?php 
                                                $user_id = $user->id;
                                                $role_id = $role->id;
                                                  ?>
                                            {!! Form::open(['action' => 'forms@change_role', 'method' => 'POST' , 'Class' => 'float-right']) !!}
                                        {{form::hidden('id', $user_id )}}
                                        {{form::hidden('role', $role_id )}}
                                        {{Form::Submit('Change Role',['class' => 'btn btn-warning mx-auto'])}}
                                        {!! Form::close() !!} 
                                        </td>
                                        
                                        @endforeach
                                    @else
                                        <td> No Role Attached</td>
                                        <td>No Role Attached</td>
                                    
                                    @endif
                                        <td>
                                                <a href="/forms/deleteUser/{{$user->id}}"> Delete </a>
                                        </td>
                                    
                                    
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <?php echo $users->links(); ?>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
