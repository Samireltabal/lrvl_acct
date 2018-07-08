@extends('admin.main')

@section('content')
<div class="right_col" role="main">
        @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
        @endif
                        <table id="datatable" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>photo</td>
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
                                    <td>
                                        <img src="
                                        @if($user->image !== null)
                                        {{Storage::url($user->image)}}
                                        @else
                                        {{ asset('bower_components/gentelella/production/images/user.png') }}
                                        @endif
                                        " alt="{{ Auth::user()->name }}" class="img-circle table-img">
                                    </td>
                                    <td>{{$user->name}}</td>
                                    <td>{{$user->email}}</td>
                                    <td><i class='fa fa-calendar-o'></i> {{$user->created_at->year}}-{{$user->created_at->month}}-{{$user->created_at->day}} <i class='fa fa-clock-o'></i> {{ $user->created_at->hour}}:{{$user->created_at->minute}}</td>                                    
                                    
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
                                            <select name='role' class='form-control' onchange="this.form.submit()">
                                                @foreach($available_roles as $the_role)
                                                    <option value='{{ $the_role->id }}' @if( $role->id == $the_role->id )
                                                        selected
                                                        @endif> {{ $the_role->name }}</option>
                                                @endforeach
                                            </select>
                                        {!! Form::close() !!} 
                                        </td>
                                        
                                        @endforeach
                                    @else
                                        <td> No Role Attached</td>
                                        <td>No Role Attached</td>
                                    
                                    @endif
                                        <td>
                                                <a href="/forms/deleteUser/{{$user->id}}" class="btn-danger btn"> Delete </a>
                                        </td>
                                    
                                    
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <?php echo $users->links(); ?>
</div>
@endsection