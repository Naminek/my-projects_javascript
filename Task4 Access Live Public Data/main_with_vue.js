//var senateData = new Vue({
//	el: '#senate_data',
//	data: {
//		senators: [],
//
//	}
//});
//console.log(senateData);


onload = (() => {
	fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
		method: 'GET',
		headers: {
			'X-API-KEY': '5lHrJfp5SnTSlT1RNOhg6HaQew1hNvsbiBe7gy6O',
			'Content-Type': 'application/json'
		}
	}).then(function (response) {
		return response.json();
	}).then(function (json) {
		//		senateData.senators = json.results[0].members;
		filterTable.senators = json.results[0].members;
		//		console.log(typeof(json.results[0].members));
		//		console.log(json);
	}).catch(function (error) {
		console.log(error);
	});
})()


var filterTable = new Vue({
	el: '#checkboxes',
	data: {
		checkedParty: [],
		senators: [],
	},
	computed: {
		findSenators: function () {

			if (!this.checkedParty.length) {
				return this.senators
			} else {
				console.log('test')
				return this.senators.filter(senator => this.checkedParty.includes(senator.party));
			}
		}
	},
})
