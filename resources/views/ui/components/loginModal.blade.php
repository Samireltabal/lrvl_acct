<div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="material-icons">clear</i>
          </button>
        </div>
        <div class="modal-body">
                <form class="" method="POST" action="{{ route('login') }}">
                  @csrf  
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input type="text" name='email' class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="Email Address">
                       @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                    </div>
                  </div>  
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                      <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" placeholder="Password" required>
                       @if ($errors->has('password'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                    </div>
                  </div>
                    <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                                        <span class="form-check-sign">
                                          <span class="check"></span>
                                        </span>
                                    </label>  


                 
                  
                 
                                     <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>                             
                          </div>

                <div class="form-group">
                  <div class="row">
                    <div class='col-md-10 offset-md-1'>
                      <button class="btn btn-success btn-block" type="Submit">Login</button>  
                    </div>
                  </div>
                </div>
              
                
              </form>
        </div>
        
      </div>
    </div>
  </div>