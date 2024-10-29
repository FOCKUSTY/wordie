class Handler {
	private readonly setData: (value: any[]) => void;
	private readonly allData: any[] = [];

	constructor(allData: any[], setData: (value: any) => void) {
		this.allData = allData;
		this.setData = setData;
	}

	public readonly Handler = (data: any[]) => {
		this.allData.push(...data);

		this.setData([...this.allData]);
	};
}

export default Handler;
