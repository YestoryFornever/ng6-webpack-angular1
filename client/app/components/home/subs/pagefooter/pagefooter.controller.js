class PagefooterController {
	constructor($http, $timeout, pagetabService) {
		this.$timeout = $timeout;
		this.pagetabService = pagetabService;
	}
	$onInit(){
		this.name = 'pagefooter';
		this.updateClock();
	}
	updateClock(){
		this.clock = new Date();
		this.$timeout(()=>{
			this.updateClock();
		},60000);
	}
	activeTab(){
		this.pagetabService.activeTab({
			tabKey: 'home.chatroom',
			routeState:"home.chatroom",
			routeLabel:(new Date()).toString(),
		});
	}
	activeTab1(){
		this.pagetabService.activeTab({
			tabKey: 'home.acoupondetails',
			routeState:"home.acoupondetails",
			routeLabel:("详情"),
		});
	}
}
PagefooterController.$inject = ['$http','$timeout', 'pagetabService'];
export default PagefooterController;
