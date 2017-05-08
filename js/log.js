var input = "";
var reader = "";
var openFile = function(event) {
     input = event.target;
	 reader = new FileReader();
	 reader.readAsText(input.files[0]);
  };
  
var lines = ""
var parse = function(){
parseLineByLine();
  }
  
  var parseLineByLine = function(){
  	var text = reader.result;
	lines = text.split('\n');
	var linesLength = lines.length;
	var bsfnCall = "Start dumping data structure for business function ";
	var bsfnCall_pat = /Start dumping data structure for business function /;
	
	for(var line = 0; line < linesLength; line++){
		var line1 = lines[line];
		var status = bsfnCall_pat.test(line1);
		if(status == true)
		  console.log(line1.substring(bsfnCall.length + line1.indexOf(bsfnCall), line1.length));
	}
  }
  
  function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}

  function openNav() {
    document.getElementById("mySidenav").style.width = "310px";
	document.getElementById("frontView").style.display  = "none";
    document.getElementById("main").style.marginLeft = "310px";
	document.getElementById("main").style.visibility  = "visible";
	document.getElementById("main").style.opacity = "1";	
	document.getElementById("main").style.transition = "opacity 0.6s, visibility 0.6s";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft= "0px";
}

function viewTree()	{
	document.getElementById("frontView").style.display  = "none";
	document.getElementById("main").style.visibility  = "visible";
	document.getElementById("main").style.opacity = "1";	
	document.getElementById("main").style.transition = "opacity 0.6s, visibility 0.6s";
}

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}