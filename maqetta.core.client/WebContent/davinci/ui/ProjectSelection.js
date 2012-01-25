define(["dojo/_base/declare", 
        "davinci/ui/ProjectDataStoree",
        "dijit/form/ComboBox",
        "system/resource"

 ],function(declare, ProjectDataStore, ComboBox, Resource){
	return declare("davinci.ui.ProjectSelection",   dijit._Widget, {
		postCreate : function(){
			this._store=new ProjectDataStore({});
			this.combo=new ComboBox({store:this._store, required: false, style:"width:100%"});
			this.domNode = this.combo.domNode;
			this._populateProjects();
		},
		
		_populateProjects : function(){
			var workspace = Resource.getWorkspace();
			var store = this._store;
			var combo = this.combo;
			workspace.getChildren(function(projects){
				store.setValues(projects);
				var activeProject = davinci.Runtime.getProject();
				combo.attr('value', activeProject);
			});

		}
		
	});


});


