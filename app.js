let instance = axios.create({
  baseURL: 'http://localhost:8080'
});
let vue = new Vue({
	el: "#vue-app",
	data: {
		tw_arr: null,
		tag_name: '#Coin'
	},
	methods: {
		reload: function () {
			location.reload();
		},
		loadData: function (data) {
			let tw_tag = this.tag_name = data;
			//clear input
			reload.style.visibility='visible';
			tag.value = '';
			// get data from server by tw_tag
			instance.get('/search/' + tw_tag)
	    		.then(response => {
	    			vue.tw_arr = response.data;
	        		console.log(response);
	    		})
	    		.catch(function(error) {
	        		console.log(error);
	    		});
	    	//only for tests
	    	//this.testObj();
		},
		testObj: function () {
			this.obj = [
	    		{ 
				   medium: 'Twitter',
				    objectid: 12412515,
				    likes: 5,
				    shares: 2,
				    comments: 1,
				    text: "this is my tweet"
				},
	    		{ 
				   medium: 'Twitter',
				    objectid: 12412515,
				    likes: 5,
				    shares: 2,
				    comments: 1,
				    text: "this is my tweet fdfdffffffffffffffffdwrewrwerwrwerwerwerwerwerwerwerwe"
				}
	    	];
		},
		setData: function (data) {
			this.tw_arr = data;
		},
		state: function () {
			return !!this.tw_arr;
		}
	}
});