@extends('ui.layout.uiNoHeader')

@section('content')

<div id="form-messages" class="alert alert-success" style="display:none;">

</div>
<div id="loadingDiv" style="display:none;">
    <i class="fa fa-spinner fa-spin fa-4x"></i>
</div>
<form action="{{ route('contact.form') }}" method="post" id='contactForm'>
        @csrf
        <div class="form-group">
        <label for="name"> Name : </label>
        <input  class='form-control' type="text" name="name" id="name">
        </div>
        <div class="form-group">
        <label for="Email">Email : </label>
            <input  class='form-control' type="text" name="email" id="email">
        </div>
        <div class="form-group">

        <label for="message"> Message : </label>
            <textarea name="message" id='message' class='form-control' rows="4"></textarea>
        
        </div>
        <div class="form-group">
                {!! $cap::display() !!}

        </div>
        {!! $cap::renderJs() !!}
        <div class="form-group">
            <button type="submit" class='btn btn-success'><i class="fa fa-envelope-o" aria-hidden="true"></i> Send</button>
        </div>
    </form>
    <script>

        $(function() {
            // Get the form.
            var form = $('#contactForm');
            var Loading = $('#loadingDiv');
            // Get the messages div.
            var formMessages = $('#form-messages');

            // TODO: The rest of the code will go here...
            $(form).submit(function(event) {
                // Stop the browser from submitting the form.
                
                event.preventDefault();
                // TODO
                    $(Loading).show('fade',100);
                    $('#contactForm').hide('fade',100);
                
                var formData = $(form).serialize();

                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                }).done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(Loading).hide('fade',100);
                    $(formMessages).show('fade',100);
                    
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');

                }).fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
            });
        });
    </script>
    <div class="space-50"></div>
@endsection