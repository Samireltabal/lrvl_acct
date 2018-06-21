@extends('admin.main')

@section('content')

        <!-- page content -->
        <div class="right_col" role="main">
            <div class="">
              <div class="page-title">
                <div class="title_left">
                  <h3>User Profile</h3>
                </div>
  
               
              </div>
              
              <div class="clearfix"></div>
  
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="x_panel">
                    <div class="x_content">
                      <div class="col-md-3 col-sm-3 col-xs-12 profile_left">
                        <!-- menu profile quick info -->
      <div class="profile clearfix">
            <img src="
            @if(Auth::user()->image !== null)
            {{Storage::url(Auth::user()->image)}}
            @else
            {{ asset('bower_components/gentelella/production/images/user.png') }}
            @endif
            " alt="{{ Auth::user()->name }}" class="img-circle profile_img">
            
            {{ Form::open(array('url' => 'uploadPhoto', 'method' => 'post' , 'enctype' => 'multipart/form-data' )) }}

            
            
            <label class='fileUpload' for="file"><strong>Change picture</strong></label>    
            <input type="file" name="image" id="file" class="inputfile auto_submit_item"/>

        </form>
        <script>
        $(".auto_submit_item").change(function() {
            $(this).parents("form").submit();
        });
        </script>
          </div>
          <!-- /menu profile quick info -->
                        <h3>{{ Auth::user()->name }}</h3>
  
                        <ul class="list-unstyled user_data">
                          <li><i class="fa fa-calendar user-profile-icon"></i> {{ $user->created_at }}
                          </li>
  
                          <li>
                            <i class="fa fa-briefcase user-profile-icon"></i> 
                            
                            <?php $role = $user->roles; ?>
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
                      <div class="col-md-9 col-sm-9 col-xs-12">
  
                        <div class="" role="tabpanel" data-example-id="togglable-tabs">
                          <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#tab_content2" id="edit-tab" role="tab" data-toggle="tab" aria-expanded="true">Edit Account</a>
                            </li>
                            <li role="presentation" class=""><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Recent Activity</a>
                            </li>
                            
                          </ul>
                          <div id="myTabContent" class="tab-content">
                            <div role="tabpanel" class="tab-pane fade" id="tab_content1" aria-labelledby="home-tab">

                              <!-- start recent activity -->
                              <ul class="messages">
                                @if ($log !== null) 
                                @foreach($log as $log_item)
                                <li>
                                    <div class="message_date">
                                    <p class="month">{{ $log_item->created_at }}</p>
                                    </div>
                                    <div class="message_wrapper">
                                      <h4 class="heading">{{ $log_item->id }}</h4>
                                    <blockquote class="message">{!! $log_item->activity  !!}</blockquote>
                                   
                                    </div>
                                  </li> 
                                  @endforeach
                                  @else
                                  <p> No Activity </p>
                                @endif
                              </ul>
                              <!-- end recent activity -->
  
                            </div>
                            <div role="tabpanel" class="tab-pane fade active in" id="tab_content2" aria-labelledby="edit-tab">
  
                                {{ Form::open(array('url' => 'editUser', 'method' => 'post')) }}

                        @csrf
                            <input type="hidden" name='id' value='{{ Auth::user()->id }}'>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ Auth::user()->name }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ Auth::user()->email }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update') }}
                                </button>
                            </div>
                        </div>

                    </form>

                    <hr>
                    {{ Form::open(array('url' => 'updatePassword', 'method' => 'post')) }}

                    @csrf
                        <input type="hidden" name='id' value='{{ Auth::user()->id }}'>
                        <div class="form-group row">
                          <label for="oldPassword" class="col-md-4 col-form-label text-md-right">{{ __('Old Password') }}</label>

                          <div class="col-md-6">
                              <input id="oldPassword" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="oldPassword" >

                              @if ($errors->has('password'))
                                  <span class="invalid-feedback">
                                      <strong>{{ $errors->first('password') }}</strong>
                                  </span>
                              @endif
                          </div>
                      </div>
                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('New Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" >

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation">
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                          <div class="col-md-6 offset-md-4">
                              <button type="submit" class="btn btn-primary">
                                  {{ __('Update Password') }}
                              </button>
                          </div>
                      </div>
                      </form>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /page content -->
        </div>

@endsection