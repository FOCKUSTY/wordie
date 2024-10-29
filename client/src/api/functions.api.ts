import { Dispatch, useState as reactUseState, SetStateAction } from "react";

class State<T> {
	private _variable: T;
	private _setFunc: Dispatch<SetStateAction<T>>;

	constructor(data: T) {
		const [variable, setFunc] = reactUseState<T>(data);

		this._variable = variable;
		this._setFunc = setFunc;
	}

	public readonly Use = (data: T) => {
		const [variable, setFunc] = reactUseState<T>(data);

		return [variable, setFunc];
	};

	public readonly Paste = (data: T) => {
		const [variable, setFunc] = reactUseState<T>(data);

		this._variable = variable;
		this._setFunc = setFunc;

		return [variable, setFunc];
	};

	public readonly Set = (data: T) => {
		if (Array.isArray(data) && Array.isArray(this._variable)) {
			const func: any = this._setFunc;

			func([...this._variable, ...data]);

			return this._variable;
		} else {
			this._setFunc(data);

			return this._variable;
		}
	};

	public readonly getState = (): [T, (data: T) => T, Dispatch<SetStateAction<T>>] => {
		return [this._variable, this.Set, this._setFunc];
	};

	public get setFunc() {
		return this._setFunc;
	}

	public get variable() {
		return this._variable;
	}
}

export default State;
