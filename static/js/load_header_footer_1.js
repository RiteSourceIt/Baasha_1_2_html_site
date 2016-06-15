function load_header(){
	header_txt=' <nav class="navbar navbar-fixed-top PageNavbar" role="navigation">'+
       ' <div class="container">'+
	        '<div class="navbar-header">'+
                '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#MyNav">'+
                  '  <span class="sr-only">Toggle navigation</span>'+
                  '  <span class="icon-bar"></span>'+
                   ' <span class="icon-bar"></span>'+
                   ' <span class="icon-bar"></span>'+
               ' </button>'+
               ' <a class="navbar-brand" href="../../index.html"><img src="../../static/images/logo_1.png" height=45px /> </a>'+
           ' </div>'+
           ' <div class="collapse navbar-collapse" id="MyNav">'+
'    <ul class="nav navbar-nav">'+
			'        <li>'+
            '            <a href="../index.html">Langugae Home</a>'+
             '       </li>'+
            '        <li>'+
            '            <a href="../Lessons.html">Lesson</a>'+
             '       </li>'+
            '        <li>'+
            '            <a href="../Activity.html">Activities</a>'+
            '        </li>'+
            '        <li><a href="Story.html">Story</a></li>'+
             '       <li><a href="../../Language.html">Other Languages</a></li>'+
            '    </ul>'+
           ' </div>'+
       ' </div></nav>'+
       '  <div class="nav-collapse collapse nav pull-right">'+
        '<ul class="nav">'+
        '  <li class="active"><a href="../../ContactUs.html">Subscribe</a></li>'+
         '   <li><a href="http://www.facebook.com/pages/Baashanet/424695937594588" title="Like us on Facebook" target="_new"><img src="../../static/images/FB_icon.png"></a></li>'+
         '   <li><a href="https://plus.google.com/u/0/108466988430803443330/posts" title="Google+" target="_new"><img src="../../static/images/gplus_Like.png"></a></li>'+
        '</ul>'+
          '</div>';
	document.getElementById('pageheader').innerHTML=header_txt;
}