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