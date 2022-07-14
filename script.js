function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'David Bowie, Diamond Dogs (1974)',
			price: 3550,
			active:true
		},{
			name: 'The Beatles — Abbey Road (1969)',
			price: 4000,
			active:false
		},{
			name: 'Stonewall, Stonewall (1976)',
			price: 14000,
			active:false
		},{
			name: 'The Rolling Stones, Street Fighting Man (1968)',
			price: 17000,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
