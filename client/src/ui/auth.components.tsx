'use client';

import React from "react";

import Handler from '../utility/handlers/auth.handler';
import { User } from "../utility/types/user.types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
    user?: User,
    styles: any,
    router: AppRouterInstance
};

class Component extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };
    
    private NotAuthUserComponent = () => {
        return (
            <div className={this.props.styles.links}>
                <div>
                    <button className={this.props.styles.link} onClick={new Handler().handlerLogin}>
                        <span>Войти с помощью Discord</span>
                    </button>
                </div>
            </div>
        );
    };

    private AuthUserComponent = () => {
        return (
            <div className={this.props.styles.links}>
                <div>
                    <button className={this.props.styles.link} onClick={() =>
                        this.props.router.push('/play/bot')
                    }><span>Играть с ботом</span></button>
                </div>
                <div>
                    <button className={this.props.styles.link} onClick={() =>
                        this.props.router.push('/play/player')
                    }><span>Играть с человеком</span></button>
                </div>
            </div>
        );
    };

    public render(): React.ReactNode {
        return this.props.user
            ? this.AuthUserComponent()
            : this.NotAuthUserComponent();
    };
};

export default Component;