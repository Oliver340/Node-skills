$(document).ready(function() {
  // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
    $('#thing2').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET",
            dataType: "json",
            type: "GET",
            success: function(data) {
                let t2 = "<ul>";
                t2 += "<li>" + data[0]['rank'] + "</li>" + "<li>" + data[0]['flavour'] + "</li>"
                  + "<li>" + data[0]['shape'] + "</li>" + "<li>" + data[0]['durability'] + "</li>"
                  + "<li>" + data[0]['texture'] + "</li>";
                t2 += "</ul>";
                var div = $("#description1");
                div.html(t2);
                console.log("SUCCESS:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#thing3').click(function(e) {

          // don't allow the anchor to visit the link
          e.preventDefault();

          $.ajax({
              url: "/ajax-GET",
              dataType: "json",
              type: "GET",
              success: function(data) {
                  let t2 = "<ul>";
                  t2 += "<li>" + data[1]['rank'] + "</li>" + "<li>" + data[1]['flavour'] + "</li>"
                    + "<li>" + data[1]['shape'] + "</li>" + "<li>" + data[1]['durability'] + "</li>"
                    + "<li>" + data[1]['texture'] + "</li>";
                  t2 += "</ul>";
                  var div = $("#description2");
                  div.html(t2);
                  console.log("SUCCESS:", data);

              },
              error: function(jqXHR, textStatus, errorThrown) {
                  console.log("ERROR:", jqXHR, textStatus, errorThrown);
              }

          });
      });
  
    $('#thing4').click(function(e) {

          // don't allow the anchor to visit the link
          e.preventDefault();

          $.ajax({
              url: "/ajax-GET",
              dataType: "json",
              type: "GET",
              success: function(data) {
                  let t2 = "<ul>";
                  t2 += "<li>" + data[2]['rank'] + "</li>" + "<li>" + data[2]['flavour'] + "</li>"
                    + "<li>" + data[2]['shape'] + "</li>" + "<li>" + data[2]['durability'] + "</li>"
                    + "<li>" + data[2]['texture'] + "</li>";
                  t2 += "</ul>";
                  var div = $("#description3");
                  div.html(t2);
                  console.log("SUCCESS:", data);

              },
              error: function(jqXHR, textStatus, errorThrown) {
                  console.log("ERROR:", jqXHR, textStatus, errorThrown);
              }

          });
      });
  
    $('#thing5').click(function(e) {

          // don't allow the anchor to visit the link
          e.preventDefault();

          $.ajax({
              url: "/ajax-GET",
              dataType: "json",
              type: "GET",
              success: function(data) {
                  let t2 = "<ul>";
                  t2 += "<li>" + data[3]['rank'] + "</li>" + "<li>" + data[3]['flavour'] + "</li>"
                    + "<li>" + data[3]['shape'] + "</li>" + "<li>" + data[3]['durability'] + "</li>"
                    + "<li>" + data[3]['texture'] + "</li>";
                  t2 += "</ul>";
                  var div = $("#description4");
                  div.html(t2);
                  console.log("SUCCESS:", data);

              },
              error: function(jqXHR, textStatus, errorThrown) {
                  console.log("ERROR:", jqXHR, textStatus, errorThrown);
              }

          });
      });
  
    $('#thing6').click(function(e) {

          // don't allow the anchor to visit the link
          e.preventDefault();

          $.ajax({
              url: "/ajax-GET",
              dataType: "json",
              type: "GET",
              success: function(data) {
                  let t2 = "<ul>";
                  t2 += "<li>" + data[4]['rank'] + "</li>" + "<li>" + data[4]['flavour'] + "</li>"
                    + "<li>" + data[4]['shape'] + "</li>" + "<li>" + data[4]['durability'] + "</li>"
                    + "<li>" + data[4]['texture'] + "</li>";
                  t2 += "</ul>";
                  var div = $("#description5");
                  div.html(t2);
                  console.log("SUCCESS:", data);

              },
              error: function(jqXHR, textStatus, errorThrown) {
                  console.log("ERROR:", jqXHR, textStatus, errorThrown);
              }

          });
      });
  
    $('#thing7').click(function(e) {

            // don't allow the anchor to visit the link
            e.preventDefault();

            $.ajax({
                url: "/ajax-GET",
                dataType: "json",
                type: "GET",
                success: function(data) {
                    let t2 = "<ul>";
                    t2 += "<li>" + data[5]['rank'] + "</li>" + "<li>" + data[5]['flavour'] + "</li>"
                      + "<li>" + data[5]['shape'] + "</li>" + "<li>" + data[5]['durability'] + "</li>"
                      + "<li>" + data[5]['texture'] + "</li>";
                    t2 += "</ul>";
                    var div = $("#description6");
                    div.html(t2);
                    console.log("SUCCESS:", data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }

            });
        });
    $('#thing8').click(function(e) {

            // don't allow the anchor to visit the link
            e.preventDefault();

            $.ajax({
                url: "/ajax-GET",
                dataType: "json",
                type: "GET",
                success: function(data) {
                    let t2 = "<ul>";
                    t2 += "<li>" + data[6]['rank'] + "</li>" + "<li>" + data[6]['flavour'] + "</li>"
                      + "<li>" + data[6]['shape'] + "</li>" + "<li>" + data[6]['durability'] + "</li>"
                      + "<li>" + data[6]['texture'] + "</li>";
                    t2 += "</ul>";
                    var div = $("#description7");
                    div.html(t2);
                    console.log("SUCCESS:", data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }

            });
        });
  
    $('#thing9').click(function(e) {

            // don't allow the anchor to visit the link
            e.preventDefault();

            $.ajax({
                url: "/ajax-GET",
                dataType: "json",
                type: "GET",
                success: function(data) {
                    let t2 = "<ul>";
                    t2 += "<li>" + data[7]['rank'] + "</li>" + "<li>" + data[7]['flavour'] + "</li>"
                      + "<li>" + data[7]['shape'] + "</li>" + "<li>" + data[7]['durability'] + "</li>"
                      + "<li>" + data[7]['texture'] + "</li>";
                    t2 += "</ul>";
                    var div = $("#description8");
                    div.html(t2);
                    console.log("SUCCESS:", data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }

            });
        });
  
    $('#thing10').click(function(e) {

            // don't allow the anchor to visit the link
            e.preventDefault();

            $.ajax({
                url: "/ajax-GET",
                dataType: "json",
                type: "GET",
                success: function(data) {
                    let t2 = "<ul>";
                    t2 += "<li>" + data[8]['rank'] + "</li>" + "<li>" + data[8]['flavour'] + "</li>"
                      + "<li>" + data[8]['shape'] + "</li>" + "<li>" + data[8]['durability'] + "</li>"
                      + "<li>" + data[8]['texture'] + "</li>";
                    t2 += "</ul>";
                    var div = $("#description9");
                    div.html(t2);
                    console.log("SUCCESS:", data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }

            });
        });
  
    $('#thing11').click(function(e) {

            // don't allow the anchor to visit the link
            e.preventDefault();

            $.ajax({
                url: "/ajax-GET",
                dataType: "json",
                type: "GET",
                success: function(data) {
                    let t2 = "<ul>";
                    t2 += "<li>" + data[9]['rank'] + "</li>" + "<li>" + data[9]['flavour'] + "</li>"
                      + "<li>" + data[9]['shape'] + "</li>" + "<li>" + data[9]['durability'] + "</li>"
                      + "<li>" + data[9]['texture'] + "</li>";
                    t2 += "</ul>";
                    var div = $("#description10");
                    div.html(t2);
                    console.log("SUCCESS:", data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }

            });
        });
  
  
   // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#html1').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=0; i<7; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html1").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html2').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=8; i<14; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html2").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html3').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=16; i<22; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html3").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html4').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=24; i<30; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html4").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html5').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=32; i<38; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html5").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html6').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=40; i<46; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html6").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
    
    $('#html7').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=48; i<54; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html7").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html8').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=56; i<62; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html8").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html9').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=64; i<70; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html9").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
  
    $('#html10').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
              var lines = data.split("\n");
              var info = "";
              for (i=72; i<78; i++){
                info += lines[i];
              }
              console.log("SUCCESS HTML:", data);
              $("#html10").html(info);
              

            },
            error: function(jqXHR, textStatus, errorThrown) {
                //$("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
});