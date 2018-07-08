{{ Form::open(array('url' => 'editUser', 'method' => 'post')) }}

                        @csrf
                         <input type="hidden" name='id' value='{{ Auth::user()->id }}'>
			              <div class="form-group">
			                <label for="exampleInput1" class="bmd-label-floating">{{ __('Name') }}</label>
							<input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ Auth::user()->name }}" required autofocus>
			                 @if ($errors->has('name'))
                                    <span class="bmd-help">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
			              </div>
			              <div class="form-group">
			                <label for="exampleInput1" class="bmd-label-floating">{{ __('E-Mail Address') }}</label>

							<input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ Auth::user()->email }}" required>
			                 @if ($errors->has('email'))
                                    <span class="bmd-help">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
			              </div>
	
                        <div class="form-group mr-auto">
                            
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update') }}
                                </button>
                            
                        </div>

                    </form>