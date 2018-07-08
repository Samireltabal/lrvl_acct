@extends('ui.layout.uiNoHeader')

@section('content')
<div class="title">
	<h2 class="col-lg-12"><i class="fa fa-user" area-hidden='true'></i> Profile</h2>
</div>

	<div class="row">
			<div class="col-md-3 col-sm-3 col-xs-12 profile_left">
                        <!-- menu profile quick info -->
      <div class="profile clearfix">
            <img src="
            @if(Auth::user()->image !== null)
            {{Storage::url(Auth::user()->image)}}
            @else
            {{ asset('bower_components/gentelella/production/images/user.png') }}
            @endif
            " alt="{{ Auth::user()->name }}" class="img-circle img-fluid profile_img rounded img-thumbnail">
            
            {{ Form::open(array('url' => 'uploadPhoto', 'method' => 'post' , 'enctype' => 'multipart/form-data' )) }}

            
            
            <label class='fileUpload' for="file"><strong>Change picture</strong></label>    
            <input type="file" name="image" id="file" class="inputfile auto_submit_item"/>

        </form>
       
          </div>
          <!-- /menu profile quick info -->
                        <h3>{{ Auth::user()->name }}</h3>
  
                        <ul class="list-unstyled user_data">
                          <li><i class="fa fa-calendar user-profile-icon"></i> {{ Auth::user()->created_at }}
                          </li>
  
                          <li>
                            <i class="fa fa-briefcase user-profile-icon"></i> 
                            
                            <?php $role = Auth::user()->roles; ?>
                                        @if(count($role) > 0) 

                                        @foreach($role as $role)
                                         {{ $role->name }} 
                                        @endforeach
                                    @else
                                       No Role Attached
    
                                    @endif


                          </li>
  
                          <li class="m-top-xs">
                            <i class="fa fa-hashtag user-profile-icon"></i>
                            {{ Auth::user()->id }}
                          </li>
                        </ul>
  
                    
                      
		</div>
		<div class="col-lg-9">		
	        <!--  buttons -->
	        <div class="cd-section">
	          <div class="title">
	            <h3>Main Data</h3>
	          </div>
	          <div class="row">
	            <div class="col-md-12 mr-auto">
	              	@include('ui.profiles.data')                   
	            </div>
	          </div>        
	        </div>
	               <hr>  
	        <div class="cd-section">
	          <div class="title">
	            <h3>Password</h3>
	          </div>
	          <div class="row">
	            <div class="col-md-12 mr-auto">             
	                @include('ui.profiles.password')
	   			</div>
	          </div>        
	        </div>
	                <hr>
	        <div class="cd-section">
	          <div class="title">
	            <h3>Profile Information</h3>
	          </div>
	          <div class="row">
	            <div class="col-md-12 mr-auto">
	                @include('profiles.info')
	            </div>
	          </div>        
	        </div>
	    </div>
	</div>

@endsection