{{ Form::open(array('url' => 'createOption', 'method' => 'post' )) }}  
    @csrf
    <div class="form-group row">
        <label for="option" class="col-md-4 col-form-label text-md-right">{{ __('Option Key') }}</label>

        <div class="col-md-6">
            <input id="option" type="text" class="form-control{{ $errors->has('option') ? ' is-invalid' : '' }}" name="option"  required>

            @if ($errors->has('option'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('option') }}</strong>
                </span>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <label for="value" class="col-md-4 col-form-label text-md-right">{{ __('Option value') }}</label>

        <div class="col-md-6">
            <input id="value" type="text" class="form-control{{ $errors->has('value') ? ' is-invalid' : '' }}" name="value"  required>

            @if ($errors->has('value'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('value') }}</strong>
                </span>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <label for="description" class="col-md-4 col-form-label text-md-right">{{ __('Option Description') }}</label>

        <div class="col-md-6">
            <textarea id="description" type="text" class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" name="description"  required></textarea>

            @if ($errors->has('description'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('description') }}</strong>
                </span>
            @endif
        </div>
    </div>
    <div class="form-group row mb-0">
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-success">
                {{ __('Submit') }}
            </button>
            <button class="btn btn-warning" type="reset">Reset</button>
        </div>
    </div>

</form>
