<style>
        #sortable {display:block; list-style-type: none; margin: 0; padding: 0; width: 60%; }
        #sortable li {display:block; margin: 3px 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1em;}
        #sortable li ul { padding: 2em; display: block;}
</style>

<a href='#' onclick="deleteMenu('{{ $menus->id }}')" class='btn btn-danger btn-xs'>Remove Menu <i class="fa fa-remove" aria-hidden="true"></i></a>

<div class="row">
    <div class="col-lg-12">
        <p>Create New Menu Item</p>
        <form id='addItem' method="post" action="{{ route('menu.addItem') }}">
            @csrf
            <div class="form-group col-lg-2">
                <label for="name">name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Item Name" aria-describedby="helpIdName">
                <small id="helpIdName" class="text-muted">The Name That will be shown in the menu</small>
            </div>
            <input type='hidden' value='{{ $menus->id }}' name='menu_id' />
            <div class="form-group col-lg-2">
                <label for="url">url</label>
                <input type="text" name="url" id="url" class="form-control" placeholder="Item url" aria-describedby="helpIdurl">
                <small id="helpIdurl" class="text-muted">The Name That will be shown in the menu</small>
            </div>
            <div class="form-group col-lg-2">
                <label for="name">class</label>
                <input type="text" name="class" id="class" class="form-control" placeholder="Item class" aria-describedby="helpIdclass">
                <small id="helpIdclass" class="text-muted">The Name That will be shown in the menu</small>
            </div>
            <div class="form-group col-lg-2">
                <label for="name">order</label>
                <input type="number" name="order" id="order" class="form-control" placeholder="Item order" aria-describedby="helpIdorder">
                <small id="helpIdorder" class="text-muted">Order</small>
            </div>
            <div class="form-group col-lg-2">
                    <label for="name">Has Sub ?</label><br>
                    <input type="checkbox" name="hasSub" id="hasSub" class="js-switch" placeholder="Item Name" aria-describedby="helpIdhasSub">
                    <small id="helpIdhasSub" class="text-muted">Has Sub Menu ?</small>
            </div>
            <div class="form-group col-lg-2">
              <label for="parent_id">Parent Menu </label>
              <select class="form-control" name="parent_id" id="parent_id">
                    <option value="">No Parent</option>
                    @foreach($menus->menuItems as $parent)
                        @if($parent->hasSub)
                            <option value="{{ $parent->id }}">{{ $parent->name}}</option>
                        @endif
                    @endforeach
              </select>
            </div>
            <div class="clearfix"></div>
            <div class="form-group">
                <button type="submit" class='btn btn-primary'>Add Menu Item</button>
            </div>
        
        </form>
    </div>
</div>
<script>
    $(function () {
    var frm = $('#addItem');
    frm.submit(function (ev) {
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                reqMenu("{{ $menus->id }}");
            },
            error: function(result) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            },
        });
        ev.preventDefault();
    });
});
</script>

<ul id='sortable'>
    @foreach($menus->menuItems as $item)
        @if($item->parent_id == 0)
    <li id="{{ $item->id }}" class="ui-state-default"><span class='pull-left'>                                    
            <a href="#" class='btn btn-danger btn-xs' onclick="removeItem('{{$item->id}}','{{ $menus->id }}');"><i class='fa fa-remove' style='color:#fff;'></i></a>
        </span>
    <strong>{{$item->name}}</strong>  <small>{{ $item->url }}</small>
        <span class='pull-right'>
                <label> 
                    <?php $checked = $item->hasSub ? 'checked' : ' '; ?>
                    Has Sub Items : <input type="checkbox" onchange="toggleSub('{{ $item->id }}','{{ $item->menu_id }}')"  {{ $checked }} />
                      </label>
                      <script>
                          
                      </script>
        </span>
                @if($item->hasSub)
                    <ul id='sortable2'>
                        <?php $subs = $item->sub()->get(); ?>                
                        @foreach($subs as $Subitem)
                                <li id="{{ $Subitem->id }}" class="ui-state-default">
                                    {{ $Subitem->name }}
                                <span class='pull-right'>
                                    
                                <a href="#" class='btn btn-danger btn-xs' onclick="removeItem('{{$Subitem->id}}','{{ $menus->id }}');"><i class='fa fa-remove' style='color:#fff;'></i></a>

                                </span>
                                </li>
                        @endforeach
                    </ul>
                @endif
                    </li>
        @endif    
    @endforeach
</ul>
<script>
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

        elems.forEach(function(html) {
        var switchery = new Switchery(html);
        });
    function deleteMenu(id) {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'DELETE',
                    url: "{{ route('menu.remove') }}",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        "menu_id": id
                    },
                    dataType: 'html',
					cache: false,
							         
                    success: function (data) {                    
                        reqMenu(id);
                            swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )                       
                    }
                });
                
            }
            })
    }
    function removeItem(id, mainId, src = '{{ route('menu.removeItem') }}' ) {
                $.ajax({
                    type: 'DELETE',
                    url: src,
                    data: {
                        "_token": "{{ csrf_token() }}",
                        "id": id
                    },
                    dataType: 'html',
					cache: false,
							         
                    success: function (data) {                    
                        reqMenu(mainId);                       
                    }
                });
            }
            function toggleSub(id, mainId, src = '{{ route('menu.toggleItem') }}' ) {
                $.ajax({
                    type: 'POST',
                    url: src,
                    data: {
                        "_token": "{{ csrf_token() }}",
                        "id": id
                    },
                    dataType: 'json',
					cache: false,
							         
                    success: function (data) {                    
                        reqMenu(mainId);                       
                    }
                });
            }
            
        $( "#sortable" ).sortable({
            stop: function(){
              $.map($(this).find('li'), function(el) {
                var itemID = el.id;
                var itemIndex = $(el).index();
                $.ajax({
                  url:'{{URL::to("order-menu")}}',
                  type:'GET',
                  dataType:'json',
                  data: {itemID:itemID, itemIndex: itemIndex},
                })
              });
            }
          });
        $( "#sortable" ).disableSelection();
        $( "#sortable2" ).sortable({
            stop: function(){
              $.map($(this).find('li'), function(el) {
                var itemID = el.id;
                var itemIndex = $(el).index();
                $.ajax({
                  url:'{{URL::to("order-menu")}}',
                  type:'GET',
                  dataType:'json',
                  data: {itemID:itemID, itemIndex: itemIndex},
                })
              });
            }
          });
        $( "#sortable2" ).disableSelection();
      </script>