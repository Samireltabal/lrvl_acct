@extends('admin.main')
    @section('content')
        <div class='right_col' role='main'>
            <div>
                <div class="page-title">
                    <div class="title_left">
                        <h1>Admin Template Title</h1>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <a class='btn btn-success pull-right' title='Add Page' href="{{ route('page.create') }}">Add New Page <i class="fa fa-plus-square" aria-hidden="true"></i></a>
                                <h2>Pages Available<small>A list of pages available</small></h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <table class="table table-striped table-sm table-bordered table-hover table-inverse table-responsive">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Slug</th>
                                            <th>created at</th>
                                            <th>Tags</th>
                                            <th>Active</th>
                                            <th>Edit</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($pages as $page)

                                            <tr>
                                                    <td scope="row">{{ $page->id }}</td>
                                                    <td>{{ $page->title }}</td>
                                                    <td><a href="{{ url('/page',$page->slug) }}" class='btn btn-xs btn-info' target="_blank"><i class="fa fa-external-link"></i> Visit</a></td>
                                                    <td>{{ $page->created_at }}</td>
                                                    <td>{{ $page->tags }}</td>
                                                    <td>
                                                        @if($page->active)
                                                        <form action="{{ route('page.toggle') }}" method="post">
                                                            <input type="hidden" name="id" value="{{ $page->id }}">
                                                            @csrf
                                                            <button type='submit' href="#" class='btn btn-success btn-xs' data-toggle="tooltip" title='Deactivate Page'><i class="fa fa-check-circle-o" aria-hidden="true"></i> active</button>
                                                        </form>
                                                        @else
                                                                <form action="{{ route('page.toggle') }}" method="post">
                                                                <input type="hidden" name="id" value="{{ $page->id }}">
                                                                @csrf
                                                                <button type='submit' class='btn btn-danger btn-xs' data-toggle="tooltip" title='activate Page'><i class="fa fa-remove" aria-hidden="true"></i> inactive</button>
                                                            </form>                                                    
                                                        @endif
                                                    </td>
                                                    <td><a href="{{ route('page.update') }}/{{ $page->id }}" class='btn btn-warning  btn-xs' data-toggle="tooltip" title='Edit Page'><i class="fa fa-pencil-square" aria-hidden="true"></i></a></td>
                                                    <td>
                                                            {{ Form::open(['route' => 'page.remove', 'method' => 'delete']) }}
                                                                    <input type="hidden" name="id" value="{{ $page->id }}">
                                                                    <button class='btn btn-danger  btn-xs' data-toggle="tooltip" title='remove page'><i class="fa fa-remove" aria-hidden="true"></i></button>
                                                    </td>
                                                </tr>

                                            @endforeach
                                            
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection