@extends('admin.main')

@section('content')
		<div class="right_col" role="main" id="printable">
	<div class="page-title">
            <div class="title_left">
            <h1>@yield('page_title')</h1>
            </div>
            <div class="title_right">
                @yield('buttons')
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel">
                            <div class="x_title">
                              <h2>@yield('page_title')<small>@yield('page_description')</small></h2>
                            
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                            	@yield('page_content')
                            </div>
                    </div>
            </div>
        </div>  
	</div>
@endsection