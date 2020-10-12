(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AHYAAQAAC5iKCEQiKCDjEAAQjCAAiLiDQiKiEAAi5QAAi5CKiDQCLiDDCAAQDEAACKCDQCKCDAAC5g");
	this.shape.setTransform(-47.2,-44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AlNE9QiKiEAAi5QAAi5CKiDQCLiDDCAAQDDAACKCDQCLCDAAC5QAAC5iLCEQiKCDjDAAQjCAAiLiDg");
	this.shape_1.setTransform(-47.2,-44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-95.4,-90.6,96.4,91.6), null);


(lib.Test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHA3IAAhKIgKAAIAAgOIAKAAIAAgVIAPAAIAAAVIAKAAIAAAOIgKAAIAABKg");
	this.shape.setTransform(65.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAtIgRggIgRAgIgSAAIAbgtIgZgsIARAAIAQAfIAPgfIASAAIgZAsIAcAtg");
	this.shape_1.setTransform(59.9,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA6IAAhLIgKAAIAAgNIAKAAIAAgIQAAgJADgGQAEgEAKAAIAIAAIAAANIgFAAQgGABAAAFIAAAIIALAAIAAANIgLAAIAABLg");
	this.shape_2.setTransform(54.7,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLArQgGgDgDgGQgFgGgCgIQgDgJABgLQgBgKADgJQACgJAFgFQADgGAGgDQAGgDAGAAQAHAAAGADQAGADADAGQAEAFABAIQADAHAAAJIAAAIIgtAAQAAAMADAIQAFAIAGAAQAHAAAEgFQAEgFAAgJIAQAAQgBAGgDAGQgCAGgDAFQgFAFgEADQgGACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgDgGQgFgGgHAAQgGAAgEAGg");
	this.shape_3.setTransform(49.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAsQgFgCgEgEQgEgEgBgFQgDgGAAgGIAPAAQAAAHAEAEQAEAEAGAAQAFAAADgEQAEgDAAgFQAAgFgDgDIgHgEIgJgEQgFgBgEgDQgFgCgDgFQgCgEAAgIQAAgNAHgHQAHgGALAAQAGAAAFACQAFACADADQAEAEACAFQACAFAAAGIgOAAQgBgGgDgDQgDgEgHAAQgEAAgDADQgDADAAAFQAAAEADACIAHAFIAJADIAJAFQAEACADAEQADAFAAAJQAAANgIAHQgHAHgNAAQgFAAgFgCg");
	this.shape_4.setTransform(42.5,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHA6IAAhLIgKAAIAAgNIAKAAIAAgIQAAgJADgGQAEgEAKAAIAIAAIAAANIgFAAQgGABAAAFIAAAIIALAAIAAANIgLAAIAABLg");
	this.shape_5.setTransform(37.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLArQgFgDgEgGQgFgGgCgIQgCgJAAgLQAAgKACgJQACgJAFgFQAEgGAFgDQAGgDAGAAQAHAAAGADQAGADADAGQADAFACAIQACAHAAAJIAAAIIgsAAQAAAMAEAIQAEAIAGAAQAGAAAFgFQAEgFAAgJIAPAAQAAAGgDAGQgBAGgFAFQgDAFgGADQgFACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgEgGQgDgGgIAAQgGAAgEAGg");
	this.shape_6.setTransform(32.5,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAsQgFgCgEgEQgEgEgBgFQgDgGAAgGIAPAAQAAAHAEAEQAEAEAGAAQAFAAADgEQAEgDAAgFQAAgFgDgDIgHgEIgJgEQgFgBgEgDQgFgCgDgFQgCgEAAgIQAAgNAHgHQAHgGALAAQAGAAAFACQAFACADADQAEAEACAFQACAFAAAGIgOAAQgBgGgDgDQgDgEgHAAQgEAAgDADQgDADAAAFQAAAEADACIAHAFIAJADIAJAFQAEACADAEQADAFAAAJQAAANgIAHQgHAHgNAAQgFAAgFgCg");
	this.shape_7.setTransform(25.7,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIA6IAAhLIgJAAIAAgNIAJAAIAAgIQAAgJAFgGQADgEAKAAIAIAAIAAANIgEAAQgHABAAAFIAAAIIALAAIAAANIgLAAIAABLg");
	this.shape_8.setTransform(21,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLArQgFgDgFgGQgEgGgCgIQgDgJAAgLQAAgKADgJQACgJAEgFQAFgGAFgDQAGgDAGAAQAHAAAGADQAGADADAGQADAFACAIQACAHAAAJIAAAIIgsAAQAAAMAEAIQADAIAIAAQAFAAAFgFQAEgFAAgJIAPAAQAAAGgCAGQgCAGgFAFQgDAFgGADQgFACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgEgGQgEgGgGAAQgHAAgEAGg");
	this.shape_9.setTransform(15.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAsQgFgCgEgEQgEgEgBgFQgDgGAAgGIAPAAQAAAHAEAEQAEAEAGAAQAFAAADgEQAEgDAAgFQAAgFgDgDIgHgEIgJgEQgFgBgEgDQgFgCgDgFQgCgEAAgIQAAgNAHgHQAHgGALAAQAGAAAFACQAFACADADQAEAEACAFQACAFAAAGIgOAAQgBgGgDgDQgDgEgHAAQgEAAgDADQgDADAAAFQAAAEADACIAHAFIAJADIAJAFQAEACADAEQADAFAAAJQAAANgIAHQgHAHgNAAQgFAAgFgCg");
	this.shape_10.setTransform(8.8,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIA6IAAhLIgJAAIAAgNIAJAAIAAgIQAAgJAFgGQADgEAKAAIAIAAIAAANIgEAAQgHABAAAFIAAAIIALAAIAAANIgLAAIAABLg");
	this.shape_11.setTransform(4.1,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLArQgFgDgFgGQgEgGgCgIQgCgJgBgLQABgKACgJQACgJAEgFQAFgGAFgDQAGgDAGAAQAHAAAGADQAFADAEAGQAEAFACAIQABAHAAAJIAAAIIgsAAQAAAMADAIQAFAIAHAAQAFAAAFgFQAEgFAAgJIAPAAQAAAGgCAGQgCAGgFAFQgEAFgEADQgGACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgDgGQgEgGgHAAQgHAAgEAGg");
	this.shape_12.setTransform(-1.2,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAsQgFgCgEgEQgEgEgBgFQgDgGAAgGIAPAAQAAAHAEAEQAEAEAGAAQAFAAADgEQAEgDAAgFQAAgFgDgDIgHgEIgJgEQgFgBgEgDQgFgCgDgFQgCgEAAgIQAAgNAHgHQAHgGALAAQAGAAAFACQAFACADADQAEAEACAFQACAFAAAGIgOAAQgBgGgDgDQgDgEgHAAQgEAAgDADQgDADAAAFQAAAEADACIAHAFIAJADIAJAFQAEACADAEQADAFAAAJQAAANgIAHQgHAHgNAAQgFAAgFgCg");
	this.shape_13.setTransform(-8,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLArQgFgDgFgGQgEgGgCgIQgDgJAAgLQAAgKADgJQACgJAEgFQAFgGAFgDQAGgDAGAAQAHAAAGADQAFADAEAGQADAFACAIQACAHAAAJIAAAIIgsAAQAAAMAEAIQADAIAIAAQAFAAAFgFQAEgFAAgJIAPAAQAAAGgCAGQgCAGgFAFQgDAFgGADQgFACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgEgGQgEgGgGAAQgHAAgEAGg");
	this.shape_14.setTransform(-14.5,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHA3IAAhKIgKAAIAAgOIAKAAIAAgVIAPAAIAAAVIAKAAIAAAOIgKAAIAABKg");
	this.shape_15.setTransform(-19.9,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAsQgFgCgEgEQgEgEgBgFQgDgGAAgGIAPAAQAAAHAEAEQAEAEAGAAQAFAAADgEQAEgDAAgFQAAgFgDgDIgHgEIgJgEQgFgBgEgDQgFgCgDgFQgCgEAAgIQAAgNAHgHQAHgGALAAQAGAAAFACQAFACADADQAEAEACAFQACAFAAAGIgOAAQgBgGgDgDQgDgEgHAAQgEAAgDADQgDADAAAFQAAAEADACIAHAFIAJADIAJAFQAEACADAEQADAFAAAJQAAANgIAHQgHAHgNAAQgFAAgFgCg");
	this.shape_16.setTransform(-29.3,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHA6IAAhYIAPAAIAABYgAgHgoIAAgRIAPAAIAAARg");
	this.shape_17.setTransform(-34.1,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLArQgGgDgDgGQgFgGgCgIQgDgJABgLQgBgKADgJQACgJAFgFQADgGAGgDQAGgDAGAAQAHAAAGADQAGADADAGQAEAFABAIQADAHAAAJIAAAIIgtAAQAAAMADAIQAFAIAGAAQAHAAAEgFQAEgFAAgJIAQAAQgBAGgDAGQgCAGgDAFQgFAFgEADQgGACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgDgGQgFgGgHAAQgGAAgEAGg");
	this.shape_18.setTransform(-43.8,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAtIAAhYIANAAIAAAKIABAAQACgHAFgCQAFgCAHgBIAAAQQgFAAgEACQgEABgCAEIgCAGIgBAJIAAA0g");
	this.shape_19.setTransform(-49.2,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLArQgFgDgEgGQgFgGgCgIQgCgJAAgLQAAgKACgJQACgJAFgFQAEgGAFgDQAGgDAGAAQAIAAAFADQAFADAEAGQADAFACAIQACAHAAAJIAAAIIgsAAQAAAMAEAIQADAIAHAAQAGAAAFgFQAEgFAAgJIAPAAQAAAGgDAGQgBAGgFAFQgDAFgGADQgFACgGAAQgGAAgGgDgAgKgaQgEAGAAANIAdAAQAAgNgEgGQgDgGgIAAQgGAAgEAGg");
	this.shape_20.setTransform(-55.4,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPA6IAAg6QAAgIgDgFQgDgEgHgBIgGABIgFAEIgEAGQgBADAAAEIAAA6IgQAAIAAhzIARAAIAAAkQACgFAFgDQADgDAIAAQAMAAAHAHQAGAIABAOIAAA9g");
	this.shape_21.setTransform(-63,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Test, new cjs.Rectangle(-69.1,-11.6,138.2,23.3), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



// stage content:
(lib.responsivetest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		
		var test = new lib.Test();
		test.x = 200;
		test.y = 50;
		stage.addChild(test);
		
		//setTimeout(function () {alert('presumeMouse: ' + presumeMouse ? 't' : 'f')}, 5000);
		
		var a = this.aaa;
		
		a.addEventListener('mousedown', function() {
			console.log('>>>');
			a.alpha = 0.5;
		});
		
		a.addEventListener('touchstart', function() {
			console.log('>>sfesefsef>');
			a.alpha = 0.2;
		});
		
		
		stage.addEventListener('stagemouseup', function() {
			console.log('<<<');
			a.alpha = 1;
		});
		
		
		stage.addEventListener('touchend', function() {
			console.log('<<awdawdawd<');
			a.alpha = 0.7;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.aaa = new lib.Symbol2();
	this.aaa.name = "aaa";
	this.aaa.parent = this;
	this.aaa.setTransform(379.2,75.2,1.953,1.953,0,0,0,-47.1,-44.7);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/styles.css'});

	this.instance.setTransform(315,-17.9,1,1,0,0,0,50,11);

	this.htmlInputThing = new lib.an_TextInput({'id': 'htmlInputThing', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.htmlInputThing.setTransform(89.1,225.9,3.16,4.091,0,0,0,50,11.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AknGcQiBgihZg7Qhag8gvhRQgthRAAhgQAAhhAthRQAvhRBag8QBZg7CBghQCDgiCkAAQClAACCAiQCCAhBYA7QBbA8AuBRQAuBRABBhQgBBgguBRQguBRhbA8QhYA7iCAiQiCAhilAAQikAAiDghgAjsjoQhlAVhAAjQhAAkgeAuQgeAuAAAxQAAAwAeAuQAeAvBAAjQBAAjBlAVQBjAWCJAAQCKAABjgWQBkgVBBgjQBAgjAdgvQAfguAAgwQAAgxgfguQgdguhAgkQhBgjhkgVQhjgWiKAAQiJAAhjAWg");
	this.shape.setTransform(132.1,131.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADPBaIAAizIDnAAIAACzgAm1BaIAAizIDnAAIAACzg");
	this.shape_1.setTransform(108.5,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.htmlInputThing},{t:this.instance},{t:this.aaa}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(179.5,120.6,542.7,301.6);
// library properties:
lib.properties = {
	id: 'D43248555B3A0642AA70B06D603579DA',
	width: 500,
	height: 300,
	fps: 24,
	color: "#00CCCC",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1602505912378", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1602505912378", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1602505912378", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1602505912378", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D43248555B3A0642AA70B06D603579DA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;