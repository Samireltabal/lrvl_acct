@extends('admin.main');
    @section('content')
        <div class='right_col' role='main'>
            <div>
                <div class="page-title">
                    <div class="title_left">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <div class="clearfix"></div>
				<div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Portfolio Items<small>Available Portfolio Items</small></h2>
                                
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                 <table class="table table-bordered table-responsive table-xs">
                                     <thead class="thead-default">
                                         <tr>
                                             <th>#</th>
                                             <th>Title</th>
                                             <th>Url</th>
                                             <th>Description</th>
                                             <th>Active</th>
                                             <th>Last Update</th>
                                             <th>created by</th>
                                             <th><i class="fa fa-remove" aria-hidden="true"></i></th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                             @if($portfolio->count())
                                             @foreach($portfolio as $portfolio_item)
                                                <?php 
                                                $status = $portfolio_item->active ? "bg-success" : "bg-danger" ;
                                                ?>
                                                <tr class='{{ $status }}'>
                                                    <td scope="row">{{ $portfolio_item->id }}</td>
                                                    <td>{{ $portfolio_item->title }}</td>
                                                    <td><a href="{{ $portfolio_item->url }}" target='_blank' class='btn btn-info btn-xs'><i class="fa fa-link" aria-hidden="true"></i> Visit</a></td>
                                                    <td>{{ $portfolio_item->description }}</td>
                                                    <td>
                                                        @if($portfolio_item->active)
                                                        <form action="{{ route('portfolio.change') }}" method="post" class='table-form'>
                                                            @csrf
                                                            <input type="hidden" name="portfolio_item_id" value="{{ $portfolio_item->id }}">
                                                            <button class='btn btn-success  btn-xs' type="submit"><i class="fa fa-check-circle-o" aria-hidden="true"></i></button>
                                                        </form>
                                                        
                                                        @else
                                                        <form action="{{ route('portfolio.change') }}" method="post" class='table-form'>
                                                                @csrf
                                                                <input type="hidden" name="portfolio_item_id" value="{{ $portfolio_item->id }}">
                                                                <button class='btn btn-danger  btn-xs' type="submit"><span class='text-center'><i class="fa fa-remove" aria-hidden="true"></i></span></button>
                                                            </form>
                                                        @endif
                                                    </td>
                                                    <td><small>{{ $portfolio_item->updated_at }}</small></td>
                                                    <td>{{ $portfolio_item->user->name }}</th>
                                                    <td>
                                                            <form action="{{ route('portfolio.remove') }}" method="post" class='table-form'>
                                                                    @csrf
                                                                    <input type="hidden" name="portfolio_item_id" value="{{ $portfolio_item->id }}">
                                                                    <button class='btn btn-danger  btn-xs' type="submit"><span class='text-center'><i class="fa fa-remove" aria-hidden="true"></i></span></button>
                                                                </form>
                                                    </td>
                                                </tr>
                                             @endforeach
                                             @else
                                                <tr><td scope='row' colspan="8" class='text-center'>Please Add Portfolio Items</td>  </tr>
                                             @endif
                                         </tbody>
                                 </table>
                            </div>
                        </div>
                    </div>
                </div>                
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Create<small>Create Portfolio Item</small></h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <div class="col-lg-12">
                                    <form action="{{ route('portfolio.create') }}" method="post" enctype="multipart/form-data">
                                        @csrf
                                        <div class="form-group">
                                          <label for="item_name">Item name</label>
                                          <input type="text" name="item_name" id="item_name" class="form-control" placeholder="Portfolio Item Name" aria-describedby="nameHelpId">
                                          <small id="nameHelpId" class="text-muted">the title of the item</small>
                                        </div>
                                        <div class="form-group">
                                          <label for="url">URL</label>
                                          <input type="text" name="url" id="url" class="form-control" placeholder="URL" aria-describedby="URLhelpId">
                                          <small id="URLhelpId" class="text-muted">Url or External link for Portfolio Item</small>
                                        </div>
                                        <label class="custom-control custom-checkbox">
                                          <input type="checkbox" name="status" id="status" value="true" class="custom-control-input">
                                          <span class="custom-control-indicator"></span>
                                          <span class="custom-control-description">is the project active ?</span>
                                        </label>
                                        <div class="form-group">
                                          <label for="description">Description</label>
                                          <textarea class="form-control" name="description" id="description" rows="4"></textarea>
                                        </div>
                                        <div class="form-group">
                                          <label for="image">Image</label>
                                          <input type="file" class="form-control-file" name="image" id="image" placeholder="Image" aria-describedby="fileHelpId">
                                          <small id="fileHelpId" class="form-text text-muted">Head Image For the Project</small>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Create Item</button>
                                        <button type="reset" class="btn btn-warning">Canel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection