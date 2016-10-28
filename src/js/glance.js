$(document).ready(function() {

  var captionArr = [{
    "project"  : "Responsive Email Newsletter",
    "client"   : "Kia Motors",
    "role"     : "Design",
    "year"     : "2011",
    "desc"     : "Lead Designer for Kia’s responsive email newsletters, working closely with Front-End Developers to create an attractive and robust. The format has since been rolled out to all of Kia's email communications."
  },
  
  {
    "project"  : "Google Font Previewer for Chrome",
    "client"   : "",
    "role"     : "Design (Identity)",
    "year"     : "2016",
    "desc"     : "This extention by Pamela Fox serves 25,582 users and makes it easy to preview Google's hosted webfonts. I redesigned the Identity, based on Google's 'Product Sans' typeface."
  },

  {
    "project"  : "Standart format OLA",
    "client"   : "Beggars Banquet",
    "role"     : "Design (Concept), Build (Flash)",
    "year"     : "2012",
    "desc"     : "Design & build for numerous Flash ola sets in standard formats, largely. Clients include 4AD/Rough Trade (M. Ward, Discovery, Super Furry Animals, Jack Penate, Jarvis Cocker, The XX). I was given creative freedom with all listed."
  },

  {
    "project"  : "Standart format Rich OLA",
    "client"   : "Rough Trade",
    "role"     : "Production (After Effects), Build (Flash)",
    "year"     : "2012",
    "desc"     : "Design & build for numerous Flash ola sets in standard formats, largely. Clients include 4AD/Rough Trade (M. Ward, Discovery, Super Furry Animals, Jack Penate, Jarvis Cocker, The XX). I was given creative freedom with all listed."
  },

  {
    "project"  : "Doobie Kiosk",
    "client"   : "Salty Customs",
    "role"     : "Design (UX, UI, Build (Front-end)",
    "year"     : "2014",
    "desc"     : ""
  },

  {
    "project"  : "OLA, Cinemagraphs, Infographics",
    "client"   : "Clarks",
    "role"     : "Design (Flash, Motion)",
    "year"     : "2012",
    "desc"     : "Clarks were intrigued by the idea of using infographics to engage with their customers and asked us to create one to promote the resuts of a recent poll they had conducted. It was posted on their officialFacebook page, a channel with 234k fans."
  },

  {
    "project"  : "Korahnzo McGayle titling",
    "client"   : "LGN",
    "role"     : "Design (Motion)",
    "year"     : "2011",
    "desc"     : "Titling for Red Bull short submission, featuring skateboarder Korahnzo McGayle."
  },

  {
    "project"  : "Campaign Cards",
    "client"   : "Scarlett of Soho",
    "role"     : "Design (Print)",
    "year"     : "2014",
    "desc"     : ""
  },

  {
    "project"  : "GR Native App",
    "client"   : "GiveReceipt",
    "role"     : "Design (UX, UI)",
    "year"     : "2014",
    "desc"     : ""
  },

  {
    "project"  : "GR Web App",
    "client"   : "GiveReceipt",
    "role"     : "Design (Brand, UX, UI, Print)",
    "year"     : "2014",
    "desc"     : ""
  },

  {
    "project"  : "Homepage Hero",
    "client"   : "Orange Brand",
    "role"     : "Design (Motion)",
    "year"     : "2012",
    "desc"     : "Carousel animation for the Orange Brand homepage. Created in After Effects. Other work for Orange included instructional motion pieces, Flash carousels and email designs."
  },

  {
    "project"  : "Product Catalogue",
    "client"   : "Ideahouse",
    "role"     : "Artwork",
    "year"     : "2016",
    "desc"     : "Artworking for Ideahouse's 2016 product cataloge. The jacket features a smorgasboard of sample items, with shots of the underside visible on the inside of the jacket."
  },

  {
    "project"  : "Webapp",
    "client"   : "Ideahouse",
    "role"     : "Design (UX, UI), Front-end",
    "year"     : "2016",
    "desc"     : ""
  },

  ];


  function fCaption(section){

    $("dd.client").text(captionArr[section].client);
    $("dd.project").text(captionArr[section].project);
    $("dd.role").text(captionArr[section].role);
    $("dd.year").text(captionArr[section].year);
    $("dd.desc").text(captionArr[section].desc);

  }


  var vh;
  var vhalf;
  var downscroll;


  function fWindow(){
    vh = $(window).height();
    vhalf = Math.floor(vh/4);
    console.log("vh", vh);
    console.log("vhalf", vhalf);
  };

  $(window).resize(function() {
    fWindow();
  });

  fWindow();



  var lst = 0; $(window).scroll(function(event){ var st = $(this).scrollTop();
    if (st > lst){ downscroll = true; } else { downscroll = false; } lst = st; });


  $("#close").click(function(e){
    e.preventDefault();
    $("#close").toggleClass('active');
    $("#blurb").toggleClass('hidden');
  });

  $("#caption").css('opacity', '0');



  var capA = new Waypoint({element: document.getElementById('header'), handler: function(){
    $("#caption").css('opacity', '0');
    $("#continue").css('opacity', '1');
  }, offset: '-30%'});

  var capB = new Waypoint({ element: document.getElementById('header'),handler:function(){
    $("#caption").css('opacity', '1');
    $("#continue").css('opacity', '0');
  }, offset: '-35%'});

  var capC = new Waypoint({element: document.getElementById('footer'), handler: function(){
    $("#caption").css('opacity', '0');
  }, offset: Math.floor(vh - 10)});
  var capD = new Waypoint({ element: document.getElementById('footer'),handler:function(){
    $("#caption").css('opacity', '1');
  }, offset: vh});




  var way_email_down = new Waypoint({ element: document.getElementById('email'), handler: function(){
    if (downscroll === true){
      fCaption(0);
    }
  }, offset: vh});

  var way_email_up = new Waypoint({ element: document.getElementById('email'), handler: function(){
    if (downscroll === false){
      fCaption(0);
    }
  }, offset: 0});


  var way_gfc_down = new Waypoint({ element: document.getElementById('gfc'), handler: function(){
    if (downscroll === true){
      fCaption(1);
    }
  }, offset: vh});

  var way_gfc_up = new Waypoint({ element: document.getElementById('gfc'), handler: function(){
    if (downscroll === false){
      fCaption(1);
    }
  }, offset: 0});






  var way_beggars_down = new Waypoint({ element: document.getElementById('beggars'), handler: function(){
    if (downscroll === true){
      fCaption(2);
    }
  }, offset: vh});

  var way_beggars_up = new Waypoint({ element: document.getElementById('beggars'), handler: function(){
    if (downscroll === false){
      fCaption(2);
    }
  }, offset: 0});




  var way_jarvis_down = new Waypoint({ element: document.getElementById('jarvis'), handler: function(){
    if (downscroll === true){
      fCaption(3);
    }
  }, offset: vh});

  var way_jarvis_up = new Waypoint({ element: document.getElementById('jarvis'), handler: function(){
    if (downscroll === false){
      fCaption(3);
    }
  }, offset: 0});





  var way_doobie_down = new Waypoint({ element: document.getElementById('doobie'), handler: function(){
    if (downscroll === true){
      fCaption(4);
    }
  }, offset: vh});

  var way_doobie_up = new Waypoint({ element: document.getElementById('doobie'), handler: function(){
    if (downscroll === false){
      fCaption(4);
    }
  }, offset: 0});





  var way_clarks_down = new Waypoint({ element: document.getElementById('clarks'), handler: function(){
    if (downscroll === true){
      fCaption(5);
    }
  }, offset: vh});

  var way_clarks_up = new Waypoint({ element: document.getElementById('clarks'), handler: function(){
    if (downscroll === false){
      fCaption(5);
    }
  }, offset: 0});




  var way_lgn_down = new Waypoint({ element: document.getElementById('lgn'), handler: function(){
    if (downscroll === true){
      fCaption(6);
    }
  }, offset: vh});

  var way_lgn_up = new Waypoint({ element: document.getElementById('lgn'), handler: function(){
    if (downscroll === false){
      fCaption(6);
    }
  }, offset: 0});






  var way_sos_down = new Waypoint({ element: document.getElementById('sos'), handler: function(){
    if (downscroll === true){
      fCaption(7);
    }
  }, offset: vh});

  var way_sos_up = new Waypoint({ element: document.getElementById('sos'), handler: function(){
    if (downscroll === false){
      fCaption(7);
    }
  }, offset: 0});






  var way_gr_app_down = new Waypoint({ element: document.getElementById('gr-app'), handler: function(){
    if (downscroll === true){
      fCaption(8);
    }
  }, offset: vh});

  var way_gr_app_up = new Waypoint({ element: document.getElementById('gr-app'), handler: function(){
    if (downscroll === false){
      fCaption(8);
    }
  }, offset: 0});



  var way_gr_print_down = new Waypoint({ element: document.getElementById('gr-print'), handler: function(){
    if (downscroll === true){
      fCaption(9);
    }
  }, offset: vh});

  var way_gr_print_up = new Waypoint({ element: document.getElementById('gr-print'), handler: function(){
    if (downscroll === false){
      fCaption(9);
    }
  }, offset: 0});



  var way_orange_down = new Waypoint({ element: document.getElementById('orange'), handler: function(){
    if (downscroll === true){
      fCaption(10);
    }
  }, offset: vh});

  var way_orange_up = new Waypoint({ element: document.getElementById('orange'), handler: function(){
    if (downscroll === false){
      fCaption(10);
    }
  }, offset: 0});



  var way_ih_print_down = new Waypoint({ element: document.getElementById('ih-print'), handler: function(){
    fCaption(11);
  }, offset: vhalf});


  var way_ih_print_up = new Waypoint({ element: document.getElementById('ih-print'), handler: function(){
    fCaption(11);
  }, offset: 0});




  var way_ih_app_down = new Waypoint({ element: document.getElementById('ih-app'), handler: function(){
    fCaption(12);
  }, offset: vhalf});


  var way_ih_app_up = new Waypoint({ element: document.getElementById('ih-app'), handler: function(){
    fCaption(12);
  }, offset: 0});





});