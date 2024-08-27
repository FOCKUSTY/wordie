import React from "react";
import type { User } from "../utility/types/user.types";

type Props = {
    user?: User,
    styles: any
};

class Component extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    };

    private UserComponent = (): React.ReactNode => {
        if(!this.props.user)
            return (<></>);

        return (
            <div className={this.props.styles.user}>
                <img src={this.props.user.avatarUrl
                    ? this.props.user.avatarUrl
                    : '/TheVoid.BLACK.png'
                } alt="user avatar" />
                <span>
                    {
                    this.props.user.globalName
                        ? this.props.user.globalName
                        : this.props.user.username
                    }
                </span>
            </div>
        );
    };

    private NotUserComponent = (): React.ReactNode => {
        return (
            <></>
        );
    };

    public render(): React.ReactNode {
        return this.props.user
            ? this.UserComponent()
            : this.NotUserComponent();
    };
};

export default Component;