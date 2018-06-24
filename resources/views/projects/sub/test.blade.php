@foreach($products as $product)
	{{ $product->name }} - {{ $product->price}}
	<br>
@endforeach

