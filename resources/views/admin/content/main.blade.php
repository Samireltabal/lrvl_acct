@extends('admin.main')
@section('content')

<!-- page content -->
<div class="right_col" role="main">
    <!-- top tiles -->
    @if(Auth::user()->hasRole('manager'))
    @include('admin.content.widgets.upper')
    @endif
    <!-- /top tiles -->

    <!-- Graph Widget -->

        @include('admin.content.widgets.graphs')

    <!-- /End Graph Widget-->
    <br />

    <div class="row">
        @include('admin.content.widgets.mytasks')
    </div>


    <div class="row">
        @include('admin.content.widgets.activity')
    </div>
  </div>
  <!-- /page content -->
@endsection