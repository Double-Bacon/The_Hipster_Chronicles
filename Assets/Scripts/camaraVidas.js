﻿#pragma strict
var corazon1:GameObject;
var corazon2:GameObject;
var corazon3:GameObject;
var num:int;


var jugador:GameObject;
var scriptVidas:vidas;

function Start () {
	
	scriptVidas=jugador.gameObject.GetComponent("vidas");
	corazon1 = GameObject.Find("c1");
	corazon2 = GameObject.Find("c2");
	corazon3 = GameObject.Find("c3");
	num=3;
}

function Update () {



	
	
	/******************************************************/
	/* Este cacho de codigo sirve para validar la desaparicion de las vidas en la pantalla:
	   Para eliminar una vida de la pantalla pulsar V*/
	
	if (Input.GetKeyDown(KeyCode.V)) {
    	num--;
        }
    
    /* Esta linea de codigo es la que debe estar escrita: */
    
    //num = scriptVidas.getVidas();
    
	/*****************************************************/
	
	if (num==2) {
        // show
        corazon3.renderer.enabled = false;
    }
    
    if (num==1) {
        // show
        corazon2.renderer.enabled = false;
    }
 
    if (num==0) {
        // show
        corazon1.renderer.enabled = false;
  
    }
}