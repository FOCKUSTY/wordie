'use client';

import { NextPage } from "next";
import SwitcherHandler from '../utility/handlers/switch-teme.handler';

type Props = {
    styleName: string;
};

const Switcher: NextPage<Props> = ({ styleName }) => {
    return (
        <div className={styleName}>
            <input className="input-switch" type="checkbox" id="switch"  onChange={SwitcherHandler}/>
            <label className="label-switch" htmlFor="switch">Toggle</label>
        </div>
    );
};

export default Switcher;