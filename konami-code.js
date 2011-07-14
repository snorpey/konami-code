// Key codes
// http://protocolsofmatrix.blogspot.com/2007/09/javascript-keycode-reference-table-for.html
var keys = [
	38,	// up
	40,	// down
	37,	// left
	39,	// right
	65,	// a
	66	// b
];

// The Konami Code:
// http://en.wikipedia.org/wiki/Konami_Code
// up, up, down, down, left, right, left, right, b, a
var code = [
	38,
	38,
	40,
	40,
	37,
	39,
	37,
	39,
	66,
	65
];

var entered_keys = [];
	
// listen for keyUp events
$(document).keyup(keyListener);

function keyListener($event)
{
	for(var i = 0; i < keys.length; i++)
	{
		// check for matches with key coses
		if(parseInt($event.keyCode) === keys[i])
		{				
			//check if keys entered in right order
			if(parseInt($event.keyCode) === code[entered_keys.length])
			{
				//save progress
				entered_keys.push(parseInt($event.keyCode));
				
				if(entered_keys.length === code.length)
				{
					var same = 0;
					
					//check if code is correct
					for(var j = 0; j < code.length; j++)
					{
						if(entered_keys[j] === code[j])
						{
							same++;
						}
					}
					
					if(same == code.length)
					{
						//code is correct
						unlock();
					}
					
					//delete progress so that the user can enter the code again
					entered_keys = [];				
				}
			}
			
			else
			{
				// wrong key order. start over.
				entered_keys = [];
			}
		}
	}
};

// the user has sucessfully entered the code
function unlock()
{
	// your crazy stuff here...
}