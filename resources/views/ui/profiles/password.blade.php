 {{ Form::open(array('url' => 'updatePassword', 'method' => 'post')) }}

                    @csrf
                        <input type="hidden" name='id' value='{{ Auth::user()->id }}'>
                        <div class="form-group">
                          <label for="oldPassword" class="col-form-label text-md-right">{{ __('Old Password') }}</label>
                              <input id="oldPassword" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="oldPassword" >

                              @if ($errors->has('password'))
                                  <span class="invalid-feedback">
                                      <strong>{{ $errors->first('password') }}</strong>
                                  </span>
                              @endif
                      </div>

                        <div class="form-group">
                            <label for="password" class="col-form-label text-md-right">{{ __('New Password') }}</label>

                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" >

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <label for="password-confirm" class="col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation">
                        </div>
                        <div class="form-group mb-0">
                          <div class="">
                              <button type="submit" class="btn btn-primary">
                                  {{ __('Update Password') }}
                              </button>
                          </div>
                      </div>
                      </form>