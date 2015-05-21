

var spaceSSH = {
		
	SCREEN : null,
	
	INPUT : null,
	
	KEYWORDS : [],
	
	TEXT_TEMPLATES : [],
	
	init : function()
	{
		spaceSSH.SCREEN = $("#output");
		spaceSSH.INPUT = $("#txtinput");
		
		spaceSSH.INPUT.on( 'keypress', function(e) 
	    {
	      if (e.which == 13) 
	      {
	        spaceSSH.checkText();
	      }
	    });
		
		spaceSSH.INPUT.focus();
		
		spaceSSH.setKeywords();
	},
	
	setKeywords : function()
	{
		spaceSSH.KEYWORDS = DB.keywords; // We should be getting this from another js file
		spaceSSH.TEXT_TEMPLATES = DB.text_templates;
	},	
	
	highlightKeyWords : function( text )
	{
	  // first convert the entire text into lowercase
	  text = text.toLowerCase();
	  
	  // trim whitespaces from the start / end
	  text = text.trim();
	  
	  var oriText = new String( text );
	  
	  if( oriText == "exit" )
	  {
		  spaceSSH.clearScreen(); 
		  return "";
	  }
	  
	  for( var i = 0, find = null, replace = null, found = false; i < spaceSSH.KEYWORDS.length; i++ )
	  {
		  find = spaceSSH.KEYWORDS[i].toLowerCase();
		  replace = '<span class=\"kywrd\">'+spaceSSH.KEYWORDS[i]+'</span>';
		  
		  if( text.split( find ).length > 0 )
		  {
			  text = text.split( find ).join( replace );
		  }
		  else
		  {
			  text = text.replace( find, replace );
		  }
		  
		  if( oriText == find && !!spaceSSH.TEXT_TEMPLATES[spaceSSH.KEYWORDS[i]] )
		  {
			  text += spaceSSH.TEXT_TEMPLATES[spaceSSH.KEYWORDS[i]];
		  }
	  }
	  return text;
	},
			
	checkText : function()
	{
      var text = spaceSSH.highlightKeyWords( spaceSSH.INPUT.val() );	
      
      var newLine = "<p>&nbsp;>&nbsp;"+text+"</p>";
    	  
      $( newLine ).appendTo( spaceSSH.SCREEN );
      
      spaceSSH.updateScroll();
      
      spaceSSH.INPUT.val("");
	},

	updateScroll : function()
	{
	    spaceSSH.SCREEN[0].scrollTop = spaceSSH.SCREEN[0].scrollHeight;
	},
	
	clearScreen : function( )
	{
	  spaceSSH.SCREEN.html("");
	}
		
};

$( document ).ready(function() 
{
	spaceSSH.init();
});