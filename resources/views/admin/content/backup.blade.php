@extends('admin.main')
@section('content')
<div class="right_col" role="main">
	<div class="page-title">
            <div class="title_left">
            <h1>Backups</h1>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel">
                            <div class="x_title">
                              <h2>Backups<small>Available backups</small></h2>
                            
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                            	<table class='table table-responsive'>
                            		<thead>
                            			<tr>
                            				<td>#</td>
                            				<td>Name</td>
                            				<td>Size</td>
                            				<td>Date</td>
                            			</tr>
                            		</thead>
                            		<tbody>	
                            			<?php 
                            		$backups = Storage::allFiles('/Be-Store');
	                            	 ?>
	                            	 @foreach($backups as $backup => $value)
	                            	 @if ($backup !== 0)
	                            	 <tr>
	                            	 	<td>{{ $backup }}</td> 
	                            	 	<td>{{ $value }}</td>
	                            	 	<td>{{ Storage::size($value) / 1000000 }} MB </td>
	                            	 	<td>{{ gmdate("Y-m-d", Storage::lastModified($value))  }} 	</td>
	                            	 	</tr>
	                            	 	@endif
	                            	 @endforeach
                            			
                            		</tbody>
                            	</table>
                            	
                            </div>
                    </div>
            </div>
        </div>
        
</div>
@endsection