var osMap = {};
osMap["--Choose--"] = [];
osMap["Human (hg19)"] = {};
osMap["Human (hg19)"][""] = [];
osMap["Human (hg19)"]["Memczak 2013"] = ["", "cd_19", "cd_34", "HEK293", "neutr"];
osMap["Human (hg19)"]["Jeck 2013"] = ["", "Hs68_control", "Hs68_RNase"];
osMap["Human (hg19)"]["Salzman 2013"] = ["", "A549", "Ag04450", "Bj", "Gm12878", "H1hesc", "Helas3", "Hepg2", "Hmec", "Hsmm", "Huvec", "K562", "Nhek", "Nhlf", "Mcf7", "Sknshra"];
osMap["Human (hg19)"]["Zhang 2013"] = ["", "H9"];
osMap["Human (hg19)"]["Rybak-Wolf 2015"] = ["", "cerebellum", "diencephalon", "frontal_cortex", "occipital_lobe", "parietal_lobe", "temporal_lobe", "Sy5y_exp1_D0", "Sy5y_exp1_D2", "Sy5y_exp1_D4", "SY5Y_exp2_D0", "SY5Y_exp2_D4", "SY5Y_exp2_D8"];
osMap["Human (hg19)"]["Maass 2017"] = ["", "ada_scid", "adipose", "chondrocytes", "cortex", "decidua", "EPC", "fibroblasts", "HUAEC", "HUVEC", "LCL", "MSC", "MSC_047", "muscle", "neutophils", "osteocytes", "placenta", "plasma", "platelets", "right_atrium", "serum", "umbilical_cord", "vena_cava", "VSMC", "WAS2"];

osMap["Mouse (mm9)"] = {};
osMap["Mouse (mm9)"][""] = [];
osMap["Mouse (mm9)"]["Memczak 2013"] = ["", "mm_brain1", "mm_brain2", "mm_ES", "mm_head"];
osMap["Mouse (mm9)"]["Rybak-Wolf 2015"] = ["", "cerebellum", "forebrain", "frontal_cortex", "hindbrain", "hippocampus", "midbrain", "olfactory_bulb", "P19_exp1_D0", "P19_exp1_D2", "P19_exp1_D4", "P19_exp1_D12", "P19_exp2_D0", "P19_exp2_D4", "P19_exp2_D12", "PN_D01", "PN_D07", "PN_D14", "PN_D21", "PN_D28", "sy_cell", "sy_cyto", "sy_snpt"];
osMap["Mouse (mm9)"]["Wang 2012"] = ["", "C2C12-control-cyto", "C2C12-control-ins", "C2C12-control-mem", "C2C12-shMbnl12-cyto", "C2C12-shMbnl12-ins", "C2C12-shMbnl12-mem"];

osMap["C.elegans (ce6)"] = {};
osMap["C.elegans (ce6)"][""] = [];
osMap["C.elegans (ce6)"]["Memczak 2013"] = ["", "1cell", "2cell", "fem1", "spe9", "sperm", "sperm_act"];
osMap["C.elegans (ce6)"]["Ivanov 2015"] = ["", "pooled"];

//osMap["S.mediterranea (Oct06)"] = {};
//osMap["S.mediterranea (Oct06)"][""] = [];
//osMap["S.mediterranea (Oct06)"]["SmedCircs"] = ["", "bruli_ctrl", "bruli_rnase", "GFP_ctrl", "GFP_rnase", "H2B_ctrl", "H2B_rnase", "WT_ctrl", "WT_rnase"];

osMap["L.chalumnae (latCha1)"] = {};
osMap["L.chalumnae (latCha1)"][""] = [];
osMap["L.chalumnae (latCha1)"]["Nitsche 2013"] = ["", "muscle"];

osMap["L.menadoensis (latCha1)"] = {};
osMap["L.menadoensis (latCha1)"][""] = [];
osMap["L.menadoensis (latCha1)"]["Nitsche 2013"] = ["", "liver", "testis"];


