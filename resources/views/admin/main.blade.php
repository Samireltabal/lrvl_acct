<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('bower_componenets/gentelella/production/images/favicon.ico') }}" type="image/ico" />
    <!-- title -->
    <title>{{ get_option('app_name') }} | {{ request()->route()->getAction('as') }}</title>
    <!-- styles -->
    <link rel="stylesheet" href="{{ asset('bower_components/jquery-ui/themes/smoothness/jquery-ui.css') }}" />
        <link href="{{asset('css/all.css')}}" rel="stylesheet" type="text/css">

  </head>
  <body class="nav-md">
        @include('inc.messages')
    <div class="container body">
      <div class="main_container">
        <!-- sidebar menu -->
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <?php
              if (Auth::user()->authorizeRoles(['manager']) !== false) {
            ?>
                @include('admin.sidebar')
            <?php
                }else{
                    ?>
                @include('admin.membersidebar')
                    <?php 
                }
              
              ?>
              </div>
            </div>
          <!-- /sidebar Menu -->
          
                  </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
           @include('admin.topbar')
        </div>
        <!-- /top navigation -->
        
        @yield('content')        

        <!-- footer content -->
        <footer>
          @include('admin.footer')
        </footer>
        <!-- /footer content -->
      </div>
    </div>

                <script type="text/javascript" src="{{ asset('js/jquery.min.js') }}"></script>
                <script type="text/javascript" src="{{ asset('bower_components/jquery-ui/jquery-ui.js') }}"></script>
               <script type="text/javascript" src="{{ asset('js/all.js') }}"></script>

<script type="text/javascript">

$( "#datepicker" ).datepicker();

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>
<script type="text/javascript">
$('#developer_name').each(function() {
        var $this = $(this);
        var src = $this.data('action');

        $this.autocomplete({
            source: src,
            minLength: 2,
            select: function(event, ui) {
                $this.val(ui.item.name);
                $('#developer_id').val(ui.item.id);
            }
        });
    });  

</script>
  </body>
</html>
