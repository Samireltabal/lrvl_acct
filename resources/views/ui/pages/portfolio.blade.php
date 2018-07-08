@extends('ui.layout.portfolio')

@section('content')
    <div class="title">
        <h2 class="col-lg-12"><i class="fa fa-paint-brush" area-hidden='true'></i> Portfolio</h2>
    </div>
    
    <div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row portfolio-container">
            @foreach($portfolio_items as $item)
                @if($item->active)    
                    <div class="col-md-3 portfolio_item" id="portfolio_item_{{$item->id}}">
                        <div class="row" id="portfolio_image_{{ $item->id }}">
                                <a href="{{ Storage::url('portolioUploads/' . $item->image ) }}" data-lightbox="image_{{$item->id}}" data-title="{{$item->title}}">
                            <img src="{{ Storage::url('portolioUploadsThumb/' . $item->image ) }}" class="img-fluid" style="width:100%;" alt="{{ $item->title }}">
                        </a>
                        </div>
                        <div class="row data" id='data_{{ $item->id }}'>
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="portfolio-link-icon">
                                            <a href="{{ $item->url }}"><i class="fa fa-link fa-2x" aria-hidden="true"></i></a>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-10">
                                        <p class='portfolio_description'>{{ $item->description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script type="text/javascript">
                        $('#portfolio_item_{{$item->id}}')
                        .mouseenter(function() {                
                            $("#data_{{ $item->id }}").slideDown(300);
                        })
                        .mouseleave(function() {                
                            $("#data_{{ $item->id }}").slideUp(300);
                        })                
                    </script>
                @endif    
            @endforeach
            
        </div>
    </div>
@endsection