/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var numberOfItems = 30;
         var rainbow = new Rainbow(); 
         rainbow.setNumberRange(1, numberOfItems);
         rainbow.setSpectrum('1671D4', '1E2322');
         var dnaStrands = [];
         var tl = new TimelineMax(); //fades in dna
         tl.pause();
         for (var i=0; i < 30; i++) {	
         	dnaStrands[i] = sym.createChildSymbol("strand_sym", "Stage");
         	dnaStrands[i].getSymbolElement().css({opacity:0,"top":600-(i*30),"left":100+(i*20),"z-index":100-i});
         	dnaStrands[i].getSymbol("strand_single_sym").$("RoundRect2").css("background-color","#"+rainbow.colourAt(i+1));
         	dnaStrands[i].getSymbol("strand_single_sym").$("RoundRect2Copy").css("background-color","#"+rainbow.colourAt(i+1));
         	dnaStrands[i].getSymbol("strand_single_sym").$("Rectangle").css("background-color","#"+rainbow.colourAt(i+1));
         	dnaStrands[i].stop(i*100);
         	console.log(dnaStrands[i].$("strand_single_sym"));
         	tl.append( TweenLite.to(dnaStrands[i].getSymbolElement(), 0.50, {css:{opacity:1}, delay: -0.40}) );
         	TweenMax.to(dnaStrands[i].getSymbolElement(),8,{css:{rotation:360}, repeat: -1, yoyo:true, ease:Sine.easeInOut});
         }
         tl.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

//=========================================================
   (function(symbolName) {

   })("strand_single_sym");
   //Edge symbol end:'strand_single_sym'

//=========================================================
   (function(symbolName) {

      

      

   })("strand_sym");
   //Edge symbol end:'strand_sym'

})(jQuery, AdobeEdge, "EDGE-109488045");