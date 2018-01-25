	/*Searches for tracking id input field
    If existing, executes script to embed tracking ID
	Returns false if field non-existent*/

	function exists(element) {
	//Checks if queried element exists
	  return (element !== null)
	}

	function getClientId(uaid) {
		//retrieves cid from google analytics trackers
	    try {
	        var trackers = ga.getAll();
	        var i, len;
	        for (i = 0, len = trackers.length; i < len; i += 1) {
	            if (trackers[i].get('trackingId') === uaid) {
	                return trackers[i].get('clientId');
	            }
	        }
	    } catch (e) {
	        console.log("Error fetching clientId");
	    }
	    return 'false';
	}

	function insertCid(){
		//Check for labelName Existence
		let labelNames = document.querySelectorAll(".zf-labelName");
		//console.log("Here are the labels: ");
		//console.log(labelNames);
		var trackingField = false
		if (labelNames.length > 0){
			labelNames.forEach(field =>{
			    if (field.innerText.toLowerCase().trim()==="tracking id"){
                   	//Attach CID to the correct input field
                  	field.nextElementSibling.querySelector("input").id="cid";
					trackingField = true;			    	
			    } else {
			        // console.log("Not the tracking ID field");
					return;
			    }
			})
		} else {
			console.log("No form input fields on page");
		}
      	return trackingField == true;
	}

	var hiddenFields = ["webpage", "tracking id"];
	function hideFields(hiddenFields){
		//Selects list of all HTML input fields
		let labelNames = document.querySelectorAll(".zf-labelName");
		//For each field that needs to be hidden:
		for (var i=0; i< hiddenFields.length; i++){
			//Look through list with all input fields
			for (var j=0; j<labelNames.length; j++){
				//If match, run the function
				if (labelNames[j].innerText.toLowerCase().trim() === hiddenFields[i]){
					labelNames[j].parentElement.style = "display:none";
				}
			}
		}
	}

	function addReferringPage(webpage){
		document.querySelectorAll(".zf-labelName").forEach(field => {
			if (field.innerText.toLowerCase().trim()==="webpage"){
               	try {
               		field.value = webpage;
           		} catch(err) {
           			//Defaults to pathname of current url
           			field.value = window.location.pathname;
           		}		    	
		    }
		});		
	}

	window.onload = function() {
		if (document.forms.length>0) {
			hideFields(hiddenFields);
			addReferringPage(webpage);
			document.forms.form["zf_redirect_url"].value = redirectUrl;
			
			if (insertCid()===true){
				let cidInput = document.querySelector("#cid");
				console.log("The tracking Input field: ")
		  		console.log(cidInput);
	  			//If tracking field exists, attach tracking id to value	
				if (exists(cidInput)) {
				  cidInput.value = getClientId('UA-71237243-1');
				  // cidInput.value = 'Inputting an ID here to test';
				} else {
				  console.log("No input element for cid");
				  return false
				}
			} else {
				console.log("insert CID function failed");
				return false;
			}			
		} else {
			console.log("No form on page")
		}	
	}
