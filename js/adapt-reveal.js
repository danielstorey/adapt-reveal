define(function(require) {

	function toHyphenCase(str) {
		if (!str) return false;
		return str.replace(/([A-Z])/g, "-$1").toLowerCase();
	}

	var ComponentView = require('coreViews/componentView');
	var Adapt = require('coreJS/adapt');

	var Reveal = ComponentView.extend({

		onDeviceResize: function() {
			this.setupColumns();
		},

		preRender: function() {
			this.animationType = toHyphenCase(this.model.get("_animationType")) || "fade";
		},

		render: function() {
			var data = this.model.toJSON();
			var templateMain = Handlebars.templates["reveal"];
			var $rendered = templateMain(data);
			this.$el.html($rendered);
			this.$(".reveal-item").children().addClass(this.animationType);

			this.setupColumns();
			this.postRender();
		},

		postRender: function() {
			this.setReadyStatus();
			this.setupEventListeners();
		},

		setupColumns: function() {
			if (this.model.get("_columns") && $(window).width() > 760) {
				var w = 100 / this.model.get("_columns") + "%";
				this.$(".reveal-items").addClass("reveal-columns");
				this.$(".reveal-item").width(w).addClass("reveal-column");
			} else {
				this.$(".reveal-items").removeClass("reveal-columns");
				this.$(".reveal-item").width("auto").removeClass("reveal-column");
			}
		},
		
		setupEventListeners: function() {
			var animationType = this.animationType;
			this.$(".reveal-item-button").each(function(i, el) {
				var $el = $(el);
				$el.click(function() {
					$el.next().toggleClass(animationType);
					this.model.get("_items")[i]._isVisited = true;
					this.evaluateCompletion();
				}.bind(this));
			}.bind(this));

			this.listenTo(Adapt, {
				'device:resize': this.onDeviceResize
			});
		},

		evaluateCompletion: function() {
			var incompleteItems = _.filter(this.model.get("_items"), function(item) {
				return !item._isVisited;
			});

			!incompleteItems.length && this.onComplete();
		},

		onComplete: function() {
			this.setCompletionStatus();

		}

	});

	Adapt.register('reveal', Reveal);

	return Reveal;

});
