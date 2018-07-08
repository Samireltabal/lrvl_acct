@extends('admin.main');
    @section('content')
        <div class='right_col' role='main'>
            <div>
                <div class="page-title">
                    <div class="title_left">
                        <h1>Create Page</h1>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Add New Page<small>Create new Page that can be viewed publicely</small></h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                            <form action="{{ route('page.store') }}" method="POST">
                                <input type="hidden" name="user_id" value='{{ Auth::user()->id }}'>
                                @csrf
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                              <label for="title">Title </label>
                                              <input type="text" name="title" id="title" class="form-control" placeholder="Page Title" aria-describedby="helpIdTitle">
                                              <small id="helpIdTitle" class="text-muted">Page Title </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-9">
                                            <div class="form-group">
                                              <label for="body">Page content</label>
                                              <textarea id='pageCreator' class="form-control" name="body" id="body" rows="15"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                                <div class="form-group">
                                                    <button type="submit" class='btn btn-success btn-block'>Add Page <i class="fa fa-plus-square" aria-hidden="true"></i></button>
                                                    <div class="clearfix" style='margin-top:1em;'></div>
                                                    <button type="reset" class='btn btn-warning btn-block'>Cancel <i class="fa fa-remove" aria-hidden="true"></i></button>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                    <label for="tags">Tags</label>
                                                    
                                                    <input id="tags_1" name='tags' type="text" class="tags form-control" placeholder="Tags" aria-describedby="helpIdTags"/>
                                                    <small id="helpIdTags" class="text-muted">Place Some tags for seo purposes </small>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-group">
                                                        <label> 
                                                                Activate Page : <input class='js-switch' name='active' type="checkbox"  checked/>
                                                                  </label>
                                                                  <br>
                                                  <small id="helpId" class="text-muted">uncheck if you dont want the page to be active</small>
                                                </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection