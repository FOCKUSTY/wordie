import React from "react";

import UserComponent from "@/ui/user.components";

import OnclickHandler from "@/utility/handlers/play/onclick-start.handler";

import type { User } from "@/utility/types/user.types";
import type { Reply } from "@/utility/types/play/reply.type";

type Props = {
    set: (game: boolean) => void;
    styles: any;
    game: boolean;
    user: User;

    replies: Reply[]
    setReplies: (replies: Reply[]) => void;
};

class Component extends React.Component<Props> {
    private readonly onclickHandler: OnclickHandler;

    constructor(props: Props) {
        super(props);

        this.onclickHandler = new OnclickHandler(props.styles, this.props.set);
    };

    private readonly GameStart = () => {
        return (
            <div className={this.props.styles.start_game} id={this.props.styles.start_game_component}>
                <UserComponent styles={this.props.styles} user={this.props.user}></UserComponent>
                
                <div className={this.props.styles.buttons}>
                    <button onClick={(e) => this.onclickHandler.Handler(e)}>
                        <span>Начать игру</span>
                    </button>
                </div>
            </div>
        );
    };

    private readonly Game = () => {
        return (
            <div className={this.props.styles.game}>
                <div id={this.props.styles.output}>
                    <div className={this.props.styles.output_section}>
                        <div id={this.props.styles.game_output} className={this.props.styles.text}>
                            {
                                this.props.replies.map(reply =>
                                    reply.type === 'game'
                                        ? <div><span>{reply.name}:</span><span>{reply.text}</span></div>
                                        : <></>)
                            }
                        </div>
                    </div>
                    <div className={this.props.styles.output_section}>
                        <div id={this.props.styles.bot_output} className={this.props.styles.text}>
                            {
                                this.props.replies.map(reply =>
                                    reply.type === 'bot'
                                        ? <div><span>{reply.name}:</span><span>{reply.text}</span></div>
                                        : <></>)
                            }
                        </div>
                    </div>
                </div>

                <form action="" id={this.props.styles.form_send}>
                    <fieldset className={this.props.styles.input}>
                        <legend>Напишите своё сообщение</legend>

                        <textarea
                            minLength={2}
                            maxLength={30}
                            placeholder="Ваше сообщение"
                            id={this.props.styles.write}
                        ></textarea>

                        <input id={this.props.styles.send_writed} type="submit" value="Отправить"/>
                    </fieldset>
                </form>
            </div>
        );
    };

    public readonly render = (): React.ReactNode => {
        return this.props.game
            ? this.Game()
            : this.GameStart();
    };
};

export default Component;