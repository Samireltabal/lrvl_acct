@extends('ui.layout.uiNoHeader')

@section('content')
<div class="title">
    <h2 class="col-lg-12">{{ $page->title }}</h2>
    </div>
    
        <div class="row">
            <div class="container">
                <div class="col-lg-12 page-body">
                    {!! $page->body !!}
                </div>
            </div>
        </div>
        <script>
            $('.page-body').find('table').addClass('table-responsive row')
            $('.page-body').find('img').addClass('img-fluid')
        </script>
@endsection