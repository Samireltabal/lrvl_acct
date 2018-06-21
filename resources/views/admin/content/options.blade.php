@extends('admin.main')

@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
            <h1>Settings</h1>
            </div>
        </div>
        {{-- List Options --}}
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel">
                            <div class="x_title">
                              <h2>Settings<small>please fill this data with your website settings</small></h2>
                              
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                @include('admin.content.settings.current')
                            </div>
                    </div>
            </div>
        </div>
        
        
        {{-- Add New Option --}}

        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel">
                            <div class="x_title">
                              <h2>Create New Settings<small>Create new option</small></h2>
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                    @include('admin.content.settings.new')
                            </div>
                    </div>
            </div>
        </div>

    </div>
</div>
@endsection