osMap["D.melanogaster (dm3)"] = {};
osMap["D.melanogaster (dm3)"][""] = [];
osMap["D.melanogaster (dm3)"]["Ashwal-Fluss 2014"] = ["", "S2_m", "S2_rr", "slow18m", "slow18rr", "slow18_m_rep2", "slow18_rr_rep2", "slow29m", "slow29rr", "slow29_m_rep2", "slow29_rr_rep2", "wt18m", "wt18rr", "wt18_m_rep2", "wt18_rr_rep2", "wt29m", "wt29rr", "wt29_m_rep2", "wt29_rr_rep2"];



//osMap["C.elegans (ce6)"]["DevStages"] = ["", "embryo", "L1", "L2", "L3", "L4", "YA"];





function getInput(data) {
	var x=document.getElementById("searchBar").value;
  //get separate rows
	alert(x)
}

// function updateFieldSelection
//  	clears a circRNA name: field if user decides to 
//		search by gene name/id, and vice versa
function updateFieldSelection(elem) {
	if (elem.name == 'crna') {
		document.getElementById('gene').value = "";
	} else {
		document.getElementById('crna').value = "";
	}
}

function clearSelectedField(elem) {
	// elem.value;
	document.getElementById(elem).value = "";
}

function test_add(elem, val) {
	// elem.value;
	document.getElementById(elem).value = val;
}





var example = 1;

function populateSimpleSearch() {
	
	if (example == 1) {
	
		document.getElementById('searchbox').value = "GNB1";
		example += 1;
		
	} else if (example == 2) {
	
		document.getElementById('searchbox').value = "GNB1 RCSB1 EGLN1";
		example += 1;
		
	} else if (example == 3) {
	
		document.getElementById('searchbox').value = "apoptosis";
		example += 1;
		
	} else if (example == 4) {
	
		document.getElementById('searchbox').value = "NM_133494 NM_000573 NM_013330";
		example += 1;
		
	} else if (example == 5) {
	
		document.getElementById('searchbox').value = "hsa_circ_0000168 hsa_circ_0000200 hsa_circ_0001274";
		example += 1;
		
	} else if (example == 6) {
	
		document.getElementById('searchbox').value = "chr3:16862403-17386302";
		example += 1;
		
	} else if (example == 7) {
	
		document.getElementById('searchbox').value = "chr3:16862403-17386302 hsa";
		example += 1;
		
	} else if (example == 8) {
	
		document.getElementById('searchbox').value = "";
		example = 1;
		
	} 
	
}

function populateListSearch() {
	if (example == 1) {
		document.getElementById('organism').value = "Human (hg19)";
		document.getElementById('querybox').value = "NM_016176\nNM_031921\nNM_031921\nNM_024011\nNM_001110781\nNM_002074\nNM_002074\nNM_003036\nNM_001195737\nNM_153812\nNM_012102";
		enableFields("Human (hg19)");
		example += 1;
	} else if (example == 2) {
		document.getElementById('organism').value = "Human (hg19)";
		document.getElementById('querybox').value = "SDF4\nATAD3B\nATAD3B\nCDK11A\nSLC35E2B\nGNB1\nGNB1\nSKI\nFAM213B\nPHF13\nRERE\nENO1\nLZIC\nAPITD1\nDFFA";
		enableFields("Human (hg19)");
		example += 1;
	} else if (example == 3) {
		document.getElementById('organism').value = "Human (hg19)";
		document.getElementById('querybox').value = "hsa_circ_000529\nhsa_circ_000531\nhsa_circ_002058\nhsa_circ_002098\nhsa_circ_002136\nhsa_circ_001621\nhsa_circ_001873\nhsa_circ_001557\nhsa_circ_000031\nhsa_circ_000032\nhsa_circ_001076\nhsa_circ_000641";
		enableFields("Human (hg19)");
		example += 1;
	} else if (example == 4) {
		document.getElementById('organism').value = "Human (hg19)";
		document.getElementById('querybox').value = "chr1	1060738	1080800	test_000529	2	-\nchr1	1158623	1159348	test_000531	2	-\nchr1	1423242	1459777	test_002058	26	+\nchr1	1430864	1464711	test_002098	31	+\nchr1	1586822	1650894	test_002136	40	-\nchr1	1601102	1666274	test_001621	9	-\nchr1	1735857	1737977	test_001873	16	-\nchr1	8616533	8617582	test_000641	2	-\nchr1	8921236	8921390	test_000035	17	+\nchr1	9991948	9994918	test_001693	10	-";
		enableFields("Human (hg19)");
		example += 1;		
	} else if (example == 5) {
		document.getElementById('organism').value = "--Choose--";
		document.getElementById('querybox').value = "";
		example = 1;
	}
}

