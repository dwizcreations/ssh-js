var DB = {
		
	keywords : ["RUN", "EXIT", "HELP", "POWER"],
	
	filesys : {
		A : {
			systems : {
				helm : { nav : {} },
				weapons : {},
				shields : {},
				thrusters : {},
				cargo : {},
				comms : {},
				systems : {}
			}
		}
	},
	
	text_templates : { "HELP":
		"<p><b>HELP : Description</b><span class=\"hrspcr\"></span></p><p>Type in the following keywords for help in relevant areas<ul><li>POWER : sets power to modules</li><li>Exit : exits the app</li><li>RUN : executes symantics</li></ul></p>",
		"POWER":
			"<p><b>POWER : Description</b><span class=\"hrspcr\"></span></p><p>Provides power to a module typed in afterwards</p><p>i.e. \"POWER to COMMAND_MODULE\" will provide power to the given module</p>", 
		"RUN":"<p><b>RUN : Description</b><span class=\"hrspcr\"></span></p><p>Executes code</p>"
			}
		
};