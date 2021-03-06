private var dying : boolean;
private var dead : boolean;
private var jumpSpeed : float;
private var fallSpeed : float = 2.0;
private var t : float = 0.85;
var movCameraScript : movimientoCamara;
var boxCollider : BoxCollider2D;
var upperCircleCollider : CircleCollider2D;
var lowerCircleCollider : CircleCollider2D;
var pauseScript : Pause;
var body : Rigidbody2D;
var leftCollider : BoxCollider2D;
var deadMenuSceneName : String;

function Start(){
	dying = false;
	dead = false;
	jumpSpeed = 70.0;
}

function Update(){
	if(dying){
		var rig : Rigidbody2D = GetComponent(Rigidbody2D);
		var movement = Vector2(0, jumpSpeed);
		jumpSpeed *= t;
		rig.AddForce(movement);
	}
	
	//print(body.transform.position.y);
	
	if(body.transform.position.y < (leftCollider.transform.position.y - leftCollider.size.y/2.0)){
		dead = true;
	}
}

function die (){
	dying = true;
	movCameraScript.enabled = false;
	boxCollider.enabled = false;
	upperCircleCollider.enabled = false;
	lowerCircleCollider.enabled = false;
	pauseScript.enabled = false;
	(GetComponent("PlayerControl") as MonoBehaviour).enabled = false;
}

function ReiniciarNivel(){
	Application.LoadLevel(Application.loadedLevel);
}

function OnGUI () {
	if(dead){

		// Boton para reiniciar
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 10,250,50), "Reiniciar nivel" )){
			ReiniciarNivel();
		}

		// Boton para salir del juego
		if (GUI.Button (Rect (Screen.width /2 - 150,Screen.height /2 +40,250,50), "Salir al menu principal")){
			Application.LoadLevel("PruebaMenu");
		}
	}
}