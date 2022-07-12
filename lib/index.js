import {Lista} from './lista.js';   //import de nuestra lista
import {bootbox_prompt,bootbox_alert} from './dialog.js';
let lista=null;

export async function inserta_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
        //lista.canvas=canvas;//despues contructor			
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null)
        return;

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function inserta_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

       await bootbox_alert(e.message);
    }
    
}//////////////////////////////////////////////////////////
export async function inserta_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        //lista.canvas=canvas;//despues contructor	
    }
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null)
                return;

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
        
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function inserta_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        //lista.canvas=canvas;//despues contructor	
    }
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");  
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null)
                return;

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
        
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}///////////////////////////////////////////////////////// 

export async function Elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
       // lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.Elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function Elimina_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.Elimina_ultimo();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }

}////////////////////////////////////////////////////////

export async function Elimina_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        let X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return
        lista.Elimina_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
        
    }catch(e){
        await bootbox_alert(e.message);
    }

} 
////////////////////////////////////////////////////////
export async function Elimina_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        if(lista.veriantesydespues()==true){
            throw new Error("SOLO EXISTE UN NODO");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return;
        lista.Elimina_antes_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}
export async function Eliminar_Posterior_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        if(lista.veriantesydespues()==true){
            throw new Error("SOLO EXISTE UN NODO");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return;
        lista.Eliminar_Posterior_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
        
    }catch(e){

        await bootbox_alert(e.message);
    }
}