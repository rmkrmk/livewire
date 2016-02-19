/* global ace */
module = module.exports;
var controls = require('./controls.json'),
	tags = require('./tags.json'),
	editor = ace.edit('editor');

var tagItemTemplate = "<option><a>${tag}</a></option>",
	html = '',
	controlItemTemplate = "<option><a>${control}</a></option>",
	htmlControls = '';

$(function () {
	for (var i = 0; i < tags.length; i++) {
		// TODO: replace with language?
		html += tagItemTemplate.replace("${tag}", tags[i]["EN_NAME"]);
	}
	for (var i = 0; i < controls["IgniteUI"].length; i++) {
		// TODO: replace with language?
		htmlControls += controlItemTemplate.replace("${control}", controls["IgniteUI"][i]);
	}

	$("#tagsSelect").html(html);
	$("#controlsSelect").html(htmlControls);


	$('#tagsSelect').change(function () {
		$("#tagsInput").val($(this).val());
	});
	$('#controlsSelect').change(function () {
		$("#controlsInput").val($(this).val());

	});

	$("#editMetadataDialog").on('show.bs.modal', function (e) {

		if (!editor.metadata) { }
		else {
			$("#fileNameInput").val(editor.metadata.fileName);
			$("#tagsInput").val(editor.metadata.tags);
			$("#tagsSelect").val(editor.metadata.tags);
			$("#controlsInput").val(editor.metadata.controlName);
			$("#controlsSelect").val(editor.metadata.controlName);
		}
	});
	
	$("#metaDoneBtn").on('click', function () {
		if (editor.metadata) {
			editor.metadata.fileName = $("#fileNameInput").val();
			editor.metadata.tags = $("#tagsSelect").val();
			editor.metadata.controlName = $("#controlsSelect").val();
		}
	});

	$("#editMetadata").on('click', function (e) {
		$("#editMetadataDialog").modal();
	});
});
