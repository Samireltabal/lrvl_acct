{{ Form::open(array('url' => 'UpdateInfo', 'method' => 'post')) }}

                        @csrf
                            <input type="hidden" name='id' value='{{ Auth::user()->id }}'>
                        <div class="form-group">
                            <label for="Fullname" class="col-form-label text-md-right">{{ __('Full Name') }}</label>

                                <input id="Fullname" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ $users_info->name }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group">
                            <label for="address" class="col-form-label text-md-right">{{ __('Address') }}</label>

                                <input id="address" type="text" class="form-control{{ $errors->has('address') ? ' is-invalid' : '' }}" name="address" value="{{ $users_info->address }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('address') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group ">
                            <label for="city" class="col-form-label text-md-right">{{ __('City') }}</label>

                                <input id="city" type="text" class="form-control{{ $errors->has('city') ? ' is-invalid' : '' }}" name="city" value="{{ $users_info->city }}" required>

                                @if ($errors->has('city'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('city') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group">
                            <label for="country" class="col-form-label text-md-right">{{ __('Country') }}</label>

                                <select id="country" type="text" class="form-control{{ $errors->has('country') ? ' is-invalid' : '' }}" name="country" required>
                                    <option value='null'> ------------ </option>
                                    @foreach($countries as $country)
                                        <option value='{{ $country->value }}' <?php 
                                            if($users_info->country == $country->value)
                                                 {echo 'selected';}
                                         ?>>{{ $country->value }}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group ">
                            <label for="birth" class="col-form-label text-md-right">{{ __('Birth date') }}</label>

                                <input id="birth" type="date" class="form-control{{ $errors->has('birth') ? ' is-invalid' : '' }}" name="birth" value="{{ $users_info->birth }}" required>

                                @if ($errors->has('birth'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('birth') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group">
                            <label for="phone" class="col-form-label text-md-right">{{ __('Phone Number') }}</label>

                                <input id="phone" type="phone" class="form-control{{ $errors->has('phone') ? ' is-invalid' : '' }}" name="phone" value="{{ $users_info->phone }}" required>

                                @if ($errors->has('phone'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('phone') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group">
                            <label for="website" class="col-form-label text-md-right">{{ __('Website') }}</label>

                                <input id="website" type="url" class="form-control{{ $errors->has('website') ? ' is-invalid' : '' }}" name="website" value="{{ $users_info->website }}" required>

                                @if ($errors->has('website'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('website') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update') }}
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <span class='pull-right'> last update : {{ $users_info->updated_at }}</span>
                        </div>

                    </form>