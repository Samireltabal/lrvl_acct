<div class="clearfix"></div>	
						<hr>
						<h3><i class="fa fa-github"></i> Github Data</h3>
							<?php 
                          		$branches = get_repo_data($project->github_repository,'branches');
                          		$github = get_repo_obj($project->github_repository);
                          	?>
						<div class="col-md-12 col-sm-12 col-xs-12">

                      <ul class="stats-overview">
                        <li>
                          <span class="name"> Watchers </span>
                          <span class="value text-success"><i class="fa fa-eye"></i> {{ $github->watchers_count }} </span>
                        </li>
                        <li>
                          <span class="name"> Stars </span>
                          <span class="value text-success"><i class="fa fa-star"></i> {{ $github->stargazers_count }} </span>
                        </li>
                        <li class="hidden-phone">
                          <span class="name"> Size </span>
                          <span class="value text-success"><i class="fa fa-file"></i> {{ $github->size / 1000 }}  MB</span>
                        </li>
                      </ul>
                      <br />
                      <div>
                        <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Clone Project</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input class="form-control" readonly="readonly" placeholder="" value='git clone {{ $github->clone_url }}' type="text">
                        </div>
                                                 <div class="clearfix"></div>

							 <p> <b>GitHub Url :</b> <a href="{{ $github->html_url }}">{{ $github->name }}</a> </p>
							 <p> <b>Project Description :</b> {{ $github->description }}</p>
							 <p> <b>Project Created at :</b> {{ $github->created_at }}</p>
							 <p> <b>Project updated at :</b> {{ $github->updated_at }}</p>
							 <p> <b>Project pushed at :</b> {{ $github->pushed_at }}</p>
							 <p> <b><i class='fa fa-wrench'></i> Branches Last Commits : </b> 

							 	<ul>
								 	@foreach ($branches as $branch) 
								 		<li><a href="{{ get_commit_url($branch->commit->url) }}" target="_blank" >{{ $branch->name }}</a></li>							 
								 	@endforeach
							 	</ul>
							 </p>
