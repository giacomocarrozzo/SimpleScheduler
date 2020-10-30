// $(document).ready(function() {
    // $('#dtable').DataTable( {
		// "dom": "t",
        // "paging":   false,
		// "bStateSave": false,
		// "aSorting": [[1, "desc" ]],
        // "ordering": true,
		// "aoColumnDefs": [
			// { "bSortable": false , "aTargets": [ 0,3,5,6 ] },
		// ]
    // } );
// } );



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function showForm(id) {
	var rowShowId = "rowShow_" + id ;
	var rowShow = document.getElementById(rowShowId);
	var rowFormId = "rowForm_" + id ;
	var rowForm = document.getElementById(rowFormId);
	var sourceId = "select_" + id ;
	var destinationId = "select_f_" + id ;

	var v = document.getElementById(sourceId).attributes["data-original-title"].nodeValue
	document.getElementById(destinationId).value = v;

	var d = rowShow.style.display;
	if (d=="") {
		rowShow.style.display = "none";
		rowForm.style.display = "";
		
	} else {
		rowShow.style.display = "";
		rowForm.style.display = "none";
	}
	
}

function showAddRow(id) {
	var elementId = "rowFormNew" ;
	var tr = document.getElementById(elementId);
	tr.style.display = "";
	
}

function deleteRow(id) {
	var elementId = "form_" + id ;
	var f = document.getElementById(elementId);
	if (window.confirm("Are you sure?")) {
		f.action.value="delete"; 
		f.submit(); 
	}
}

function saveRow(id) {
	var elementId = "form_" + id ;
	var f = document.getElementById(elementId);
	f.submit(); 
}

function switchRow(id) {
	var formId = "form_" + id ;
	var f = document.getElementById(formId);
	var newEnabledValue = !f.elements["enabled"].checked;

	var sourceId = "select_" + id ;
	var destinationId = "select_f_" + id ;

	var v = document.getElementById(sourceId).attributes["data-original-title"].nodeValue
	document.getElementById(destinationId).value = v;

	f.elements["enabled"].checked = newEnabledValue;
	f.submit(); 

	var elementname = "enabled_" + id ;
	var e = document.getElementsByName(elementname);
	if (newEnabledValue) {
		e[0].classList.remove("mdi-toggle-switch-off-outline");
		e[1].classList.remove("mdi-toggle-switch-off-outline");
		e[0].classList.add("mdi-toggle-switch text-green");
		e[1].classList.add("mdi-toggle-switch text-green");
	} else {
		e[0].classList.remove("mdi-toggle-switch text-green");
		e[1].classList.remove("mdi-toggle-switch text-green");
		e[0].classList.add("mdi-toggle-switch-off-outline");
		e[1].classList.add("mdi-toggle-switch-off-outline");
	}
}

