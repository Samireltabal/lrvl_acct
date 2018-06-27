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
  
                                @include('profiles.data')

                             <hr>
                   
                                @include('profiles.password')

                              <hr>

                                @include('profiles.info')

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