var ViewModel=function(){
	this.clickCount=ko.observable(0);
	this.name=ko.observable('Tabby');
	this.imgSrc=ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.catLevel=ko.observable('NotClicked')

	this.incrementCounter=function(){
		this.clickCount(this.clickCount() + 1);
		
	};

	this.catLevelFun = ko.computed(function(){
		var clicks = this.clickCount();
		if (clicks > 10 && clicks < 20){
			return this.catLevel('Born');
		}
		else if(clicks > 20){
			return this.catLevel('youth');
		}
	}, this)

}

ko.applyBindings(new ViewModel());