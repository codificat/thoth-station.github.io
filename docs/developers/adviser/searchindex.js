Search.setIndex({docnames:["dependency_graph","dependency_monkey","index","libdependency_graph","performance","pipeline","provenance_checks","thoth.adviser","thoth.adviser.python","thoth.adviser.python.dependency_graph","thoth.adviser.python.dependency_graph.adaptation","thoth.adviser.python.dependency_graph.walking","thoth.adviser.python.pipeline","thoth.adviser.python.pipeline.steps","thoth.adviser.python.pipeline.strides","thoth.adviser.python.pipeline.units"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["dependency_graph.rst","dependency_monkey.rst","index.rst","libdependency_graph.rst","performance.rst","pipeline.rst","provenance_checks.rst","thoth.adviser.rst","thoth.adviser.python.rst","thoth.adviser.python.dependency_graph.rst","thoth.adviser.python.dependency_graph.adaptation.rst","thoth.adviser.python.dependency_graph.walking.rst","thoth.adviser.python.pipeline.rst","thoth.adviser.python.pipeline.steps.rst","thoth.adviser.python.pipeline.strides.rst","thoth.adviser.python.pipeline.units.rst"],objects:{"thoth.adviser":{cli:[7,0,0,"-"],configuration:[7,0,0,"-"],enums:[7,0,0,"-"],exceptions:[7,0,0,"-"],isis:[7,0,0,"-"],python:[8,0,0,"-"]},"thoth.adviser.enums":{DecisionType:[7,1,1,""],Ecosystem:[7,1,1,""],PythonRecommendationOutput:[7,1,1,""],RecommendationType:[7,1,1,""]},"thoth.adviser.enums.DecisionType":{ALL:[7,2,1,""],RANDOM:[7,2,1,""]},"thoth.adviser.enums.Ecosystem":{PYTHON:[7,2,1,""]},"thoth.adviser.enums.PythonRecommendationOutput":{PIPENV:[7,2,1,""],REQUIREMENTS:[7,2,1,""]},"thoth.adviser.enums.RecommendationType":{LATEST:[7,2,1,""],STABLE:[7,2,1,""],TESTING:[7,2,1,""]},"thoth.adviser.exceptions":{InternalError:[7,3,1,""],NotFound:[7,3,1,""],PipfileParseError:[7,3,1,""],ThothAdviserException:[7,3,1,""],UnsupportedConfiguration:[7,3,1,""],VersionIdentifierError:[7,3,1,""]},"thoth.adviser.isis":{Isis:[7,1,1,""]},"thoth.adviser.isis.Isis":{get_python_package_performance_impact_all:[7,4,1,""],get_python_project_performance_import:[7,2,1,""]},"thoth.adviser.python":{advise:[8,0,0,"-"],builder:[8,0,0,"-"],dependency_graph:[9,0,0,"-"],dependency_monkey:[8,0,0,"-"],digests_fetcher:[8,0,0,"-"],exceptions:[8,0,0,"-"],pipeline:[12,0,0,"-"],solver:[8,0,0,"-"]},"thoth.adviser.python.advise":{Adviser:[8,1,1,""]},"thoth.adviser.python.advise.Adviser":{compute:[8,4,1,""],compute_on_project:[8,4,1,""],compute_using_pipeline:[8,4,1,""],count:[8,2,1,""],limit:[8,2,1,""],recommendation_type:[8,2,1,""]},"thoth.adviser.python.builder":{PipelineBuilder:[8,1,1,""],PipelineConfig:[8,1,1,""]},"thoth.adviser.python.builder.PipelineBuilder":{get_adviser_pipeline_config:[8,4,1,""],get_dependency_monkey_pipeline_config:[8,4,1,""],graph:[8,2,1,""],library_usage:[8,2,1,""],project:[8,2,1,""]},"thoth.adviser.python.builder.PipelineConfig":{steps:[8,4,1,""],strides:[8,4,1,""]},"thoth.adviser.python.dependency_graph":{adaptation:[10,0,0,"-"],walking:[11,0,0,"-"]},"thoth.adviser.python.dependency_graph.adaptation":{elements:[10,0,0,"-"],exceptions:[10,0,0,"-"],graph:[10,0,0,"-"],transaction:[10,0,0,"-"]},"thoth.adviser.python.dependency_graph.adaptation.elements":{Edge:[10,1,1,""],Node:[10,1,1,""]},"thoth.adviser.python.dependency_graph.adaptation.elements.Edge":{get_edge_key:[10,4,1,""],score:[10,2,1,""],source:[10,2,1,""],target:[10,2,1,""]},"thoth.adviser.python.dependency_graph.adaptation.elements.Node":{all_dependency_package_tuples:[10,4,1,""],all_dependent_package_tuples:[10,4,1,""],all_incoming_edges:[10,4,1,""],all_outgoing_edges:[10,4,1,""],incoming_edges:[10,2,1,""],outgoing_edges:[10,2,1,""],package_tuple:[10,2,1,""]},"thoth.adviser.python.dependency_graph.adaptation.exceptions":{CannotRemovePackage:[10,3,1,""],DependencyGraphAdaptationException:[10,3,1,""],PackageNotFound:[10,3,1,""],RemoveMultiplePackages:[10,3,1,""],TransactionExpired:[10,3,1,""]},"thoth.adviser.python.dependency_graph.adaptation.graph":{DependencyGraph:[10,1,1,""]},"thoth.adviser.python.dependency_graph.adaptation.graph.DependencyGraph":{direct_dependencies_map:[10,2,1,""],edges_map:[10,2,1,""],from_paths:[10,4,1,""],iter_direct_dependencies_tuple:[10,4,1,""],iter_transitive_dependencies_tuple:[10,4,1,""],packages_map:[10,2,1,""],packages_score:[10,2,1,""],perform_transaction:[10,4,1,""],remove_package_tuples:[10,4,1,""],score_package_tuple:[10,4,1,""],sort_paths:[10,4,1,""],to_scored_package_tuple_pairs:[10,4,1,""]},"thoth.adviser.python.dependency_graph.adaptation.transaction":{DependencyGraphTransaction:[10,1,1,""]},"thoth.adviser.python.dependency_graph.adaptation.transaction.DependencyGraphTransaction":{any_positive_score:[10,4,1,""],commit:[10,4,1,""],dependency_graph:[10,2,1,""],iter_package_tuples:[10,4,1,""],rollback:[10,4,1,""],score_summary:[10,4,1,""],to_remove_edges:[10,2,1,""],to_remove_nodes:[10,2,1,""]},"thoth.adviser.python.dependency_graph.walking":{dependency_graph:[11,0,0,"-"]},"thoth.adviser.python.dependency_graph.walking.dependency_graph":{DependenciesCountOverflow:[11,3,1,""],DependencyGraph:[11,1,1,""],DependencyGraphWalkerException:[11,3,1,""],NoDependenciesError:[11,3,1,""],PrematureStreamEndError:[11,3,1,""]},"thoth.adviser.python.dependency_graph.walking.dependency_graph.DependencyGraph":{MAX_DEPENDENCIES_COUNT:[11,2,1,""],STREAM_DELIMITER:[11,2,1,""],STREAM_STOP:[11,2,1,""],stacks_estimated:[11,4,1,""],walk:[11,4,1,""]},"thoth.adviser.python.dependency_monkey":{dependency_monkey:[8,5,1,""],dm_amun_inspect_wrapper:[8,5,1,""]},"thoth.adviser.python.digests_fetcher":{GraphDigestsFetcher:[8,1,1,""]},"thoth.adviser.python.digests_fetcher.GraphDigestsFetcher":{fetch_digests:[8,4,1,""]},"thoth.adviser.python.exceptions":{ConstraintClashError:[8,3,1,""],DirectDependencyRemoval:[8,3,1,""],UnableLock:[8,3,1,""]},"thoth.adviser.python.pipeline":{context_base:[12,0,0,"-"],exceptions:[12,0,0,"-"],pipeline:[12,0,0,"-"],product:[12,0,0,"-"],stack_candidates:[12,0,0,"-"],stats_base:[12,0,0,"-"],step:[12,0,0,"-"],step_context:[12,0,0,"-"],step_stats:[12,0,0,"-"],steps:[13,0,0,"-"],stride:[12,0,0,"-"],stride_context:[12,0,0,"-"],stride_stats:[12,0,0,"-"],strides:[14,0,0,"-"],unit_base:[12,0,0,"-"],units:[15,0,0,"-"]},"thoth.adviser.python.pipeline.context_base":{ContextBase:[12,1,1,""]},"thoth.adviser.python.pipeline.context_base.ContextBase":{stats:[12,4,1,""]},"thoth.adviser.python.pipeline.exceptions":{CannotRemovePackage:[12,3,1,""],PackageNotFound:[12,3,1,""],PipelineExceptionBase:[12,3,1,""],StrideRemoveStack:[12,3,1,""]},"thoth.adviser.python.pipeline.pipeline":{Pipeline:[12,1,1,""]},"thoth.adviser.python.pipeline.pipeline.Pipeline":{conduct:[12,4,1,""],get_configuration:[12,4,1,""],get_stack_info:[12,4,1,""],solver:[12,4,1,""]},"thoth.adviser.python.pipeline.product":{PipelineProduct:[12,1,1,""]},"thoth.adviser.python.pipeline.product.PipelineProduct":{finalize:[12,4,1,""],justification:[12,2,1,""],project:[12,2,1,""],score:[12,2,1,""]},"thoth.adviser.python.pipeline.stack_candidates":{StackCandidates:[12,1,1,""]},"thoth.adviser.python.pipeline.stack_candidates.StackCandidates":{add:[12,4,1,""],count:[12,2,1,""],direct_dependencies_map:[12,2,1,""],generate_pipeline_products:[12,4,1,""],get_package_version_tuple:[12,4,1,""],input_project:[12,2,1,""],transitive_dependencies_map:[12,2,1,""]},"thoth.adviser.python.pipeline.stats_base":{StatsBase:[12,1,1,""]},"thoth.adviser.python.pipeline.stats_base.StatsBase":{get_duration:[12,4,1,""],log_report:[12,4,1,""],reset_stats:[12,4,1,""],start_time:[12,4,1,""],start_timer:[12,4,1,""]},"thoth.adviser.python.pipeline.step":{Step:[12,1,1,""]},"thoth.adviser.python.pipeline.step.Step":{run:[12,4,1,""]},"thoth.adviser.python.pipeline.step_context":{StepContext:[12,1,1,""]},"thoth.adviser.python.pipeline.step_context.StepContext":{dependency_graph_adaptation:[12,2,1,""],from_paths:[12,4,1,""],iter_all_dependencies:[12,4,1,""],iter_all_dependencies_tuple:[12,4,1,""],iter_direct_dependencies:[12,4,1,""],iter_direct_dependencies_tuple:[12,4,1,""],iter_transitive_dependencies:[12,4,1,""],iter_transitive_dependencies_tuple:[12,4,1,""],packages:[12,2,1,""],remove_package_tuples:[12,4,1,""],score_package_tuple:[12,4,1,""],sort_paths:[12,4,1,""],stats:[12,4,1,""]},"thoth.adviser.python.pipeline.step_stats":{StepStats:[12,1,1,""]},"thoth.adviser.python.pipeline.step_stats.StepStats":{log_report:[12,4,1,""],mark_removed_package_tuple:[12,4,1,""]},"thoth.adviser.python.pipeline.steps":{buildtime_error:[13,0,0,"-"],cve:[13,0,0,"-"],limit_latest_versions:[13,0,0,"-"],observation_reduction:[13,0,0,"-"],performance_adjustment:[13,0,0,"-"],prereleases:[13,0,0,"-"],restrict_indexes:[13,0,0,"-"],runtime_error:[13,0,0,"-"],score_cutoff:[13,0,0,"-"],semver_sort:[13,0,0,"-"],toolchain:[13,0,0,"-"],unreachable:[13,0,0,"-"]},"thoth.adviser.python.pipeline.steps.buildtime_error":{BuildtimeErrorFiltering:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.buildtime_error.BuildtimeErrorFiltering":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.cve":{CvePenalization:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.cve.CvePenalization":{PARAMETERS_DEFAULT:[13,2,1,""],run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.limit_latest_versions":{LimitLatestVersions:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.limit_latest_versions.LimitLatestVersions":{PARAMETERS_DEFAULT:[13,2,1,""],run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.observation_reduction":{ObservationReduction:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.observation_reduction.ObservationReduction":{PARAMETERS_DEFAULT:[13,2,1,""],run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.performance_adjustment":{PerformanceAdjustment:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.performance_adjustment.PerformanceAdjustment":{PARAMETERS_DEFAULT:[13,2,1,""],run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.prereleases":{CutPreReleases:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.prereleases.CutPreReleases":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.restrict_indexes":{RestrictIndexes:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.restrict_indexes.RestrictIndexes":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.runtime_error":{RuntimeErrorFiltering:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.runtime_error.RuntimeErrorFiltering":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.score_cutoff":{ScoreCutoff:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.score_cutoff.ScoreCutoff":{PARAMETERS_DEFAULT:[13,2,1,""],run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.semver_sort":{SemverSort:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.semver_sort.SemverSort":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.toolchain":{CutToolchain:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.toolchain.CutToolchain":{is_toolchain:[13,4,1,""],run:[13,4,1,""]},"thoth.adviser.python.pipeline.steps.unreachable":{CutUnreachable:[13,1,1,""]},"thoth.adviser.python.pipeline.steps.unreachable.CutUnreachable":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.stride":{Stride:[12,1,1,""]},"thoth.adviser.python.pipeline.stride.Stride":{run:[12,4,1,""]},"thoth.adviser.python.pipeline.stride_context":{StrideContext:[12,1,1,""]},"thoth.adviser.python.pipeline.stride_context.StrideContext":{adjust_score:[12,4,1,""],justification:[12,4,1,""],score:[12,4,1,""],stack_candidate:[12,2,1,""]},"thoth.adviser.python.pipeline.stride_stats":{StrideStats:[12,1,1,""]},"thoth.adviser.python.pipeline.stride_stats.StrideStats":{log_report:[12,4,1,""]},"thoth.adviser.python.pipeline.strides":{cve:[14,0,0,"-"],performance_scoring:[14,0,0,"-"],random_decision:[14,0,0,"-"],score_filter:[14,0,0,"-"]},"thoth.adviser.python.pipeline.strides.cve":{CveScoring:[14,1,1,""]},"thoth.adviser.python.pipeline.strides.cve.CveScoring":{PARAMETERS_DEFAULT:[14,2,1,""],run:[14,4,1,""]},"thoth.adviser.python.pipeline.strides.performance_scoring":{PerformanceScoring:[14,1,1,""]},"thoth.adviser.python.pipeline.strides.performance_scoring.PerformanceScoring":{PARAMETERS_DEFAULT:[14,2,1,""],run:[14,4,1,""]},"thoth.adviser.python.pipeline.strides.random_decision":{RandomDecision:[14,1,1,""]},"thoth.adviser.python.pipeline.strides.random_decision.RandomDecision":{run:[14,4,1,""]},"thoth.adviser.python.pipeline.strides.score_filter":{ScoreFiltering:[14,1,1,""]},"thoth.adviser.python.pipeline.strides.score_filter.ScoreFiltering":{run:[14,4,1,""]},"thoth.adviser.python.pipeline.unit_base":{PipelineUnitBase:[12,1,1,""]},"thoth.adviser.python.pipeline.unit_base.PipelineUnitBase":{PARAMETERS_DEFAULT:[12,2,1,""],PARAMETERS_SCHEMA:[12,2,1,""],compute_expanded_parameters:[12,4,1,""],graph:[12,2,1,""],library_usage:[12,2,1,""],name:[12,4,1,""],parameters:[12,4,1,""],project:[12,2,1,""],run:[12,4,1,""],to_dict:[12,4,1,""],update_parameters:[12,4,1,""]},"thoth.adviser.python.pipeline.units":{cve:[15,0,0,"-"],performance:[15,0,0,"-"],semver:[15,0,0,"-"]},"thoth.adviser.python.pipeline.units.cve":{get_cve_records:[15,5,1,""]},"thoth.adviser.python.pipeline.units.performance":{get_performance:[15,5,1,""],get_performance_impact_packages:[15,5,1,""]},"thoth.adviser.python.pipeline.units.semver":{semver_cmp_package_version:[15,5,1,""]},"thoth.adviser.python.solver":{GraphReleasesFetcher:[8,1,1,""],PackageVersionDependencyParser:[8,1,1,""],PythonGraphSolver:[8,1,1,""],PythonPackageGraphSolver:[8,1,1,""]},"thoth.adviser.python.solver.GraphReleasesFetcher":{fetch_releases:[8,4,1,""],graph_db:[8,4,1,""]},"thoth.adviser.python.solver.PackageVersionDependencyParser":{parse:[8,4,1,""]},"thoth.adviser.python.solver.PythonPackageGraphSolver":{solve:[8,4,1,""]},thoth:{adviser:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:exception","4":"py:method","5":"py:function"},terms:{"abstract":[5,12],"case":[0,2,3,4,5,8,11,13],"class":[4,5,7,8,10,11,12,13,14,15],"default":[3,5],"enum":[2,8],"final":[5,12],"float":[4,8,10,12,15],"function":[2,3,5,7,12,13],"import":[4,5,7],"int":[4,8,10,12,15],"new":[3,4],"null":4,"public":6,"return":[3,5,8,12],"static":[5,8],"switch":4,"true":[5,8,10,12],"try":[5,8],For:[2,3],NOT:6,One:[3,12],TLS:6,That:6,The:[0,1,2,3,4,5,6,14],There:[0,1,2,6,8,9],These:[1,2,3,5,12,15],With:3,__name__:5,_extendedenum:7,_logger:5,abi:3,abort:5,about:[0,1,5,10],abov:[2,3,4,5],accept:[1,4,5,7,14],access:5,accord:[13,15],account:13,accumul:12,accur:2,accuraci:1,across:1,act:[5,10],actual:[1,2,3,4,5,6,8,9,10],adapt:[3,4,7,8,9,11,12],add:[4,12],adding:4,addit:[1,3,4,5,8,13],adjust:[4,5,9,10,12],adjust_scor:[5,12],administr:4,advantag:[0,3],advic:1,advis:[0,1,3,4,5],affect:[10,14,15],after:[1,4,12,13],again:2,against:[0,2,6,14],aggreg:[1,2,8],aico:[4,6],aim:[1,5],algorithm:[1,3],alia:8,all:[1,2,3,4,5,7,8,10,12],all_dependency_package_tupl:10,all_dependent_package_tupl:10,all_incoming_edg:10,all_outgoing_edg:10,all_performance_model:4,all_vers:8,alloc:1,allow:[2,13],along:1,alreadi:4,also:[0,2,3,4,5,6],alwai:[0,13],amun:[0,1,2,3,4,5,8],analysi:[4,5],ani:[0,1,3,4,6,10,13,14],anoth:[3,6],any_positive_scor:10,anymor:6,api:[1,2,3,4,5,6,7,8],app:3,appli:1,applic:[0,2,5,6,8],apt:1,argument:2,ari:[0,2,3],around:8,arrai:3,ask:3,aspect:[1,5],assembl:2,assign:[1,3],asyncio:5,atom:5,attribut:5,aug:2,autom:1,automat:[1,2,4],avail:[1,2,3,4,5,6,8,13],awai:5,back:[0,3,5,7,8,10],bad:5,bar:5,base:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15],basic:3,becaus:5,been:[4,10],befor:[5,13],behavior:0,being:[5,13,14],bellow:[4,5,6,13],below:[2,5],benefit:[3,4,5],besid:[0,1],best:[0,2],better:0,between:[0,3,5,15],bin:3,binari:0,bind:3,blog:5,bool:[8,10,12],both:[5,6],bound:[3,11],branch:4,browser:1,bug:7,build:[1,2,3,4,5,6],builder:[5,7],buildtim:13,buildtime_error:[7,8,12],buildtimeerrorfilt:13,built:[2,4,6],cach:[3,7],call:[0,1,2,3,5,7,8,12],callabl:[10,12],can:[0,1,2,3,4,5,6,9,10,11,15],candid:[2,5,12],cannot:[2,5,8,10,11,12],cannotremovepackag:[5,10,12],capabl:[0,1],captur:[3,4,5],care:0,carri:[4,5,12],casu:6,categori:3,caus:5,cento:2,centos7:2,ceph:1,certain:[1,9],chain:[3,12],chang:[2,4,5,6,9,10],characterist:[1,4,5],check:[3,10,12,13,14],choic:[0,5],chosen:3,clash:8,classmethod:[8,10,12],cli:[0,1,2],client:7,close:11,cluster:3,code:[1,2,3,4,5,7,15],column:13,com:[2,5],combin:[1,2],come:[5,6],comma:[2,6],command:2,commit:[4,10],common:[8,15],commun:[3,7],compar:15,comparis:6,comparision_func:[10,12],comparison:1,compat:[1,3],complex:5,compliant:0,compon:4,comput:[0,1,2,4,5,6,7,8,10,11,12],compute_expanded_paramet:12,compute_on_project:8,compute_using_pipelin:8,computed_stacks_heap:8,conduct:12,config:8,configur:[0,1,5,6,8,12],conform:4,conifgur:2,connect:6,consid:[0,1,8,13],consist:5,constraint:[7,8],constraintclasherror:8,construct:[0,3,5,10],constructor:[5,8],consum:[1,3],consumpt:3,contain:[1,2,3],container:3,content:2,context:[1,4,5,8,12,13],context_bas:[7,8],contextbas:12,continu:5,control:[0,2],copi:3,core:[1,2,5,8],correctli:2,correspond:[2,10],could:[1,11],count:[8,12,13],cpu:[1,4],creat:[1,2,3,5],create_schema:4,creation:[3,12],ctype:3,current:[1,3,6,9,10,12],current_nam:12,custom:8,cut:13,cutprereleas:13,cuttoolchain:13,cutunreach:13,cve:[5,7,8,12],cve_pen:[5,13,14],cve_record:5,cvepen:[5,13],cvescor:14,cxxabi_1:3,cycl:[0,3],cyclic:3,danger:6,data:[1,2,5,8],databas:[0,1,2,4,5,8,12,15],debug:5,decid:5,decis:[5,7,8],decision_typ:8,decisiontyp:[7,8],dedic:1,def:5,defin:[4,8],definit:8,demand:0,depend:[3,4,5,6,7,8,9,10,11,12,13],dependenciescountoverflow:11,dependency_graph:[5,7,8,12],dependency_graph_adapt:12,dependency_monkei:7,dependency_typ:3,dependencygraph:[10,11,12],dependencygraphadaptationexcept:10,dependencygraphtransact:[10,12],dependencygraphwalkerexcept:11,dependencypars:8,dependneci:2,deploi:[2,3,6],deploy:3,deriv:[1,4,5],describ:[2,3,4],deseri:[0,3],design:[2,4],desir:[4,5,13],destin:10,determin:[0,5],dev:4,develop:[2,12],devic:4,dgraph:[2,3,8,12,13,14,15],dict:[4,7,8,10,12,13,14,15],dictionari:[4,5,12],did:[6,7,14],differ:[1,3,9,14],differenti:14,digest:8,digests_fetch:7,digestsfetcherbas:8,direct:[2,3,5,8,10,11,12,13],direct_depend:[10,11,12],direct_dependencies_map:[10,12],directdependencyremov:8,directli:[1,2,4,6,7],directori:[3,5,8],disabl:2,discard:[12,13],discuss:1,disk:0,distinguish:3,distribut:[1,2],dm_amun_inspect_wrapp:8,dnf:1,doabl:2,docker:2,dockerfil:3,document:[2,4,6],doe:[0,1,3,5,6,13,14],done:[0,1,3,4,5,6,8],down:[1,3,5,13],download:6,downsid:3,dry_run:8,dtype:4,due:[3,7,11,12],duplic:14,durat:12,dure:[0,3,4,5,12],dynam:[0,3,8],each:[0,2,3,5,8,12,13],earlier:5,easi:3,easili:2,ecosystem:[0,1,3,7],edg:10,edges_map:10,effici:3,eigher:6,elaps:4,element:[7,8,9],elimin:13,els:5,encapsul:5,encount:[3,13,14],end:[3,6,11,12],endpoint:[1,4],engin:[1,2,7,8],ensur:10,entrypoint:12,environ:[0,1,2,4,5,6],error:[1,5,12,13,14],estim:11,evalu:1,even:[1,7],everi:[5,12],exact:4,exactli:6,exampl:[2,3,4,5,11],exc:5,except:[0,2,5,9,11],exclud:5,execut:[1,2,3,4,5,12],exist:0,expand:3,expect:6,experi:2,explaind:2,explicitli:[6,13],explictli:6,expos:[1,3,6,7],fact:[0,3,5],fail:[5,6,12],fallback:6,fals:[5,8],far:11,fast:3,faster:1,featur:5,fed:2,fedora:[1,2],feed:[1,2],feel:2,fetch:8,fetch_digest:8,fetch_releas:8,fetcher:8,fiction:1,field:8,file:[0,3,4],filter:[5,8,12,13,14],find:[2,3,4,5],finish:5,first:[1,3,5,6,13,14,15],fit:5,fix:11,float32:4,focus:3,follow:[2,3,4,5,6],foo:5,form:[1,4],format:4,found:[3,5,6,7,10,12],framework:4,free:2,from:[1,2,3,4,5,6,7,8,10,12,13,15],from_path:[10,12],full:[2,3],fulli:[1,3,5],fundament:3,gather:[1,4,5,7],gener:[0,1,2,3,4,7,8,9,10,11,12,13,14,15],generate_pipeline_product:12,generated_project:8,get:[2,3,4,7,8,10,12,13,15],get_adviser_pipeline_config:[5,8],get_configur:12,get_cve_record:[5,15],get_dependency_monkey_pipeline_config:[5,8],get_dur:12,get_edge_kei:10,get_package_version_tupl:12,get_perform:15,get_performance_impact_packag:15,get_python_package_performance_impact_al:7,get_python_project_performance_import:7,get_stack_info:12,getlogg:5,git:2,github:[2,5],given:[1,2,3,4,5,6,7,8,10,12,13,14,15],goal:[1,2],goe:3,good:5,grace:[5,8],graph:[1,2,4,5,7,8,9,11,12,13,14,15],graph_db:8,graph_service_host:2,graph_tls_path:2,graphdatabas:[4,8,12,13,14,15],graphdigestsfetch:8,graphreleasesfetch:8,group:[3,5,13,15],guarante:[1,2,6],guid:2,hand:6,handl:3,happen:[6,11],hardwar:[1,2,5,6],has:[0,2,3,4,5,6,10,13,14],has_good_usag:5,hash:0,hat:6,have:[3,4,5,6,11,13,14],head:5,help:[0,2],here:[2,3],heurist:14,hierarchi:[10,11,12],high:1,highest:0,hint:6,hit:3,hold:[2,4],horizont:13,host:[2,3],how:[2,3,4,5,6],howev:[1,2,6],http:[2,5],idea:[3,5],identifi:[3,7,10],illustr:1,imag:[1,2,3],imagin:0,immedi:3,impact:[5,7,13],implement:[0,4,5,6,8,9,11,12,13,14],includ:[4,5,12],incom:10,incoming_edg:10,incompat:5,incorpor:4,index:[0,1,2,3,4,5,6,13],index_url:5,indic:[1,2],indirect:12,info:[0,1,2,5,8],inform:[1,3,4,5,6],infrastur:2,initi:5,inject:4,input:[1,2,5,6],input_project:12,insecur:6,insert:4,insid:[4,12],inspect:[1,3,5,8],instal:[0,1,3,4,5,6,8],instanc:[0,2,6,8,12],instanti:[5,12],instead:[6,7],integ:11,integr:5,intens:2,inter:3,interact:[1,2],interfac:[2,8,11],intern:[0,3,11,12],internalerror:7,introduc:3,introduct:5,invalid:[5,7,8,12],invectio:5,ipc:3,is_toolchain:13,isi:2,isis_api_url:7,issu:[2,3,4],item:3,iter:[7,10,12,15],iter_all_depend:12,iter_all_dependencies_tupl:[5,12],iter_direct_depend:12,iter_direct_dependencies_tupl:[10,12],iter_package_tupl:10,iter_transitive_depend:12,iter_transitive_dependencies_tupl:[10,12],its:[1,2,3,5,10,12],itself:0,job:[1,4],json:[1,4,6],judg:5,just:[6,8],justif:[3,5,12],kafka:6,keep:[5,10,12],kei:[3,4,10],kept:12,kernel:[1,4],kill:[3,11],know:13,knowledg:[1,2,4,5],known:7,languag:0,larg:2,last:3,later:3,latest:[0,2,5,7,8,13,14,15],latter:14,lazili:8,lead:5,leaf:3,learn:2,least:6,leav:10,left:5,less:5,let:[1,3,4,6],level:[2,7],lib64:3,libdependency_graph:[3,5,11],libdependencygraph:11,librari:[1,2,4,5,8],library_usag:[8,12,13,14],libstdc:3,like:[0,3,4,5,11],limit:[2,8,12,13],limit_latest_vers:[7,8,12],limitlatestvers:13,line:[1,2,8],link:4,list:[1,2,3,4,5,6,7,8,10,11,12,15],live:5,load:[0,3],lock:[0,5,6,7,8,13],lockfil:8,log:[5,12],log_report:12,longer:6,look:[4,5],lowercas:4,made:[1,5],main:[1,2,3,5,9],maintain:4,make:[1,2,3,5,12,13],makefil:3,manag:[1,4,5,6],manipul:[8,12],manner:3,map:[3,7,12],mark_removed_package_tupl:12,master:4,match:[4,6],math:1,matrix:4,matrix_s:4,max_dependencies_count:11,mean:[6,14],meant:[9,15],meanwhil:4,measur:12,mechan:[0,1,3],memori:[0,1,2,3],mention:1,merg:4,messag:5,metadata:[3,4,6],method:[5,8,10],might:[1,5,6],million:1,mirror:6,model_properti:4,models_bas:4,modifi:[10,12],modul:2,monkei:[0,3,4,5,7,8],more:[1,2,3,4,5,6,8,13],moreov:3,most:[2,4,13],mostli:12,much:[1,3],multipl:[1,3,4,5,10],name:[3,4,5,7,8,12,13,14],namespac:1,nativ:[1,2],need:[2,3,4,7,8],neg:[12,14],nest:4,never:13,newer:14,newli:4,next:[3,12],node:[0,1,3,10,13],nodependencieserror:11,none:[5,7,8,10,11,12,13,14],nor:2,note:[1,3,6],notebook:2,notfound:7,noth:[8,10,12,13,14],notifi:5,now:[2,3,7],number:[3,4,7,8,11,13],numpi:3,object:[1,7,8,10,11,12],observ:[0,1,3,4,5,7,13,15],observation_reduct:[7,8,12],observationreduct:13,obtain:[3,4],occur:[3,5],off:[1,8,13],offlin:[0,8],often:2,old:13,older:14,omit:3,onc:[1,4,5,10,12],one:[0,1,3,4,5,6],ones:[4,14],onli:[1,2,13,14],onto:[0,1,4],oom:[3,11],open:4,openapi:1,openshift:[1,2,3,6],oper:[0,1,2,3,5,12],opt:3,optim:[4,6,7],option:[1,4,5,6,8,10,12],order:[5,12,14],oserror:3,other:[1,4,5,6,9],otherwis:3,our:[3,5],out:[1,3,5,8,13,14],outgo:10,outgoing_edg:10,output:[1,4,5,6,8],outsid:12,over:[2,6,10,12],overal:[4,14],overall_scor:4,overflow:11,own:[3,6],owner:4,pacakg:9,packag:[0,1,3,4,5],package_nam:[5,8],package_tupl:[5,7,10,12,13,15],package_vers:[5,8,12,15],package_version1:15,package_version2:15,packagenotfound:[10,12],packages_map:10,packages_removed_count:12,packages_scor:10,packagevers:[8,12,15],packageversiondependencypars:8,page:2,pair:[3,10],paragraph:3,parallel:3,param:8,paramet:[2,3,4,5,12,13,14],parameters_default:[5,12,13,14],parameters_dict:12,parameters_schema:12,parametr:5,pars:[1,8],parser_kwarg:8,part:[1,4,5,13],partial:3,pass:[1,2,5,12],past:3,path:[2,3,5,10,11,12,13,15],pattern:3,pedant:5,penal:[5,13,14],pend:10,pep:[0,2,6],per:[2,5,6],perfom:6,perform:[0,1,2,3,5,6,7,8,9,10,12,13,14],perform_transact:10,performance_adjust:[7,8,12],performance_scor:[7,8,12],performance_threshold:[13,14],performanceadjust:13,performanceindicatorbas:4,performancescor:14,phase:4,pick:5,pickl:0,piec:5,pimatmul:4,pimodel:4,pin:[1,3,5],pip3:2,pip:[1,2,3],pipe:3,pipelin:[1,2,4,7,8],pipelinebuild:8,pipelineconfig:8,pipelineexceptionbas:12,pipelineproduct:12,pipelineunitbas:[5,12],pipenv:[1,2,4,6,7],pipfil:[0,1,6,7],pipfileparseerror:7,pkg:5,place:[1,5],playbook:2,pleas:4,point:[1,2,6],pool:1,popul:4,popular:5,posit:[3,5,10,12],possibl:[0,1,2,3,12,14],postpon:12,pre:[1,4,13],preced:[5,9,10,12],precomput:8,predict:2,prematur:11,prematurestreamenderror:11,prepar:5,prereleas:[7,8,12],prerequisit:13,present:[1,3,4,5,6,13,14],preserv:[13,14,15],previou:[3,4],previous:0,primari:2,primarili:3,primit:8,print:4,priorit:5,prioritz:5,procedur:1,process:[3,4,11],prod:4,produc:[1,3,9,11,13],product:[6,7,8],program:0,project2vec:7,project:[0,1,2,5,7,8,12,13,14,15],propag:[4,12],proper:4,properti:[4,5,8,10,11,12],provid:[1,2,3,4,5,11,12,13,14],pull:4,pure:8,purpos:[2,9,15],pypi:[0,6,7],python3:4,python:[0,1,2,3,4,5,6,7],pythongraphsolv:8,pythonpackagegraphsolv:[8,12],pythonpath:[2,4],pythonrecommendationoutput:7,pytorch:4,qualiti:1,queri:[4,5],rais:[5,7,8,10,11,12],random:[5,7,8],random_decis:[7,8,12],randomdecis:14,randomli:[5,14],rate:4,rather:[3,6],raw:3,rdf:4,reach:[3,5],read:3,readi:4,real:1,reason:[2,3],recommend:[0,1,3,4,5,6,7,8],recommendation_typ:8,recommendationtyp:[7,8],red:6,reduc:[7,13],refer:3,regardless:10,rel:5,relat:[0,4,8],releas:[4,8,13],releasesfetch:8,relev:[0,1,3,4,5],remov:[5,6,8,9,10,12,13],remove_package_tupl:[5,10,12],removemultiplepackag:10,rep:4,repo:[1,2,4],report:[1,3,4,8,11,12],repositori:[2,3,4],repres:[2,3,12],represent:[8,11,12],request:[1,2,4,5,10],requir:[0,1,3,4,5,7,8],reserv:1,reset:12,reset_stat:12,resolt:5,resolut:[0,1,2,3,5,6,8,12],resolv:[0,1,2,5,8,9,13,14],resourc:[1,5,7],resovl:5,respect:[2,4,5,6,7,10,12,14],rest:1,restrict:2,restrict_index:[7,8,12],restrictindex:13,result:[0,1,3,4,5,7,10],retriev:[3,12,15],reus:[1,2],reusabl:3,revers:[10,12],review:4,roll:[5,10],rollback:10,root:3,routin:5,rpm:[1,2],run:[1,5,6,8,12,13,14],runtim:[1,2,4,5,13,14],runtime_environ:8,runtime_error:[7,8,12],runtimeenviron:8,runtimeerrorfilt:13,s2i:[2,6],sai:6,same:[2,3,4,6,13,14],sampl:[0,2,5],save:5,scan:6,schedul:[2,5],schema:[4,12],score:[0,2,3,4,5,8,9,10,12,13,14,15],score_adjust:10,score_cutoff:[7,8,12],score_filt:[7,8,12],score_package_tupl:[5,10,12],score_summari:10,score_threshold:13,scorecutoff:13,scorefilt:14,script:1,search:2,second:[3,12],section:[3,4,5],secur:5,see:[0,1,2,3,4,5,6,8],seed:[2,8],self:5,semver:[7,8,12,13,14],semver_cmp_package_vers:15,semver_sort:[7,8,12],semversort:13,sent:[1,8],separ:[2,3,6],sequenc:9,serial:[3,4,5,12],serv:[9,15],server:3,servic:[0,1,2,3,4,5,7],set:[0,2,5,8,12,15],setup:2,share:15,ship:3,should:[0,1,3,4,5,6,8,12,13],show:[2,5],shown:[3,5],side:3,significantli:13,similar:15,simpl:[2,5,6,7],simpli:[2,5],singl:[4,10],size:[3,4,11],softwar:[0,1,2,3,4,5,8,9,11,13],solali:2,solv:8,solver:[0,5,7,12],solver_kwarg:8,some:[0,2,4,5,13,15],some_package_tupl:5,someth:5,sooner:[5,9],sorfwar:5,sort:[10,12,13,15],sort_path:[10,12],sourc:[0,1,3,4,5,7,8,10,11,12,13,14,15],space:4,span:1,specif:[0,1,2,3,4,5,6],specifi:[4,6,8],speed:0,spent:[3,4],spot:2,src:3,ssl:6,stabl:[5,7,8],stack:[0,1,2,3,4,6,7,8,9,11,12,13,14],stack_candid:[5,7,8],stack_info:12,stackcandid:12,stacks_estim:11,stage:4,standalon:3,standard:[1,2],start:[3,12],start_tim:12,stat:12,state:[0,2,3,4,5,6,10,12],station:[2,4,5],statist:12,stats_bas:[7,8],statsbas:12,statu:1,stderr:4,stdout:[4,8],step:[1,4,7,8,15],step_chang:5,step_context:[5,7,8,13],step_stat:[7,8],stepcontext:[5,12,13],stepstat:12,stl:3,storag:[2,4,8,12,13,14,15],store:[2,8],str:[4,5,7,8,10,11,12,13,14,15],stream:[1,5,11],stream_delimit:11,stream_stop:11,stride:[4,7,8,15],stride_context:[5,7,8,14],stride_stat:[7,8],stridecontext:[5,12,14],strideremovestack:[5,12],stridestat:12,structur:[0,1,3,5,6],sub:13,subcommand:1,submit:[1,3],submodul:[2,4,9],subpackag:2,subsequ:[1,2,3,4,14],substitut:3,successfulli:5,suffix:2,sugar:8,suggest:6,suit:2,summari:10,suppli:[0,1,4,5,8],support:[1,6],suppos:3,sure:[3,5,12,13],swagger:7,sync:4,syntax:8,system:[0,1],take:5,taken:[2,13],talk:[3,11],target:[1,3,10],tensorflow:[4,6],tensorflow_buildinfo:4,terminolog:2,test:[1,2,4,5,7],thamo:2,than:3,thei:[3,4,5,9,12,13],them:[0,3,4,5,6,13],therei:8,thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],thing:5,those:1,thoth:[0,1,3,4,5],thoth_adviser_filedump:0,thoth_adviser_no_digest:0,thoth_adviser_subcommand:2,thoth_adviser_warehous:6,thoth_whitelisted_sourc:2,thothadviserexcept:[7,8],thousand:1,threshold:[13,15],through:2,thu:[0,5],tightli:3,till:12,time:[1,2,3,4,5,6,12],timer:12,tls:2,to_dict:12,to_remove_edg:10,to_remove_nod:10,to_scored_package_tuple_pair:10,togeth:[2,5],tool:[1,2,5],toolchain:[7,8,12],top:[3,5,10,12],track:12,traffic:6,transact:[5,7,8,9,12],transactionexpir:10,transit:[2,3,5,10,12],transitive_dependencies_map:12,transpar:[7,12],travers:[3,5,8,11,13],treat:6,tree:0,tri:6,trigger:[1,4],trust:2,tupl:[3,5,7,8,10,11,12,13,15],turn:[3,4,12],two:[0,1,3,5,6,9,15],type:[3,4,5,7,12],ucas:5,unablelock:8,under:4,underli:3,undesir:8,uniqu:[3,4],unit:[7,8,12],unit_bas:[7,8],unit_start_tim:12,units_run:12,unreach:[7,8,12],unsign:11,unsupport:7,unsupportedconfigur:7,until:[3,5],untouch:10,untrust:2,upcom:4,updat:4,update_paramet:12,upper:11,upstream:0,upto:8,url:[1,2,3,5],usag:[5,8],usagepriorit:5,use:[0,2,3,4,5,6,7],used:[0,1,2,3,5,6,7,8,12,13,14,15],useful:2,user:[1,2,3,4,5,6,11,12,13],uses:[0,3,7],using:[0,1,2,3,4,5,8],util:[1,2],valid:[0,1,2,3],valu:[3,4],variabl:[0,2,6],vector:5,veri:[1,2,3,14],verif:[1,6],verifi:[1,2,4],version:[0,1,2,3,5,7,8,12,13,14],versionidentifiererror:7,via:[2,3],visit:8,vulner:5,wai:[2,5,13,14,15],wait:4,walk:[7,8,9,12],walker:9,want:[1,4,5,13],warehous:6,warn:5,web:1,weight:10,well:[2,3,5,6],were:[1,2,3,5,11],what:[0,1,2,5,11],wheel:4,when:[2,3,5,6,8,13],where:[1,3,4,5,8],whether:5,which:[0,1,2,3,4,5,6,9,10,11,13,14,15],whitelist:[2,6],whole:[0,3],why:2,within:[7,12],without:[1,6],word:9,work:[0,5,13],world:1,would:[0,3,4,5,10,11,12],wrap:12,wrapper:[8,12],write:[3,8],written:[3,4,8],yield:3,you:[0,2,3,4,5,6],your:[0,2,3,4,5,6],yum:1},titles:["Dependency Graph","Dependency Monkey Design Document","Thoth Adviser","Resolver design document","Performance indicators","Stack generation pipeline","Provenance Checks","thoth.adviser package","thoth.adviser.python package","thoth.adviser.python.dependency_graph package","thoth.adviser.python.dependency_graph.adaptation package","thoth.adviser.python.dependency_graph.walking package","thoth.adviser.python.pipeline package","thoth.adviser.python.pipeline.steps package","thoth.adviser.python.pipeline.strides package","thoth.adviser.python.pipeline.units package"],titleterms:{"case":1,"enum":7,Use:1,about:2,adapt:10,advis:[2,7,8,9,10,11,12,13,14,15],architectur:[1,5],artifact:6,builder:8,buildtime_error:13,check:[2,6],cli:7,configur:[2,7],content:[7,8,9,10,11,12,13,14,15],context_bas:12,creat:4,creation:5,crossroad:2,cve:[13,14,15],databas:3,depend:[0,1,2],dependency_graph:[9,10,11],dependency_monkei:8,deploy:[2,4],design:[1,3],develop:[0,5],differ:6,digests_fetch:8,document:[1,3],dynam:5,element:10,error:6,exampl:[1,6],except:[7,8,10,12],gener:5,graph:[0,3,10],hash:6,implement:[2,3],indic:4,info:6,inform:2,instal:2,invalid:6,isi:7,issu:6,librari:3,limit_latest_vers:13,local:2,miss:6,model:4,modul:[7,8,9,10,11,12,13,14,15],monkei:[1,2],observation_reduct:13,overview:1,own:5,packag:[2,6,7,8,9,10,11,12,13,14,15],perform:[4,15],performance_adjust:13,performance_scor:14,pipelin:[5,12,13,14,15],possibl:6,prereleas:13,product:12,proven:[2,6],python:[8,9,10,11,12,13,14,15],queri:3,random_decis:14,recommend:2,regist:4,report:6,resolv:3,restrict_index:13,run:[2,4],runtime_error:13,score_cutoff:13,score_filt:14,script:4,semver:15,semver_sort:13,solver:8,sourc:[2,6],stack:5,stack_candid:12,stats_bas:12,step:[5,12,13],step_context:12,step_stat:12,stride:[5,12,14],stride_context:12,stride_stat:12,submodul:[7,8,10,11,12,13,14,15],subpackag:[7,8,9,12],summari:4,thoth:[2,7,8,9,10,11,12,13,14,15],toolchain:13,transact:10,unit:[5,15],unit_bas:12,unreach:13,use:1,walk:11,warn:6,write:4}})