temple.Banner = ( function(_super) { 

	__extends(banner, _super);

	function banner() {
		_super.call(this, arguments[0]);
	}

	banner.prototype.init = function() {
		this.show();

		this.glithTL = new TimelineMax({paused: false});
		this.glithTL
			.to('#svgRedValue', .5, {attr:{x: -10, y: 10}, ease: RoughEase.ease.config({ template:  Elastic.easeInOut, strength: 1, points: 50, taper: "none", randomize: true, clamp: false})})
			.to('#svgGreenValue', .5, {attr:{x: -10, y: -10}, ease: RoughEase.ease.config({ template:  Elastic.easeInOut, strength: 1, points: 50, taper: "none", randomize: true, clamp: false})}, "-=.5")
			.to('#svgBlueValue', .5, {attr:{x: -10, y: 10}, ease: RoughEase.ease.config({ template:  Elastic.easeInOut, strength: 1, points: 50, taper: "none", randomize: true, clamp: false})}, "-=.5")
	}

	return banner;

})( temple.Template );
