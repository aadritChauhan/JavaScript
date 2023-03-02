/* LAB 8 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

window.onload= function(){
	var formHandle= document.forms.form_ship;
	
	


	formHandle.onsubmit= disappear;

	function disappear() {
		var name= formHandle.f_Name;
		var id= formHandle.f_Id;
		var pcode= formHandle.f_pc;

		if (name.value===""){
			var nameMsg= document.getElementById("in_Name");
			nameMsg.style.background="red";
			name.focus();
			return false;
			
		}
		if (id.value===""){
			var nameMsg= document.getElementById("in_Id");
			id.style.background="red";
			id.focus();
			return false;
		}
		if (pcode.value===""){
			var nameMsg= document.getElementById("in_pc");
			nameMsg.style.background="red";
			pcode.focus();
			return false;
		}
		



		var thanks= document.getElementById("thanks_msg");
		formHandle.style.display= "none";
		thanks.style.display="block";

		

		document.getElementById("thanksCustomer").innerHTML=name.value + "(Customer#"+ id.value+")";
		document.getElementById("thanksPC").innerHTML=pcode.value;

		

        return false;

	}
}

