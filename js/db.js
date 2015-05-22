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
	
	text_templates : {
		"HELP" : "<p><b>HELP : Description</b><span class=\"hrspcr\"></span></p><p>Type in the following keywords for help in relevant areas<ul><li>POWER : sets power to modules</li><li>Exit : exits the app</li><li>RUN : executes symantics</li></ul></p>",
		"POWER" : "<p><b>POWER : Description</b><span class=\"hrspcr\"></span></p><p>Provides power to a module typed in afterwards</p><p>i.e. \"POWER to COMMAND_MODULE\" will provide power to the given module</p>", 
		"RUN" : "<p><b>RUN : Description</b><span class=\"hrspcr\"></span></p><p>Executes code</p>"
			},
		
	users : {
		aripley : {
			firstName : "Amanda", lastName : "Ripley", occupation : "Captain",
			helmAccess : true, weaponsAccess : true, shieldsAccess : true,
			systemsAccess : true, enginesAccess : true, cargoAccess : true, rootAccess : true
		},
		ssmith : {
			firstName : "Scott", lastName : "Smith", occupation : "Pilot",
			helmAccess : true, weaponsAccess : false, shieldsAccess : false,
			systemsAccess : false, enginesAccess : true, cargoAccess : false, rootAccess : false
		},
		dpalliyaguruge : {
			firstName : "Damitha", lastName : "Palliyaguruge", occupation : "Pervy IT Mechanic",
			helmAccess : false, weaponsAccess : false, shieldsAccess : false,
			systemsAccess : true, enginesAccess : true, cargoAccess : false, rootAccess : true
		},
		sarcher : {
			firstName : "Sterling", lastName : "Archer", occupation : "Weapons",
			helmAccess : false, weaponsAccess : true, shieldsAccess : false,
			systemsAccess : true, enginesAccess : false, cargoAccess : false, rootAccess : false
		},
		kanderson : {
			firstName : "Karin", lastName : "Anderson", occupation : "Shields",
			helmAccess : false, weaponsAccess : false, shieldsAccess : true,
			systemsAccess : true, enginesAccess : false, cargoAccess : false, rootAccess : false
		},
		jlenman : {
			firstName : "Jane", lastName : "Lenman", occupation : "Shipping",
			helmAccess : false, weaponsAccess : false, shieldsAccess : false,
			systemsAccess : true, enginesAccess : false, cargoAccess : true, rootAccess : false
		}
	}
};