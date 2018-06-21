<?php 
    $options_full = $options::all();
?>

    @foreach($options_full as $option)
        <div class="row">
            {{ Form::open(array('url' => 'updateOption', 'method' => 'post' )) }}  
                @csrf
                <div class="form-group row">
                        <label for="value-{{$option->option}}" class="col-md-4 col-form-label text-md-right">{{ __($option->description) }}
                         <?php $var = "{{ get_option('$option->option') }}" ?>
                        <br> <small> retrive this option with <code>{{ $var }}</code></small>
                        </label>
                
                        <div class="col-md-6">
                            <input id="value-{{$option->option}}" type="text" class="form-control{{ $errors->has('value') ? ' is-invalid' : '' }}" name="value" value='{{ $option->value }}'  required>
                            <button type="submit" class="btn btn-success pull-right" style='margin-top:5px;'>
                                    {{ __('Update') }}
                                </button>
                            <input type="hidden" name="option_id" value="{{ $option->id }}">
                            @if ($errors->has('option'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('option') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>
            </form>
            
        </div>
    @endforeach