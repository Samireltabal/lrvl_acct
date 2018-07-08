@extends('admin.main')
    @section('content')
        <div class='right_col' role='main'>
            <div>
                <div class="page-title">
                    <div class="title_left">
                        <h1>Menu Manager</h1>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Menu Manager<small>Multi Menus Manager For the Frontend</small></h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <div class="row">
                                    <div class="col-lg-12" id="menu">
                                        <p>please select menu</p>
                                        <form>
                                            <a href="#" class='btn btn-success' onclick="createMenu();">Create Menu</a>
                                            <div class="form-group">
                                                <label for="menu_id">Menus</label>
                                                <select class="custom-select" name="menu_id" id="menu_id">
                                                    <option selected>---------------</option>
                                                    @foreach($menus as $menu)
                                                <option value="{{ $menu->id }}"> {{ $menu->menu_name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="col-lg-12">
                                            <div id="form_content"></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <script>
            function createMenu(){
                swal({
                    title: 'please enter menu name',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Create Menu',
                    showLoaderOnConfirm: true,
                    preConfirm: (name) => {
                        $.ajax({
                            type: 'POST',
                            url: "{{ route('menu.add') }}",
                            data: {
                                "_token": "{{ csrf_token() }}",
                                "name": name
                            },
                            dataType: 'json',
                            cache: false,
                            success: function (data) {                    
                               reqMenu(data.data.id);                    
                            }
                            
                        });
                    },
                    allowOutsideClick: () => !swal.isLoading()
                    }).then((result) => {
                    if (result.value) {
                        swal({
                        title: `${result.value} menu created`,
                        })
                    }
                    console.log(result);
                    })
                
            }
            </script>
        <script>
            
            $('#menu_id').change(function () {
                var id = $(this).find(':selected')[0].value;
                //var src = $(this).data('action');
                reqMenu(id);
            // alert(id); 
             });


             function reqMenu(id,src = '{{ route('changeMenu') }}' ) {
                $.ajax({
                    type: 'GET',
                    url: src,
                    data: {
                        'id': id
                    },
                    dataType: 'html',
					cache: false,
							         
                    success: function (data) {                    
                        $("#form_content").html(data);                        
                    }
                });
            }
        </script>
        
    
    @endsection