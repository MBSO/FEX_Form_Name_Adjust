/*
FEXCO Campaign Recognition Library
Version: 1.0
Author: Philip Lacey
Date: 2014-10-21
Description:
This library is a centralised JavaScript Library to be include on Forms that want to interpret the form name and perform actions based on it.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Setup

Main Menu > Form Management > Form - Primary Management > Form - Advanced Settings > Select your form > Instructions > Opening Instructions

<script language='javascript' type='text/javascript' src='https://ww3.allnone.ie/client/client_fexco/custom/FEXCO_FormNameAdjust.js' ></script>


Main Menu > Form Management > Form - Primary Management > Form - Advanced Settings > Select your form > JavaScript onLoad > onLoad

fn_FormNameAdjust_Main();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_BGN ( intFound_Campaign_Id ){
	alert('This is a Gas Networks Ireland QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='1';
		strCDA_X_field_0_98.value=1;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'GNI' );
	}
	
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value = '1';
		
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML +='Gas Networks Ireland';
	}
		

	strCDA_X_field_0_106.value =1;

	//Set the Contract Name field 
	
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_BGE ( intFound_Campaign_Id ){
	alert('This is a Bord Gais Energy QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='2';
		strCDA_X_field_0_98.value=2;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'BGE' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='2';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Bord Gais Energy';
	}
	strCDA_X_field_0_106.value =2;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_AER ( intFound_Campaign_Id ){
	alert('This is a Aer Lingus QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='3';
		strCDA_X_field_0_98.value=3;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'AER' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='3';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Aer Lingus';
	}
	strCDA_X_field_0_106.value =3;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_AIB ( intFound_Campaign_Id ){
	alert('This is a AIB QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='4';
		strCDA_X_field_0_98.value=4;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'AIB' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='4';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='AIB';
	}
	strCDA_X_field_0_106.value =4;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_CLS ( intFound_Campaign_Id ){
	alert('This is a Carelines QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='5';
		strCDA_X_field_0_98.value=5;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'CLS' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='5';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Carelines';
	}
	strCDA_X_field_0_106.value =5;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_DPD ( intFound_Campaign_Id ){
	alert('This is a DPD QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='6';
		strCDA_X_field_0_98.value=6;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'DPD' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='6';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='DPD Shared Service';
	}
	strCDA_X_field_0_106.value =6;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_PBS ( intFound_Campaign_Id ){
	alert('This is a Prize Bonds QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='7';
		strCDA_X_field_0_98.value=7;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'PBS' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='7';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Prize Bonds';
	}
	strCDA_X_field_0_106.value =7;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_SEI ( intFound_Campaign_Id ){
	alert('This is a SEAI QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='8';
		strCDA_X_field_0_98.value=8;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'SEI' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='8';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='SEAI';
	}
	strCDA_X_field_0_106.value =8;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_Demo ( intFound_Campaign_Id ){
	alert('This is a Demo QA form[' + intFound_Campaign_Id + ']');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='Demo';
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='Demo';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Demo';
	}
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_CAL ( intFound_Campaign_Id ){
	alert('This is a Calibration form');
	fn_Validate_Outcomes_Calibration();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='9';
		strCDA_X_field_0_98.value=9;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'CAL' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='9';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Calibration';
	}
	strCDA_X_field_0_106.value =9;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_FMS ( intFound_Campaign_Id ){
	alert('This is a FEXCO Merchant Services form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='10';
		strCDA_X_field_0_98.value=10;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'FMS' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='10';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='FEXCO Merchant Services';
	}
	strCDA_X_field_0_106.value =10;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fn_Process_PRE ( intFound_Campaign_Id ){
	alert('This is a Pre Calibration form');
	fn_Validate_Outcomes_Pre();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='11';
		strCDA_X_field_0_98.value=11;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'PRE' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='11';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Pre Calibration';
	}
	strCDA_X_field_0_106.value =11;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function fn_Process_BON ( intFound_Campaign_Id ){
	alert('This is a Bon Secours form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='12';
		strCDA_X_field_0_98.value=12;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'BON' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='12';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Bon Secours';
	}
	strCDA_X_field_0_106.value =12;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function fn_Process_FSD ( intFound_Campaign_Id ){
	alert('This is a FEXCO Service Desk form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='13';
		strCDA_X_field_0_98.value=13;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'FSD' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='13';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Fexco Service Desk';
	}
	strCDA_X_field_0_106.value =13;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function fn_Process_CHL ( intFound_Campaign_Id ){
	alert('This is a Chill Insurance form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='14';
		strCDA_X_field_0_98.value=14;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'CHL' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='14';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Chill Insurance';
	}
	strCDA_X_field_0_106.value =14;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function fn_Process_CARD ( intFound_Campaign_Id ){
	alert('This is a Cardnet QA form');
	fn_Validate_Outcomes_Contract();
	if (objNameAdjust_Displayed){
		objNameAdjust_Displayed.value='15';
		strCDA_X_field_0_98.value=15;
		fn_CentralManagement_AJAX_LimitByContract ( strQA_AssessorMembers, 'CRD' );
	}
	if (objNameAdjust_Hidden){
		objNameAdjust_Hidden.value='15';
	}
	if (objNameAdjust_DIV){
		objNameAdjust_DIV.innerHTML='Cardnet';
	}
	strCDA_X_field_0_106.value =15;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function fn_FormNameAdjust_Main(){
	//Search for the forms name in a hidden form object in the form
	var objName = document.getElementById('strCampaign_Name');
	
	//Next we get the current campaign id, so it can all the performance functions to be generic.
	var intFound_Campaign_Id = document.getElementById('intCampaign_Id').value;
	intFound_Campaign_Id = +intFound_Campaign_Id;
	
	//If it is found
	if (objName) {
	
		//Now we extract the name
		var strName = objName.value;
		
		//To do the comparisons, we do some tidying up.
		var strLeftThree = strName.substring(0, 3); 
		var arySolution = strName.split(' # ')
		var strContractExtractedName = arySolution[0];
		
		//We now make it lower case to force easier comparisons
		var strMatch = strLeftThree.toLowerCase(); 
		var strMatch = strContractExtractedName.toLowerCase(); 
		
		//Next we perform our functions based on what has to happen
		//alert('Test - ' + strMatch);
		if ( strMatch == 'gni' ){
			fn_Process_BGN ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'bge' ) {
			fn_Process_BGE ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'aer' ) {
			fn_Process_AER ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'aib' ) {
			fn_Process_AIB ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'cls' ) {
			fn_Process_CLS ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'dpd' ) {
			fn_Process_DPD ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'pbs' ) {
			fn_Process_PBS ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'sei' ) {
			fn_Process_SEI ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'demo' ) {
			fn_Process_Demo ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'cal' ) {
			fn_Process_CAL ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'fms' ) {
			fn_Process_FMS ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'pre' ) {
			fn_Process_PRE ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'bon' ) {
			fn_Process_BON ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'fsd' ) {
			fn_Process_FSD ( intFound_Campaign_Id );
		}
		else if ( strMatch == 'chl' ) {
			fn_Process_CHL ( intFound_Campaign_Id );
		}
		
		else if ( strMatch == 'crd' ) {
			fn_Process_CARD ( intFound_Campaign_Id );
		}
		else{
			alert ('Unable to detect Contract.  Please contact support');
			//alert (strMatch)
			alert(strMatch.value.length);
		}
		
	}
	else{
		alert('Sorry but the Form Name Adjustment could not be performed at this time.');
	}
}

setTimeout (function fn_Validate_Outcomes_Contract(){
	
	if( strCDA_X_field_0_106.value == '9' ){
		fn_Validate_Outcomes_Calibration_NoAlert();
	}
	else{
		if (document.URL.indexOf('userLookup_Details') > 0 ) {
		}
		else{
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			
			if (strPreviousStatus.value == 'Saved'){
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			}
			if (strPreviousStatus.value == 'Submitted'){
				alert('The record is locked. It cannot be scored again but can be sent for calibration. Please contact Mary O Sullivan in relation to unlocking');
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
			}
			if (strPreviousStatus.value == 'Transfer to Calibration'){
				alert('The record is locked. Please contact Mary O Sullivan in relation to unlocking');
				fn_BE_BlankOutcomes();
			}
			
			if (intCDA_X_StaffId.value == 28) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
			if (intCDA_X_StaffId.value == 63) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
				fn_BE_AddOutcome( 'Deleted', 'Deleted' );
			}
			if (intCDA_X_StaffId.value == 97) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
				fn_BE_AddOutcome( 'Deleted', 'Deleted' );
			}
			if (intCDA_X_StaffId.value == 98) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
				fn_BE_AddOutcome( 'Deleted', 'Deleted' );
			}
			
			if (intCDA_X_StaffId.value == 196) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
			fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
		}
			if (intCDA_X_StaffId.value == 209) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
			if (intCDA_X_StaffId.value == 163) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
				if (intCDA_X_StaffId.value == 981) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
				if (intCDA_X_StaffId.value == 905) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
				if (intCDA_X_StaffId.value == 311) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
				if (intCDA_X_StaffId.value == 1053) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
				if (intCDA_X_StaffId.value == 42) {
				fn_BE_BlankOutcomes();
				fn_BE_AddOutcome( '', '' );
				fn_BE_AddOutcome( 'Saved', 'Saved' );
				fn_BE_AddOutcome( 'Submitted', 'Submitted' );
				fn_BE_AddOutcome( 'Transfer to Calibration', 'Transfer to Calibration' );
				fn_BE_AddOutcome( 'Send for Pre Calibration', 'Send for Pre Calibration' );
			}
			
		}
	}
},5000);

function fn_Validate_Outcomes_Calibration(){

	if (document.URL.indexOf('userLookup_Details') > 0 ) {
	}
	else{
		fn_BE_BlankOutcomes();
		fn_BE_AddOutcome( '', '' );
		fn_BE_AddOutcome( 'Saved', 'Saved' );
		fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		
		if (strPreviousStatus.value == 'Saved'){
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
		if (strPreviousStatus.value == 'Submitted'){
			alert('The record has been scored. Please choose the View Difference on worklist outcome to update the score on the Calibration Report');
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
		}
		if (strPreviousStatus.value == 'View difference on worklist'){
			alert('The record is locked. Please contact Mary O Sullivan in relation to unlocking');
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
			fn_BE_BlankOutcomes();
		}
		
		if (intCDA_X_StaffId.value == 28) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 63) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		
		if (intCDA_X_StaffId.value == 196) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 97) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 98) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 981) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 905) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 311) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 1053) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 42) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		
	}
}

function fn_Validate_Outcomes_Calibration_NoAlert(){

	if (document.URL.indexOf('userLookup_Details') > 0 ) {
	}
	else{
		fn_BE_BlankOutcomes();
		fn_BE_AddOutcome( '', '' );
		fn_BE_AddOutcome( 'Saved', 'Saved' );
		fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		
		if (strPreviousStatus.value == 'Saved'){
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
		if (strPreviousStatus.value == 'Submitted'){
			//alert('The record has been scored. Please choose the View Difference on worklist outcome to update the score on the Calibration Report');
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
		}
		if (strPreviousStatus.value == 'View difference on worklist'){
			//alert('The record is locked. Please contact Mary O Sullivan in relation to unlocking');
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
			fn_BE_BlankOutcomes();
		}
		
		if (intCDA_X_StaffId.value == 28) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 63) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 97) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 196) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 98) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 981) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 905) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 311) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
			if (intCDA_X_StaffId.value == 1053) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
			if (intCDA_X_StaffId.value == 42) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		
	}
}

function fn_Validate_Outcomes_Pre(){

	if (document.URL.indexOf('userLookup_Details') > 0 ) {
		}
		else{
		fn_BE_BlankOutcomes();
		fn_BE_AddOutcome( '', '' );
		fn_BE_AddOutcome( 'Saved', 'Saved' );
		fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		
		if (strPreviousStatus.value == 'Saved'){
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
		if (strPreviousStatus.value == 'Submitted'){
			alert('The record is locked. It cannot be scored again but can be sent for calibration. Please contact Mary O Sullivan in relation to unlocking');
			fn_BE_BlankOutcomes();
			
		}
		
		if (intCDA_X_StaffId.value == 28) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			
		}
		if (intCDA_X_StaffId.value == 63) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			
		}
		if (intCDA_X_StaffId.value == 97) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			
		}
		
		if (intCDA_X_StaffId.value == 196) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
			fn_BE_AddOutcome( 'View difference on worklist', 'View difference on worklist' );
			fn_BE_AddOutcome( 'Remove from Worklist', 'Remove from Worklist' );
		}
		if (intCDA_X_StaffId.value == 98) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
			if (intCDA_X_StaffId.value == 981) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
			if (intCDA_X_StaffId.value == 905) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
			if (intCDA_X_StaffId.value == 311) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
			if (intCDA_X_StaffId.value == 1053) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
			if (intCDA_X_StaffId.value == 42) {
			fn_BE_BlankOutcomes();
			fn_BE_AddOutcome( '', '' );
			fn_BE_AddOutcome( 'Saved', 'Saved' );
			fn_BE_AddOutcome( 'Submitted', 'Submitted' );
		}
		
	}
}

setTimeout(function fn_FEXCO_Remove_CSR_Outcome(){
	if (document.getElementById('intCurrentUser_Role').value == 3 ){
			fn_BE_BlankOutcomes();	
	}
}, 3000);

function fn_FEXCO_UpdateDeletedFlag(){

var intFound_Campaign_Id = document.getElementById('intCampaign_Id').value;

document.getElementById ('strCDA_'+ intFound_Campaign_Id+'_field_33_169').value = '1';

}

//----------------------------------------------


//document.getElementById('strCDA_' + intPassed_ClientCampaignId + '_field_0_169').onchange = setTimeout(function(){


function fn_Retrieve_Client(){
var intPassed_ClientCampaignId = document.getElementById('intCampaign_Id').value;
	//alert('Hi');
	aryAjax_Settings[0] 	= 'client_fexco';               														//Your system name
	aryAjax_Settings[1] 	= '';                      																//The CMI API Username
	aryAjax_Settings[2] 	= '';                      																//The CMI API User password
	aryAjax_Settings[3] 	= '';                       															//The campaign which contains the product list
	aryAjax_Settings[4] 	= 'intClient_Id';      																	//The field which contains the limiting / grouping factor
	aryAjax_Settings[5] 	= document.getElementById('strCDA_' + intPassed_ClientCampaignId + '_field_0_169').value; 	//The value to limit the responses by, in this case only yes items
	aryAjax_Settings[13] 	= -1;                         															//Limit responses -1 do not limit
	aryAjax_Settings[14] 	= 'false';                    															//Draw a table
	aryAjax_Settings[15] 	= 'divWarning';               															//Where to draw error messages if any
	aryAjax_Settings[16] 	= 'InsertFromClient';                 													//Engine to use i.e. Populate
								
	aryAjax_Settings[6] 	= 'dteClient_CompanyStartDate';      														//The field in the other campaign to be returned order = value, text
	aryAjax_Settings[12] 	= 'Date';                       														//Headings for xml troubleshooting
	aryAjax_Settings[17] 	= 'strCDA_' + intPassed_ClientCampaignId + '_field_34_169';   									//The field in the current campaign into which the products will be inserted.
	
	aryAjax_Settings[22]	= document.getElementById('intSystemGenerated_CompanyId').value;       					//Auto Login - System
	aryAjax_Settings[23] 	= document.getElementById('intSystemGenerated_UserId').value;          					//Auto Login - User
	aryAjax_Settings[24] 	= document.getElementById('intSystemGenerated_LoginKey').value;        					//Auto Login - SessionId
	aryAjax_Settings[28]	= 'fn_DateConvert()';
	
	fn_Ajax_BE_Process();
	//document.getElementById('strContact_Comments').value = aryAjax_Settings[7];
}

//--------------------------
function fn_DateConvert(){
	
	var intPassed_ClientCampaignId = document.getElementById('intCampaign_Id').value;
	var dteDateNow 		= new Date();
	var strStart_Date 	= document.getElementById('strCDA_' + intPassed_ClientCampaignId + '_field_34_169').value;
	//alert(strStart_Date.length);
	
	/*if(strStart_Date.length == 0){
	alert ('PLEASE DO NOT PROCEED AS NO START DATE ASSOCIATED WITH THIS AGENT\n\nPLEASE CONTACT THE BXP SUPPORT TEAM TO UPDATE THE AGENT START DATE.\n\n YOU WILL NOW BE DIRECTED TO THE HOME SCREEN UNTIL THE AGENTS START DATE HAS BEEN UPDATED ');
	window.location = '../main/main.asp';
	}*/
	var arySplit		= [];
	var aryDate 		= [];
	var aryTime			= [];
	var dteDateStart	= '';
	arySplit			= strStart_Date.split(' ');
	aryTime				= arySplit[1].split(':');
	if(strStart_Date.indexOf('/') != -1){
		aryDate			= arySplit[0].split('/');
		dteDateStart 	= new Date(aryDate[2],(aryDate[1] - 1),aryDate[0], aryTime[0], aryTime[1], aryTime[2], 0);
	}
	else{
		aryDate			= arySplit[0].split('-');
		dteDateStart 	= new Date(aryDate[0],(aryDate[1] - 1),aryDate[2], aryTime[0], aryTime[1], aryTime[2], 0);
	}
	
	
	
	//alert(dteDateStart.getFullYear() + '/' + (dteDateStart.getMonth() +1) + '/' + dteDateStart.getDate());
	//alert(dteDateNow.getFullYear() + '/' + (dteDateNow.getMonth() + 1) + '/' + dteDateNow.getDate());
							//JS Months start at 0
	var StartDate		= (dteDateStart.getMonth() +1) + '/' + dteDateStart.getDate() + '/' + dteDateStart.getFullYear();
	var NowDate			= (dteDateNow.getMonth() +1) + '/' + dteDateNow.getDate() + '/' + dteDateNow.getFullYear();
	
	var StartDate1		= new Date(StartDate);
	var NowDate1		= new Date(NowDate);
	
	
        /*
	var timeDiff		= NowDate1 - StartDate1;
	var diffDays 		= Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        */

	var intDays		= 24*60*60*1000;
	var diffDays	= Math.round(Math.abs((NowDate1.getTime() - StartDate1.getTime()) / (intDays)));
	
	
	
	
if (diffDays > 180){
		document.getElementById('strCDA_' + intPassed_ClientCampaignId + '_field_27_169').value = 'Experienced';
	} 
	else if (diffDays < 90 ){
	document.getElementById('strCDA_' + intPassed_ClientCampaignId + '_field_27_169').value = 'New Hire';
	}
	else if (diffDays > 89 && diffDays < 181){
	document.getElementById('strCDA_' + intPassed_ClientCampaignId + '_field_27_169').value = 'Intermediate';
	}
	
}	
//}, 3000);