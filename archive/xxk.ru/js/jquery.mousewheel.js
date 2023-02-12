



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery-mousewheel/jquery.mousewheel.js at master · brandonaaron/jquery-mousewheel · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="brandonaaron/jquery-mousewheel" name="twitter:title" /><meta content="jquery-mousewheel - A jQuery plugin that adds cross-browser mouse wheel support." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/13718?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/13718?v=2&amp;s=400" property="og:image" /><meta content="brandonaaron/jquery-mousewheel" property="og:title" /><meta content="https://github.com/brandonaaron/jquery-mousewheel" property="og:url" /><meta content="jquery-mousewheel - A jQuery plugin that adds cross-browser mouse wheel support." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D9754221:76FC:F326749:542B3E09" name="octolytics-dimension-request_id" />
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="xO0kMQamYFdUKlMwAmK2pDc5Z/RIv9a798pZJdsfnV5WnD9mW0QMhGFXCUfOuFeLe3nQrLcybTkbQG/WoFSECA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-63471208691ae2d5efd3a89acb805c8edbe2da41.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-5c3010b3357a58138fae8f1e09e0123b16377a2a.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="7e925c3ca12dff2d5fb11f2e86831398">

      
  <meta name="description" content="jquery-mousewheel - A jQuery plugin that adds cross-browser mouse wheel support.">
  <meta name="go-import" content="github.com/brandonaaron/jquery-mousewheel git https://github.com/brandonaaron/jquery-mousewheel.git">

  <meta content="13718" name="octolytics-dimension-user_id" /><meta content="brandonaaron" name="octolytics-dimension-user_login" /><meta content="63557" name="octolytics-dimension-repository_id" /><meta content="brandonaaron/jquery-mousewheel" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="63557" name="octolytics-dimension-repository_network_root_id" /><meta content="brandonaaron/jquery-mousewheel" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/brandonaaron/jquery-mousewheel/commits/master.atom" rel="alternate" title="Recent Commits to jquery-mousewheel:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fbrandonaaron%2Fjquery-mousewheel%2Fblob%2Fmaster%2Fjquery.mousewheel.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/brandonaaron/jquery-mousewheel/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/brandonaaron/jquery-mousewheel/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fbrandonaaron%2Fjquery-mousewheel"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/brandonaaron/jquery-mousewheel/stargazers">
      2,055
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fbrandonaaron%2Fjquery-mousewheel"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/brandonaaron/jquery-mousewheel/network" class="social-count">
        823
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/brandonaaron" class="url fn" itemprop="url" rel="author"><span itemprop="title">brandonaaron</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/brandonaaron/jquery-mousewheel" class="js-current-repository js-repo-home-link">jquery-mousewheel</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/brandonaaron/jquery-mousewheel/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/brandonaaron/jquery-mousewheel" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /brandonaaron/jquery-mousewheel">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/brandonaaron/jquery-mousewheel/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /brandonaaron/jquery-mousewheel/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/brandonaaron/jquery-mousewheel/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /brandonaaron/jquery-mousewheel/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/brandonaaron/jquery-mousewheel/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /brandonaaron/jquery-mousewheel/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/brandonaaron/jquery-mousewheel/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /brandonaaron/jquery-mousewheel/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/brandonaaron/jquery-mousewheel/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /brandonaaron/jquery-mousewheel/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/brandonaaron/jquery-mousewheel.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/brandonaaron/jquery-mousewheel.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/brandonaaron/jquery-mousewheel" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/brandonaaron/jquery-mousewheel" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save brandonaaron/jquery-mousewheel to your computer and use it in GitHub Desktop." aria-label="Save brandonaaron/jquery-mousewheel to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/brandonaaron/jquery-mousewheel/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of brandonaaron/jquery-mousewheel as a zip file"
                   title="Download the contents of brandonaaron/jquery-mousewheel as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/brandonaaron/jquery-mousewheel/blob/c61913ebf569c7a3f086b7fb40d941c282d1ce48/jquery.mousewheel.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:dadb38e1bb64d46e26d3cd5d7b359c17 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/blob/3.1.x/jquery.mousewheel.js"
                 data-name="3.1.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.x">3.1.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/blob/4.0.x/jquery.mousewheel.js"
                 data-name="4.0.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="4.0.x">4.0.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/blob/gh-pages/jquery.mousewheel.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/blob/master/jquery.mousewheel.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.12/jquery.mousewheel.js"
                 data-name="3.1.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.12">3.1.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.11/jquery.mousewheel.js"
                 data-name="3.1.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.11">3.1.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.10/jquery.mousewheel.js"
                 data-name="3.1.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.10">3.1.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.9/jquery.mousewheel.js"
                 data-name="3.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.9">3.1.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.8/jquery.mousewheel.js"
                 data-name="3.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.8">3.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.7/jquery.mousewheel.js"
                 data-name="3.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.7">3.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.6/jquery.mousewheel.js"
                 data-name="3.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.6">3.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.5/jquery.mousewheel.js"
                 data-name="3.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.5">3.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.4/jquery.mousewheel.js"
                 data-name="3.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.4">3.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.3/jquery.mousewheel.js"
                 data-name="3.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.3">3.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.2/jquery.mousewheel.js"
                 data-name="3.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.2">3.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.1/jquery.mousewheel.js"
                 data-name="3.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.1">3.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.1.0/jquery.mousewheel.js"
                 data-name="3.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.0">3.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.0.6/jquery.mousewheel.js"
                 data-name="3.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.6">3.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.0.5/jquery.mousewheel.js"
                 data-name="3.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.5">3.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.0.4/jquery.mousewheel.js"
                 data-name="3.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.4">3.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/brandonaaron/jquery-mousewheel/tree/3.0.3/jquery.mousewheel.js"
                 data-name="3.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.3">3.0.3</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/brandonaaron/jquery-mousewheel/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.mousewheel.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/brandonaaron/jquery-mousewheel" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-mousewheel</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.mousewheel.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Brandon Aaron" class="avatar" data-user="13718" height="24" src="https://avatars2.githubusercontent.com/u/13718?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/brandonaaron" rel="author">brandonaaron</a></span>
        <time datetime="2014-07-10T11:27:19-04:00" is="relative-time">July 10, 2014</time>
        <div class="commit-title">
            <a href="/brandonaaron/jquery-mousewheel/commit/c61913ebf569c7a3f086b7fb40d941c282d1ce48" class="message" data-pjax="true" title="bump the version to 3.1.12">bump the version to 3.1.12</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>6</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="brandonaaron" href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js?author=brandonaaron"><img alt="Brandon Aaron" class="avatar" data-user="13718" height="20" src="https://avatars0.githubusercontent.com/u/13718?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="XhmikosR" href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js?author=XhmikosR"><img alt="XhmikosR" class="avatar" data-user="349621" height="20" src="https://avatars0.githubusercontent.com/u/349621?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vitch" href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js?author=vitch"><img alt="Kelvin Luck" class="avatar" data-user="9898" height="20" src="https://avatars1.githubusercontent.com/u/9898?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dmethvin" href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js?author=dmethvin"><img alt="Dave Methvin" class="avatar" data-user="157858" height="20" src="https://avatars0.githubusercontent.com/u/157858?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chriscbrock" href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js?author=chriscbrock"><img alt="chriscbrock" class="avatar" data-user="1761217" height="20" src="https://avatars0.githubusercontent.com/u/1761217?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="can3p" href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js?author=can3p"><img alt="Dmitry Petrov" class="avatar" data-user="125821" height="20" src="https://avatars2.githubusercontent.com/u/125821?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Brandon Aaron" data-user="13718" height="24" src="https://avatars2.githubusercontent.com/u/13718?v=2&amp;s=48" width="24" />
            <a href="/brandonaaron">brandonaaron</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="XhmikosR" data-user="349621" height="24" src="https://avatars2.githubusercontent.com/u/349621?v=2&amp;s=48" width="24" />
            <a href="/XhmikosR">XhmikosR</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kelvin Luck" data-user="9898" height="24" src="https://avatars3.githubusercontent.com/u/9898?v=2&amp;s=48" width="24" />
            <a href="/vitch">vitch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dave Methvin" data-user="157858" height="24" src="https://avatars2.githubusercontent.com/u/157858?v=2&amp;s=48" width="24" />
            <a href="/dmethvin">dmethvin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="chriscbrock" data-user="1761217" height="24" src="https://avatars2.githubusercontent.com/u/1761217?v=2&amp;s=48" width="24" />
            <a href="/chriscbrock">chriscbrock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dmitry Petrov" data-user="125821" height="24" src="https://avatars0.githubusercontent.com/u/125821?v=2&amp;s=48" width="24" />
            <a href="/can3p">can3p</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span class="mode" title="File mode">executable file</span>
          <span class="meta-divider"></span>
          <span>222 lines (189 sloc)</span>
          <span class="meta-divider"></span>
        <span>8.279 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/brandonaaron/jquery-mousewheel/raw/master/jquery.mousewheel.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/brandonaaron/jquery-mousewheel/blame/master/jquery.mousewheel.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/brandonaaron/jquery-mousewheel/commits/master/jquery.mousewheel.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="cm">/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="cm"> * Licensed under the MIT License (LICENSE.txt).</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="cm"> * Version: 3.1.12</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="cm"> * Requires: jQuery 1.2.2+</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">    <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">        <span class="c1">// AMD. Register as an anonymous module.</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">        <span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">factory</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">    <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">        <span class="c1">// Node/CommonJS style for Browserify</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">        <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">        <span class="c1">// Browser globals</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">        <span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="p">}(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">toFix</span>  <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;wheel&#39;</span><span class="p">,</span> <span class="s1">&#39;mousewheel&#39;</span><span class="p">,</span> <span class="s1">&#39;DOMMouseScroll&#39;</span><span class="p">,</span> <span class="s1">&#39;MozMousePixelScroll&#39;</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">        <span class="nx">toBind</span> <span class="o">=</span> <span class="p">(</span> <span class="s1">&#39;onwheel&#39;</span> <span class="k">in</span> <span class="nb">document</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentMode</span> <span class="o">&gt;=</span> <span class="mi">9</span> <span class="p">)</span> <span class="o">?</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">                    <span class="p">[</span><span class="s1">&#39;wheel&#39;</span><span class="p">]</span> <span class="o">:</span> <span class="p">[</span><span class="s1">&#39;mousewheel&#39;</span><span class="p">,</span> <span class="s1">&#39;DomMouseScroll&#39;</span><span class="p">,</span> <span class="s1">&#39;MozMousePixelScroll&#39;</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">        <span class="nx">slice</span>  <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">        <span class="nx">nullLowestDeltaTimeout</span><span class="p">,</span> <span class="nx">lowestDelta</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">    <span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">fixHooks</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">        <span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">toFix</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="p">;</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">            <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">fixHooks</span><span class="p">[</span> <span class="nx">toFix</span><span class="p">[</span><span class="o">--</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">mouseHooks</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">special</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">mousewheel</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">        <span class="nx">version</span><span class="o">:</span> <span class="s1">&#39;3.1.12&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">                <span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">toBind</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="p">;</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">                    <span class="k">this</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="nx">toBind</span><span class="p">[</span><span class="o">--</span><span class="nx">i</span><span class="p">],</span> <span class="nx">handler</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">                <span class="k">this</span><span class="p">.</span><span class="nx">onmousewheel</span> <span class="o">=</span> <span class="nx">handler</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">            <span class="c1">// Store the line height and page height for this particular element</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">            <span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousewheel-line-height&#39;</span><span class="p">,</span> <span class="nx">special</span><span class="p">.</span><span class="nx">getLineHeight</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">            <span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousewheel-page-height&#39;</span><span class="p">,</span> <span class="nx">special</span><span class="p">.</span><span class="nx">getPageHeight</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">        <span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">removeEventListener</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">                <span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">toBind</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="p">;</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">                    <span class="k">this</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span> <span class="nx">toBind</span><span class="p">[</span><span class="o">--</span><span class="nx">i</span><span class="p">],</span> <span class="nx">handler</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">                <span class="k">this</span><span class="p">.</span><span class="nx">onmousewheel</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">            <span class="c1">// Clean up the data we added to the element</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">            <span class="nx">$</span><span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousewheel-line-height&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">            <span class="nx">$</span><span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousewheel-page-height&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">        <span class="nx">getLineHeight</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">$elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">                <span class="nx">$parent</span> <span class="o">=</span> <span class="nx">$elem</span><span class="p">[</span><span class="s1">&#39;offsetParent&#39;</span> <span class="k">in</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span> <span class="o">?</span> <span class="s1">&#39;offsetParent&#39;</span> <span class="o">:</span> <span class="s1">&#39;parent&#39;</span><span class="p">]();</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$parent</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">                <span class="nx">$parent</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">            <span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$parent</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;fontSize&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;fontSize&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">16</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">        <span class="nx">getPageHeight</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">            <span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">).</span><span class="nx">height</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        <span class="nx">settings</span><span class="o">:</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">            <span class="nx">adjustOldDeltas</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// see shouldAdjustOldDeltas() below</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">            <span class="nx">normalizeOffset</span><span class="o">:</span> <span class="kc">true</span>  <span class="c1">// calls getBoundingClientRect for each event</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">        <span class="nx">mousewheel</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">            <span class="k">return</span> <span class="nx">fn</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;mousewheel&#39;</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;mousewheel&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">        <span class="nx">unmousewheel</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;mousewheel&#39;</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">handler</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">orgEvent</span>   <span class="o">=</span> <span class="nx">event</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">event</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">            <span class="nx">args</span>       <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">            <span class="nx">delta</span>      <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">            <span class="nx">deltaX</span>     <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">            <span class="nx">deltaY</span>     <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">            <span class="nx">absDelta</span>   <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">            <span class="nx">offsetX</span>    <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">            <span class="nx">offsetY</span>    <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">        <span class="nx">event</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">fix</span><span class="p">(</span><span class="nx">orgEvent</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;mousewheel&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">        <span class="c1">// Old school scrollwheel delta</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;detail&#39;</span>      <span class="k">in</span> <span class="nx">orgEvent</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">detail</span> <span class="o">*</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;wheelDelta&#39;</span>  <span class="k">in</span> <span class="nx">orgEvent</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">;</span>       <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;wheelDeltaY&#39;</span> <span class="k">in</span> <span class="nx">orgEvent</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">wheelDeltaY</span><span class="p">;</span>      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;wheelDeltaX&#39;</span> <span class="k">in</span> <span class="nx">orgEvent</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">wheelDeltaX</span> <span class="o">*</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">        <span class="c1">// Firefox &lt; 17 horizontal scrolling related to DOMMouseScroll event</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;axis&#39;</span> <span class="k">in</span> <span class="nx">orgEvent</span> <span class="o">&amp;&amp;</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">axis</span> <span class="o">===</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">HORIZONTAL_AXIS</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">            <span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">deltaY</span> <span class="o">*</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">            <span class="nx">deltaY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">        <span class="c1">// Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">        <span class="nx">delta</span> <span class="o">=</span> <span class="nx">deltaY</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">deltaX</span> <span class="o">:</span> <span class="nx">deltaY</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">        <span class="c1">// New school wheel delta (wheel event)</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;deltaY&#39;</span> <span class="k">in</span> <span class="nx">orgEvent</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">            <span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">deltaY</span> <span class="o">*</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">            <span class="nx">delta</span>  <span class="o">=</span> <span class="nx">deltaY</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="s1">&#39;deltaX&#39;</span> <span class="k">in</span> <span class="nx">orgEvent</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">            <span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">deltaX</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="nx">deltaY</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">delta</span>  <span class="o">=</span> <span class="nx">deltaX</span> <span class="o">*</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">        <span class="c1">// No change actually happened, no reason to go any further</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="nx">deltaY</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">deltaX</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">        <span class="c1">// Need to convert lines and pages to pixels if we aren&#39;t already in pixels</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">        <span class="c1">// There are three delta modes:</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="c1">//   * deltaMode 0 is by pixels, nothing to do</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">        <span class="c1">//   * deltaMode 1 is by lines</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">        <span class="c1">//   * deltaMode 2 is by pages</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">deltaMode</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">lineHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousewheel-line-height&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">            <span class="nx">delta</span>  <span class="o">*=</span> <span class="nx">lineHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">            <span class="nx">deltaY</span> <span class="o">*=</span> <span class="nx">lineHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">            <span class="nx">deltaX</span> <span class="o">*=</span> <span class="nx">lineHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">deltaMode</span> <span class="o">===</span> <span class="mi">2</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">pageHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousewheel-page-height&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">            <span class="nx">delta</span>  <span class="o">*=</span> <span class="nx">pageHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">            <span class="nx">deltaY</span> <span class="o">*=</span> <span class="nx">pageHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">            <span class="nx">deltaX</span> <span class="o">*=</span> <span class="nx">pageHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">        <span class="c1">// Store lowest absolute delta to normalize the delta values</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">        <span class="nx">absDelta</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">deltaY</span><span class="p">),</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">deltaX</span><span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">lowestDelta</span> <span class="o">||</span> <span class="nx">absDelta</span> <span class="o">&lt;</span> <span class="nx">lowestDelta</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">            <span class="nx">lowestDelta</span> <span class="o">=</span> <span class="nx">absDelta</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">            <span class="c1">// Adjust older deltas if necessary</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="nx">shouldAdjustOldDeltas</span><span class="p">(</span><span class="nx">orgEvent</span><span class="p">,</span> <span class="nx">absDelta</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">                <span class="nx">lowestDelta</span> <span class="o">/=</span> <span class="mi">40</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">        <span class="c1">// Adjust older deltas if necessary</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="nx">shouldAdjustOldDeltas</span><span class="p">(</span><span class="nx">orgEvent</span><span class="p">,</span> <span class="nx">absDelta</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">            <span class="c1">// Divide all the things by 40!</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">            <span class="nx">delta</span>  <span class="o">/=</span> <span class="mi">40</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">            <span class="nx">deltaX</span> <span class="o">/=</span> <span class="mi">40</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">            <span class="nx">deltaY</span> <span class="o">/=</span> <span class="mi">40</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">        <span class="c1">// Get a whole, normalized value for the deltas</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">        <span class="nx">delta</span>  <span class="o">=</span> <span class="nb">Math</span><span class="p">[</span> <span class="nx">delta</span>  <span class="o">&gt;=</span> <span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;floor&#39;</span> <span class="o">:</span> <span class="s1">&#39;ceil&#39;</span> <span class="p">](</span><span class="nx">delta</span>  <span class="o">/</span> <span class="nx">lowestDelta</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">        <span class="nx">deltaX</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">[</span> <span class="nx">deltaX</span> <span class="o">&gt;=</span> <span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;floor&#39;</span> <span class="o">:</span> <span class="s1">&#39;ceil&#39;</span> <span class="p">](</span><span class="nx">deltaX</span> <span class="o">/</span> <span class="nx">lowestDelta</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">        <span class="nx">deltaY</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">[</span> <span class="nx">deltaY</span> <span class="o">&gt;=</span> <span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;floor&#39;</span> <span class="o">:</span> <span class="s1">&#39;ceil&#39;</span> <span class="p">](</span><span class="nx">deltaY</span> <span class="o">/</span> <span class="nx">lowestDelta</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">        <span class="c1">// Normalise offsetX and offsetY properties</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="nx">special</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">normalizeOffset</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">getBoundingClientRect</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">boundingRect</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getBoundingClientRect</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">            <span class="nx">offsetX</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span> <span class="o">-</span> <span class="nx">boundingRect</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">            <span class="nx">offsetY</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="o">-</span> <span class="nx">boundingRect</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">        <span class="c1">// Add information to the event object</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">deltaX</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">deltaY</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">deltaFactor</span> <span class="o">=</span> <span class="nx">lowestDelta</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">offsetX</span> <span class="o">=</span> <span class="nx">offsetX</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">offsetY</span> <span class="o">=</span> <span class="nx">offsetY</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">        <span class="c1">// Go ahead and set deltaMode to 0 since we converted to pixels</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">        <span class="c1">// Although this is a little odd since we overwrite the deltaX/Y</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">        <span class="c1">// properties with normalized deltas.</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">        <span class="nx">event</span><span class="p">.</span><span class="nx">deltaMode</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">        <span class="c1">// Add event and delta to the front of the arguments</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">        <span class="nx">args</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">delta</span><span class="p">,</span> <span class="nx">deltaX</span><span class="p">,</span> <span class="nx">deltaY</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">        <span class="c1">// Clearout lowestDelta after sometime to better</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">        <span class="c1">// handle multiple device types that give different</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">        <span class="c1">// a different lowestDelta</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">        <span class="c1">// Ex: trackpad = 3 and mouse wheel = 120</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">nullLowestDeltaTimeout</span><span class="p">)</span> <span class="p">{</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">nullLowestDeltaTimeout</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">        <span class="nx">nullLowestDeltaTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">nullLowestDelta</span><span class="p">,</span> <span class="mi">200</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">        <span class="k">return</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">dispatch</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">handle</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">nullLowestDelta</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">        <span class="nx">lowestDelta</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">shouldAdjustOldDeltas</span><span class="p">(</span><span class="nx">orgEvent</span><span class="p">,</span> <span class="nx">absDelta</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">        <span class="c1">// If this is an older event and the delta is divisable by 120,</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">        <span class="c1">// then we are assuming that the browser is treating this as an</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">        <span class="c1">// older mouse wheel event and that we should divide the deltas</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">        <span class="c1">// by 40 to try and get a more usable deltaFactor.</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">        <span class="c1">// Side note, this actually impacts the reported scroll distance</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">        <span class="c1">// in older browsers and can cause scrolling to be slower than native.</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">        <span class="c1">// Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">special</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">adjustOldDeltas</span> <span class="o">&amp;&amp;</span> <span class="nx">orgEvent</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;mousewheel&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">absDelta</span> <span class="o">%</span> <span class="mi">120</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line"><span class="p">}));</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02817s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ba50a1ca41995f0b006425c6db96c5669d18fd98.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-4b0cc50660dc36f688ff56b4766b8c8b5f7ac0ee.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