function populateTableBrowser() {
	
	if (example == 1) {
		document.getElementById('organism').value = "Human (hg19)";
		updateDataset("Human (hg19)");
		document.getElementById('dataset').value = "Memczak 2013";
		updateSample("Memczak 2013");
//		document.getElementById('samples').value = "cd_34";
		document.getElementById('samples').options[0].selected = false;
		document.getElementById('samples').options[1].selected = true;
		document.getElementById('samples').options[2].selected = true;
		
		document.getElementById('gl_min').value = 1000;
		document.getElementById('gl_max').value = 2000;
		
		
		enableTBrowserFields();
		example += 1;
	} else if (example == 2) {
		tbrform.reset();
		resetSamples();
		enableTBrowserFields();
		example = 1;		
	}
}



function checkboxDeselect(elem) {
	if (elem == 'exclude') {
		document.forms['tbrform'].elements['repeats'][1].checked = false;
	} else {
		document.forms['tbrform'].elements['repeats'][0].checked = false;
	}
}

function checkboxDeselectGetSeq(elem) {
	if (elem == 'genomic') {
		document.forms['tbrform'].elements['seq'][1].checked = false;
	} else {
		document.forms['tbrform'].elements['seq'][0].checked = false;
	}
}

function checkboxDeselectList(elem) {
	if (elem == 'search') {
		document.forms['longquery'].elements['wat'][1].checked = false;
	} else {
		document.forms['longquery'].elements['wat'][0].checked = false;
	}
}

function updateDataset(elem) {
	var dataset = document.getElementById('dataset');
	dataset.length = 0;
	for (i = 0; i<Object.keys(osMap[elem]).length; i++) {
		dataset.options[i] = new Option(Object.keys(osMap[elem])[i]);
	}
	
	var sample = document.getElementById('samples');
//	alert(sample.value);
	if (samples.options.length > 0) {
		while(samples.options.length) {
			samples.remove(0);
		}
	}
}

function updateSample(elem) {
	var org = document.getElementById('organism').value;
	var samples = document.getElementById('samples');
	
	
	// var dump = document.getElementById('dump');
	// dump.value = osMap[elem];
	if (samples.options.length > 0) {
		while(samples.options.length) {
			samples.remove(0);
			samples.size=2;
		}
	}
	
	// variant.length = 0;
	for (i = 0; i<osMap[org][elem].length; i++) {
		samples.options[i] = new Option(osMap[org][elem][i]);
		samples.selectedIndex=0;
	}
	samples.size = 5;
}


function resetSamples() {
	var samples = document.getElementById('samples');
	if (samples.options.length > 0) {
		while(samples.options.length) {
			samples.remove(0);
		}
	}
}

function formReset() {
	document.getElementById("tbrform").reset();
}

function recoverBoxValues() {
	alert('blabla');
	alert(document.getElementById('dump').value);
	var samples = document.getElementById('samples');
	samples.options[0] = new Option(document.getElementById('dump').value);
}

function enableFields(elem) {
	if (elem != "--Choose--") {
		document.getElementById("querybox").disabled=false;
		document.getElementById("queryfile").disabled=false;
	} else {
		document.getElementById("querybox").disabled=true;
		document.getElementById("queryfile").disabled=true;
	}
}

function enableTBrowserFields() {
	var organism = document.getElementById("organism").value;
	var dataset = document.getElementById("dataset").value;
	
	if (dataset == "" & organism == "--Choose--") {

		document.getElementById("submit").disabled=true;

	} else if (dataset != "" & organism != "--Choose--") {

		document.getElementById("submit").disabled=false;
	}
}




